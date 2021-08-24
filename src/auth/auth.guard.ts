import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { IS_PUBLIC_KEY } from "./auth-public.decorator";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (isPublic) {
      return true;
    }

    const request: Request = context.switchToHttp().getRequest();
    const { headers: { authorization } } = request;

    if(!authorization) {
      return false;
    }

    try {
      const token = authorization.split('Bearer ')[1];
      const user = this.jwtService.verify(token);
      request.user = user;
      
      return true;
    } catch (error) {
      return false;
    }
  }
}
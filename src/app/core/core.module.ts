import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { NoAuthGuardService } from './services/no-auth-guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [],
    providers: [
      AuthService,
      JwtService,
      TokenInterceptorService,
      AuthGuardService,
      NoAuthGuardService]
  })
  export class CoreModule { }
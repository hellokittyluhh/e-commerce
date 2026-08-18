import { HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";
import { catchError } from "rxjs";
import { throwError } from "rxjs";
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import{AuthService} from "../services/auth.service";
export const httpInterceptor: HttpInterceptorFn = (req, next) => {

     console.log('Interceptado Requisição', req.url);
     const authService = inject (AuthService);
     const router = inject (Router);
     const token = authService.obterToken();
     const novaReq = token?
      req.clone({
        setHeaders: {
            Authorization:`Bearer${token}`,
        },
     }):req;
    return next(novaReq).pipe(
        tap({
          next:( event)=> console.log('Responde:', event),
          error: (error)=> console.error('Erro de Requisição Global', error)
        }),
        catchError((error) =>{
        console.error('ERROR GLOBAL:', error);
        if (error.status ===401){
            console.warn('Error de autenticação de usuário', error);
            authService.logout();
            router.navigateByUrl('/login');
        }
        if (error.status ===500){
            console.warn('Erro interno do servidor!', error);
        }
      if (error.status ===403){
        console.warn('acesso Proibido!,Usuario sem permissão');
        router.navigateByUrl('/produtos');
      }




       return throwError(()=> error); 
    }),
);
            
    };

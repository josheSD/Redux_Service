import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, catchError, exhaustMap  } from 'rxjs/operators';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from '../../models/Usuario.models';
import { of  } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$:Actions,
        private usuarioService: UsuarioService
    ){}

    cargarUsuarios$ = createEffect(() =>
        this.actions$.pipe(
            ofType(usuariosActions.CARGAR_USUARIOS),
            exhaustMap(() => this.usuarioService.getUsers()
                .pipe(
                    map((users: Usuario[]) => {
                        return new usuariosActions.CargarUsuariosSucess(users)
                    }),
                    catchError((err:any) => {
                        return of(new usuariosActions.CargarUsuariosFail(err));
                    })
                )    
            )
        )
    );

}
import { Action } from '@ngrx/store';
import { Usuario } from '../../models/Usuario.models';

export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios FAIL';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios SUCCESS';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor(public payload:any){

    }
}

export class CargarUsuariosSucess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;
    constructor(public usuarios:Usuario[]){ 

    }
}

export type usuarioActions =  CargarUsuarios 
                            | CargarUsuariosFail 
                            | CargarUsuariosSucess;

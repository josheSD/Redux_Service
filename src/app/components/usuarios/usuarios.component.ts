import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/Usuario.models';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as usuariosActions from './../../store/actions';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit, OnDestroy{

  public usuarios: Usuario[] = [];
  public loading:boolean;
  public error:any;

  public loadingUsuarios$: Subscription = new Subscription();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.loadingUsuarios$ = this.store.select('usuarios')
        .subscribe(usuarios =>{
          this.usuarios = usuarios.users;
          this.loading = usuarios.loading;
          this.error = usuarios.error;
        });

    this.store.dispatch(new usuariosActions.CargarUsuarios());

  }

  ngOnDestroy(){
    this.loadingUsuarios$.unsubscribe();
  }

}

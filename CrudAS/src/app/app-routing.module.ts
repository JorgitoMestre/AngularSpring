import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { InsertarComponent } from './Persona/insertar/insertar.component';
import { ActualizarComponent } from './Persona/actualizar/actualizar.component';
import { EliminarComponent } from './Persona/eliminar/eliminar.component';

const routes: Routes = [
	{ path: 'listar', component: ListarComponent },
	{ path: 'insertar', component: InsertarComponent },
	{ path: 'actualizar', component: ActualizarComponent },
	{ path: 'eliminar', component: EliminarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

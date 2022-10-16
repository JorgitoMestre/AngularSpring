import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { InsertarComponent } from './Persona/insertar/insertar.component';
import { ActualizarComponent } from './Persona/actualizar/actualizar.component';
import { EliminarComponent } from './Persona/eliminar/eliminar.component';
import { FormsModule } from '@angular/forms';
import { ServicioService } from './Service/servicio.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    InsertarComponent,
    ActualizarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

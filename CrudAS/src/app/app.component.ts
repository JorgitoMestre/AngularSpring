import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudAS';
  
 constructor(private router:Router){}
  
  Listar(){
	this.router.navigate(["listar"]);
  }
  
  Insertar(){
	this.router.navigate(["insertar"]);
  }
  
  Acrualizar(){
	this.router.navigate(["actualizar"]);
  }
  
  Eliminar(){
	this.router.navigate(["eliminar"]);
  }
  
}

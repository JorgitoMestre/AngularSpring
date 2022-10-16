import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

   personas:Array<Persona>=[];
 // prueba:Array<Persona>;
  //personas:Array<any>;
  
  constructor(private service:ServicioService, private router:Router) {
  //this.prueba="hola mundo";
  //this.prueba=service.getPersonas();
  }

  ngOnInit(): void {
  this.service.getPersonas()
  .subscribe(data=>{
    this.personas=data;
  });
		
  }
   
   Editar(persona:Persona):void{
   // console.log(persona.id);
	this.service.setLocalStorage('pers',persona);
	 this.router.navigate(["actualizar"]);
   }
   
   Eliminar(persona:Persona){
     var opcion = confirm("Seguro que desea eliminar el usuario "+persona.nombre+" "+persona.apellido+".");
	 if(opcion){
	    this.service.deletePersona(persona.id)
		.subscribe(data=>{ 
		  //this.personas=this.personas.filter(p=>p!==persona);		
		});
		
		alert("Person is deleted");
		this.service.getPersonas()
		.subscribe(data=>{
			this.personas=data;
		});
		//this.router.navigate(["listar"]);
				
	 }else{
	    this.router.navigate(["listar"]); 
	 }
   }
   
   /*
   function alerta()
    {
    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}
   */
  
}

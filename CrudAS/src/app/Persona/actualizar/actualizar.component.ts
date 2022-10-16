import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Persona } from 'src/app/Modelo/Persona';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

    
	persona:Persona = new Persona();
	//id:number=0;
    nombre_prueba: string="";

  constructor(private service:ServicioService, private router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
	let objeto=this.service.getLocalStorage('pers');
	//console.log(objeto.id);
	/*console.log(this.service.getPersonaID(objeto.id)
	.subscribe(data=>{  
		this.persona=data;
    }));*/
	
	this.service.getPersonaID(+objeto.id)
	.subscribe(data=>{  
		this.persona=data;
    })
  }
  
  Actualizar(){
    this.service.updatePersona(this.persona)
	.subscribe(data=>{  
		this.persona=data;	        		
    })
	this.router.navigate(["listar"]);
		alert("Updated");
  
  }
}

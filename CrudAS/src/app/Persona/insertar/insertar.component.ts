import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Persona } from 'src/app/Modelo/Persona';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {


 //formulario1: FormGroup;
 persona:Persona=new Persona;

  constructor(private service:ServicioService, private router:Router) { 
	
  }

  ngOnInit(): void {
	
  }

  onSubmit(){
    //console.log(this.formulario1.value);
  }
  
  
  Crear(){       
    this.service.crearPersona(this.persona)	
	.subscribe(data=>{    
    });
	 alert("Persona creada exitosamente");
	 this.router.navigate(["listar"]);
  }

}

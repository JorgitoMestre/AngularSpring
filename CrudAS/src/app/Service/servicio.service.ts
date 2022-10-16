import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private mihttp:HttpClient) { }
  //listar
  Url='http://localhost:8081/api/personas';
  //insertar
  Url1='http://localhost:8081/api/setPersona';
  //obtener una persona por id
  Url2='http://localhost:8081/api/getPersonaID';
  //update persona
  Url3='http://localhost:8081/api/updtPersona';
  //delete persona
  Url4='http://localhost:8081/api/deletePersonaID/'
  
  getPersonas(){ 
     return this.mihttp.get<Array<Persona>>(this.Url);	
  }
  
  crearPersona(persona:Persona){
     return this.mihttp.post<Persona>(this.Url1,persona);
  }
  
  getPersonaID(id:number){
     return this.mihttp.get<Persona>(this.Url2+"/"+id);
  }
  
  updatePersona(persona:Persona){
    return this.mihttp.put<Persona>(this.Url3+"/"+persona.id,persona);
  }
  
  setLocalStorage(key:string, data:any){
    try{
	  localStorage.setItem(key, JSON.stringify(data));
	}catch(e){
	   console.log(e);
	}  
  }
  
  getLocalStorage(key:string){
	try{
	  //key='pers';
	 let data=JSON.parse(localStorage.getItem(key)!);
	 return data; 
	}catch(e){
		 console.log(e);
	}
  }
  
  deletePersona(id:number){
    return this.mihttp.delete<Persona>(this.Url4+id);
  }
  
}

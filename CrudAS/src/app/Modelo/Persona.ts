export class Persona{ 
   id:number;
   nombre:String;
   apellido:String;
   
   /*constructor(i:number,n:string,a:string){
   		this.id=i;
		this.nombre=n;
		this.apellido=a;
   }*/
   constructor(){
   		this.id=0;
		this.nombre="";
		this.apellido="";
   }
   
   setNombre(n:string){
    this.nombre=n;
   }
   
   setApellido(a:string){
    this.apellido=a;
   }
   
}
package com.example.AngularSpringMySQL.controller;

import com.example.AngularSpringMySQL.entities.Persona;
import com.example.AngularSpringMySQL.service.IPersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class PersonaController {
    @Autowired
    private IPersonaService personaService;

    @GetMapping("/personas")
    @ResponseStatus(HttpStatus.OK)
    public List<Persona> getPersonas(){
        return personaService.findAll();
    }

    @PostMapping("/setPersona")
    public ResponseEntity<?> setPersona(@RequestBody Persona persona){
        //Optional<Persona> buscarPersona = personaService.finfById(persona.getId());
       // if(buscarPersona.isPresent()){
            //return new ResponseEntity<>(HttpStatus.CONFLICT);
        //}else {
            personaService.savePersona(persona);
            return new ResponseEntity<>(String.format("The person is saved"),HttpStatus.CREATED);
        //}
    }

    @PutMapping("/updtPersona/{id}")
    public ResponseEntity<?> updatePersona(@PathVariable ("id")long id,@RequestBody Persona persona){
        Optional<Persona> buscarPersona = personaService.finfById(id);
        if(buscarPersona.isPresent()){
            buscarPersona.get().setNombre(persona.getNombre());
            buscarPersona.get().setApellido(persona.getApellido());
           personaService.savePersona(buscarPersona.get());
            return new ResponseEntity<>(String.format("The person is updated"),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(String.format("The person not exist"),HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/getPersonaID/{id}")
    public ResponseEntity<?> getPersonaID(@PathVariable ("id")long id){
        Optional<Persona> buscarPersona = personaService.finfById(id);
        if(buscarPersona.isPresent()){
            return new ResponseEntity<>(buscarPersona.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(String.format("The person not exist"),HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("/deletePersonaID/{id}")
    public ResponseEntity<?> eliminarPersonaID(@PathVariable ("id")long id){
        Optional<Persona> buscarPersona = personaService.finfById(id);
        if(buscarPersona.isPresent()){
            personaService.deletePersona(id);
            return new ResponseEntity<>(String.format("The person is deleted"),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(String.format("The person not exist"),HttpStatus.CONFLICT);
        }
    }

}

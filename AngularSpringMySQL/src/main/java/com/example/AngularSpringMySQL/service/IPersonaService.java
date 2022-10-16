package com.example.AngularSpringMySQL.service;

import com.example.AngularSpringMySQL.entities.Persona;

import java.util.List;
import java.util.Optional;


public interface IPersonaService {

    public List<Persona> findAll();
    public Persona savePersona(Persona persona);
    public Persona updatePersona(Persona persona);
    public void deletePersona(Long id);
    public Optional<Persona> finfById(Long id);
}

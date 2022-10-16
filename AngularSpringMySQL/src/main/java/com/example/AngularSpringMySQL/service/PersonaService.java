package com.example.AngularSpringMySQL.service;

import com.example.AngularSpringMySQL.entities.Persona;
import com.example.AngularSpringMySQL.repository.IPersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonaService implements IPersonaService {
   @Autowired
   private IPersonaRepository repository;

    @Override
    public List<Persona> findAll() {
        return repository.findAll();
    }

    @Override
    public Persona savePersona(Persona persona) {
        return repository.save(persona);
    }

    @Override
    public Persona updatePersona(Persona persona) {
        return repository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
         repository.deleteById(id);
    }

    @Override
    public Optional<Persona> finfById(Long id) {
        return repository.findById(id);
    }
}

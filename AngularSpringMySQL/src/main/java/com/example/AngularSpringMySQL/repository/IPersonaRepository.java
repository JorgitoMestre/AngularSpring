package com.example.AngularSpringMySQL.repository;

import com.example.AngularSpringMySQL.entities.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
  public Optional<Persona> findById(Long id);
}

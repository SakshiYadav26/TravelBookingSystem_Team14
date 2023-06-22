package com.virtusa.TBS.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.virtusa.TBS.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
  Optional<User> findOneByEmailAndPassword(String email, String password);

  User findByEmail(String email);
}

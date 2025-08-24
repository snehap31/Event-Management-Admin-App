package com.ictak.event_back.repository;

import com.ictak.event_back.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LoginRepository extends JpaRepository<Login,Integer> {

    @Query(value = "SELECT `userID`,`email`,`password` from login where `email`=?1 and `password`=?2",nativeQuery = true)
    List<Login> login(String email, String password);
}

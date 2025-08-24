package com.ictak.event_back.controller;

import com.ictak.event_back.model.Event;
import com.ictak.event_back.model.Login;
import com.ictak.event_back.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:5177")
public class LoginController {

    public static final Map<String,String> tokenStore = new HashMap<>();
    @Autowired
    LoginRepository repo;

    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> login (@RequestBody Login input)
    {
        Map<String,String> response = new HashMap<>();
        try
        {
            List<Login> loginList = repo.login(input.getEmail(),input.getPassword());
            if(!loginList.isEmpty())
            {
                String token = UUID.randomUUID().toString();
                tokenStore.put(token,input.getEmail());
                response.put("token",token);
                response.put("status","Success");
                response.put("message","Added successfully");
            }
        } catch (Exception e) {
            response.put("status","Error");
            response.put("message","adding failed");
        }
        return ResponseEntity.ok(response);
    }

}

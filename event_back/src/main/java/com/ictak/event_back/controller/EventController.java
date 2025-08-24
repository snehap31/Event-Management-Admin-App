package com.ictak.event_back.controller;

import com.ictak.event_back.model.Event;
import com.ictak.event_back.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5177")
public class EventController {

    @Autowired
    EventRepository repo;
    @PostMapping("/add")
    public ResponseEntity<Map<String,String>> addEvent (@RequestBody Event input)
    {
        Map<String,String> response = new HashMap<>();
        try {
            repo.save(input);
            response.put("status","Success");
            response.put("message","Added successfully");
        } catch (Exception e) {
            response.put("status","Error");
            response.put("message","Adding failed");
        }
        return ResponseEntity.ok(response);
    }
    @PutMapping("/update")
    public ResponseEntity<Map<String,String>> updateEvents(@RequestBody Event input)
    {
        Map<String,String> response = new HashMap<>();
        try {
            Event event = repo.findById(input.getEventID()).orElse(null);
            if (event != null)
            {
                event.setEventID(input.getEventID());
            event.setEventType(input.getEventType());
            event.setEventName(input.getEventName());
            event.setCapacity(input.getCapacity());
            event.setRemarks(input.getRemarks());
            event.setEndDate(input.getEndDate());
            event.setOrganizerType(input.getOrganizerType());
            event.setSpeakerName(input.getSpeakerName());
            event.setStatus(input.getStatus());
            event.setStartDate(input.getStartDate());
            event.setVenue(input.getVenue());
            repo.save(event);
            response.put("status", "Success");
            response.put("message", "Updated successfully");
        }
                else
                {
                    response.put("status","Error");
                    response.put("message","No id");
                }
        } catch (Exception e) {
            response.put("status","Error");
            response.put("message","Cannot Update");
        }
        return ResponseEntity.ok(response);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,String>> deleteEvent(@PathVariable int id)
    {
        Map<String,String> response = new HashMap<>();
        try
        {
            if(repo.existsById(id))
            {
                repo.deleteById(id);
                response.put("status", "Success");
                response.put("message", "Deleted successfully");
            }
            else
            {
                response.put("status","Error");
                response.put("message","No id");
            }
        }
        catch (Exception e)
        {
            response.put("status","Error");
            response.put("message","Cannot Delete");
        }
        return ResponseEntity.ok(response);
    }
    @GetMapping("/view/{organizerType}")
    public ResponseEntity<?> vieworganizerType(@PathVariable String organizerType)
    {
        Map<String,String> response = new HashMap<>();
        try
        {
            Event.organizerType EnumO = Event.organizerType.valueOf(organizerType);
            return ResponseEntity.ok(repo.findByOrganizerType(EnumO));
        } catch (Exception e) {
            response.put("status","Error");
            response.put("message","Cannot View");
            return ResponseEntity.ok(response);
        }
    }
}

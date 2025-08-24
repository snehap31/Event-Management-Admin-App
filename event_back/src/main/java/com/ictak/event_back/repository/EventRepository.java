package com.ictak.event_back.repository;

import com.ictak.event_back.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event,Integer> {

    List<Event> findByOrganizerType(Event.organizerType organizerType);
}

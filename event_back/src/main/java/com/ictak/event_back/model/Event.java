package com.ictak.event_back.model;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;

//EventID, 0
// EventName, 0
// OrganizerType(ValueList: Academic, Corporate, NGO, Government),0
// EventType (ValueList: Workshop, Seminar, Conference, Training),0
// StartDate,0
// EndDate,0
// Venue,0
// SpeakerName,0
// Capacity,0
// Status (ValueList: Upcoming, Ongoing, Completed, Cancelled),0
// Remarks0
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("eventID")
    private int eventID;

    @JsonProperty("eventName")
    private String eventName;

    @Enumerated(EnumType.STRING)
    @JsonProperty("organizerType")
    private organizerType organizerType;

    @Enumerated(EnumType.STRING)
    @JsonProperty("eventType")
    private eventType eventType;

    @JsonProperty("startDate")
    private Date startDate;

    @JsonProperty("endDate")
    private Date endDate;

    @JsonProperty("venue")
    private String venue;

    @JsonProperty("speakerName")
    private String speakerName;

    @JsonProperty("capacity")
    private int capacity;

    @Enumerated(EnumType.STRING)
    @JsonProperty("status")
    private status status;

    @JsonProperty("remarks")
    private String remarks;

    public  enum  status{
        Upcoming, Ongoing, Completed, Cancelled;
    }
    public enum organizerType{
        Academic, Corporate, NGO, Government;
    }
    public enum eventType{
        Workshop, Seminar, Conference, Training;
    }

    public Event() {
    }

    public Event(int eventID, String eventName, Event.organizerType organizerType, Event.eventType eventType, Date startDate, Date endDate, String venue, String speakerName, int capacity, Event.status status, String remarks) {
        this.eventID = eventID;
        this.eventName = eventName;
        this.organizerType = organizerType;
        this.eventType = eventType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.venue = venue;
        this.speakerName = speakerName;
        this.capacity = capacity;
        this.status = status;
        this.remarks = remarks;
    }

    public int getEventID() {
        return eventID;
    }

    public void setEventID(int eventID) {
        this.eventID = eventID;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Event.organizerType getOrganizerType() {
        return organizerType;
    }

    public void setOrganizerType(Event.organizerType organizerType) {
        this.organizerType = organizerType;
    }

    public Event.eventType getEventType() {
        return eventType;
    }

    public void setEventType(Event.eventType eventType) {
        this.eventType = eventType;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getSpeakerName() {
        return speakerName;
    }

    public void setSpeakerName(String speakerName) {
        this.speakerName = speakerName;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Event.status getStatus() {
        return status;
    }

    public void setStatus(Event.status status) {
        this.status = status;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}

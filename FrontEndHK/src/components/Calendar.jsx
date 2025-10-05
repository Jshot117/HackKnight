import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

export function Calendar() {
    return (
        <div className = "mt-32 py-14 md:mt-16 md:py-20">
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGrid"
                hiddenDays={[1, 2, 3, 4]}
                visibleRange={{
                    start: "2025-10-17",
                    end: "2025-10-20",
                }}
                slotMinTime="06:00:00"
                slotMaxTime="25:00:00"
                views={{
                    timeGridFourDay: {
                        type: 'timeGrid',
                        duration: { days: 3 },
                    },
                }}
                events={[
                    { title: "Check-in begins (Rosental Library Lecture Hall)", start: "2025-10-17T10:00:00" },
                    { title: "Opening Ceremony begins (Rosental Library Lecture Hall)", start: "2025-10-17T11:00:00", end: "2025-10-17T12:00:00" },
                    { title: "Hacking Begins (Dining Hall)", start: "2025-10-17T12:00:00" },
                    { title: "Bloomberg Interviews Start (Presidents Lounge & Kiely Hall)", start: "2025-10-17T12:00:00" },
                    { title: "Lunch is served (Dining Hall patio room)", start: "2025-10-17T13:00:00" },
                    { title: "CodePath 101 Info Session + Spring Preview (Dining Hall patio room)", start: "2025-10-17T14:00:00" },
                    { title: "MLH Workshop: Intro to Google Ai Studio (Dining Hall patio room)", start: "2025-10-17T15:00:00" },
                    { title: "Werewolf Game (Dining Hall patio room)", start: "2025-10-17T16:00:00" },
                    { title: "DSA and Technical Interviews Workshop with Bloomberg (Dining Hall patio room)", start: "2025-10-17T17:00:00" },
                    { title: "Get to know some Bloomberg Engineers Panel (Dining Hall patio room)", start: "2025-10-17T18:00:00" },
                    { title: "Dinner is served (Dining Hall patio room)", start: "2025-10-17T19:00:00" },
                    { title: "Notion Workshop (Dining Hall Patio Room)", start: "2025-10-17T20:00:00" },
                    { title: "Midnight Ramen (Dining Hall)", start: "2025-10-17T23:00:00" },
                    { title: "Breakfast is served (Dining Hall)", start: "2025-10-18T09:00:00" },
                    { title: "Bloomberg Interviews Start (Presidents Lounge & Kiely Hall)", start: "2025-10-18T10:00:00" },
                    { title: "Path-Port Quest (Dining Hall Patio room)", start: "2025-10-18T12:00:00" },
                    { title: "Lunch is served (Dining Hall patio room)", start: "2025-10-18T13:00:00" },
                    { title: "Bloomberg / Code Path Workshop (Dining Hall patio room)", start: "2025-10-18T14:00:00" },
                    { title: "MLH Workshop: Intro to GitHub Copilot (Dining Hall patio room)", start: "2025-10-18T15:00:00" },
                    { title: "Dinner is served (Dining Hall patio room)", start: "2025-10-18T18:00:00" },
                    { title: "Midnight Ramen (Dining Hall)", start: "2025-10-18T23:00:00" },
                    { title: "Check-in starts", start: "2025-10-19T09:00:00" },
                    { title: "Hacking Ends (submissions hard deadline)", start: "2025-10-19T12:00:00" },
                    { title: "Lunch", start: "2025-10-19T12:00:00" },
                    { title: "Judging Begins (Dining Hall)", start: "2025-10-19T12:30:00" },
                    { title: "Judging Ends", start: "2025-10-19T15:30:00" },
                    { title: "Closing Ceremony (Rosenthal Library Lecture Hall)", start: "2025-10-19T16:00:00" }
                ]}
                headerToolbar={{
                    left: "",
                    center: "title",
                    right: "",
                }}
            />
        </div>
    )
}
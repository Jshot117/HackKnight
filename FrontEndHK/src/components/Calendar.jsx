import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

export function Calendar() {
    return (
        <div className = "mt-32 py-14 md:mt-16 md:py-20">
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGrid"
                hiddenDays={[1, 2, 3, 4]} // Hide Monday-Thursday
                visibleRange={{
                    start: "2025-03-07", // Start on Friday (Feb 7, 2025)
                    end: "2025-03-10",   // End after Sunday (non-inclusive Monday)
                }}
                views={{
                    timeGridFourDay: {
                        type: 'timeGrid',
                        duration: { days: 3 },
                    },
                }}
                events={[
                    { title: "Day One", start: "2025-03-07" },
                    { title: "Check-in (Rosenthal Library)", start: "2025-03-07 10:00" },
                    { title: "Opening Ceremony", start: "2025-03-07 11:00", end: "2025-03-07 12:00" },
                    { title: "Hacking Starts", start: "2025-03-07 12:00" },
                    { title: "Lunch", start: "2025-03-07 14:00" }, 
                    { title: "Dinner", start: "2025-03-07 17:30" }, 
                    { title: "Midnight Ramen", start: "2025-03-07 23:00" },
                    { title: "Check-in Ends", start: "2025-03-07 18:00"},
                    { title: "Day Two", start: "2025-03-08" },
                    { title: "Breakfast", start: "2025-03-08 09:00"},
                    { title: "Lunch", start: "2025-03-08 14:00" }, 
                    { title: "Notion Workshop (Patio)", start: "2025-03-08 15:00" },
                    { title: "Dinner", start: "2025-03-08 17:30" },
                    { title: "Day Three", start: "2025-03-09" },
                    { title: "Breakfast", start: "2025-03-09 09:00"},
                    { title: "Hacking Ends", start: "2025-03-09 12:00" },
                    { title: "Judging", start: "2025-03-09 12:30", end: "2025-03-09 15:00" },
                    { title: "Winners Announced", start: "2025-03-09 16:00" }
                ]}
                headerToolbar={{
                    left: "",
                    center: "title", // Show only the title in the header
                    right: "",
                }}
            />
        </div>
    )
}
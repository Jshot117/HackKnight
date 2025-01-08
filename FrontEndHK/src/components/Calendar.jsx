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
                        duration: { days: 4 },
                    },
                }}
                events={[
                    { title: "Day One", start: "2025-03-07" },
                    { title: "Day Two", start: "2025-03-08" },
                    { title: "Day Three", start: "2025-03-09" },
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
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      // height={"100%"}
      width={"auto"}
      headerToolbar={{
        left: "prev",
        center: "title",
        right: "next",
      }}
      initialView="dayGridMonth"
    />
  );
};

export default Calendar;

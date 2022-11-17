import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";
import { eventsApiSlice } from "../events/eventsApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { sectionsApiSlice } from "../sections/sectionsApiSlice";
const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      notesApiSlice.util.prefetch("getNotes", "notesList", { force: true })
    );
    store.dispatch(
      usersApiSlice.util.prefetch("getUsers", "usersList", { force: true })
    );
    store.dispatch(
      eventsApiSlice.util.prefetch("getEvents", "eventsList", { force: true })
    );
    store.dispatch(
      sectionsApiSlice.util.prefetch("getSections", "sectionsList", { force: true })
    );
  }, []);

  return <Outlet />;
};
export default Prefetch;

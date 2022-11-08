import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Public from "../components/public/Public";
import DashLayout from "../components/DashLayout";
import Login from "../features/auth/Login";
import Welcome from "../features/auth/Welcome";
import NotesList from "../features/notes/NotesList";
import UsersList from "../features/users/UsersList";
import EditUser from "../features/users/EditUser";
import NewUserForm from "../features/users/NewUserForm";
import EditNote from "../features/notes/EditNote";
import NewNote from "../features/notes/NewNote";
import Prefetch from "../features/auth/Prefetch";
import PersistLogin from "../features/auth/PersistLogin";
import RequireAuth from "../features/auth/RequireAuth";
import EventPage from "../components/public/EventPage";
import { ROLES } from "../config/roles";
import Events from "../components/public/Events";
import EventsList from "../features/events/EventsList";
import EditEvent from "../features/events/EditEvent";
import NewEventForm from "../features/events/NewEventFrom";
import Sections from "../components/sections/Layout";
import SectionPage from "../components/sections/Hero";
import { WavyContainer} from "react-wavy-transitions";
import Test from "../features/events/Event"
const PublicRouter = () => {
  return (<>
    <WavyContainer />
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Test/>}/>
        
        <Route path="sections" >
          <Route index element={<Sections />} />
          <Route path=":id" element={<SectionPage id={Route.path}/>} />
        </Route>
        <Route path="events">
          <Route index element={<Events />} />
          <Route path=":id" element={<EventPage />} />
        </Route>
        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
                <Route index element={<Welcome />} />

                <Route
                  element={
                    <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                  }
                >
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>

                <Route path="events">
                  <Route index element={<EventsList />} />
                  <Route path=":id" element={<EditEvent />} />
                  <Route path="new" element={<NewEventForm />} />
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>
              </Route>
              {/* End Dash */}
            </Route>
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Route>
    </Routes></>
  );
};
export default PublicRouter;

import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Public from "../components/public/Public";
import DashLayout from "../components/DashLayout";
import Login from "../features/auth/Login";
import Welcome from "../features/auth/Welcome";
import UsersList from "../features/users/UsersList";
import NotesList from "../features/notes/NotesList";
import EventsList from "../features/events/EventsList";
import SectionsList from "../features/sections/SectionList";
import EditUser from "../features/users/EditUser";
import EditNote from "../features/notes/EditNote";
import EditEvent from "../features/events/EditEvent";
import EditSection from "../features/sections/EditSection";
import NewUser from "../features/users/NewUserForm";
import NewNote from "../features/notes/NewNote";
import NewEvent from "../features/events/NewEvent";
import NewSection from "../features/sections/NewSection";
import Prefetch from "../features/auth/Prefetch";
import PersistLogin from "../features/auth/PersistLogin";
import RequireAuth from "../features/auth/RequireAuth";
import { ROLES } from "../config/roles";
import Sections from "../components/sections/Layout";
import SectionPage from "../components/sections/Hero";
import { WavyContainer } from "react-wavy-transitions";

const PublicRouter = () => {
  return (
    <>
      <WavyContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Public />} />
          <Route path="/login" element={<Login />} />

          <Route path="sections">
            <Route index element={<Sections />} />
            <Route path="#:id" element={<SectionPage />} />
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
                      <RequireAuth
                        allowedRoles={[ROLES.Manager, ROLES.Admin]}
                      />
                    }
                  >
                    <Route path="users">
                      <Route index element={<UsersList />} />
                      <Route path=":id" element={<EditUser />} />
                      <Route path="new" element={<NewUser />} />
                    </Route>

                    <Route path="sections">
                      <Route index element = {<SectionsList/>}/>
                      <Route path=":id" element= {<EditSection/>}/>
                      <Route path="new" element= {<NewSection/>}/>
                    </Route>
                  </Route>

                  <Route path="events">
                    <Route index element={<EventsList />} />
                    <Route path=":id" element={<EditEvent />} />
                    <Route path="new" element={<NewEvent />} />
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
      </Routes>
    </>
  );
};
export default PublicRouter;

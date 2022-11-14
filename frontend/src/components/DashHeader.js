import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faFilePen,
  faCalendar,
  faCalendarPlus,
  faUserGear,
  faUserPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { useSendLogoutMutation } from "../features/auth/authApiSlice";

import useAuth from "../hooks/useAuth";

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;
const EVENTS_REGEX = /^\/dash\/events(\/)?$/;

const DashHeader = () => {
  const { isManager, isAdmin } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const onNewNoteClicked = () => navigate("/dash/notes/new");
  const onNewUserClicked = () => navigate("/dash/users/new");
  const onNewEventClicked = () => navigate("/dash/events/new");
  const onNotesClicked = () => navigate("/dash/notes");
  const onUsersClicked = () => navigate("/dash/users");
  const onEventsClicked = () => navigate("/dash/events");

  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname) &&
    !EVENTS_REGEX.test(pathname)
  ) {
    dashClass = "dash-header__container--small";
  }

  let newNoteButton = null;
  if (NOTES_REGEX.test(pathname)) {
    newNoteButton = (
      <button
        className="icon-button"
        title="New Note"
        onClick={onNewNoteClicked}
      >
        <FontAwesomeIcon icon={faFileCirclePlus} />
      </button>
    );
  }

  let newUserButton = null;
  if (USERS_REGEX.test(pathname)) {
    newUserButton = (
      <button
        className="icon-button"
        title="New User"
        onClick={onNewUserClicked}
      >
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    );
  }
  let newEventButton = null;
  if (EVENTS_REGEX.test(pathname)) {
    newEventButton = (
      <button className="" title="New Event" onClick={onNewEventClicked}>
        <FontAwesomeIcon icon={faCalendarPlus} />
      </button>
    );
  }

  let userButton = null;
  if (isManager || isAdmin) {
    if (!USERS_REGEX.test(pathname) && pathname.includes("/dash")) {
      userButton = (
        <button className="icon-button" title="Users" onClick={onUsersClicked}>
          <FontAwesomeIcon icon={faUserGear} />
        </button>
      );
    }
  }

  let notesButton = null;
  if (!NOTES_REGEX.test(pathname) && pathname.includes("/dash")) {
    notesButton = (
      <button className="icon-button" title="Notes" onClick={onNotesClicked}>
        <FontAwesomeIcon icon={faFilePen} />
      </button>
    );
  }
  let eventsButton = null;
  if (!EVENTS_REGEX.test(pathname) && pathname.includes("/dash")) {
    eventsButton = (
      <button className="" title="Events" onClick={onEventsClicked}>
        <FontAwesomeIcon icon={faCalendar} />
      </button>
    );
  }

  const logoutButton = (
    <button className="icon-button" title="Logout" onClick={sendLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );

  const errClass = isError ? "errmsg" : "offscreen";

  let buttonContent;
  if (isLoading) {
    buttonContent = <p>Logging Out...</p>;
  } else {
    buttonContent = (
      <>
        {newNoteButton}
        {newEventButton}
        {newUserButton}
        {notesButton}
        {userButton}
        {eventsButton}
        {logoutButton}
      </>
    );
  }

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <header className="row flex h-[10vh] items-center justify-evenly bg-green-900">
        <div className={`dash-header__container ${dashClass}`}>
          <Link to="/dash">
            <h1 className="text-2xl">Klub Studenata Istre Mate Balota</h1>
          </Link>
        </div>

        <nav className="flex flex-row gap-2">{buttonContent}</nav>
      </header>
    </>
  );

  return content;
};
export default DashHeader;

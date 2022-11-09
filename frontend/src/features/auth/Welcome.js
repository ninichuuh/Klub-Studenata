import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();

  useTitle(`Welcome: ${username}`);

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long"
  }).format(date);

  const content = (
    <section className="h-3/4">
      <p>{today}</p>

      <h1>Welcome {username}!</h1>

      <p>
        <Link to="/dash/notes">View Notes</Link>
      </p>

      <p>
        <Link to="/dash/notes/new">Add New Note</Link>
      </p>
      <p>
        <Link to="/dash/events">View Events</Link>
      </p>
      <p>
        <Link to="/dash/events/new">Add New Event</Link>
      </p>

      {(isManager || isAdmin) && (
        <p>
          <Link to="/dash/users">View User Settings</Link>
        </p>
      )}

      {(isManager || isAdmin) && (
        <p>
          <Link to="/dash/users/new">Add New User</Link>
        </p>
      )}
    </section>
  );

  return content;
};
export default Welcome;

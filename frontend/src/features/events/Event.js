import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectEventById } from "./eventsApiSlice";

const Event = ({ eventId }) => {
  const event = useSelector((state) => selectEventById(state, eventId));

  const navigate = useNavigate();

  if (event) {
    const created = new Date(event.createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      mont: "long",
    });

    const updated = new Date(event.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const handleEdit = () => navigate(`/dash/events/${eventId}`);

    return (
      <tr className="table__row">
        <td className="table__cell note__status">
          {event.completed ? (
            <span className="note__status--completed">Completed</span>
          ) : (
            <span className="note__status--open">Open</span>
          )}
        </td>
        <td className="table__cell note__created">{created}</td>
        <td className="table__cell note__updated">{updated}</td>
        <td className="table__cell note__title">{event.title}</td>
        <td className="table__cell note__username">{event.username}</td>

        <td className="table__cell">
          <button className="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};

export default Event   

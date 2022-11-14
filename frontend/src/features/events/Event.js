import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useGetEventsQuery } from "./eventsApiSlice";
import { memo } from "react";

const Event = ({ eventId }) => {
  const { event } = useGetEventsQuery("eventsList", {
    selectFromResult: ({ data }) => ({
      event: data?.entities[eventId],
    }),
  });

  const navigate = useNavigate();

  if (event) {
    const created = new Date(event.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const updated = new Date(event.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const handleEdit = () => navigate(`/dash/events/${eventId}`);

    return (
      <tr className="table__row">
        <td className="table__cell event__status">
          {event.completed ? (
            <span className="event__status--completed">Completed</span>
          ) : (
            <span className="event__status--open">Open</span>
          )}
        </td>
        <td className="table__cell event__created">{created}</td>
        <td className="table__cell event__updated">{updated}</td>
        <td className="table__cell event__title">{event.title}</td>
        <td className="table__cell event__username">{event.username}</td>

        <td className="table__cell">
          <button className="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};

const memoizedEvent = memo(Event);

export default memoizedEvent;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useGetEventsQuery } from "./eventsApiSlice";
import { memo } from "react";

const Event = ({ eventId }) => {
  const { event } = useGetEventsQuery("eventsList", {
    selectFromResult: ({ data }) => ({
      event: data?.entities[eventId]
    })
  });

  const navigate = useNavigate();

  if (event) {
    const created = new Date(event.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long"
    });

    const updated = new Date(event.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long"
    });

    const handleEdit = () => navigate(`/dash/events/${eventId}`);

    return (
      <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <td className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">
          {event.title}
        </td>
        <td className="py-4 px-6">
          {event.active ? (
            <span className="py-4 px-6">active</span>
          ) : (
            <span className="py-4 px-6">Open</span>
          )}
        </td>
        <td className="py-4 px-6 ">{created}</td>
        <td className="py-4 px-6 ">{updated}</td>
        <td className="py-4 px-6 ">{event.username}</td>

        <td className="py-4 px-6">
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

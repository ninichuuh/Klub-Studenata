import { useGetEventsQuery } from "./eventsApiSlice";
import Event from "./Event";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const NotesList = () => {
  useTitle("techNotes: Events List");

  const { username, isManager, isAdmin } = useAuth();

  const {
    data: events,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetEventsQuery("eventsList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  let content;

  if (isLoading) content = <PulseLoader color={"#FFF"} />;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids, entities } = events;

    let filteredIds;
    if (isManager || isAdmin) {
      filteredIds = [...ids];
    } else {
      filteredIds = ids.filter(
        (eventId) => entities[eventId].username === username
      );
    }

    const tableContent =
      ids?.length &&
      filteredIds.map((eventId) => <Event key={eventId} eventId={eventId} />);

    content = (
      <table className="table--events table">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th event__status">
              Username
            </th>
            <th scope="col" className="table__th event__created">
              Created
            </th>
            <th scope="col" className="table__th event__updated">
              Updated
            </th>
            <th scope="col" className="table__th event__title">
              Title
            </th>
            <th scope="col" className="table__th event__username">
              Owner
            </th>
            <th scope="col" className="table__th event__edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
};
export default NotesList;

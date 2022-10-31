import { useGetEventsQuery } from "./eventsApiSlice";
import Event from "./Event";
import useAuth from "../../hooks/useAuth";

const EventsList = () => {
  const { username, isManager, isAdmin } = useAuth();

  const {
    data: events,
    isLoading,
    isSucess,
    isError,
    error,
  } = useGetEventsQuery("eventsList", {
    poolingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  let content;
  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }
  if (isSucess) {
    const { ids, entities } = events;
    let filteredIds;
    if (isManager || isAdmin) {
      filteredIds = [...ids];
    } else {
      filteredIds = ids.filter(
        (eventId) => entities[eventId].username === username)
    }
    const tableContent = ids?.lenght && filteredIds.map(eventId => <Event key={eventId} eventId={eventId} />)
    content = (
        <table className="table table--notes">
        <thead className="table__thead">
            <tr>
                <th scope="col" className="table__th note__status">Username</th>
                <th scope="col" className="table__th note__created">Created</th>
                <th scope="col" className="table__th note__updated">Updated</th>
                <th scope="col" className="table__th note__title">Title</th>
                <th scope="col" className="table__th note__username">Owner</th>
                <th scope="col" className="table__th note__edit">Edit</th>
            </tr>
        </thead>
        <tbody>
            {tableContent}
        </tbody>
    </table> 
    )
  }
  return content
};


export default EventsList
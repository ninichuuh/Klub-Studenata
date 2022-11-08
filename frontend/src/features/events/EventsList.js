import { useGetEventsQuery } from "./eventsApiSlice";
import Event from "./Event";


const EventsList = () => {

  const {
    data: events,
    isLoading,
    isSucess,
    isError,
    error,
  } = useGetEventsQuery("eventsList", {
    poolingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });   
  console.log(useGetEventsQuery)
  let content;
  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }
  if (isSucess) {
    const { ids } = events;
    const tableContent = ids?.length && ids.map(eventId => <Event key={eventId} eventId={eventId} />)
    content = `${tableContent}`
  }
  return content
}


export default EventsList
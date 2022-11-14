import { useGetEventsQuery } from "./eventsApiSlice";

import Event from "./Event";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const EventsList = () => {
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
    content = <p className="errmsg">{error?.data?.message} ha u pm ov</p>;
  }

  if (isSuccess) {
    const { ids, entities } = events;
    console.log(ids);
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
      <div class="relative flex justify-center overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-1/2 text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Ime Eventa
              </th>
              <th scope="col" className="py-3 px-6">
                Aktivan
              </th>
              <th scope="col" className="py-3 px-6">
                Updated
              </th>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Owner
              </th>
              <th scope="col" className="py-3 px-6">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="border-b bg-white  dark:border-gray-700 dark:bg-gray-800">
            {tableContent}
          </tbody>
        </table>
      </div>
    );
  }

  return content;
};
export default EventsList;

import { useParams } from "react-router-dom";
import EditEventForm from "./EditEventForm";
import { useGetEventsQuery } from "./eventsApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";
import useAuth from "../../hooks/useAuth";
import PulseLoader from "react-spinners/PulseLoader";
import useTitle from "../../hooks/useTitle";

const EditEvent = () => {
  useTitle("techEvents: Edit event");

  const { id } = useParams();

  const { username, isManager, isAdmin } = useAuth();

  const { event } = useGetEventsQuery("eventsList", {
    selectFromResult: ({ data }) => ({
      event: data?.entities[id]
    })
  });

  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id])
    })
  });

  if (!event || !users?.length) return <PulseLoader color={"#FFF"} />;

  if (!isManager && !isAdmin) {
    if (event.username !== username) {
      return <p className="errmsg">No access</p>;
    }
  }

  const content = <EditEventForm event={event} users={users} />;

  return content;
};
export default EditEvent;

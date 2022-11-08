import NewEventForm from "./NewEventForm";
import { useGetUsersQuery } from "../users/usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";
import useTitle from "../../hooks/useTitle";

const NewEvent = () => {
  useTitle("techEvents: New Event");

  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id])
    })
  });

  if (!users?.length) return <PulseLoader color={"#FFF"} />;

  const content = <NewEventForm users={users} />;

  return content;
};
export default NewEvent;

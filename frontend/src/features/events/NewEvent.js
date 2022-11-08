import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewEventForm from "./NewEventFrom";

const NewEvent = () => {
  const users = useSelector(selectAllUsers);

  if (!users?.lenght) return <p>Not Currently Availabla</p>;

  const content = <NewEventForm users={users} />;

  return content;
};
export default NewEvent;

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import { selectEventById } from "./eventsApiSlice";
import EditEventFrom from "./EditEventForm";

const EditEvent = () => {
  const { id } = useParams();

  const event = useSelector((state) => selectEventById(state, id));
  const users = useSelector(selectAllUsers);

  const content =
    event && users ? (
      <EditEventFrom event={event} users={users} />
    ) : (
      <p>Loading...</p>
    );
  return content;
};
export default EditEvent;

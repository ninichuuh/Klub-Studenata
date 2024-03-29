import { useState, useEffect } from "react";
import {
  useUpdateEventMutation,
  useDeleteEventMutation
} from "./eventsApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

const EditEventForm = ({ event, users }) => {
  const { isManager, isAdmin } = useAuth();

  const [updateEvent, { isLoading, isSuccess, isError, error }] =
    useUpdateEventMutation();

  const [
    deleteEvent,
    { isSuccess: isDelSuccess, isError: isDelError, error: delerror }
  ] = useDeleteEventMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState(event.title);
  const [text, setText] = useState(event.text);
  const [active, setActive] = useState(event.active);
  const [mainevent, setMainevent] = useState(event.mainevent);
  const [userId, setUserId] = useState(event.user);

  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      navigate("/dash/events");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onActiveChanged = (e) => setActive((prev) => !prev);
  const onMaineventChanged = (e) => setMainevent((prev) => !prev);
  const onUserIdChanged = (e) => setUserId(e.target.value);

  const canSave = [title, text, userId].every(Boolean) && !isLoading;

  const onSaveEventClicked = async (e) => {
    if (canSave) {
      await updateEvent({ id: event.id, user: userId, title, text, active, mainevent });
    }
  };

  const onDeleteEventClicked = async () => {
    await deleteEvent({ id: event.id });
  };

  const created = new Date(event.createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  const updated = new Date(event.updatedAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  const options = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {" "}
        {user.username}
      </option>
    );
  });

  const errClass = isError || isDelError ? "errmsg" : "offscreen";
  const validTitleClass = !title ? "form__input--incomplete" : "";
  const validTextClass = !text ? "form__input--incomplete" : "";

  const errContent = (error?.data?.message || delerror?.data?.message) ?? "";

  let deleteButton = null;
  if (isManager || isAdmin) {
    deleteButton = (
      <button
        className="icon-button"
        title="Delete"
        onClick={onDeleteEventClicked}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    );
  }

  const content = (
    <>
      <p className={errClass}>{errContent}</p>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form__title-row">
          <h2>Edit Event #{event.ticket}</h2>
          <div className="form__action-buttons">
            <button
              className="icon-button"
              title="Save"
              onClick={onSaveEventClicked}
              disabled={!canSave}
            >
              <FontAwesomeIcon icon={faSave} />
            </button>
            {deleteButton}
          </div>
        </div>
        <label className="form__label" htmlFor="event-title">
          Title:
        </label>
        <input
          className={`form__input ${validTitleClass}`}
          id="event-title"
          name="title"
          type="text"
          autoComplete="off"
          value={title}
          onChange={onTitleChanged}
        />

        <label className="form__label" htmlFor="event-text">
          Text:
        </label>
        <textarea
          className={`form__input form__input--text ${validTextClass}`}
          id="event-text"
          name="text"
          value={text}
          onChange={onTextChanged}
        />
        <div className="form__row">
          <div className="form__divider">
            <label
              className="form__label form__checkbox-container"
              htmlFor="event-active"
            >
              WORK COMPLETE:
              <input
                className="form__checkbox"
                id="event-active"
                name="active"
                type="checkbox"
                checked={active}
                onChange={onActiveChanged}
              />
            </label>
            <label
              className="form__label form__checkbox-container"
              htmlFor="mainevent"
            >
              Main Event:
              <input
                className="form__checkbox"
                id="mainevent"
                name="mainevent"
                type="checkbox"
                checked={mainevent}
                onChange={onMaineventChanged}
              />
            </label>

            <label
              className="form__label form__checkbox-container"
              htmlFor="event-username"
            >
              ASSIGNED TO:
            </label>
            <select
              id="event-username"
              name="username"
              className="form__select"
              value={userId}
              onChange={onUserIdChanged}
            >
              {options}
            </select>
          </div>
          <div className="form__divider">
            <p className="form__created">
              Created:
              <br />
              {created}
            </p>
            <p className="form__updated">
              Updated:
              <br />
              {updated}
            </p>
          </div>
        </div>
      </form>
    </>
  );

  return content;
};

export default EditEventForm;

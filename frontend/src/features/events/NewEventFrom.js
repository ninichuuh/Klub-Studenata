import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewEventMutation } from "./eventsApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const NewEventForm = () => {
  const [addNewEvent, { isLoading, isSuccess, isError, error }] =
    useAddNewEventMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setText("");
      setDate("");
      navigate("/dash/events");
    }
  }, [isSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onDateChanged = (e) => setDate(e.target.value);

  const canSave = [title, text, date].every(Boolean) && !isLoading;

  const onSaveEventClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewEvent({ date, title, text });
    }
  };

  const errClass = isError ? "errmsg" : "offscreen";
  const validTitleClass = !title ? "form__input--incomplete" : "";
  const validTextClass = !text ? "form__input--incomplete" : "";

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <form className="form" onSubmit={onSaveEventClicked}>
        <div className="form__title-row">
          <h2>New Event</h2>
          <div className="form__action-buttons">
            <button className="icon-button" title="Save" disabled={!canSave}>
              <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        </div>
        <label className="form__label" htmlFor="title">
          Title:
        </label>
        <input
          className={`form__input ${validTitleClass}`}
          id="title"
          name="title"
          type="text"
          autoComplete="off"
          value={title}
          onChange={onTitleChanged}
        />
        <label className="form__label" htmlFor="date">
          Date:
        </label>
        <input
          className={`form__input ${validTitleClass}`}
          id="date"
          name="date"
          type="date"
          autoComplete="off"
          value={date}
          onChange={onDateChanged}
        />

        <label className="form__label" htmlFor="text">
          Text:
        </label>
        <textarea
          className={`form__input form__input--text ${validTextClass}`}
          id="text"
          name="text"
          value={text}
          onChange={onTextChanged}
        />
          
      </form>
    </>
  );

  return content;
};

export default NewEventForm;

import { useState,useEffect } from "react";
import { useUpdateSectionMutation, useDeleteSectionMutation } from "./sectionsApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave,faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";


const EditSectionForm = ({section,users}) => {
    const {isManager,isAdmin} = useAuth()
    const [updateSection, {isLoading,isSuccess,isError,error}] = useUpdateSectionMutation()

    const [deleteSection, {isSuccess:isDelSuccess, isError:isDelError, error:delerror}] = useDeleteSectionMutation(); 
    const navigate = useNavigate()

    const [title, setTitle] = useState(section.title)
    const [text, setText] = useState(section.text)
    const [active, setActive] = useState(section.active);
    const [managerId,setUserId] = useState(section.manager)

    useEffect(() => {
        if (isSuccess || isDelSuccess) {
            setTitle("");
            setText("");
            setUserId("")
            navigate("/dash/sections")
        }
    }, [isSuccess,isDelSuccess,navigate])

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onTextChanged = (e) => setText(e.target.value);
    const onActiveChanged = (e) => setActive((prev) => !prev);
    const onUserIdChanged = (e) => setUserId(e.target.value);

    const canSave= [title,text,managerId].every(Boolean) && !isLoading;

    const onSaveSectionClicked = async(e) =>{
        if(canSave) {
            await updateSection({id: section.id, manager: managerId, title,text,active});
        }
    };
    const onDeleteSectionClicked = async () => {
        await deleteSection ({id: section.id})
    }


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
            onClick={onDeleteSectionClicked}
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
              <h2>Edit Section</h2>
              <div className="form__action-buttons">
                <button
                  className="icon-button"
                  title="Save"
                  onClick={onSaveSectionClicked}
                  disabled={!canSave}
                >
                  <FontAwesomeIcon icon={faSave} />
                </button>
                {deleteButton}
              </div>
            </div>
            <label className="form__label" htmlFor="section-title">
              Title:
            </label>
            <input
              className={`form__input ${validTitleClass}`}
              id="section-title"
              name="title"
              type="text"
              autoComplete="off"
              value={title}
              onChange={onTitleChanged}
            />
    
            <label className="form__label" htmlFor="section-text">
              Text:
            </label>
            <textarea
              className={`form__input form__input--text ${validTextClass}`}
              id="section-text"
              name="text"
              value={text}
              onChange={onTextChanged}
            />
            <div className="form__row">
              <div className="form__divider">
                <label
                  className="form__label form__checkbox-container"
                  htmlFor="section-completed"
                >
                  WORK COMPLETE:
                  <input
                    className="form__checkbox"
                    id="section-completed"
                    name="completed"
                    type="checkbox"
                    checked={active}
                    onChange={onActiveChanged}
                  />
                </label>
    
                <label
                  className="form__label form__checkbox-container"
                  htmlFor="section-username"
                >
                  ASSIGNED TO:
                </label>
                <select
                  id="section-username"
                  name="username"
                  className="form__select"
                  value={managerId}
                  onChange={onUserIdChanged}
                >
                  {options}
                </select>
              </div>
            
            </div>
          </form>
        </>
      );
    
      return content;
    };
    
    export default EditSectionForm;
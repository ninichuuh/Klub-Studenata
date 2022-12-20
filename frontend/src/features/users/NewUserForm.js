import { useState, useEffect } from "react";
import { useAddNewUserMutation } from "./usersApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { ROLES } from "../../config/roles";
import useTitle from "../../hooks/useTitle";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;
const EMAIL_REGEX = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/

const NewUserForm = () => {
  useTitle("Users: New User");

  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [oib, setOib] = useState("");
  const [university, setUniversity] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(["Employee"]);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    if (isSuccess) {
      setUsername("");
      setPassword("");
      setEmail("");
      setOib("")
      setUniversity("")
      setRoles([]);
      navigate("/dash/users");
    }
  }, [isSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onOibChanged = (e) => setOib(e.target.value);
  const onUniversityChanged = (e) => setUniversity(e.target.value);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    setRoles(values);
  };

  const canSave =
    [roles.length, validUsername, validPassword, validEmail].every(Boolean) && !isLoading;

  const onSaveUserClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewUser({ username, password, roles, email, oib, university });
    }
  };

  const options = Object.values(ROLES).map((role) => {
    return (
      <option key={role} value={role}>
        {" "}
        {role}
      </option>
    );
  });

  const errClass = isError ? "errmsg" : "offscreen";
  // const validUserClass = !validUsername ? "form__input--incomplete" : "";
  // const validPwdClass = !validPassword ? "form__input--incomplete" : "";
  const validRolesClass = !Boolean(roles.length)
    ? "form__input--incomplete"
    : "";

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <form className="text-slate-600" onSubmit={onSaveUserClicked}>
        <div className="">
          <h2>New User</h2>
          <div className="form__action-buttons">
            <button className="icon-button" title="Save" disabled={!canSave}>
              <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            className=""
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            value={username}
            onChange={onUsernameChanged}
            placeholder=""
          />
          <label
            className=""
            htmlFor="username"
          >
            Username
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            className=""
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={onPasswordChanged}
            placeholder=""
          />
          <label
            className=""
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <label className="flex flex-row justify-between" htmlFor="email">
          Email: <span className="nowrap"></span>{" "}
          <span className="nowrap">[4-12 chars incl. !@#$%]</span>
        </label>
        <input
          className={`form__input `}
          id="email"
          name="email"
          type="email"
          value={email}
          autoComplete= "off"
          onChange={onEmailChanged}
        />
        <label className="flex flex-row justify-between" htmlFor="university">
          University: <span className="nowrap"></span>{" "}
          <span className="nowrap">[4-12 chars incl. !@#$%]</span>
        </label>
        <input
          className={`form__input `}
          id="university"
          name="university"
          type="university"
          value={university}
          autoComplete= "off"
          onChange={onUniversityChanged}
        />
             <label className="flex flex-row justify-between" htmlFor="oib">
          Oib: <span className="nowrap"></span>{" "}
          <span className="nowrap">[11 chars]</span>
        </label>
        <input
          className={`form__input `}
          id="oib"
          name="oib"
          type="oib"
          value={oib}
          autoComplete= "off"
          onChange={onOibChanged}
        />
        <label className="form__label" htmlFor="roles">
          ASSIGNED ROLES:
        </label>
        <select
          id="roles"
          name="roles"
          className={`form__select ${validRolesClass}`}
          multiple={true}
          size="3"
          value={roles}
          onChange={onRolesChanged}
        >
          {options}
        </select>
      </form>
    </>
  );

  return content;
};
export default NewUserForm;

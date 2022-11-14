import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useGetNotesQuery } from "./notesApiSlice";
import { memo } from "react";

const Note = ({ noteId }) => {
  const { note } = useGetNotesQuery("notesList", {
    selectFromResult: ({ data }) => ({
      note: data?.entities[noteId]
    })
  });

  const navigate = useNavigate();

  if (note) {
    const created = new Date(note.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long"
    });

    const updated = new Date(note.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long"
    });

    const handleEdit = () => navigate(`/dash/notes/${noteId}`);

    return (
      <tr className="border-b bg-pink-900 hover:bg-pink-500 dark:border-pink-700 dark:bg-pink-900 dark:hover:bg-pink-600">
        <td className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">
          {note.username}
        </td>
        <td className="py-4 px-6">
          {note.completed ? (
            <span className="note__status--completed">Completed</span>
          ) : (
            <span className="note__status--open">Open</span>
          )}
        </td>
        <td className="py-4 px-6">{note.title}</td>
        <td className="py-4 px-6">{created}</td>
        <td className="py-4 px-6">{updated}</td>

        <td className="py-4 px-6">
          <button className="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};

const memoizedNote = memo(Note);

export default memoizedNote;

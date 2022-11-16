import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { useGetSectionsQuery } from "./sectionsApiSlice";

const Section = ({ sectionId }) => {
  const { section } = useGetSectionsQuery("sectionsList", {
    selectFromResult: ({ data }) => ({
      section: data?.entities[sectionId]
    })
  });
  const navigate = useNavigate();

  if (section) {
    const handleEdit = () => navigate(`/dash/sections/${sectionId}`);

    return (
      <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <td className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">
          {section.manager}
        </td>
        <td className="py-4 px-6">{section.title}</td>
        <td className="py-4 px-6">{section.text}</td>
        <td className="py-4 px-6">
          <button className="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};

const memoizedSection = memo(Section);

export default memoizedSection;

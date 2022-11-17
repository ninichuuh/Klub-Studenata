import { useParams } from "react-router-dom";
import EditSectionForm from "./EditSectionForm"
import { useGetSectionsQuery } from "./sectionsApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";
import useAuth from "../../hooks/useAuth";
import PulseLoader from "react-spinners/PulseLoader";
import useTitle from "../../hooks/useTitle";


const EditSection = () => {
    useTitle("Edit section");

    const { id } = useParams

    const {username, isManager, isAdmin } = useAuth()

    const { section } = useGetSectionsQuery("sectionsList", {
        selectFromResult: ({ data }) => ({
            section: data?.entities[id],
        }),
    });

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
          users: data?.ids.map((id) => data?.entities[id]),
        }),
      });

      console.table(section)
    if (!section || !users?.lenght) return <PulseLoader color="#FFF"/>


    if (!isManager || !isAdmin) {
        if(section.username !== username) {
            return <p className="errmsg">No acces</p>
        }
    }

    const content = <EditSectionForm section= {section} users={users}/>

    return content
}

export default EditSection
import { useGetSectionsQuery } from "./sectionsApiSlice";
import Section from "./Section";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";



const SectionsList = () => {
    useTitle("Sections List")

    const {
        data: sections,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSectionsQuery("sectionsList", {
        poolingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });

    let content;

    if(isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }


    if (isSuccess) {
        const {ids} = sections;
        const tableContent = ids?.length && ids.map((sectionId) => <Section key={sectionId} sectionId={sectionId} />)
        content = (
            <div className="relative flex justify-center overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-1/2 text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Manager
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Ime sekcije
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Opis Sekcije
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>{tableContent}</tbody>
              </table>
            </div>)
    }
    return content;
}

export default SectionsList;



import Hero from "./Hero";
import Sidebar from "./Sidebar";
import sectionsData from "./sectionsData";

console.table(sectionsData);

const LayoutSections = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Hero id={`${sectionsData.id}`} />
    </div>
  );
};
export default LayoutSections;

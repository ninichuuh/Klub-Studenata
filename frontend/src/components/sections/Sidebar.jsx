import { WavyLink } from "react-wavy-transitions";
import sectionsData from "./sectionsData";

const Sidebar = () => (
  <nav className="w-40 h-screen bg-red-700">
    {sectionsData.map((section) => (
      <WavyLink key={section.id} to={`/sections/${section.id}`} color="#ff44fd">
        {section.sectionName}
      </WavyLink>
    ))}
  </nav>
);

export default Sidebar;

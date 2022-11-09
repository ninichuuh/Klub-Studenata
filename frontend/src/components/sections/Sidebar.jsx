import { WavyLink } from "react-wavy-transitions";
import sectionsData from "./sectionsData";

const Sidebar = () => (
  <nav className="z-[99999] h-screen w-40">
    {sectionsData.map((section) => (
      <WavyLink
        key={section.id}
        to={`/sections/#${section.id}`}
        color="#1B5E20"
      >
        {section.sectionName}
      </WavyLink>
    ))}
  </nav>
);

export default Sidebar;

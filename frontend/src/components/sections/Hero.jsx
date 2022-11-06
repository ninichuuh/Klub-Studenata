import sectionData from "./sectionsData"

const sectionsData = sectionData

const Hero = () => {
  return (
    <div className="h-screen w-full flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"><article><h1 className="text-2xl ">{sectionsData.se}</h1>
    <p className="text-ceter text-lg">{sectionsData.text}</p></article></div>
  )
}
export default Hero
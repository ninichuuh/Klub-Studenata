import React, { Suspense } from "react";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import Loader from "../Loader";

const Hero = React.lazy(() => import("./Hero"));
const About = React.lazy(() => import("./About"));
// const Gallery = React.lazy(() => import("./Gallery"));
const Form = React.lazy(() => import("./Form"));
const Sections = React.lazy(() => import("./Sections"));
const Public = () => {
  const content = (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <PublicHeader />
      <Suspense fallback={<Loader />}>
        <main className="mx-auto max-w-4xl">
          <Hero />
          <About />
          <Sections />
          {/* <Gallery /> */}
          <Form />
        </main>
        <PublicFooter />
      </Suspense>
    </div>
  );
  return content;
};
export default Public;
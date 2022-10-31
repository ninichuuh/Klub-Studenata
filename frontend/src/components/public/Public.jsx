import React, { Suspense } from "react";

import Loader from "../Loader";
import Grid from "./Grid";
const PublicHeader = React.lazy(() => import("./PublicHeader"));
const PublicFooter = React.lazy(() => import("./PublicFooter"));
const Hero = React.lazy(() => import("./Hero"));
const About = React.lazy(() => import("./About"));
// const Gallery = React.lazy(() => import("./Gallery"));
const Form = React.lazy(() => import("./Form"));
const Sections = React.lazy(() => import("./Sections"));
const Public = () => {
  const content = (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Suspense fallback={<Loader />}>
        <PublicHeader />
        <main className="mx-auto max-w-7xl">
          <Hero />
          <About />
          <Grid />
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

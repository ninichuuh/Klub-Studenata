import React, { Suspense } from "react";

import Loader from "../Loader";
import ScrollButton from "../UI/ScrollButton";
// import Grid from "./Grid";
const PublicHeader = React.lazy(() => {
  return Promise.all([
    import("./PublicHeader"),
    new Promise((resolve) => setTimeout(resolve, 50))
  ]).then(([moduleExports]) => moduleExports);
});
const PublicFooter = React.lazy(() => {
  return Promise.all([
    import("./PublicFooter"),
    new Promise((resolve) => setTimeout(resolve, 50))
  ]).then(([moduleExports]) => moduleExports);
});

const Hero = React.lazy(() => {
  return Promise.all([
    import("./Hero"),
    new Promise((resolve) => setTimeout(resolve, 50))
  ]).then(([moduleExports]) => moduleExports);
});

const About = React.lazy(() => {
  return Promise.all([
    import("./About"),
    new Promise((resolve) => setTimeout(resolve, 50))
  ]).then(([moduleExports]) => moduleExports);
});
const Events = React.lazy(() => {
  return Promise.all([
    import("./Events"),
    new Promise((resolve) => setTimeout(resolve, 50))
  ]).then(([moduleExports]) => moduleExports);
});

const Contact = React.lazy(() => {
  return Promise.all([
    import("./Contact"),
    new Promise((resolve) => setTimeout(resolve, 50))
  ]).then(([moduleExports]) => moduleExports);
});
const Sections = React.lazy(() => {
  return Promise.all([
    import("./Sections"),
    new Promise((resolve) => setTimeout(resolve, 50))
  ]).then(([moduleExports]) => moduleExports);
});
const Public = () => {
  const content = (
    <div className="min-h-screen bg-slate-50  ">
      <Suspense fallback={<Loader />}>
        <PublicHeader />
        <Hero />
        <main className="mx-auto max-w-7xl">
          <About />
          <Sections />
          <Events />
          <Contact />
          <ScrollButton />
        </main>
        <PublicFooter />
      </Suspense>
    </div>
  );
  return content;
};
export default Public;

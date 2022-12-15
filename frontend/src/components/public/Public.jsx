import React, { Suspense } from "react";

import Loader from "../Loader";

// import Grid from "./Grid";
const PublicHeader = React.lazy(() => {
  return Promise.all([
    import("./PublicHeader"),
    new Promise((resolve) => setTimeout(resolve, 2500))
  ]).then(([moduleExports]) => moduleExports);
});
const PublicFooter = React.lazy(() => {
  return Promise.all([
    import("./PublicFooter"),
    new Promise((resolve) => setTimeout(resolve, 2500))
  ]).then(([moduleExports]) => moduleExports);
});

const Hero = React.lazy(() => {
  return Promise.all([
    import("./Hero"),
    new Promise((resolve) => setTimeout(resolve, 2500))
  ]).then(([moduleExports]) => moduleExports);
});

const About = React.lazy(() => {
  return Promise.all([
    import("./About"),
    new Promise((resolve) => setTimeout(resolve, 2500))
  ]).then(([moduleExports]) => moduleExports);
});
const Events = React.lazy(() => {
  return Promise.all([
    import("./Events"),
    new Promise((resolve) => setTimeout(resolve, 2500))
  ]).then(([moduleExports]) => moduleExports);
});

// const Gallery = React.lazy(() => {
//   return Promise.all([
//     import("./Gallery"),
//     new Promise((resolve) => setTimeout(resolve, 2500))
//   ]).then(([moduleExports]) => moduleExports);
// });
// const Form = React.lazy(() => {
//   return Promise.all([
//     import("./Form"),
//     new Promise((resolve) => setTimeout(resolve, 2500))
//   ]).then(([moduleExports]) => moduleExports);
// });
const Sections = React.lazy(() => {
  return Promise.all([
    import("./Sections"),
    new Promise((resolve) => setTimeout(resolve, 2500))
  ]).then(([moduleExports]) => moduleExports);
});
const Public = () => {
  const content = (
    <div className="min-h-screen bg-slate-50  ">
      <Suspense fallback={<Loader />}>
        <PublicHeader />
        <main className="mx-auto max-w-7xl">
          <Hero />
          <About />
          <Sections />
          <Events />
          {/* <Grid />
          <Gallery />
          <Form /> */}
        </main>
        <PublicFooter />
      </Suspense>
    </div>
  );
  return content;
};
export default Public;

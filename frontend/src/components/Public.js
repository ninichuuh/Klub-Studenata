import React, { Suspense } from "react";
import PublicHeader from "./PublicHeader";
import Loader from "./Loader";

const Head = React.lazy(() => import("./Head"));
const About = React.lazy(() => import("./About"));
const Gallery = React.lazy(() => import("./Gallery"));
const Form = React.lazy(() => import("./Form"));

const Public = () => {
  const content = (
    <>
      <section className="public">
        <PublicHeader />
        <Suspense fallback={<Loader />}>
          <div className="part">
            <Head />
          </div>
          <div className="part">
            <About />
          </div>
          <div className="part">
            <Gallery />
          </div>
          <div className="part">
            <Form />
          </div>
        </Suspense>
      </section>
    </>
  );
  return content;
};
export default Public;

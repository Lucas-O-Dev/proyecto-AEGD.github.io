import React from "react";
import "./_home.scss";
import SecondContainerSonHome from "./SecondContainerSonHome";
import FirstContainerSonHome from "./FirstContainerSonHome";
import FourthContainerSonHome from "./FourthContainerSonHome";
// import Carousel from './Carousel'

const Home = () => {

  return (
<>

<div className="containerPrincipalHome">

{/* <Carousel /> */}
<SecondContainerSonHome/>
<FirstContainerSonHome/>
<FourthContainerSonHome/>
</div>

    </>
  );
};

export default Home;

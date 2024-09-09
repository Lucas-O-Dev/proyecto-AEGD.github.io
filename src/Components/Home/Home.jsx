import React from "react";
import "./_home.scss";
import SecondContainerSonHome from "./SecondContainerSonHome";
import FourthContainerSonHome from "./FourthContainerSonHome";
import Carousel from './Carousel'
import FirstContainerHome from "./FirstContainerHome";

const Home = () => {

  return (
<>

<div className="containerPrincipalHome">

<FirstContainerHome />
<Carousel />
<SecondContainerSonHome/>
<FourthContainerSonHome/>
</div>

    </>
  );
};

export default Home;

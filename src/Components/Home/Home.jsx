import React from "react";
import "./_home.scss";
import SecondContainerSonHome from "./SecondContainerSonHome";
import FourthContainerSonHome from "./FourthContainerSonHome";
import Carousel from './Carousel'

const Home = () => {

  return (
<>

<div className="containerPrincipalHome">

{/* <Carousel /> */}
<SecondContainerSonHome/>
<Carousel />
<FourthContainerSonHome/>
</div>

    </>
  );
};

export default Home;

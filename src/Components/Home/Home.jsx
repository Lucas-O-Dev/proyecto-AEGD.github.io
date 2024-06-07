import React from "react";
import "./_home.scss";
import SecondContainerSonHome from "./SecondContainerSonHome";
import ThirdContainerSonHome from "./ThirdContainerSonHome";
import FirstContainerSonHome from "./FirstContainerSonHome";
import FourthContainerSonHome from "./FourthContainerSonHome";

const Home = () => {

  return (
<>

<div className="containerPrincipalHome">

<FirstContainerSonHome/>

<ThirdContainerSonHome/>
<FourthContainerSonHome/>
</div>

    </>
  );
};

export default Home;

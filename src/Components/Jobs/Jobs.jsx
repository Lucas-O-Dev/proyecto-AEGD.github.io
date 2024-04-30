import React, { useEffect, useState } from "react";
import JobsList from "./JobsList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/Config";
import '../Jobs/_jobs.scss'
import FirstArticleJobs from "./FirstArticleJobs";
import FirstSectionJobs from "./FirstSectionJobs";

const Jobs = () => {

    const [jobs,setJobs] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          const cursosRef = collection(db, "Jobs");
          try {
            const querySnapshot = await getDocs(cursosRef);
            const coursesData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setJobs(coursesData);
          } catch (error) {
            console.error("Error fetching courses:", error);
          }
        };
      
        fetchData();
      }, []);
      


return (
<div className="conteinerJobs">

{/* <FirstArticleJobs/> */}

<FirstSectionJobs/>

<p>Ofertas Laborales</p>
<JobsList trabajos={jobs}/>

</div>
)
}

export default Jobs

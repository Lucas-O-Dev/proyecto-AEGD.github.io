import React, { useEffect, useState } from "react";
import JobsList from "./JobsList";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../../Firebase/Config";
import '../Jobs/_jobs.scss';
import FirstArticleJobs from "./FirstArticleJobs";
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Jobs = () => {

    const Item = styled(Sheet)(({ theme }) => ({
        ...theme.typography['body-sm'],
        marginTop: '1rem',
        textAlign: 'center',
        fontWeight: theme.fontWeight.md,
        color: theme.vars.palette.text.secondary,
        border: '1px solid',
        width: '100%',
        borderColor: theme.palette.divider,
        padding: theme.spacing(1),
        borderRadius: theme.radius.md,
    }));

    const [jobs, setJobs] = useState([]);
    const [userRoles, setUserRoles] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const cursosRef = collection(db, "Jobs");
            try {
                const querySnapshot = await getDocs(cursosRef);
                const jobsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setJobs(jobsData);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        const fetchUserRole = async (uid) => {
            const userDocRef = doc(db, "users", uid);
            try {
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    setUserRoles(userDoc.data().roles);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching user role:", error);
            }
        };

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserRole(user.uid).then(() => {
                    fetchData();
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!userRoles) {
        return <p>No user role found or no user is signed in.</p>;
    }



    return (
        <div className="containerJobs">

            <div className="containerImgJobs">

                <Item className="firstItemContainerImgJobs">Puedes seleccionar el empleo que mejor se adapte a tus objetivos profesionales y alcanzar el puesto de trabajo que deseas.</Item>
            </div>
            <div className="containerJobsList">
                {/* Renderiza el componente CoursesList pasando la lista de cursos como prop */}
                <JobsList trabajos={jobs} />
            </div>
            <Item sx={{ marginBottom: '10rem' }}>            {userRoles == 'Empleador' && <FirstArticleJobs />}</Item>

        </div>
    );
};

export default Jobs;

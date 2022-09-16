import React, { useState } from 'react'
import styled from "styled-components"
import { Link, useParams } from 'react-router-dom';
import { useEffectOnce } from '../customHooks/customHooks';
import { getSearched } from '../services/api';
import { motion } from 'framer-motion';


function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();


    useEffectOnce(() => {

        async function getData() {
            const res = await getSearched(params.search);
            if (res.data) {
                setSearchedRecipes(res.data.results);
                console.log(res.data.results);
            } else if (res.error) {
                console.log(res.error)
            }
        }
        getData();
    }, [params.search])

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {searchedRecipes?.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt="Food was here" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched
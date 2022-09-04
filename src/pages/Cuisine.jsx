import React, { useState } from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { getCuisine } from '../services/api';
import { useEffectOnce } from '../customHooks/customHooks';



function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();


    useEffectOnce(() => {

        async function getData() {
            const res = await getCuisine(params.type);
            if (res.data) {
                setCuisine(res.data.results);
                console.log(res.data.results);
            } else if (res.error) {
                console.log(res.error)
            }
        }
        getData();
    }, [params.type])



    return (
        <Grid>
            {cuisine?.map((item)=>{
                return(
            <Card key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
            </Card>
            )
            })}
        </Grid>
    )
}

const Grid = styled.div`
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

export default Cuisine
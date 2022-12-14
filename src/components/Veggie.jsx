import { useState } from "react";
import { useEffectOnce } from "../customHooks/customHooks"
import { getVeggie } from "../services/api"
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom"


function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffectOnce(() => {

        async function getData() {
            const res = await getVeggie();
            if (res.data) {
                setVeggie(res.data.recipes);
                console.log(res.data.recipes);
            } else if (res.error) {
                console.log(res.error)
            }
        }
        getData();
    }, [])

    return (
        <div>
            <Wrapper>
                <h3>Vegetarian Picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "1rem",
                    }}
                >
                    {veggie?.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>

        </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0 rem;
`;
const Card = styled.div`
    min-height: 19rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`;

export default Veggie

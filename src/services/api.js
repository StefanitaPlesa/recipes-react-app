
const getPopular = async () => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=13`)
        const data = await res.json();
        return { data };

    } catch (error) {
        return { error };
    }
}

const getVeggie = async () => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=13&tags=vegetarian`)
        const data = await res.json();
        return { data };

    } catch (error) {
        return { error };
    }
}

const getCuisine = async (name) => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`)
        const data = await res.json();
        return { data };

    } catch (error) {
        return { error };
    }
}

const getSearched = async (name) => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const data = await res.json();
        return { data };

    } catch (error) {
        return { error };
    }
}

 



export { getPopular, getVeggie, getCuisine, getSearched }
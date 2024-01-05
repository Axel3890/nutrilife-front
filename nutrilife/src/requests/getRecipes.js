import axios from "axios"

export const getRecipes = async (query) =>{
    try {
        const data = await axios.get(`http://localhost:3001/recipes/${query}`)
        if(data.data.length === 0) return alert("no hay nada baboso")
        console.log(data.data)
        return data;
    } catch (error) {
        alert(error.message);
    }
}
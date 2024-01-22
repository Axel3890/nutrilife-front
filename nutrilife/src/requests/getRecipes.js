import axios from "axios"

export const getRecipes = async (query) =>{
    try {
        const data = await axios.get(`http://localhost:3001/recipes/${query}`)
        if(data.data.length === 0) return ("404")
        return data;
    } catch (error) {
        alert(error.message);
    }
}
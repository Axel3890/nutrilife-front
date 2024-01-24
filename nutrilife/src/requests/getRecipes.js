import axios from "axios"

export const getRecipes = async (query) =>{
    try {
        const data = await axios.get(`https://nutriback-fbb0k28kr-axel-gomezs-projects.vercel.app/${query}`)
        if(data.data.length === 0) return ("404")
        return data;
    } catch (error) {
        alert(error.message);
    }
}
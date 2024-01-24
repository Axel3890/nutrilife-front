import axios from "axios"

export const getRecipes = async (query) =>{
    try {
        const data = await axios.get(`https://nutrilife-4kt24ax2f-axel-gomezs-projects.vercel.app/${query}`)
        if(data.data.length === 0) return ("404")
        return data;
    } catch (error) {
        alert(error.message);
    }
}
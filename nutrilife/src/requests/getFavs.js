import axios from "axios"

export const getFavs = async (email) =>{

    try {
        const data = await axios.get(`https://nutriback-fbb0k28kr-axel-gomezs-projects.vercel.app/getFavs`, { params: { email } })
        if(data.data.length === 0) return ("404")
        return data;
    } catch (error) {
        alert(error.message);
    }
}
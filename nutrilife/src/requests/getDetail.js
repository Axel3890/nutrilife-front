import axios from "axios"

export const getDetail = async (id) =>{
    try {
        const data = await axios.get(`https://nutriback-fbb0k28kr-axel-gomezs-projects.vercel.app/${id}`)
        if(data.data.length === 0) return ("404")
        return data.data;
    } catch (error) {
        alert(error.message);
    }
}
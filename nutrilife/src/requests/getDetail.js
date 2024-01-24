import axios from "axios"

export const getDetail = async (id) =>{
    try {
        const data = await axios.get(`https://nutrilife-4kt24ax2f-axel-gomezs-projects.vercel.app/${id}`)
        if(data.data.length === 0) return ("404")
        return data.data;
    } catch (error) {
        alert(error.message);
    }
}
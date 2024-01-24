import axios from "axios"

export const getFavs = async (email) =>{

    try {
        const data = await axios.get(`https://nutrilife-4kt24ax2f-axel-gomezs-projects.vercel.app/getFavs`, { params: { email } })
        if(data.data.length === 0) return ("404")
        return data;
    } catch (error) {
        alert(error.message);
    }
}
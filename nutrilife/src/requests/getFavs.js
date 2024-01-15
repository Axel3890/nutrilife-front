import axios from "axios"

export const getFavs = async (email) =>{
    console.log(email)
    try {
        const data = await axios.get(`http://localhost:3001/getFavs`, { params: { email } })
        if(data.data.length === 0) return alert("no hay nada baboso")
        console.log(data.data)
        return data;
    } catch (error) {
        alert(error.message);
    }
}
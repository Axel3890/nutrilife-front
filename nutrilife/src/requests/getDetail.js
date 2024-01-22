import axios from "axios"

export const getDetail = async (id) =>{
    try {
        const data = await axios.get(`http://localhost:3001/detail/${id}`)
        if(data.data.length === 0) return ("404")
        return data.data;
    } catch (error) {
        alert(error.message);
    }
}
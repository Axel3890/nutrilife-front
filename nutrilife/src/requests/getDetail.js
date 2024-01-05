import axios from "axios"

export const getDetail = async (idDetail) =>{
    try {
        const data = await axios.get(`http://localhost:3001/detail/${idDetail}`)
        if(data.data.length === 0) return alert("no hay nada baboso")
        console.log(data.data)
        return data.data;
    } catch (error) {
        alert(error.message);
    }
}
import {isAxiosError} from "axios";
import api from "../config/axios.ts";
// import {toast} from "sonner";

export async function getUser(){
    const token = localStorage.getItem("AUTH_TOKEN");
    console.log("el token es: ",token);
    try {
        const { data } = await api('/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        console.log("data es: ",data)
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
            // console.log(error.response.data.error);
            // toast.error(error.response.data.error);
        }
    }
}
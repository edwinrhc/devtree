import {isAxiosError} from "axios";
import api from "../config/axios.ts";
import type {User} from "../types";

export async function getUser(){

    try {
        const { data } = await api<User>('/user')
        return data;
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
            // console.log(error.response.data.error);
            // toast.error(error.response.data.error);
        }
    }
}
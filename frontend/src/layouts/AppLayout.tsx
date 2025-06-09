
import {useQuery} from "@tanstack/react-query";
import {Navigate} from 'react-router-dom';

import {getUser} from "../api/DevTreeAPI.ts";
import DevTree from "../components/DevTree.tsx";

export default function AppLayout() {

    const {data, isLoading, isError} = useQuery({
        queryFn: getUser,
        queryKey: ['User'], //TODO: user o User (Valida más adelante)
        retry: 1,
        refetchOnWindowFocus: false,
    })
    if (isLoading) return 'Cargando...'
    if (isError) return <Navigate to="/auth/login"/>
    if (data) return <DevTree data={data} />

}
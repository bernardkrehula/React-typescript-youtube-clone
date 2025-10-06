import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./api";



const AppContext = ({props}: any) => {
    const {data, isPending} = useQuery({
        queryKey: ['homepage'],
        queryFn: fetchData,
    })

    return(
        <>
        {console.log}
        </>   
    )

}
export default AppContext;
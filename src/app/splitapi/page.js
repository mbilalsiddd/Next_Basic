"use client"
import { useGetProductsQuery } from "@/app/redux/extendedapi"

const SplitApi = () => {
    const {data , isloading , error } = useGetProductsQuery()
    console.log("product split ==>" , data)
    
    if(isloading) return <p>loading.......</p>
    if(error) return <p>error occur</p>
 

    return (

        <div>
           <h2>Product Split</h2>
             {
                data?.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                    </div>
               ) 
            )}
        </div>
    )
}

export default SplitApi;


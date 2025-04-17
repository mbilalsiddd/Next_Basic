"use client"
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slices/productSlice";



const ApiUser = () => {
    const dispatch = useDispatch()
    const productData = useSelector((state) => state.product.products)
    console.log("productData", productData);


    return (
        <div>   
            {/* <h3>Api handling</h3> */}
            {/* <button onClick={() => dispatch(fetchApiUsers())}>Api check</button>
            {
                productData && productData.map((item) => (
                    <h4 key={item.id}>{item.title}</h4>
               ) 
            )} */}
        </div>
    )
}

export default ApiUser;



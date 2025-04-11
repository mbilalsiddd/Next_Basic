"use client"
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/counterSlice";



const ApiUser = () => {
    const dispatch = useDispatch()
    const apiUserData = useSelector((state) => state.userDataApi)
    console.log("apidata", apiUserData);


    return (
        <div>   
            <h3>Api handling</h3>
            <button onClick={() => dispatch(fetchApiUsers())}>Api check</button>
            {/* {
                apiUserData.length && apiUserData.map((item, index) => (
                    <h4 key={index}>{item.category}</h4>
                ))
            } */}
        </div>
    )
}

export default ApiUser;




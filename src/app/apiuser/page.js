"use client"
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/counterSlice";



const ApiUser = () => {
    const dispatch = useDispatch()
    const apiUserData = useSelector((state) => state.counter.userApiData)
    console.log("apidata", apiUserData);


    return (
        <div>   
            <h3>Api handling</h3>
            <button onClick={() => dispatch(fetchApiUsers())}>Api check</button>
            {
                apiUserData && apiUserData.map((item) => (
                    <h4 key={item.id}>{item.title}</h4>
               ) 
            )}
        </div>
    )
}

export default ApiUser;

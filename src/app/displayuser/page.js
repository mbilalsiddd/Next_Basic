"use client"
import { useDispatch, useSelector } from "react-redux";
import { editUser, removeUser } from "../redux/counterSlice";


const DisplayUser = () => {
    // const userData = useSelector((data)=> dispatch().data.users)
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer.users);
    console.log("userData", state);

    return (
        <div>
           {/* <input className="inpd"  type="text"/> */}
            <div className="inpd">
                <h3>Display user</h3>
                {
                    state.map((item, index) => (
                        <div className="gap" key={index}>{item.name}
                            <span>
                                <button className="rbtn" onClick={() => dispatch(removeUser(item.id))}>remove</button>
                                <button className="ebtn"  onClick={() => dispatch(editUser(item.id))} >edit</button>
                                {/* <button className="ebtn"  onClick={() => dispatch(deleteUser(item.key))} >DeleteAll</button> */}
                            </span>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default DisplayUser;








"user client"
import { useState } from "react"
import { addUser , deleteUser} from "../redux/counterSlice"
import { useDispatch } from "react-redux"


const AddUser = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()


    const adduser = () => {
        dispatch(addUser(inputValue));
        // console.log("inputValue" , inputValue)
    }

    return (
        <div>
           <h3 >Todo App</h3>
            <input
                className="inpa"
                value={inputValue}
                type="text"
                placeholder="enter the value"
                onChange={(e) => setInputValue(e.target.value)}
            />
            
            <button className="btn" onClick={adduser}>AddUser</button>
            <span>
            <button className="btn" onClick={(item)=>dispatch(deleteUser(item.key))}>DeleteAllUser</button>
            </span>


        </div>
    )
}


export default AddUser

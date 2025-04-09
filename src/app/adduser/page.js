"user client"
import { useState } from "react"
import { addUser } from "../redux/counterSlice"
import { useDispatch } from "react-redux"


const AddUser = () => {
    const [inputValue , setInputValue] = useState('')
    
    const dispatch = useDispatch()

    const adduser = () => {
        dispatch(addUser(inputValue));
          console.log("inputValue" , inputValue)
    }

    return (
        <div>
        <h3 >Add user</h3>
        <input 
        className="inpa"  
        value={inputValue}
        type="text" 
        placeholder="enter the value"
        onChange={(e) => setInputValue(e.target.value)} 
        />

        <button className="btn"  onClick={adduser}>AddUser</button>
        </div>
    )
}


export default AddUser

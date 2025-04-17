"user client"
import { useState } from "react"
// import { addUser , deleteUser} from "../redux/counterSlice"
import { addProduct , deleteAllProduct, fetchApiUsers} from "../redux/slices/productSlice"

import { useDispatch } from "react-redux"


const AddUser = () => {
    const [inputValue, setInputValue] = useState('')
     const dispatch = useDispatch()


    const Addproduct = () => {
        // dispatch(addUser(inputValue));
        dispatch(addProduct(inputValue));
        // console.log("inputValue" , inputValue)
    }

    return (
        <div>
           <h1 >Api Handling Using Redux Toolkit</h1>
           <div className="main">
            <input
                className="inpa"
                value={inputValue}
                type="text"
                placeholder="enter the value"
                onChange={(e) => setInputValue(e.target.value)}
            />
            
            {/* <button className="btn" onClick={adduser}>AddUser</button> */}
            <button className="btn-a" disabled={!inputValue.trim()} onClick={Addproduct}>AddUser</button>
            <span>
            {/* <button className="btn" onClick={(item)=>dispatch(deleteUser(item.key))}>DeleteAllUser</button> */}
            <button className="btn-d" onClick={(item)=>dispatch(deleteAllProduct(item.key))}>DeleteAllUser</button>
            <button className="btn-p" onClick={() => dispatch(fetchApiUsers())}>Add Api</button>
            </span>
          </div>


        </div>
    )
}


export default AddUser

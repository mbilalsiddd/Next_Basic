"use client"
import { useDispatch, useSelector } from "react-redux";
import { editProduct, removeProduct } from "../redux/slices/productSlice";


const DisplayUser = () => {
    // const userData = useSelector((data)=> dispatch().data.users)
    const dispatch = useDispatch();
    // const state = useSelector((state) => state.reducer.users);
    const state = useSelector((state) => state.product.products);
    console.log("userData", state);

    return (
        <div>
           {/* <input className="inpd"  type="text"/> */}
            <div className="inpd">
                <h3>Show Api Data</h3>
                 {/* state.map((item, index) => (
                         <div className="gap" key={index}>{item.name} */}
                {
                        state.map((item , index) => ( 
                           <div className="gap" key={item.id || index}>
                           {item.name ? item.name : item.title} 
                            <span className="btn-row">
                                <button className="rbtn" onClick={() => dispatch(removeProduct(item.id))}>remove</button>
                                <button className="ebtn"  onClick={() => dispatch(editProduct(item.id))} >edit</button>
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














"use client"
// import Link from "next/link";
// import styles from "./page.module.css";
// import { useRouter } from "next/navigation";
// import User from "./server/user";
// import { hydrateRoot } from 'react-dom/client';
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/counterSlice";
// import { Router } from "next/router";
import AddUser from "./adduser/page";
import DisplayUser from "./displayuser/page";
import ApiUser from "./apiuser/page";
import SplitApi from "./splitapi/page";





export default function Page() {
  // const router = useRouter()
  // const navigate = (name) => {
  //   router.push(name)
  // }

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();


  // const count = useSelector((state)=> state.counter.value)
  // const dispatch = useDispatch()


  return (
    <div>
      {/* props  */}
      {/* <App name="bilal" /> */}
      {/* <h1>Home page</h1>
      <p><Link href="login">Go to Login page</Link></p>
      <p> <Link href="signup">Go to signup page</Link></p>
      <p><Link href="about">Go to about page</Link></p>
      <button onClick={() => { router.push("/login") }}>go to login page</button>
      <br />
      <button onClick={() => { router.push("/about") }}>go to about page</button>
      <br />
      <button onClick={() => { navigate("/signup") }}>go to signup page</button>
      <br />
      <button onClick={() => { navigate("/about/studentinfo") }}>go to studentinfo page</button>
      <br />
      <button onClick={() => { navigate("/studentlist") }}>go to studentlist page</button>
      <User/> */}
      
      
      {/* <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
    

     <AddUser/>
     <DisplayUser/>
     <ApiUser/>
     <SplitApi/>

    </div>
  );
}


// const App = (props) => {
//   return (
//     <h1>My name is {props.name}</h1>
//   )
// }



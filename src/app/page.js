"use client"
import Link from "next/link";
// import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter()
  const navigate = (name) => {
    router.push(name)
  }



  return (
    <div>
      {/* props  */}
      {/* <App name="bilal" /> */}
      <h1>Home page</h1>
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
    </div>
  );
}


// const App = (props) => {
//   return (
//     <h1>My name is {props.name}</h1>
//   )
// }



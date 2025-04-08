"use client"
import { useRouter } from "next/navigation";


const Login = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }
    return(
        <div>
            <h1>Login page</h1>
            <button onClick={()=>{navigate("/")}}>Go to home page</button>
        </div>
    )
}

export default Login
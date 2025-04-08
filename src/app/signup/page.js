"use client"
import { useRouter } from "next/navigation";

const Signup = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }
    return(
        <div>
            <h1>signup</h1>
            <button onClick={()=>{navigate("/")}}>Go to home page</button>
        </div>
    )
}

export default Signup

"use client"
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1>about page</h1>
            <button onClick={()=>{navigate("/")}}>Go to home page</button>
        </div>
    )
}

export default About
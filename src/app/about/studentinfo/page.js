"use client"
import { useRouter } from "next/navigation";

const StudentInfo = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }


    return (
        <div>
            <h1>welcome to studentinfo</h1>
            <button onClick={()=>{navigate("/")}}>Go to home page</button>
        </div>
    )
}


export default StudentInfo
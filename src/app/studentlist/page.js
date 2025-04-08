import Link from "next/link"


const StudentList = () => {
    return (
        <div>
            <h1>Welcome to Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/bilal">Bilal</Link>
                </li>
                <li>
                    <Link href="/studentlist/khalid">khalid</Link>
                </li>
                <li>
                    <Link href="/studentlist/sarfaraz">sarfaraz</Link>
                </li>
                <li>
                    <Link href="/studentlist/mustafa">mustafa</Link>
                </li>
            </ul>
        </div>
    )
}


export default StudentList
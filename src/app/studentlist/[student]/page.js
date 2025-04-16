"use client"


const Student = ({params}) => {
    console.log(params);
    return (
        <div>
            <h1>welcome to student Detail</h1>
            <h4>Name : {params.student}</h4>
            
        </div>
    )
}

export default Student
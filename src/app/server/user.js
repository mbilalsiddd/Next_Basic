const User = (props) => {
    console.log("props", props);
    return (
        <div>
            <h1>User Page SSR</h1>
            {/* <h4>name : {props}</h4> */}
        </div>
    )
}

export const getServerSideProps = async () => {
    //    console.log("a task is running on server side")
    // const data = await (await fetch("https://fakestoreapi.com/products")).json();
    return {
      props: {
        name: "Ali",
        // data,
      },
    };
};


export default User;  




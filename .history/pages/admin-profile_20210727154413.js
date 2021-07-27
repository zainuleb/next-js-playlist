import React from "react";

export default AdminProfile=(props)=>{
	return <h1>{props.username</h1>;
}


export async const getServerSideProps =  (context) => {
    return {
        props: {
            username:'Maz'
        }
    }
}
import React from 'react'

function Client(props){
    const {details} = props
    if(!details){
        return <h3> Working, fetching your client&apos;s details...</h3>
    }
    return(
        <div className='client container'>
            <h2>First Name:{details.first_name}</h2>
            <h3>Last Name: {details.last_name}</h3>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Client
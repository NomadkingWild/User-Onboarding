import React from 'react'

export default function Form(props){
    const{
        values,
        submit,
        inputChange,
        disabled,
        errors,
    }= props

    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }
    const onInputChange = evt =>{
        const {name, value} = evt.target
        inputChange(name, value)
    }

    return(
        <form className= 'form container' onSubmit={onSubmit}>
            <div className='form submit'>
                <h2>Add a Client</h2>
                <button disabled={disabled}>submit</button>
                <div className='errors'>
                    <div>{errors.firstname}</div>
                    <div>{errors.lastname}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                </div>
            </div>

            <div className='form inputs'>
            <h3>General Information</h3>
            <label>First name&nbsp;
                <input
                value={values.first_name}
                onChange={onInputChange}
                name='firstname'
                type='text'
                />
            </label>
            <label>Last name&nbsp;
                <input
                value={values.last_name}
                onChange={onInputChange}
                name='lastname'
                type='text'
                />
            </label>
            <label>Email&nbsp;
                <input
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='email'
                />
            </label>
            <label>Role
                <select
                onChange={onInputChange}
                value={values.role}
                name='role'
                >
                    <option value=''>Select an option</option>
                    <option value='initial'>Initial Contact</option>
                    <option value='rough'>Rough Project Phase</option>
                    <option value='pr'>Project in Review</option>
                    <option value='paid'>Project Paid for and Completed</option>
                    </select>
            </label>
            /</div>
        </form>
    )
}
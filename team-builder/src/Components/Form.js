import React from 'react'

export default function Form (props) {
    const {values, update, submit} = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>
        <form onSubmit={onSubmit}>
            <label>Name:
                <input onChange={onChange} name='name' placeholder='Enter name' value={values.name} type='text'/>
            </label>

            <label>Email:
                <input onChange={onChange} name='email' placeholder='Enter email' value={values.email} type='email'/>
            </label>

            <label>Role:
                <select onChange={onChange} name='role' value={values.role}>
                    <option>-- Select a Role --</option>
                    <option value='student'>Student</option>
                    <option value='front-end'>Front End Developer</option>
                    <option value='back-end'>Back End Developer</option>
                </select>
            </label>
            <button disabled={!values.name || !values.email || !values.role ? true : false}>submit</button>
        </form>
        
        </div>
    )
}
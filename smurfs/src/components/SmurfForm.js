import React, {useState} from 'react'
import {postSmurf} from '../actions'
import {connect } from 'react-redux'

const SmurfsForm = (props) => {
    const initialValues = props.newSmurf
    const [form, setForm] = useState(initialValues)

    const onChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e =>{
        props.postSmurf(form)
        setForm(initialValues)
    }

    return(
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={form.name} type="text" name="name" placeholder="Enter a name!"/>
            <input onChange={onChange} value={form.age} type="text" name="age" placeholder="Enter an age!"/>
            <input onChange={onChange} value={form.height} type="text" name="height" placeholder="Enter a height!"/>
            <button>Populate!</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    smurfs:state.smurfs,
    newSmurf:state.newSmurf
})

export default connect(mapStateToProps, {postSmurf})(SmurfsForm)
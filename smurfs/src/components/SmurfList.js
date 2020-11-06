import React, {useEffect} from 'react'
import {getSmurf} from '../actions'
import { connect } from 'react-redux'
import Smurfs from './Smurfs'

const SmurfList = (props) =>{

    useEffect(() => {
        return props.getSmurf()
        }, [])

return(
    <div>
        {props.smurfs.map((smurf) => (
            <Smurfs smurf={smurf}/>
        ))}
    </div>
)
}



const mapStateToProps = (state) => ({smurfs:state.smurfs})

export default connect(mapStateToProps, {getSmurf})(SmurfList)
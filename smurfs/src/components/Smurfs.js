import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import {getSmurf} from '../actions'

export const Smurfs = (props) => {
console.log('in smurfs.js:', props.smurfs)


return(
    <div>
        <h5>smurf:</h5>
        <p>{props.smurf.name}</p>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
    </div>
)


}


const mapStateToProps = (state) => ({smurfs:state.smurfs})

export default connect(mapStateToProps, {getSmurf})(Smurfs)
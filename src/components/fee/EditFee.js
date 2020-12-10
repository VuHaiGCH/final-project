import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'



function EditFee(props) {
    console.log(props)
    const { fee } = props;
    
    if (fee) {
        return (<div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{fee.name}</span>
                    <p>{fee.semester}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                </div>
            </div>
        </div>
        )
    } else
        return (
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
}



const mapStatetoProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const fees = state.firestore.data.fee;
    const fee = fees ? fees[id] : null

    return {
        fee: fee,
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'fee' }
    ])
)(EditFee);

import React, { useState } from 'react';
import { connect } from 'react-redux';
const Dashboard = (props) => {
    return (
        <div className="wrap">
            <h1>Welcome</h1>
            <p>{`Your name is ${props.userDetails.username}`}</p>
            <p>{`Your id is ${props.userDetails._id}`}</p>
            <p>{`Your account was created on ${props.userDetails.date}`}</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        userDetails: state.login.userDetails,
    }
}
export default connect(mapStateToProps, null)(Dashboard);


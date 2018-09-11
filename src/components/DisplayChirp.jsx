import React, {Fragment} from "react";

const DisplayChirp = (props) => {
    return (
        <Fragment>
            <br></br>
            <div className="card border-dark mb-3" style={{ maxwidth: '18rem' }}>
                <div className="card-body text-dark">
                    <h5 className="chirp-title">{props.chirp.newName}</h5>
                    <p className="chirp-text">{props.chirp.newMessage}</p>
                </div>
            </div>
       </Fragment>
    );
};


export default DisplayChirp;
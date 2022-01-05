import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ width: "130px", textAlign: "center" }}>
            <Spinner style={{ borderRadius: "50%" }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>

    )
}
export default Loading
import React from 'react';
import './loading.css';

const Loading = () => {
    return (
        <>
            <div className="lds-roller m-auto">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export { Loading };
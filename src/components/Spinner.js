import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className="spinner-container">
            <Loader
                    className="spinner"
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
            >
            </Loader>
        </div>
    )
};

export default Spinner;
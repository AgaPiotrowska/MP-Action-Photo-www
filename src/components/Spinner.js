import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Spinner = () => {
    return (
        <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
        >
        </Loader>
    )
};

export default Spinner;
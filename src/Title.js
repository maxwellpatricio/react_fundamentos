import React from "react";
import PropTypes from "prop-types";

export default function Title(props) {
    return (
        <>
            <h1>{props.site.title}</h1>
            <h2>{props.site.subtitle}</h2>
        </>
    );
}

Title.propTypes = {
    site: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }).isRequired,
}
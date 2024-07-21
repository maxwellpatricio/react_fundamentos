import React from "react";
import PropTypes from "prop-types"

function Post(props) {
    return (
        <>
            <article>
                <strong>{props.title}</strong>
                <small>{props.subtitle}</small>
                <br />
                Media: {props.likes / 2}
            </article>
        </>
    )
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
}

export default Post;
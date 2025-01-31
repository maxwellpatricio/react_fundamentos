import React from "react";
import PropTypes from "prop-types"

function Post(props) {
    return (
        <>
            <article>
                <strong>{props.read ? <s>{props.title}</s> : props.title}</strong>
                <br />
                <small>{props.read && props.subtitle}</small>
                <small>{!props.read && <s>{props.subtitle}</s>}</small>
                <br />
                <button onClick={() => props.onRemove(props.id)}>Remover</button>
                <br />
                Media: {props.likes / 2}
                <br />
                <br />
            </article>
        </>
    )
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    })
}

export default Post;
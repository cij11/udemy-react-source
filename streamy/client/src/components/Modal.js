import React from 'react'
import ReactDOM from 'react-dom' // Note. Importing this even though this isn't the root component, because now we're thinking with portals.

const Modal = (props) => {
    // Returns from portals are a little different
    // 1st arg: JSX
    // 2nd arg is the id of element that will be the parent
    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}
            className="ui dimmer modals visible active"
        >
            <div
                onClick={(e) => {
                    // Prevent onClick on content bubbling up to parent and closing modal
                    e.stopPropagation()
                }}
                className="ui standard modal visible active"
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal

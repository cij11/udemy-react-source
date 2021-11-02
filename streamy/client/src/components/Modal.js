import React from 'react'
import ReactDOM from 'react-dom' // Note. Importing this even though this isn't the root component, because now we're thinking with portals.
import history from '../history'

const Modal = (props) => {
    // Returns from portals are a little different
    // 1st arg: JSX
    // 2nd arg is the id of element that will be the parent
    return ReactDOM.createPortal(
        <div
            onClick={() => history.push('/')}
            className="ui dimmer modals visible active"
        >
            <div
                onClick={(e) => {
                    // Prevent onClick on content bubbling up to parent and closing modal
                    e.stopPropagation()
                }}
                className="ui standard modal visible active"
            >
                <div className="header">Delete Stream</div>
                <div className="content">
                    Are you sure you want to delete this stream?
                </div>
                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal

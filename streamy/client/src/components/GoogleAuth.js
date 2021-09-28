import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // Accessing gapi from the window. gapi loaded from script tag in index.html
            window.gapi.auth2
                .init({
                    // init after we've loaded auth2
                    clientId:
                        '225790172278-i9b8hrb75iqn7ft1186r714epmapc23c.apps.googleusercontent.com',
                    scope: 'email',
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance() // Can now reference auth from anywhere in the class
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                    this.auth.isSignedIn.listen(this.onAuthChange) // Call onAuthChange every time auth state changes

                    // init returns a promise, that we can 'then' on
                })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (!isSignedIn) {
            this.props.signIn()
        } else {
            this.props.signOut()
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }

    renderAuthButton() {
        if (this.state.isSignedIn == null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button
                    onClick={this.handleSignOut}
                    className="ui red google button"
                >
                    <i className="google icon" /> Sign Out
                </button>
            )
        } else
            return (
                <button
                    onClick={this.handleSignIn}
                    className="ui red google button"
                >
                    <i className="google icon" /> Sign in with Google
                </button>
            )
    }

    handleSignIn = () => {
        this.auth.signIn()
    }

    handleSignOut = () => {
        this.auth.signOut()
    }
}

const mapDispatchToProps = { signIn, signOut }

export default connect(null, mapDispatchToProps)(GoogleAuth)

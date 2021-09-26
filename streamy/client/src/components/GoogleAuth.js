import React from 'react'

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
                    this.setState({
                        isSignedIn: this.auth.isSignedIn.get(),
                    })
                    this.auth.isSignedIn.listen(this.onAuthChange) // Call onAuthChange every time auth state changes

                    // init returns a promise, that we can 'then' on
                })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
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
                    onClick={this.onSignOut}
                    className="ui red google button"
                >
                    <i className="google icon" /> Sign Out
                </button>
            )
        } else
            return (
                <button
                    onClick={this.onSignIn}
                    className="ui red google button"
                >
                    <i className="google icon" /> Sign in with Google
                </button>
            )
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }
}

export default GoogleAuth

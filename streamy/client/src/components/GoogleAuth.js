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
                    console.log('then invoked')

                    this.auth = window.gapi.auth2.getAuthInstance() // Can now reference auth from anywhere in the class

                    console.log(this.auth)
                    this.setState({
                        isSignedIn: this.auth.isSignedIn.get(),
                    })

                    // init returns a promise, that we can 'then' on
                })
        })
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }

    renderAuthButton() {
        if (this.state.isSignedIn == null) {
            return <div>I don't know if we are signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else return <div>I am not signed in</div>
    }
}

export default GoogleAuth

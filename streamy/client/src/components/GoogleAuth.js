import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                cientId:
                    '225790172278-i9b8hrb75iqn7ft1186r714epmapc23c.apps.googleusercontent.com',
                scope: 'email',
            }) // init after we've loaded auth2
        }) // Accessing gapi from the window. gapi loaded from script tag in index.html
    }
    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth

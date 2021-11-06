import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen')
  }

    render() {
        return (
            <button className="ui button primary">
                {
                    // The function in the consumer is called with whatever value is in the consumer pipe}
                }
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }
}

export default Button

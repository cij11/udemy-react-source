import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

class Button extends React.Component {
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                {
                    // The function in the consumer is called with whatever value is in the consumer pipe
                    // When do we use consumers? When we want to get information from multiple providers within the same component.
                    // There is only one this.context.
                    // We use this.context when we only need to get context from one provider.
                }
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button

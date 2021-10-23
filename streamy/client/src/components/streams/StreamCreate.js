import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        // ^^ Destructure input out of formProps
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        ) // Always assign value and onChange when doing input in react/redux
        // Note that we're using the spread operator to assign value={formProps.input.value} and onChange={formProps.input.onChange}

        // meta.error contains the whatever message is assigned to the field with the same name returned from the validate method
    }

    onSubmit(formValues) {
        // Nice thing about Redux Forms is it gives us a useful formValues argument instead of an event object
        console.log(formValues)
    }

    render() {
        // When we add props to Fields that redux forms doens't know about (i.e, 'label'), then
        // redux forms will pass this a field of the argument to renderInput
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter Title"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'Require a title'
    }

    if (!formValues.description) {
        errors.description = 'Require a description'
    }

    return errors
}

export default reduxForm({ form: 'streamCreate', validate })(StreamCreate)

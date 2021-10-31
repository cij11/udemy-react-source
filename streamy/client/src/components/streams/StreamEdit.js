import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'
import { pick } from 'lodash'

class StreamEdit extends React.Component {
    componentDidMount() {
        console.log('fetching stream')
        this.props.fetchStream(this.props.match.params.id)
    }

    handleSubmit = (formValues) => {
        console.log(formValues)
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading</div>
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    onSubmit={this.handleSubmit}
                    initialValues={pick(
                        this.props.stream,
                        'title',
                        'description'
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    }
}

const mapDispatchToProps = {
    fetchStream,
    editStream,
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit)

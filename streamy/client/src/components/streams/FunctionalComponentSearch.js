import { useState, useEffect } from 'react'

const FunctionalComponentSearch = (props) => {
    const [term, setTerm] = useState('Loading...')

    useEffect(() => {
        setTimeout(() => setTerm('Initial value from API'), 2000)
    }, [])

    return (
        <div>
            <span>{props.label} </span>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
        </div>
    )
}

export default FunctionalComponentSearch

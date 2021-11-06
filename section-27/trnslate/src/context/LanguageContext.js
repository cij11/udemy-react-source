// Context object in its own file, so we can import only into suppliers and consumers of information in the context.

import React from 'react'

export default React.createContext('english') // 'english' as the default value for context

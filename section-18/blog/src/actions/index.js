import jsonPlaceholder from '../apis/jsonPlaceholder'

// redux-thunk lets us return a function from an action creator.
// The function can take dispatch and getState as arguments.
// We commonly use this to retun an async function that just uses dispatch.
// We await some api call, then dispatch the response in an action.
// We don't return an action object.

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response,
    })
}

// Expanded version

// export const fetchPosts = () => {
//   return async (dispatch, getState) => {
//       const response = await jsonPlaceholder.get('/posts')

//       dispatch({
//           type: 'FETCH_POSTS',
//           payload: response,
//       })
//   }
// }

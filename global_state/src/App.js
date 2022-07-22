import { useEffect } from 'react'
import { StoreContext } from './context/myContext'
import { useContext } from 'react'
import axios from 'axios'
import * as types from './store/actions';
const App = () => {
  const [state, dispatch] = useContext(StoreContext)
  const { users, loading } = state;
  console.log(users)
  useEffect(() => {
    (async () => {
      dispatch({
        type: types.GET_USERS_START,
        loading: true,
      })
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=3")
        dispatch({
          type: types.GET_USERS_SUCCESS,
          loading: false,
          data: response.data
        })
      } catch (error) {
        dispatch({
          type: types.GET_USERS_ERROR,
          loading: false,
          error: error,
        })
      }
    })()
  }, []);
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </>
  )
}

export default App
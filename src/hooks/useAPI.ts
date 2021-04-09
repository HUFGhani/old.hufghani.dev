import axios from 'axios'
import { useEffect, useReducer, useState } from 'react'

const dataFetchReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case `FETCH_INIT`:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case `FETCH_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        response: action.payload,
      }
    case `FETCH_FAILURE`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

const useAPI = (initialUrl: string, initialData: never[]) => {
  const [url, setUrl] = useState(initialUrl)
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    response: initialData,
  })

  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      dispatch({ type: `FETCH_INIT`, payload: [] })

      try {
        const result = await axios(url)

        if (!didCancel) {
          dispatch({ type: `FETCH_SUCCESS`, payload: result.data })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: `FETCH_FAILURE`, payload: [] })
        }
      }
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [url])

  return [state, setUrl]
}

export default useAPI

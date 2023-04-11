import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const DataFetching = () => {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default DataFetching

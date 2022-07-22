import React, { useDeferredValue } from 'react'

const StudentList = ({ data }) => {
  const deferredValue = useDeferredValue(data)
  return (
    <div>
      <h2>StudentList</h2>
      {deferredValue.map((item, index) =>
        <div key={index}>{item}</div>
      )}
    </div>
  )
}

export default StudentList
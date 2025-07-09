import React from 'react'

const FirstComp = (props) => {
  const {name, type, purpose} = props.test
  return (
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{purpose}</p>
      </div>
  )
}

export default FirstComp
import React from 'react'

const MessageBox = (props) => {
  return (
    <>
    <h1>{props.message}</h1>
    <button onClick={ () => props.closeMsg()}>luk</button>
    </>
  )
}

export default MessageBox
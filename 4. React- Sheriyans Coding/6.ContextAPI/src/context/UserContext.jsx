import React from 'react'

const UserContext = ({children}) => {
// passing the App as children of UserContext, we use {children} to access the children of UserContext
    const user = "Tanaya"
  return (
    <div>{children}</div>
  )
}

export default UserContext
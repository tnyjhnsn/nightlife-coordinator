import React from 'react'
import Auth from '../common/Auth'

const Login = ({ handleLoginClick }) => {
  return (
    <div className="flex justify-center items-center bg-grey-light h-12">
      <Auth provider="twitter" handleLoginClick={handleLoginClick} />
      <Auth provider="github" handleLoginClick={handleLoginClick} />
    </div>
  )
}

export default Login

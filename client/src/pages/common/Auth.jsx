import React from 'react'

const Auth = ({ provider, handleLoginClick }) => {
  const authProviderClassName = `icon-auth-provider bg-brand-${provider}`

  const loginIcon = [
    'fa',
    `fa-${provider}`,
    'text-white'
  ].join(' ')

  const handleClick = () => {
    handleLoginClick()
  }

  return (
    <div className="inline-flex">
      <a href={`/auth/${provider}`} className={authProviderClassName} onClick={handleClick}>
        <i className={loginIcon} />
        <span className="btn-auth-provider">Login with {provider === 'twitter' ? 'Twitter' : 'GitHub'}</span>
      </a>
    </div>
  )
}

export default Auth

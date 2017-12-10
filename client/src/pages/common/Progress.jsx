import React from 'react'

const Progress = ({ progress }) => {
  return (
    <div className="loader-wrapper" style={progress ? { display: 'block' } : { display: 'none' }}>
      <div className="loader-box">
        <div className="loader">Loading...</div>
      </div>
    </div>
  )
}

export default Progress

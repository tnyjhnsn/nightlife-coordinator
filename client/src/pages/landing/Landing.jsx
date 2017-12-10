import React from 'react'

import SearchBox from '../common/SearchBox'
import LoginButton from '../common/LoginButton'
import YelpPromo from '../common/YelpPromo'

const Landing = ({ searchVenues }) => {
  return (
    <div>
      <div className="landing bg-cover bg-no-repeat bg-center bg-scroll">
        <div className="flex w-full flex-col md:flex-row justify-center items-center">
          <div className="text-app-name">whereTo</div>
          <SearchBox searchVenues={searchVenues} />
          <LoginButton />
        </div>
      </div>
      <span
        className="text-sm font-light p-1">Photo by Moss on <a href="https://unsplash.com/" target="_blank">Unsplash</a>
      </span>
      <YelpPromo />
    </div>
  )
}

export default Landing

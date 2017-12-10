import React from 'react'
import logo from '../../images/Yelp_trademark_RGB_outline.png'

export default () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-3">
      <div className="font-light">Thank you to <a href="https://www.yelp.com" target="_blank">Yelp</a> for providing all listings, ratings, reviews, and venue data.</div>
      <div><a href="https://www.yelp.com" target="_blank"><img className="min-w-6 h-16" src={logo} /></a></div>
    </div>
  )
}

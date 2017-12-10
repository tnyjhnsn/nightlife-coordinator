const searchQuery = (location) => {
  return {
    query: `{
      search(categories: "bars, restaurants, venues",
        location: "${location}") {
        total
        business {
          id
          name
          url
          rating
          review_count
          photos
          reviews {
            user {
              name
              image_url
            }
            text
            rating
            url
          }
        }
      }
    }`
  }
}

export default searchQuery

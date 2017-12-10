const User = require('../models/user')

module.exports = {

  async getUser(req, res) {
    await User.findById(req.params.userId, (error, user) => {
      if (error) {
        return res.status(500).send('Cannot retrieve user')
      }
      return res.status(200).send({
        user
      })
    })
  }

}

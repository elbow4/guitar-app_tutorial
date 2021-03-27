// /models contains all models
const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      // use body of post request: name + password
      const user = await User.create(req.body)
      // if successful: send back that user object
      res.send(user.toJSON())
    } catch (err) {
      // email already exist
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  }
}

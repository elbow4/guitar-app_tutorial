const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
// endpoint
// access payload: req.body
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}

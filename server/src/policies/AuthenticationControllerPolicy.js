const Joi = require('joi')

module.exports = {
  // next calls next thing in routes path
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(
        // regespression for password rules 8-32 Zeichen lang, Buchstaben groß,klein und Zahlen
        /^[a-zA-Z0-9]{8,32}$/
      )
    })

    // validate req.body against schema
    const { error } = schema.validate(req.body)

    // check if error with validation
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics
            <br>
            2. It must be at least 8 characters in lentgh and not greater than 32`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}

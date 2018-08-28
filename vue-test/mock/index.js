const proxy = {
  'POST /login/success': (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let code = req.body.code
    let body = {
      state: 0,
      message: 'ok',
      data: null
    }
    if (code !== '123') {
      body.state = 4
      body.message = 'code error'
    } else if (username !== 'crazymad') {
      body.state = 2
      body.message = 'user not found'
    } else if (password === '123') {
      body.state = 1
    } else {
      body.state = 3
      body.message = 'password error'
    }
    return res.status(200).json(body)
  }
}

module.exports = proxy

const proxy = {
  'POST /login/success': (req, res) => {
    var res = {
      state : 0,
      message: "ok",
      data: null
    }
    const {username, password} = req.body;
    if (username === "crazymad") {
      if (password === "123") {
        res.state = 1;
        return res;
      } else {
        res.state = 2;
        messge = "password error";
        return res;
      }
    } else {
      res.message = "user not exist";
      return res;
    }
  }
}

module.exports = proxy;

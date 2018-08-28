module.exports.submitLogin = (username, password) => {
  $.ajax({
    url: '',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      username: username,
      password: password
    }),
    success: (res) => {
      if (res.state === 1) {
        alert('登录成功')
      }
    }
  })
}

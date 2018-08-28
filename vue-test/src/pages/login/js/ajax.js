import $ from 'jquery'

var cmAjax = {
  submitLogin: (username, password) => {
    $.ajax({
      url: '/login/success',
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
  },
  post: (url, data, success) => {
    $.post(url, data, function (res) {
      success(res)
    })
  },
  commit: (config) => {
    $.ajax(config)
  }
}

export {cmAjax}

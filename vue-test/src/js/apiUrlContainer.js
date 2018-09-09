// var prefix = 'http://127.0.0.1:8082'
var prefix = ''

var apiUrlContainer = {
  // 注册用的手机短信验证吗申请接口
  registerPhoneCode: prefix + '/api/account/register/getPhoneCode',
  // 注册用的手机短信验证码图片验证码申请接口
  registerPphoneImageCode: prefix + 'api/account/register/getPhoneImageCode',
  // 登录接口
  login: prefix + '/api/account/login/submit',
  // 注册接口
  register: prefix + '/api/account/register/submit'
}

export { apiUrlContainer }

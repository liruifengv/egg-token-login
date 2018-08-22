/* eslint-disable */
'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class UserController extends Controller {
  async index() {
    const ctx = this.ctx
    const authorization = ctx.get('Authorization');
    if (authorization === '') {
        ctx.throw(401, 'no token detected in http header "Authorization"');
    }
    const token = authorization.split(' ')[1];
    // console.log(token)
    let tokenContent;
    try {
        tokenContent = await jwt.verify(token, 'shenzhouhaotian');     //如果token过期或验证失败，将抛出错误
        console.log(tokenContent)
        ctx.body = tokenContent
    } catch (err) {
        ctx.throw(401, 'invalid token');
    }
  }
}

module.exports = UserController;

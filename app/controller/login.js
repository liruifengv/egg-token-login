/* eslint-disable */
'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class LoginController extends Controller {
  async index() {
    const ctx = this.ctx;
    const token = jwt.sign({
      user_id: 1,
      user_name: ctx.request.body.username
    }, 'shenzhouhaotian', {
        expiresIn: '60s'
    });
    ctx.body = {
      token: token
    };
    ctx.status = 200;
  }
}

module.exports = LoginController;

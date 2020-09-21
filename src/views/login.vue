<template>
  <div class="middle">
    <div class="login-fonts">用户登录</div>
    <div class="input">
      <div class="account">
        <span>账号：</span>
        <el-input class="to-input" v-model="login.account" placeholder="请输入账号" />
      </div>
      <div class="pwd">
        <span>密码：</span>
        <el-input class="to-input" v-model="login.pwd" placeholder="请输入密码" show-password></el-input>
      </div>
      <div style="text-align:center;margin-top: 20px">
        <el-button type="success" @click="gologin" style="width:100px">确定</el-button>
        <el-button type="info" style="width:100px">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {gologin} from '../api/stuInfo'

export default {
  name: 'login',
  data () {
    return {
      login: {
        account: '',
        pwd: ''
      }
    }
  },
  methods: {
    gologin () {
      let password = this.login.pwd
      let account = this.login.account
      alert(account);
      gologin({key: password,value: account}).then(res=>{
        if (res.status === 200){
            alert(res.result);
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.middle {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background-color: lightslategray;
  .login-fonts {
    text-align: center;
    font-size: 25px;
  }
  .account {
    margin-top: 10px;
    font-size: 20px;
  }
  .pwd {
    margin-top: 10px;
    font-size: 20px;
  }
  .confirm {
    margin-top: 10px;
    font-size: 20px;
  }
  .to-input {
    width: 200px;
    font-size: 18px;
  }
}

</style>

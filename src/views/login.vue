<template>
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="User name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="User password" prop="pass">
    <el-input type="password" v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit"><router-link to="/HomepageLogin">Login</router-link></el-button>
    <el-button><router-link to="/">register</router-link></el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default{
    name:'login',
    data() {
      return {
        form: {
          name: '',
          password: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
}
}
</script>

<style type="text/css">
</style>
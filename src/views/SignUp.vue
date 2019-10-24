<template>
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="User name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="User password" prop="pass">
    <el-input type="password" v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item label="Sex">
    <el-select v-model="form.region" placeholder="please select your sex">
      <el-option label="male" value="shanghai"></el-option>
      <el-option label="female" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Birthday">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="your birthday" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
  </el-form-item>
  <el-form-item label="addvertisement">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit"><router-link to="/">Create</router-link></el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
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
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
</template>

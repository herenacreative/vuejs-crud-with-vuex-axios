<template>
    <div>
    <el-card class="box-card" style="text-align: center;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/contact' }">contact</el-breadcrumb-item>
        <el-breadcrumb-item>Add Contact</el-breadcrumb-item>
      </el-breadcrumb>
        <el-form :model="data">

            <el-form-item label="Name">
              <el-input v-model="data.name"></el-input>
            </el-form-item>

            <el-form-item label="Address">
              <el-input v-model="data.address"></el-input>
            </el-form-item>

            <el-form-item label="Phone">
              <el-input v-model="data.phone"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="tambah(data)"> Submit</el-button>
            </el-form-item>

        </el-form>
    </el-card>
    </div>
</template>

<script>
//import axios from "axios";
import { mapActions,mapState } from 'vuex'

export default {
  computed: mapState({
    data: state => state.data
  }),

  created() {
    this.getContact();
  },

  methods: {
    ...mapActions([ 'getContact','tambah' ]),   
  }
  
};
</script>

<style>
  .box-card {
    width: 480px;
    margin: 50px auto;
  }
</style>
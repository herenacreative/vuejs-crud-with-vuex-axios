<template>
    <div class="MyHeader">
      <el-header style="text-align: right; font-size: 12px">
          <router-link to="/"> <el-button>LOGO</el-button></router-link>   
          <router-link to="/contact"> <el-button>CONTACT</el-button></router-link>
          <router-link to="/calender"> <el-button>CALENDER</el-button></router-link>
          <router-link to="/inbox"> <el-button>INBOX</el-button></router-link>
          <router-link to="/setting"> <el-button>SETTING</el-button></router-link> 
      </el-header> 
    
    </div>
</template>

<style>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
</style>
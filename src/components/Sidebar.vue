<template>
   <div class="MySidebar">
    <el-aside>
      <el-menu default-active="2" mode="horizontal">
        <el-menu-item index="1">
          <i class="el-icon-s-custom"></i>
          <span><router-link to="/">CONTACT</router-link></span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-claim"></i>
          <span><router-link to="/kehadiran">CALENDER</router-link></span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-s-release"></i>
          <span><router-link to="/cuti">INBOX</router-link></span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-finance"></i>
          <span><router-link to="/gaji">SETTING</router-link></span>
        </el-menu-item>
      </el-menu>
    </el-aside>
   </div>
</template>

<style>
 .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 400px;
  }
</style>
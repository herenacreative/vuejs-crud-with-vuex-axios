<template>
    <div class="MyHeader">
        <el-header style="text-align: left; font-size: 12px">
            <el-menu default-active="2" mode="horizontal" style="text-align: right; font-size: 12px">
         <el-menu-item index="1">
          <i class="el-icon-s-custom"></i>
          <span><router-link to="/"><el-button>{{ value }}</el-button></router-link></span>
        </el-menu-item>
        <el-menu-item index="2">
          <span><router-link to="/kehadiran"><el-button>{{ value }}</el-button></router-link></span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-s-release"></i>
          <span><router-link to="/cuti"><el-button>{{ value }}</el-button></router-link></span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-finance"></i>
          <span><router-link to="/gaji">SETTING</router-link></span>
        </el-menu-item>
            </el-menu>
        </el-header>
    </div>
</template>

<script>

</script>

<style>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
}
.MyHeader{
    width: 100%;
}
</style>


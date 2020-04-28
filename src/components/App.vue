<template>
  <div id="app">
    <el-container style="padding: 10px">
      <el-row>
        <el-col :span="24"> <Topbar></Topbar> </el-col>

        <el-row>
          <el-col :span="8"><Sidebar></Sidebar></el-col>
          <el-col :span="16"><el-main><router-view/></el-main></el-col>
        </el-row>

        <el-row>
          <el-col :span="24"><el-footer>@Footer</el-footer></el-col>
        </el-row>    
        
      </el-row>
    </el-container>  
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Topbar,
    Sidebar,
  }
}
</script>

<style>
  .el-footer{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 400px;
  }
</style>

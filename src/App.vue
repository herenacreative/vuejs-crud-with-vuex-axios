<template>
  <div id="app">
      
        <Topbar></Topbar>
        

        <div><el-main><router-view/></el-main>
          </div>
   

  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
export default {
  components: {
    Topbar,
  }
}
</script>

<style>
  .el-footer{
    background-color: #909399;
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

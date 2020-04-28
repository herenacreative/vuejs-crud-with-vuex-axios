<template>
    <div>
    <el-card class="box-card" style="text-align: center;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/contact' }">contact</el-breadcrumb-item>
        <el-breadcrumb-item>Update Contact</el-breadcrumb-item>
      </el-breadcrumb>
    
       <el-form :model="data">

            <el-form-item label="Name">
              <el-input v-model="data.name">  </el-input>
            </el-form-item>

            <el-form-item label="Address">
              <el-input v-model="data.address">  </el-input>
            </el-form-item>

            <el-form-item label="Phone">
              <el-input v-model="data.phone"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button @click="update(id)" size="small">
                  update
                </el-button>
            </el-form-item>

       </el-form>
    </el-card>
    </div>
</template>

<script>
  import { mapActions,mapState } from 'vuex'

  export default {
    computed: {
    ...mapState([ 'data' ]), 
    id(){
          return this.$route.params.id
        }
    },

    created() {
      const id = this.$route.params.id
      this.getContacts(id)
      
    }, 
    methods: {
    ...mapActions([ 'getContact','update', 'getContacts' ])
    }
    
  }
</script>


<style>
  .box-card {
    width: 480px;
    margin: 50px auto;
  }
</style>,
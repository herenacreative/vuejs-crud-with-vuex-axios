<template>
  <div>
    <el-card
      class="box-card"
      style="padding: 30px; height:30px; width: 86%; margin: 10px auto; background-color: #B3C0D1;"
    >
      <router-link to="/add_contact">
        <el-button style="float: right; padding: 10px">
          <span class="el-icon-circle-plus">Add Contact</span>
        </el-button>
      </router-link>
    </el-card>
    <el-table :data="tableData" style="width: 90%; line-height: 60px; margin: 10px auto;">
      <el-table-column prop="name" width="180"></el-table-column>
      <el-table-column prop="address" width="180"></el-table-column>
      <el-table-column prop="phone" width="180"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="hapus(scope.row.id)" size="small">
            <span class="el-icon-delete"></span>
          </el-button>
          <router-link :to="`update_contact/${scope.row.id}`">
            <el-button @click="edit(scope.row.id)">
              <span class="el-icon-edit"></span>
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//import axios from "axios";
import { mapActions,mapState } from 'vuex'

export default {
  computed: mapState({
    tableData: state => state.tableData
  }),

  created() {
    this.getContact();
  },

  methods: {
    ...mapActions([ 'getContact','edit', 'hapus' ]),
  }
  
};
</script>
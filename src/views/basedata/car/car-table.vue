<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="车牌号码" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        添加
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        修改
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        删除
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
    <el-table-column
  type="selection"
  width="55">
</el-table-column>
      <el-table-column label="ID" prop="id" sortable="custom" align="center" min-width="120" :class-name="getSortClass('id')">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
         </template>
      </el-table-column>
      <el-table-column label="车牌号码" prop="carNumber" sortable="custom" align="center" min-width="120" :class-name="getSortClass('carNumber')">
        <template slot-scope="{row}">
          <span>{{ row.carNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column label="车型" prop="type" sortable="custom" align="center" min-width="120" :class-name="getSortClass('type')">
        <template slot-scope="{row}">
          <span>{{ row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最大运载量" prop="maxWeight" sortable="custom" align="center" min-width="120" :class-name="getSortClass('maxWeight')">
        <template slot-scope="{row}">
          <span>{{ row.maxWeight }}</span>
        </template>
      </el-table-column>
      <el-table-column label="生产厂家" prop="factory" sortable="custom" align="center" min-width="120" :class-name="getSortClass('factory')">
        <template slot-scope="{row}">
          <span>{{ row.factory }}</span>
        </template>
      </el-table-column>
       <el-table-column label="保险公司" prop="insuranceCompany" sortable="custom" align="center" min-width="120" :class-name="getSortClass('insuranceCompany')">
        <template slot-scope="{row}">
          <span>{{ row.insuranceCompany }}</span>
        </template>
      </el-table-column>
       <el-table-column label="上次保险时间" prop="lastInsranceTime" sortable="custom" align="center" min-width="120" :class-name="getSortClass('lastInsranceTime')">
        <template slot-scope="{row}">
          <span>{{ row.lastInsranceTime }}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
  import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
  import waves from '@/directive/waves' // waves directive
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination

  export default {
    name: 'ComplexTable',
    components: { Pagination },
    directives: { waves },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'info',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        tableKey: 0,
        list: null,
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        },
        importanceOptions: [1, 2, 3],
        sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
        statusOptions: ['published', 'draft', 'deleted'],
        showReviewer: false,
        temp: {
          id: undefined,
          importance: 1,
          remark: '',
          timestamp: new Date(),
          title: '',
          type: '',
          status: 'published'
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        dialogPvVisible: false,
        pvData: [],
        rules: {
          type: [{ required: true, message: 'type is required', trigger: 'change' }],
          timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
          title: [{ required: true, message: 'title is required', trigger: 'blur' }]
        },
        downloadLoading: false
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.listLoading = true
        fetchList(this.listQuery).then(response => {
           this.list = JSON.parse("[{\"id\":1,\"createTime\":\"2020-05-31 10:50:00\",\"updateTime\":\"2020-05-31 10:50:00\",\"lastInsranceTime\":\"2019-05-31 10:50:00\",\"carNumber\":\"川A48SG1\",\"type\":\"宝马A系\",\"maxWeight\":\"10吨\",\"factory\":\"东风神宇车辆有限公司\",\"insuranceCompany\":\"太平洋保险公司\",\"timestamp\":96883119023},{\"id\":2,\"createTime\":\"2020-05-31 10:50:00\",\"updateTime\":\"2020-05-31 10:50:00\",\"lastInsranceTime\":\"2019-05-31 10:50:00\",\"carNumber\":\"川A48SG2\",\"type\":\"宝马B系\",\"maxWeight\":\"10吨\",\"factory\":\"程力专用汽车股份有限公司\",\"insuranceCompany\":\"太平洋保险公司\",\"timestamp\":96883119023},{\"id\":3,\"createTime\":\"2020-05-31 10:50:00\",\"updateTime\":\"2020-05-31 10:50:00\",\"lastInsranceTime\":\"2019-05-31 10:50:00\",\"carNumber\":\"川A48SG3\",\"type\":\"宝马C系\",\"maxWeight\":\"10吨\",\"factory\":\"成都新大地汽车有限责任公司\",\"insuranceCompany\":\"太平洋保险公司\",\"timestamp\":96883119023},{\"id\":4,\"createTime\":\"2020-05-31 10:50:00\",\"updateTime\":\"2020-05-31 10:50:00\",\"lastInsranceTime\":\"2019-05-31 10:50:00\",\"carNumber\":\"川A48SG4\",\"type\":\"宝马D系\",\"maxWeight\":\"10吨\",\"factory\":\"大汉汽车制造有限公司\",\"insuranceCompany\":\"太平洋保险公司\",\"timestamp\":96883119023}]")
          this.total = response.data.total

          // Just to simulate the time of the request
          setTimeout(() => {
            this.listLoading = false
          }, 1.5 * 1000)
        })
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getList()
      },
      handleModifyStatus(row, status) {
        this.$message({
          message: '操作Success',
          type: 'success'
        })
        row.status = status
      },
      sortChange(data) {
        const { prop, order } = data
        if (prop === 'id') {
          this.sortByID(order)
        }
      },
      sortByID(order) {
        if (order === 'ascending') {
          this.listQuery.sort = '+id'
        } else {
          this.listQuery.sort = '-id'
        }
        this.handleFilter()
      },
      resetTemp() {
        this.temp = {
          id: undefined,
          importance: 1,
          remark: '',
          timestamp: new Date(),
          title: '',
          status: 'published',
          type: ''
        }
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      createData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
            this.temp.author = 'vue-element-admin'
            createArticle(this.temp).then(() => {
              this.list.unshift(this.temp)
              this.dialogFormVisible = false
              this.$notify({
                title: 'Success',
                message: 'Created Successfully',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },
      handleUpdate(row) {
        this.temp = Object.assign({}, row) // copy obj
        this.temp.timestamp = new Date(this.temp.timestamp)
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      updateData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            const tempData = Object.assign({}, this.temp)
            tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
            updateArticle(tempData).then(() => {
              const index = this.list.findIndex(v => v.id === this.temp.id)
              this.list.splice(index, 1, this.temp)
              this.dialogFormVisible = false
              this.$notify({
                title: 'Success',
                message: 'Update Successfully',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },
      handleDelete(row, index) {
        this.$notify({
          title: 'Success',
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })
        this.list.splice(index, 1)
      },
      handleFetchPv(pv) {
        fetchPv(pv).then(response => {
          this.pvData = response.data.pvData
          this.dialogPvVisible = true
        })
      },
      formatJson(filterVal) {
        return this.list.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      },
      getSortClass: function(key) {
        const sort = this.listQuery.sort
        return sort === `+${key}` ? 'ascending' : 'descending'
      }
    }
  }
</script>

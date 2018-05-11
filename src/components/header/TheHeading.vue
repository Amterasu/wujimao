<template>
  <div class="header">
    <div class="headerCenter">
      <div class="logo">
        <img src="../../images/logo.png" alt="">
      </div>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
        <el-menu-item index="HomePage" :route="{name: 'HomePage'}">首页</el-menu-item>
        <el-menu-item index="MicroClassPage" :route="{name : 'MicroClassPage'}">微课</el-menu-item>
        <el-menu-item index="CoursePage" :route="{name : 'CoursePage'}">教程</el-menu-item>
        <el-menu-item index="CommunityPage" :route="{name : 'CommunityPage'}">社区</el-menu-item>
      </el-menu>
      <div class="autoComplete">
        <el-autocomplete popper-class="my-autocomplete" v-model="keyword" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="showSelected">
          <i class="el-icon-search el-input__icon" slot="suffix" @click="turnToPage">
          </i>
          <template slot-scope="{ item }">
            <div class="unit">{{ item.unit }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="content">{{ item.content }}</div>
          </template>
        </el-autocomplete>
      </div>
      <div class="btnGroup">
        <el-button type="primary" size="medium">登录</el-button>
        <el-button type="success" size="medium">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      restaurants: []
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    turnToPage() {
      console.log("跳转路由");
    },
    showSelected(item) {
      this.keyword = item.content;
    },
    querySearch(queryString, cb) {
      let restaurants = this.restaurants;
      // 真实数据时是从这里实时获取，暂时用假数据代替
      let results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.content
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { unit: "微课", content: "微课从去门到精通" },
        { unit: "教程", content: "教程从去门到精通" },
        { unit: "文章", content: "文章从去门到精通" }
      ];
    }
  },
  computed: {
    activeIndex() {
      return  this.$route.name ;
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.header {
  width: 100%;
  background: #fff;
  border-bottom: solid 1px #e6e6e6;
  .headerCenter {
    width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .logo {
      width: 150px;
      display: inline-block;
      box-sizing: border-box;
      padding-top: 10px;
      cursor: pointer;
      img {
        width: 80%;
      }
    }
    .autoComplete {
      padding-top: 10px;
      margin-left: 30px;
    }
    .btnGroup {
      padding-top: 10px;
      flex: auto;
      text-align: right;
    }
  }
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .unit {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .content {
      font-size: 12px;
      color: #b4b4b4;
      &:hover {
        color: #666;
      }
    }

    .highlighted .content {
      color: #ddd;
    }
  }
}
</style>

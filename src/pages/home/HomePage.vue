<template>
  <div class="homeContent">
    <div class="container bgfff">
      <!-- <div class="inner"> -->
      <div class="banner">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="carouselPart">
              <div class="someText">这里是要写的话,一般banner上的字都是直接放在图片里，因为没办法确定背景的颜色</div>
              <img src="../../images/banner.png" alt="">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- </div> -->
    </div>
    <div class="container bggray">
      <div class="inner">
        <h3 class="unitTitle">
          <img src="../../images/indexicon1.png" alt="">
          <em>微</em>
          <em>课</em>
          <div>Micro class</div>
        </h3>
        <el-row :gutter="20">
          <el-col :span="6" v-for="(o, index) in 8" :key="index">
            <el-card :body-style="{ padding: '0px',border: 0 }" shadow="hover">
              <div class="microCoursesImg">
                <img src="../../images/p2.png" class="image">
              </div>
              <div style="padding: 14px;">
                <span class="courseTitle">黑客与画家</span>
                <div class="bottom clearfix">
                  <span>¥19.9</span>
                  <el-button type="text" class="courseButton">立即购买</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div class="readMore">查看更多</div>
      </div>
    </div>
    <div class="container bgfff">
      <div class="inner">
        <h3 class="unitTitle" >
          <i class="iconfont icon-remenx"></i>
          <em>热</em>
          <em>门</em>
          <em>教</em>
          <em>程</em>
          <div style="padding-left: 28px;">Hot tutorials</div>
        </h3>
        <div class="hotCourse">
          <div class="hotCourseLeft">
            <el-carousel height="300px" ref="carousel" :autoplay='false'>
              <el-carousel-item v-for="item in 4" :key="item">
                <div class="carouselPart">
                  <div class="someText">这里是要写的话,一般banner上的字都是直接放在图片里，因为没办法确定背景的颜色</div>
                  <img src="../../images/banner.png" alt="">
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="hotCourseRight">
            <el-card class="box-card">
              <div class="hotCourseRightTextCon">
                <div v-for="o in 4" :key="o" @mouseover="setActiveItem(o)">
                  <i class="el-icon-arrow-left"></i>
                  <div class="item">
                    {{'列表内容 ' + o }}
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <div class="readMore">查看更多</div>

      </div>
    </div>
    <div class="container bggray">
      <div class="inner">
        <h3 class="unitTitle">
          <i class="iconfont icon-remenx"></i>
          <em>猫</em>
          <em>屋</em>
          <div>Cat house</div>
        </h3>
        <div class="catHouse">
          <div class="catHouseTitle">
            <div class="titleLeft">
              <ul class="subnav-content">
                <li :class="{current: current == item.key}" v-for="(item, index ) in houseArticle" :key="index" @click="current = item.key">
                  <a href="javascript:void(0)">{{item.name}}</a>
                </li>
              </ul>
            </div>
            <div class="titleRight">
              <div class="tech-square">
                <a class="tech-square-item" :class="{active: activeRightTag == 1}" href='###' @click="activeRightTag = 1">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/950/262/950262627-5a7048175cdc9_small">
                  </span>
                  <span>区块链</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 2}" href='###' @click="activeRightTag = 2">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/194/030/1940304143-5a72802e507db_small">
                  </span>
                  <span>人工智能</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 3}" href='###' @click="activeRightTag = 3">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/399/739/3997397795-5a6edc1c3167f_small">
                  </span>
                  <span>前端</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 4}" href='###' @click="activeRightTag = 4">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/199/890/1998904068-5a6edc3e40de1_small">
                  </span>
                  <span>后端</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 5}" href='###' @click="activeRightTag = 5">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/346/697/3466976217-5a6edc9817073_small">
                  </span>
                  <span>Android</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 6}" href='###' @click="activeRightTag = 6">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/364/183/3641835720-5a6edcc072849_small">
                  </span>
                  <span>iOS</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 7}" href='###' @click="activeRightTag = 7">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/619/301/619301590-5a6ee7ff8fee2_small">
                  </span>
                  <span>工具</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 8}" href='###' @click="activeRightTag = 8">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/177/555/177555825-5a6edd409405a_small">
                  </span>
                  <span>安全</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 9}" href='###' @click="activeRightTag = 9">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/463/156/46315654-5a6edd4a8f67e_small">
                  </span>
                  <span>程序员</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 10}" href='###' @click="activeRightTag = 10">
                  <span class="tech-square-item-icon">
                    <img src="https://sfault-avatar.b0.upaiyun.com/350/953/3509536808-5a6edd577ced0_small">
                  </span>
                  <span>行业</span>
                </a>

                <a class="tech-square-item " :class="{active: activeRightTag == 11}" href='###' @click="activeRightTag = 11">
                  <span class="tech-square-item-icon">
                    <i class="fa fa-tags" aria-hidden="true"></i>
                  </span>
                  <span>更多标签</span>
                </a>
              </div>
            </div>
          </div>
          <div class="catHousecontent">
            <div class="contentLeft">
              <div class="news-item" v-for="i in 10 " :key="i">
                <div class="news__item-info">
                  <div class="mb6">
                    <h4 class="news__item-title">
                      <a class="mr10" target="_blank" href="/a/1190000014732214?utm_source=channel-hottest">区块链概念 That You Must Know 第四期（2）</a>
                    </h4>
                    <ul class="taglist--inline">
                      <li class="tagPopup">
                        <a class="tag" href="/t/golang">
                          golang
                        </a>
                      </li>
                      <li class="tagPopup">
                        <a class="tag" href="/t/%E5%8C%BA%E5%9D%97%E9%93%BE">
                          区块链
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p class="news__item-meta">
                    <a href="/u/kakushao"><img class="avatars-img" src="https://sfault-avatar.b0.upaiyun.com/663/345/663345663-5aea7a59ad848_small" width="18" height="18"></a>
                    <a class="" href="/u/kakushao">kakushao</a>
                    <span class="dot">·</span>
                    <span>1 天前</span>
                    <span class="dot">·</span>
                    <span class="text-info">
                      <a href="/a/1190000014732214?utm_source=channel-hottest#goToReplyArea">1评论</a>
                    </span>
                    <span class="dot">·</span>
                    <a class="text-article" href="/blogs" target="_blank">文章</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="contentRight">
              <div class="news-item" v-for="i in 10 " :key="i">
                <div class="news__item-info">
                  <div class="mb6">
                    <h4 class="news__item-title">
                      <a class="mr10" target="_blank" href="/a/1190000014732214?utm_source=channel-hottest">区块链概念 That You Must Know 第四期（2）</a>
                    </h4>
                    <ul class="taglist--inline">
                      <li class="tagPopup">
                        <a class="tag" href="/t/golang">
                          golang
                        </a>
                      </li>
                      <li class="tagPopup">
                        <a class="tag" href="/t/%E5%8C%BA%E5%9D%97%E9%93%BE">
                          区块链
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p class="news__item-meta">
                    <a href="/u/kakushao"><img class="avatars-img" src="https://sfault-avatar.b0.upaiyun.com/663/345/663345663-5aea7a59ad848_small" width="18" height="18"></a>
                    <a class="" href="/u/kakushao">kakushao</a>
                    <span class="dot">·</span>
                    <span>1 天前</span>
                    <span class="dot">·</span>
                    <span class="text-info">
                      <a href="/a/1190000014732214?utm_source=channel-hottest#goToReplyArea">1评论</a>
                    </span>
                    <span class="dot">·</span>
                    <a class="text-article" href="/blogs" target="_blank">文章</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="readMore">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      activeRightTag: 1,
      houseArticle: [
        {
          name: "今日焦点",
          key: 1
        },
        {
          name: "为你推荐",
          key: 2
        },
        {
          name: "最新文章",
          key: 3
        },
        {
          name: "精华帖",
          key: 4
        },
        {
          name: "随便",
          key: 5
        }
      ]
    };
  },
  components: {},
  methods: {
    setActiveItem(index) {
      this.$refs.carousel.setActiveItem(index - 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.homeContent {
  width: 100%;
  .bgfff {
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
  }
  .bggray {
    background-color: #f8fafc;
    box-shadow: 0 2px 4px 0 rgba(7, 17, 27, 0.06);
  }
  .unitTitle {
    position: relative;
    font-size: 14px;
    color: #93999f;
    letter-spacing: 0.6px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 24px;
    >i{
      font-size: 20px;
      color: #fa514b;
    }
    > img {
      width: 40px;
      position: relative;
      top: 3px;
    }
    em {
      font-size: 20px;
      font-weight: 600;
      color: #4d555d;
      margin: 0 3px;
      font-style: normal;
    }
    div {
      line-height: normal;
      padding-left: 43px;
      margin-top: -5px;
    }
  }
  .banner {
    border-radius: 4px;
    overflow: hidden;
  }
  .hotCourse {
    display: flex;
    border-radius: 4px;
    overflow: hidden;
    .hotCourseLeft {
      width: 936px;
    }
    .hotCourseRight {
      flex: auto;
      .el-card {
        border-radius: 0 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        background: #2b333b;
        border-bottom-left-radius: 4px;
        font-weight: 400;
        border: 0;
        box-sizing: border-box;
        .hotCourseRightTextCon {
          height: 276px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          font-size: 12px;
          cursor: pointer;
          padding-right: 12px;
          position: relative;

          > div {
            color: rgba(255, 255, 255, 0.6);
            padding: 0 16px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            transition: all 0.1s;
            display: flex;
            justify-content: space-between;
            height: 60px;
            line-height: 60px;
            > i {
              line-height: 60px;
            }
            &:hover {
              background: #6c7175;
            }
          }
        }
      }
    }
  }
  .catHouse {
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    background: #fff;

    .catHouseTitle {
      display: flex;
      > div {
        flex: 1;
        padding: 5px 10px;
        border-bottom: 1px solid #e4e4e4;
      }
      .titleLeft {
        border-right: 1px solid #e4e4e4;
        .subnav-content {
          margin-bottom: -1px;
          font-size: 14px;
          color: #999;
          margin-top: 15px;
        }

        .subnav-content > li {
          padding: 0 20px;
          line-height: 16px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          display: inline-block;
          vertical-align: middle;
          zoom: 1;
          position: relative;
        }

        .subnav-content > li > a {
          padding: 10px 0;
          display: block;
          border-bottom: 2px solid transparent;
        }

        .subnav-content > li.current > a,
        .subnav-content > li > a:hover {
          color: #282828;
          border-bottom: 2px solid #444;
        }
      }
      .titleRight {
        .tech-square {
          display: flex;
          flex-wrap: wrap;
        }
        .tech-square-title {
          color: #212121;
          position: relative;
          display: inline-block;
          padding-left: 10px;
        }

        .tech-square-title::after {
          position: absolute;
          content: "";
          border-bottom: 1px solid #eee;
          width: 95px;
          margin-left: 5px;
          margin-top: 8px;
        }

        .tech-square-item {
          height: 28px;
          display: flex;
          align-items: center;
          color: #757575;
          text-decoration: none;
          margin-bottom: 1px;
          border-radius: 4px;
          padding: 0 5px;
          margin-right: 5px;
          margin-top: 5px;
          font-size: 12px;
        }

        .tech-square-item:hover {
          background: rgba(0, 154, 97, 0.08);
        }

        .tech-square-item-icon {
          width: 22px;
          text-align: center;
          color: #999;
        }

        .tech-square-item img {
          width: 16px;
          height: 16px;
        }

        .tech-square-item.active {
          background: #409eff;
          color: #fff;
          font-weight: 600;
        }

        .tech-square-item.active img {
          filter: brightness(0) invert(1);
        }
      }
    }
    .catHousecontent {
      display: flex;
      > div {
        flex: 1;
        padding: 5px 10px;
      }
      .contentLeft,
      .contentRight {
        border-right: 1px solid #e4e4e4;
        height: 500px;
        overflow-x: hidden;
        overflow-y: auto;
        .tag {
          display: inline-block;
          padding: 0 6px;
          background-color: #f3f5f7;
          color: #4d555d;
          height: 22px;
          line-height: 22px;
          font-weight: normal;
          font-size: 13px;
          text-align: center;
        }
        .news-item {
          &:not(:last-child) {
            border-bottom: 1px #eee solid;
          }
          .stream__item-zan {
            margin-left: 0;
          }
          .live-banner {
            .pause-sign {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: 50%;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            }
          }
          .text-info {
            color: #009b5f;
          }

          .text-qa {
            color: #8c5825;
          }

          .text-article {
            color: #468ee5;
          }

          .text-live {
            color: #407600;
          }

          .text-ad {
            color: #f7a700;
          }

          .live-banner {
            position: relative;
            overflow: hidden;
            margin-right: 15px;
            border-radius: 4px;
          }
          .news__item-info {
            padding: 10px 0;
            padding-left: 25px;
            color: #9e9e9e;
            font-size: 13px;
            .news__item-title {
              display: inline;
              > a {
                font-size: 16px;
                color: #212121;
                &:hover {
                  color: #017e66;
                }
              }
            }
            .news__item-meta {
              margin-bottom: 0;
              position: relative;
              .avatars-img {
                border-radius: 50%;
                margin-right: 5px;
                margin-top: -3px;
                vertical-align: middle;
              }
              .close-icon {
                position: absolute;
                display: none;
                right: 0;
                bottom: 0;
                &:hover {
                  cursor: pointer;
                  &:hover::before {
                    content: "不感兴趣 ";
                  }
                }
              }
            }
          }
          .taglist--inline {
            display: inline-block;
            > li {
              display: inline-block;
            }
          }
        }
      }
    }
  }
  .microCoursesImg {
    width: 100%;
    display: block;
    height: 120px;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }

  .el-col {
    border-radius: 4px;
    margin-bottom: 20px;
    .courseTitle {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .courseButton {
      padding: 0;
      float: right;
    }
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
  .carouselPart {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #000;
    cursor: pointer;
    .someText {
      position: absolute;
      width: 50%;
      bottom: 20%;
      left: 25%;
      background: rgba(123, 321, 222, 0.7);
      z-index: 2;
    }
    img {
      width: 100%;
    }
  }
  .inner {
    width: 1140px;
    margin: 0 auto;
    padding: 36px 0 48px;
  }
}
</style>c

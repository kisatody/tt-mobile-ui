<template>
  <div
    ref="grid"
    class="k-grid"
    :style="{ borderRadius: radius + 'px', backgroundColor: bgColor,paddingTop:slide?'10px':'0px'}"
  >
    <div
      @scroll="scrollX"
      class="k-grid-top"
      :style="{height:slide?'90%':'100%','overflow-x': slide?'auto':'hidden',paddingBottom:slide?'10px':'0px'}"
    >
      <div
        class="k-grid-item"
        :key="a"
        v-for="a in Math.ceil(list.length/(rank[0]*rank[1]))"
        :style="{width:width + 'px'}"
      >
        <div class="k-grid-row" :style="rowStyle" :key="i" v-for="i in rank[0]">
          <div
            @touchstart="start(index+(a-1)*rank[0]*rank[1])"
            @touchend="end"
            @click="itemClick(index+(a-1)*rank[0]*rank[1])"
            v-show="index >= (i - 1) * rank[1] && index < i * rank[1] "
            class="k-grid-column"
            :style="[
          columnStyle,
          { opacity: clickEffect ? (current == index+(a-1)*rank[0]*rank[1] ? 0.5 : 1) : 1 },
        ]"
            :key="index"
            v-for="(item, index) in handleList[a-1]"
          >
            <img
              class="k-grid-img"
              :style="{ borderRadius: imgRadius + 'px' }"
              :width="imgSize[0]"
              :height="imgSize[1]"
              :src="item.src"
            />
            <div
              :style="{
            marginTop: space + 'px',
            color: fontColor,
            fontSize: fontSize + 'px',
          }"
            >{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="slide" class="k-grid-bottom" :style="{height:slide?'10%':'0%'}">
      <div class="k-grid-indicator-box">
        <div
          class="k-grid-indicator"
          :style="{marginLeft:left+'%',width:1/Math.ceil(list.length / (rank[0] * rank[1]))*100+'%'}"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-grid",
  data() {
    return {
      current: -1,
      //????????????left??????????????????
      left: 0,
      //item??????????????????px
      width: 0,
      //??????????????????list
      handleList: []
    };
  },
  mounted() {
    this.width = this.$refs.grid.clientWidth;
    this.handleData();
  },
  watch: {
    //????????????????????????????????????
    list() {
      this.handleData();
    },
    //????????????????????????????????????
    rank() {
      this.handleData();
    }
  },
  computed: {
    //?????????
    rowStyle() {
      const style = {};
      style.width = "100%";
      style.height = 100 / this.rank[0] + "%";
      return style;
    },
    //?????????
    columnStyle() {
      const style = {};
      (style.width = 100 / this.rank[1] + "%"), (style.height = "100%");
      return style;
    }
  },
  methods: {
    //??????item???????????????
    itemClick(index) {
      this.$emit("itemClick", index);
    },
    //??????????????????
    start(index) {
      this.current = index;
    },
    //??????????????????
    end() {
      this.current = -1;
    },
    //grid??????????????????
    scrollX(e) {
      const num = Math.ceil(this.list.length / (this.rank[0] * this.rank[1]));
      const width = num * e.target.clientWidth;
      const scrollLength = width - e.target.clientWidth;
      this.left = (e.target.scrollLeft / scrollLength) * (1 - 1 / num) * 100;
    },
    //???????????????????????????
    handleData() {
      this.handleList = [];
      let abc = [];
      for (let i in this.list) {
        abc.push(this.list[i]);
        if ((parseInt(i) + 1) % (this.rank[0] * this.rank[1]) == 0) {
          this.handleList.push(abc);
          abc = [];
        } else {
          if (this.list.length - 1 == i) this.handleList.push(abc);
        }
      }
    }
  },
  props: {
    //????????????
    list: {
      type: Array,
      required: true
    },
    //????????????,??????2???4???
    rank: {
      type: Array,
      default() {
        return [2, 4];
      }
    },
    //??????????????????,??????px
    radius: {
      type: Number,
      default: 10
    },
    //?????????
    bgColor: {
      type: String,
      default: "white"
    },
    //????????????????????????,??????px
    space: {
      type: Number,
      default: 4
    },
    //???????????????,??????px
    imgSize: {
      type: Array,
      default() {
        return [35, 35];
      }
    },
    //??????????????????,??????px
    imgRadius: {
      type: Number,
      default: 0
    },
    //????????????,??????px
    fontSize: {
      type: Number,
      default: 11
    },
    //????????????
    fontColor: {
      type: String,
      default: "black"
    },
    //????????????????????????
    clickEffect: {
      type: Boolean,
      default: true
    },
    //???????????????
    slide: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
@import "./grid.css";
</style>

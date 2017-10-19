<template>
  <div class="mainPage">
    <swiper :options="swiperOptions" ref="outerSwiper" class="outer-swiper">
      <swiper-slide class="slide">
        <page-one></page-one>
      </swiper-slide>
      <swiper-slide class="slide">
        <page-two></page-two>
      </swiper-slide>
      <swiper-slide class="slide">
        <page-three></page-three>
      </swiper-slide>
      <swiper-slide class="slide">
        <page-four :pageNum="activePageNum"></page-four>
      </swiper-slide>
      <swiper-slide class="slide">
        <page-five :pageNum="activePageNum"></page-five>
      </swiper-slide>
      <swiper-slide class="slide">
        <page-six></page-six>
      </swiper-slide>
      <swiper-slide class="slide">
        <page-seven></page-seven>
      </swiper-slide>
      <div class="swiper-pagination outer-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import pageOne from '../../components/pageOne/pageOne.vue';
  import pageTwo from '../../components/pageTwo/pageTwo.vue';
  import pageThree from '../../components/pageThree/pageThree.vue';
  import pageFour from '../../components/pageFour/pageFour.vue';
  import pageFive from '../../components/pageFive/pageFive.vue';
  import pageSix from '../../components/pageSix/pageSix.vue';
  import pageSeven from '../../components/pageSeven/pageSeven.vue';

  export default {
    data() {
      return {
        swiperOptions: {
          direction: 'vertical',
          mousewheelControl: true,
          notNextTick: true,
          pagination: '.outer-pagination',
          paginationClickable: true,
          lazyLoading: true,
          onTransitionEnd: (swiper) => {
            this.activePageNum = swiper.activeIndex;
          }
        },
        pageLength: 7,
        activePageNum: 0
      };
    },
    computed: {
      swiper() {
        return this.$refs.outerSwiper.swiper;
      }
    },
    watch: {
      activePageNum: () => {
        // console.log(999);
      }
    },
    mounted() {
    },
    methods: {
      changePagination(num) {
        this.activePaginationNum = num;
      }
    },
    components: {
      'swiper': swiper,
      'swiper-slide': swiperSlide,
      'page-one': pageOne,
      'page-two': pageTwo,
      'page-three': pageThree,
      'page-four': pageFour,
      'page-five': pageFive,
      'page-six': pageSix,
      'page-seven': pageSeven
    }
  };
</script>

<style lang="less">
  @import "./mainPage.less";
</style>

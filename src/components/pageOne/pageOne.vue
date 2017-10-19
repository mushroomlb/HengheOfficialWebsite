<template>
  <div class="page-one">
    <swiper :options="oneSwiperOptions" ref="pageOneSwiper" class="page-one-swiper">
      <swiper-slide class="inner-slide">
        <pageOne-one></pageOne-one>
      </swiper-slide>
      <swiper-slide class="inner-slide">
        <pageOne-two></pageOne-two>
      </swiper-slide>
      <swiper-slide class="inner-slide">
        <pageOne-three></pageOne-three>
      </swiper-slide>
      <swiper-slide class="inner-slide">
        <pageOne-four></pageOne-four>
      </swiper-slide>
      <div class="swiper-pagination inner-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import pageOne from '../../components/pageOne-one/pageOne-one.vue';
  import pageTwo from '../../components/pageOne-two/pageOne-two.vue';
  import pageThree from '../../components/pageOne-three/pageOne-three.vue';
  import pageFour from '../../components/pageOne-four/pageOne-four.vue';
    export default {
      data() {
        return {
          oneSwiperOptions: {
            direction: 'horizontal',
            pagination: '.inner-pagination', // 内外用不同的class
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            loop: true
          }
        };
      },
      components: {
        'swiper': swiper,
        'swiper-slide': swiperSlide,
        'pageOne-one': pageOne,
        'pageOne-two': pageTwo,
        'pageOne-three': pageThree,
        'pageOne-four': pageFour
      }
    };
</script>

<style lang="less">
@import "./pageOne.less";
</style>

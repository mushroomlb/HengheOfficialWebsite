<template>
  <div class="page-two">
    <div class="ourProducts" id="ourProducts">
      <h2 class="title">我们的产品</h2>
      <div class="line"></div>
      <p class="detail">DSP+ 垂直媒介+DMP 多引擎，围绕精准投放打造“智算+”体系</p>
      <ul class="products">
        <li class="item">
          <div class="logo">
            <div class="img">
              <img class="dsp swiper-lazy" data-src="./static/img/products-1.png" alt="">
            </div>
          </div>
          <p class="brief">智算 DSP</p>
          <div class="describe">
            <h2>程序化目标人群精准营销</h2>
            <p>专注优质流量对接<br>
              智能竞价引擎全程动态护航<br>
              支持RTB+PDB程序化采买方式
            </p>
          </div>
        </li>
        <li class="item">
          <div class="logo">
            <div class="img">
              <img data-src="./static/img/products-2.png" alt="" class="swiper-lazy">
              <span class="lineLeft" id="lineLeft"></span>
              <span class="lineRight" id="lineRight"></span>
              <span class="lineBottom" id="lineBottom"></span>
            </div>
          </div>
          <p class="brief">智算 直投平台</p>
          <div class="describe">
            <h2>资深的广告直投效果平台</h2>
            <p>匹配垂直性头部媒体资源<br>
              覆盖主流跨平台媒体<br>
              多样化广告体验提升实际转化
            </p>
          </div>
        </li>
        <li class="item">
          <div class="logo">
            <div class="img">
              <img data-src="./static/img/products-3.png" alt="" class="swiper-lazy">
              <span class="stringOne"></span>
              <span class="stringTwo"></span>
              <span class="stringThree"></span>
              <span class="stringFour"></span>
            </div>
          </div>
          <p class="brief">智算 DMP</p>
          <div class="describe">
            <h2>十年大数据一手积累</h2>
            <p>线上+线下多维数据源整合<br>
              支持场景化的用户画像立体分析<br>
              大数据预测模型，精准锁定目标用户
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="less">
@import "./pageTwo.less";
</style>

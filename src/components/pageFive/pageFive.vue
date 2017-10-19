<template>
  <div class="page-five">
    <div class="partner" id="partner">
      <img data-src="./static/img/page5-bg.png" alt="" class="swiper-lazy page5-bg">
      <div class="logs swiper-lazy" data-background="./static/img/page5-stars.png">
        <div class="sun swiper-lazy" data-background="./static/img/page5-sun.png">
          <p>海量平台<br>
            <span>优势</span>
          </p>
        </div>
        <ul class="circleInner" id="circleInner">
          <!--<li class="noIe">
              <img src="./images/page5-0.png" alt="">
          </li>
          <li>
              <img src="./images/page5-0.png" alt="">
          </li>-->
          <!--<li class="logosInner">
              <img src="./images/logsInner.png" alt="">
          </li>-->
        </ul>
        <ul class="circleOuter" id="circleOuter">
          <!--<li>
              <img src="./images/page5-00.png" alt="">
          </li>-->
          <!--<li class="logosOuter">
              <img src="./images/logsOut.png" alt="">
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';

  export default {
    props: {
      pageNum: {
        type: Number,
        default: 0
      }
    },
    watch: {
      pageNum() {
        if (this.pageNum === 4) {
          this.pageFiveLogos();
        }
      }
    },
    methods: {
      pageFiveLogos() {
        let $circleInner = $('#circleInner');
        let $circleOuter = $('#circleOuter');
        let $widthInner = $circleInner.width();
        let $widthOuter = $circleOuter.width();
        if ($circleInner.find('li').length) {
          return;
        }
        // IE10以下
        let browser = navigator.appName || navigator.appCodeName;
        console.log(navigator);
        console.log(browser);
        if (browser === 'Microsoft Internet Explorer') {
          // let b_version = navigator.appVersion;
          // let version = b_version.split(";");
          // let trim_Version = parseInt(version[1].slice(6, 8));
          let $innerLogos = $('<li class="logosInner">');
          let $innerLogosImg = $('<img>');
          $innerLogosImg.attr('src', './static/img/logsInner.png');
          $innerLogos.append($innerLogosImg);
          $circleInner.append($innerLogos);

          let $outerLogos = $('<li class="logosOuter">');
          let $outerLogosImg = $('<img>');
          $outerLogosImg.attr('src', './static/img/logsOut.png');
          $outerLogos.append($outerLogosImg);
          $circleOuter.append($outerLogos);
        } else { // 非IE10
          // logos转动
          let deg = 0;
          for (let i = 0; i < 12; i++) {
            let $liInner = $('<li class="noIe">');
            let $imgInner = $('<img>');
            let originLeftInner = $widthInner / 2 - ($widthInner / 2 - ($widthInner / 2 - 23) * Math.cos(deg / 180 * Math.PI) - 23);
            let originTopInner = $widthInner / 2 - ($widthInner / 2 - ($widthInner / 2 - 22) * Math.sin(deg / 180 * Math.PI) - 22);
            $imgInner.attr('src', './static/img/page5-' + i + '.png');
            $liInner.css({
              width: 46 + 'px',
              height: 44 + 'px',
              left: $widthInner / 2 - ($widthInner / 2 - 23) * Math.cos(deg / 180 * Math.PI) - 23,
              top: $widthInner / 2 - ($widthInner / 2 - 22) * Math.sin(deg / 180 * Math.PI) - 22,
              'transform-origin': '' + originLeftInner + 'px ' + originTopInner + 'px',
              '-webkit-transform-origin': '' + originLeftInner + 'px ' + originTopInner + 'px',
              '-moz-transform-origin': '' + originLeftInner + 'px ' + originTopInner + 'px',
              '-o-transform-origin': '' + originLeftInner + 'px ' + originTopInner + 'px',
              '-ms-transform-origin': '' + originLeftInner + 'px ' + originTopInner + 'px'
            });
            $liInner.append($imgInner);
            $circleInner.append($liInner);

            let $liOuter = $('<li class="noIe">');
            let $imgOuter = $('<img>');
            let originLeftOuter = $widthOuter / 2 - ($widthOuter / 2 - ($widthOuter / 2 - 28) * Math.cos(deg / 180 * Math.PI) - 28);
            let originTopOuter = $widthOuter / 2 - ($widthOuter / 2 - ($widthOuter / 2 - 27) * Math.sin(deg / 180 * Math.PI) - 27);
            $imgOuter.attr('src', './static/img/page5-0' + i + '.png');
            $liOuter.css({
              width: 56 + 'px',
              height: 54 + 'px',
              left: $widthOuter / 2 - ($widthOuter / 2 - 28) * Math.cos(deg / 180 * Math.PI) - 28,
              top: $widthOuter / 2 - ($widthOuter / 2 - 27) * Math.sin(deg / 180 * Math.PI) - 27,
              '-webkit-transform-origin': '' + originLeftOuter + 'px ' + originTopOuter + 'px',
              'transform-origin': '' + originLeftOuter + 'px ' + originTopOuter + 'px',
              '-moz-transform-origin': '' + originLeftOuter + 'px ' + originTopOuter + 'px',
              '-o-transform-origin': '' + originLeftOuter + 'px ' + originTopOuter + 'px',
              '-ms-transform-origin': '' + originLeftOuter + 'px ' + originTopOuter + 'px'
            });
            $liOuter.append($imgOuter);
            $circleOuter.append($liOuter);

            deg += 30;
          }
        }
      }
    }
  };
</script>

<style lang="less">
  @import "./pageFive.less";
</style>

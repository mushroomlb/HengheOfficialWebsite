<template>
  <div class="page-four">
    <div class="labels" id="labels">
      <!--<img src="./images/page4-label.png" alt="" class="lazy">-->
      <img data-src="./static/img/page4-labelCircle.png" alt="" class="swiper-lazy labelCircle">
      <!--<canvas id="canvas" ref="canvas"></canvas>-->
      <div class="human" id="human">
        <!--<span v-for="(item,index) in labels">{{item.label}}</span>-->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';

  export default {
    data() {
      return {
        labelsContainer: [
          {
            num: 1,
            className: 'label-1',
            label: '投资',
            fontSize: 26,
            pos: {
              x: 45,
              y: 60
            },
            transform: 'rotate(-70deg)'
          }, {
            num: 2,
            className: 'label-2',
            label: '理财',
            fontSize: 20,
            pos: {
              x: 35,
              y: 80
            },
            transform: 'rotate(-40deg)'
          }, {
            num: 3,
            className: 'label-3',
            label: '京东',
            fontSize: 24,
            pos: {
              x: 25,
              y: 110
            },
            transform: 'rotate(-50deg)'
          }, {
            num: 4,
            className: 'label-4',
            label: '自驾游',
            fontSize: 22,
            pos: {
              x: 20,
              y: 190
            },
            transform: 'rotate(-100deg)'
          }, {
            num: 5,
            className: 'label-5',
            label: '南山',
            fontSize: 22,
            pos: {
              x: 55,
              y: 80
            },
            transform: 'rotate(-60deg)'
          }, {
            num: 6,
            className: 'label-6',
            label: '爱卡',
            fontSize: 20,
            pos: {
              x: 60,
              y: 130
            },
            transform: 'rotate(60deg)'
          }, {
            num: 7,
            className: 'label-7',
            label: '高管',
            fontSize: 20,
            pos: {
              x: 64,
              y: 185
            },
            transform: 'rotate(-65deg)'
          }, {
            num: 8,
            className: 'label-8',
            label: '股票',
            fontSize: 12,
            pos: {
              x: 27,
              y: 260
            },
            transform: 'rotate(-110deg)'
          }, {
            num: 9,
            className: 'label-9',
            label: '万科',
            fontSize: 14,
            pos: {
              x: 57,
              y: 195
            },
            transform: 'rotate(25deg)'
          }, {
            num: 10,
            className: 'label-10',
            label: '别克',
            fontSize: 12,
            pos: {
              x: 49,
              y: 200
            },
            transform: 'rotate(-40deg)'
          }, {
            className: 'label-11',
            num: 11,
            label: 'SUV',
            fontSize: 14,
            pos: {
              x: 49,
              y: 220
            },
            transform: 'rotate(-15deg)'
          }, {
            num: 12,
            className: 'label-12',
            label: '宝马7系',
            fontSize: 10,
            pos: {
              x: 55,
              y: 220
            },
            transform: 'rotate(15deg)'
          }, {
            num: 13,
            className: 'label-13',
            label: '京东',
            fontSize: 12,
            pos: {
              x: 30,
              y: 195
            },
            transform: 'rotate(-30deg)'
          }, {
            num: 14,
            className: 'label-14',
            label: '链家',
            fontSize: 18,
            pos: {
              x: 37,
              y: 195
            },
            transform: 'rotate(30deg)'
          }, {
            num: 15,
            className: 'label-15',
            label: '四房',
            fontSize: 14,
            pos: {
              x: 41,
              y: 230
            },
            transform: 'rotate(70deg)'
          }, {
            num: 16,
            className: 'label-16',
            label: '金融',
            fontSize: 14,
            pos: {
              x: 41,
              y: 265
            },
            transform: 'rotate(100deg)'
          }, {
            num: 17,
            className: 'label-17',
            label: '微信',
            fontSize: 14,
            pos: {
              x: 30,
              y: 225
            },
            transform: 'rotate(-20deg)'
          }, {
            num: 18,
            className: 'label-18',
            label: '已婚',
            fontSize: 12,
            pos: {
              x: 36,
              y: 225
            },
            transform: 'rotate(20deg)'
          }, {
            num: 19,
            className: 'label-19',
            label: '南山',
            fontSize: 10,
            pos: {
              x: 40,
              y: 290
            },
            transform: 'rotate(-40deg) scale(.7)'
          }, {
            num: 20,
            className: 'label-20',
            label: '汽车之家',
            fontSize: 14,
            pos: {
              x: 42,
              y: 300
            }
          }, {
            num: 21,
            className: 'label-21',
            label: '金融',
            fontSize: 16,
            pos: {
              x: 38,
              y: 320
            },
            transform: 'rotate(40deg)'
          }, {
            num: 22,
            className: 'label-22',
            label: '京东',
            fontSize: 10,
            pos: {
              x: 43,
              y: 340
            },
            transform: 'rotate(30deg) scale(.9)'
          }, {
            num: 23,
            className: 'label-23',
            label: '别克',
            fontSize: 10,
            pos: {
              x: 48,
              y: 340
            },
            transform: 'rotate(-30deg)'
          }, {
            num: 24,
            className: 'label-24',
            label: '万科',
            fontSize: 10,
            pos: {
              x: 52,
              y: 320
            },
            transform: 'rotate(20deg)'
          }, {
            num: 25,
            className: 'label-25',
            label: '深圳',
            fontSize: 12,
            pos: {
              x: 53,
              y: 300
            },
            transform: 'rotate(20deg) scale(.8)'
          }, {
            num: 26,
            className: 'label-26',
            label: '微信',
            fontSize: 12,
            pos: {
              x: 45,
              y: 320
            }
          }, {
            num: 27,
            className: 'label-27',
            label: '汽车之家',
            fontSize: 14,
            pos: {
              x: 60,
              y: 260
            },
            transform: 'rotate(110deg) scale(.8)'
          }, {
            num: 28,
            className: 'label-28',
            label: '自驾游',
            fontSize: 20,
            pos: {
              x: 33,
              y: 360
            },
            transform: 'rotate(-110deg)'
          }, {
            num: 29,
            className: 'label-29',
            label: '汽车之家',
            fontSize: 14,
            pos: {
              x: 28,
              y: 400
            },
            transform: 'rotate(-10deg)'
          }, {
            num: 30,
            className: 'label-30',
            label: '深圳',
            fontSize: 20,
            pos: {
              x: 24,
              y: 420
            },
            transform: 'rotate(10deg)'
          }, {
            num: 31,
            className: 'label-31',
            label: '京东',
            fontSize: 12,
            pos: {
              x: 19,
              y: 420
            }
          }, {
            num: 32,
            className: 'label-32',
            label: '深圳',
            fontSize: 44,
            pos: {
              x: 12,
              y: 445
            },
            transform: 'rotate(10deg)'
          }, {
            num: 33,
            className: 'label-33',
            label: '金融',
            fontSize: 34,
            pos: {
              x: 11,
              y: 495
            },
            transform: 'rotate(-10deg)'
          }, {
            num: 34,
            className: 'label-34',
            label: '南山',
            fontSize: 44,
            pos: {
              x: 29,
              y: 495
            },
            transform: 'rotate(40deg)'
          }, {
            num: 35,
            className: 'label-35',
            label: '微信',
            fontSize: 34,
            pos: {
              x: 39,
              y: 445
            },
            transform: 'rotate(90deg)'
          }, {
            num: 36,
            className: 'label-36',
            label: '链家',
            fontSize: 46,
            pos: {
              x: 57,
              y: 425
            },
            transform: 'rotate(10deg)'
          }, {
            num: 37,
            className: 'label-37',
            label: '京东',
            fontSize: 40,
            pos: {
              x: 48,
              y: 495
            },
            transform: 'rotate(-70deg)'
          }, {
            num: 38,
            className: 'label-38',
            label: '自驾游',
            fontSize: 30,
            pos: {
              x: 57,
              y: 510
            },
            transform: 'rotate(-100deg)'
          }, {
            num: 39,
            className: 'label-39',
            label: '高管',
            fontSize: 30,
            pos: {
              x: 68,
              y: 510
            },
            transform: 'rotate(100deg)'
          }, {
            num: 40,
            className: 'label-40',
            label: '旅游',
            fontSize: 24,
            pos: {
              x: 45,
              y: 370
            }
          }, {
            num: 41,
            className: 'label-41',
            label: '四房',
            fontSize: 16,
            pos: {
              x: 55,
              y: 390
            },
            transform: 'rotate(30deg)'
          }, {
            num: 42,
            className: 'label-42',
            label: '投资',
            fontSize: 16,
            pos: {
              x: 65,
              y: 410
            },
            transform: 'rotate(10deg)'
          }, {
            num: 43,
            className: 'label-43',
            label: '链家',
            fontSize: 12,
            pos: {
              x: 8,
              y: 430
            },
            transform: 'rotate(-30deg)'
          }, {
            num: 44,
            className: 'label-44',
            label: '高管',
            fontSize: 14,
            pos: {
              x: 6,
              y: 470
            },
            transform: 'rotate(-80deg)'
          }, {
            num: 45,
            className: 'label-45',
            label: '理财',
            fontSize: 24,
            pos: {
              x: 10,
              y: 550
            },
            transform: 'rotate(-70deg)'
          }, {
            num: 46,
            className: 'label-46',
            label: 'SUV',
            fontSize: 26,
            pos: {
              x: 16,
              y: 550
            },
            transform: 'rotate(-100deg)'
          }, {
            num: 47,
            className: 'label-47',
            label: '股票',
            fontSize: 20,
            pos: {
              x: 28,
              y: 550
            },
            transform: 'rotate(100deg)'
          }, {
            num: 48,
            className: 'label-48',
            label: '高管',
            fontSize: 20,
            pos: {
              x: 3,
              y: 520
            },
            transform: 'rotate(-50deg)'
          }, {
            num: 49,
            className: 'label-49',
            label: '别克',
            fontSize: 16,
            pos: {
              x: 45,
              y: 560
            },
            transform: 'rotate(60deg)'
          }, {
            num: 50,
            className: 'label-50',
            label: '自驾游',
            fontSize: 20,
            pos: {
              x: 55,
              y: 570
            },
            transform: 'rotate(40deg)'
          }, {
            num: 51,
            className: 'label-51',
            label: '亲子旅游',
            fontSize: 14,
            pos: {
              x: 66,
              y: 580
            }
          }, {
            num: 52,
            className: 'label-52',
            label: '股票',
            fontSize: 12,
            pos: {
              x: 74,
              y: 450
            },
            transform: 'rotate(-60deg)'
          }, {
            num: 53,
            className: 'label-53',
            label: '爱卡',
            fontSize: 12,
            pos: {
              x: 30,
              y: 380
            },
            transform: 'rotate(-6deg)'
          }, {
            num: 54,
            className: 'label-54',
            label: '股票',
            fontSize: 12,
            pos: {
              x: 44,
              y: 410
            },
            transform: 'rotate(-60deg)'
          }, {
            num: 55,
            className: 'label-55',
            label: '金融',
            fontSize: 14,
            pos: {
              x: 53,
              y: 350
            },
            transform: 'rotate(60deg)'
          }, {
            num: 56,
            className: 'label-56',
            label: '爱卡',
            fontSize: 18,
            pos: {
              x: 76,
              y: 530
            },
            transform: 'rotate(60deg)'
          }, {
            num: 57,
            className: 'label-57',
            label: '宝马7系',
            fontSize: 16,
            pos: {
              x: 76,
              y: 490
            },
            transform: 'rotate(90deg)'
          }, {
            num: 58,
            className: 'label-58',
            label: '投资',
            fontSize: 12,
            pos: {
              x: 42,
              y: 70
            }
          }, {
            num: 59,
            className: 'label-59',
            label: 'SUV',
            fontSize: 12,
            pos: {
              x: 52,
              y: 80
            },
            transform: 'rotate(50deg)'
          }, {
            num: 60,
            className: 'label-60',
            label: '深圳',
            fontSize: 12,
            pos: {
              x: 42,
              y: 90
            },
            transform: 'rotate(50deg) scale(.8)'
          }, {
            num: 61,
            className: 'label-61',
            label: '高管',
            fontSize: 12,
            pos: {
              x: 54,
              y: 60
            },
            transform: 'rotate(-50deg) scale(.9)'
          }, {
            num: 62,
            className: 'label-62',
            label: '链家',
            fontSize: 12,
            pos: {
              x: 31,
              y: 90
            },
            transform: 'rotate(-120deg)'
          }, {
            num: 63,
            className: 'label-63',
            label: '股票',
            fontSize: 12,
            pos: {
              x: 33,
              y: 110
            },
            transform: 'rotate(-30deg) scale(.6)'
          }, {
            num: 64,
            className: 'label-64',
            label: '已婚',
            fontSize: 12,
            pos: {
              x: 24,
              y: 150
            }
          }, {
            num: 65,
            className: 'label-65',
            label: '已婚',
            fontSize: 12,
            pos: {
              x: 60,
              y: 100
            },
            transform: 'rotate(30deg) scale(.7)'
          }, {
            num: 66,
            className: 'label-66',
            label: '宝马7系',
            fontSize: 12,
            pos: {
              x: 64,
              y: 120
            },
            transform: 'rotate(70deg) scale(.9)'
          }, {
            num: 67,
            className: 'label-67',
            label: '旅游',
            fontSize: 12,
            pos: {
              x: 65,
              y: 160
            },
            transform: 'scale(.8)'
          }, {
            num: 68,
            className: 'label-68',
            label: '亲子旅游',
            fontSize: 12,
            pos: {
              x: 40,
              y: 50
            },
            transform: 'rotate(-20deg) scale(.8)'
          }, {
            num: 69,
            className: 'label-69',
            label: '股票',
            fontSize: 12,
            pos: {
              x: 35,
              y: 70
            },
            transform: 'rotate(-40deg) scale(.9)'
          }, {
            num: 70,
            label: '深圳',
            fontSize: 12,
            pos: {
              x: 56,
              y: 340
            },
            transform: 'rotate(-40deg) scale(.6)'
          }
        ],
        colors: ['#d3533c', '#876855', '#d79b84', '#bf6f5e', '#789892', '#eb5e3a', '#70928b', '#78b9bf', '#848484', '#d7c5c3', '#f9d6b3', '#d3533c', '#f5d2bf'],
        time: 2
      };
    },
    props: {
      pageNum: {
        type: Number,
        default: 0
      }
    },
    watch: {
      pageNum() {
        console.log(this.pageNum);
        if (this.pageNum === 3) {
          this.loopLabels();
        }
      }
    },
    mounted() {
      console.log($('#canvas'));
    },
    methods: {
      rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      loopLabels() {
        if ($('#human').find('span').length === 0) {
          for (let i = 0; i < 70; i++) {
            let label = this.labelsContainer[i].label;
            let num = this.labelsContainer[i].num;
            let posx = this.labelsContainer[i].pos.x;
            let posy = this.labelsContainer[i].pos.y;
            let transform = this.labelsContainer[i].transform;
            let fontSize = this.labelsContainer[i].fontSize;
            this.createLabel(label, num, posx, posy, transform, fontSize);
          }
        }
      },
      createLabel(label, num, left, top, transform, fontSize) {
        let color = this.colors[Math.floor(Math.random() * 13)];
        let posLeft = Math.random() * 2 > 1 ? this.rand(-250, 0) : this.rand(800, 1200);
        let posTop = this.rand(0, 700);
        let that = this;
        let $span = $('<span class="label-' + num + '">' + label + '</span>');
        $span.css({
          'left': posLeft + 'px',
          'top': posTop + 'px',
          'color': color,
          'transition': 2 + 's',
          '-webkit-transition': 2 + 's',
          '-moz-transition': 2 + 's',
          '-o-transition': 2 + 's',
          '-ms-transition': 2 + 's'
        });
        $('#human').append($span);
        setTimeout(function () {
          that.move($span, left, top, transform, fontSize);
        }, 500);
      },
      move(span, left, top, transform, fontSize) {
        span.css({
          'left': left + '%',
          'top': top + 'px',
          'transform': transform,
          '-webkit-transform': transform,
          '-moz-transform': transform,
          '-o-transform': transform,
          '-ms-transform': transform,
          fontSize: fontSize + 'px',
          opacity: 1,
          filter: 'alpha(opacity=100)'
        });
      }
    }
  };
</script>

<style lang="less">
  @import "./pageFour.less";
</style>



















# 恒河大数据官网
恒河大数据的官网 用vue-cli脚手架结合wiper、jq构建，并打包上线 解决，图片打包路径等问题，这次用vue脚手架构建的，将swiper和jq结合起来完成了官网的搭建。

最大的问题就是在最后运行npm run build打包的时候图片路径出问题了，
最后捣鼓了好久才解决。由于在配置文件webpack.base.confit.js里面做了配置：

    ` {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }`
意思是图片大于10kb就会按照路径来查找图片，小于10kb就转化成base64格式，所以小于10kb的不用在乎放哪里，反正都会转化的。把所有大的静态图片全部放到和src平级的static目录下

![pics](http://qiang.sslike.com/githubPics/13.png)

引用的时候：

![pics](http://qiang.sslike.com/githubPics/14.png)

最好不要把大图作为背景图来用，直接用img标签，原因：img为html标签，他的路径是由index.html开始访问的，他走static/img/'图片名'是能正确访问到图片的，所以img的路径没问题，然后app.css访问static/img/'图片名'是访问错误的，因为在css目录下并没有static目录。这样就造成了路径访问失败的问题，这有详细解释
[关于Vue背景图打包之后访问路径错误问题](http://blog.csdn.net/stoplll/article/details/64906909)

第二个问题是swiper的翻页器pagination是这样的，只有一个span标签

![pics](http://qiang.sslike.com/githubPics/12.png)

但是出图是这样的

![pics](http://qiang.sslike.com/githubPics/11.png)

少了两个元素，于是用伪类来实现的

    `.swiper-pagination-bullet::after{
      content: 'o';
      font-size: 0;
      position: absolute;
      left: 6px;
      top: 6px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ffffff;
    }
    .swiper-pagination-bullet::before{
      content: 'o';
      font-size: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 45px;
      border-left: solid 1px #ed9b21;
    }`

最后打包上线后的链接[在此](http://qiang.sslike.com/HengheOfficialWebsite/index.html)
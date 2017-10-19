<template>
  <div class="page-seven">
    <div class="connectUs" id="connectUs">
      <h2 class="title swiper-lazy" data-background="./static/img/page7-titleBg.png">请留下您的联系方式，我们将马上联系你</h2>
      <form action="" method="post" class="userMessage">
        <label for="company">
          <span class="companyName">公司名称</span>
          <input type="text" name="company" id="company" placeholder="请输入您公司名称">
        </label>
        <label for="name">
          <span class="name">姓名</span>
          <input type="text" name="name" id="name" placeholder="请输入您的姓名">
        </label>
        <label for="phoneNum">
          <span class="phoneNumber">手机</span>
          <input type="text" name="phoneNumber" id="phoneNum" placeholder="请输入您的手机号">
        </label>
        <label for="email">
          <span class="email">邮箱</span>
          <input type="email" name="email" id="email" placeholder="请输入您的邮箱">
        </label>
        <textarea class="needs" name="needs" id="" cols="30" rows="10" placeholder="请说明您的合作需求"></textarea>
        <div class="submitOuter">
          <input class="submit" type="submit" value="预约咨询">
        </div>
      </form>
      <div class="footer">
        <div class="inner">
          <div class="left">
            <img data-src="./static/img/footerLogo.png" alt="" class="swiper-lazy">
          </div>
          <p class="right">版权所有  深圳市恒河金数科技有限公司  <br>
            <a target="_blank" href="http://www.miitbeian.gov.cn" >网站备案/许可证号：粤ICP备17073653号</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="less">
@import "./pageSeven.less";
</style>

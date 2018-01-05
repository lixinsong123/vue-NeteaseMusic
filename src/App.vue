<template>
  <div id="app">
      <div class="header">
          <v-header></v-header>
      </div>
      <div class="wrapper">
          <router-view/> 
      </div>
      <div class="footer">
        <v-footer></v-footer>
      </div>
  </div>
</template>

<script>
import myheader from './moduleComponent/myheader/myheader';
import footer   from './moduleComponent/footer/footer';
export default {
  name: 'app',
  components : {
    'v-header' : myheader,
    'v-footer' : footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}
body,ul,li,h1,p,h3,ol,dd,dl,h4,h3,h5{
      padding: 0;
      margin:0;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul,ol{
  list-style-type: none;
  padding: 0;
}
a,input{
  outline: none;
  text-decoration: none;
}
a:hover{
  text-decoration:underline;
}
a{
    text-decoration: none;
    color: #333;
}
em,i{
    font-style: normal;
    text-align: left;
    font-size: inherit;
}
.wrapper {background:#f1f1f1;overflow:hidden;width: 100%;}
.col {float: left;}
.header {background-color: #666;color:#fff;}
.clear:after{
      content: '';
      display: block;
      clear: both;
}
.clear{
  *zoom:1;
}
.f-pr{
    position: relative;
    zoom:1;
}
.s-fc0, a.s-fc0:hover {
    color: #000;
}
.s-fc3, a.s-fc3:hover {
    color: #666;
}
</style>

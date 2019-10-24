<template>
 <div id="wrap">
    <div id="MainTop">
      <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
  <el-menu-item index="2">
    <template slot="title"><router-link to="/foodlist">FoodList</router-link></template>
  </el-menu-item>  

	<el-submenu index="3">
	<template slot="title">Food</template>
	<el-menu-item index="3-1"><router-link to="/dduck">떡볶이</router-link></el-menu-item>
    <el-menu-item index="3-2">item two</el-menu-item>
    <el-menu-item index="3-3">item three</el-menu-item>
    </el-submenu>
  <el-menu-item index="4">Sign-Up</el-menu-item>
  <el-menu-item index="5">Login</el-menu-item>
</el-menu>
    </div>
    <div id="title">냠냠.GG</div>
	<div id="search">
	<div id="Home">
	<input id="searchbtn" type="text" v-model="value" placeholder="오늘 뭐 먹을까?">
	<div id="searchfor" v-for="food in search()">
		<span></span>
		<span id="FoodName">{{food.id}}</span>
		<span id="rank" v-for="(item,index) in sortItems" v-if="item.name==food.id">({{index+1}}위)</span>
	</div>
	</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data(){
	  return{
		  value:"",
		  list:[
			  {source:"./img/dduck.jpg", id:"떡볶이"},
			  {source:"./img/zza.jpg", id:"자장면"},
			  {source:"./img/sam.jpg", id:"삼겹살"},
			  {source:"./img/gop.jpg", id:"곱창"},
			  {source:"./img/pa.jpg", id:"파스타"},
			  {source:"./img/pi.jpg", id:"피자"},
			  {source:"./img/ham.jpg", id:"햄버거"},
			  {source:"./img/ke.jpg", id:"케이크"},
			  {source:"./img/ppang.jpg", id:"빵"},
			  {source:"./img/la.jpg", id:"라면"},
			  {source:"./img/don.jpg", id:"돈까스"},
			  {source:"./img/Kal.jpg", id:"칼국수"},
			  {source:"./img/gal.jpg", id:"갈비"},
			  {source:"./img/naeng.jpg", id:"냉면"},
			  {source:"./img/Soon.jpg", id:"순대"},
			  {source:"./img/dak.jpg", id:"닭갈비"},
			  {source:"./img/Seol.jpg", id:"설렁탕"},
			  {source:"./img/samgye.jpg", id:"삼계탕"},
			  {source:"./img/Ka.jpg", id:"카레"},
			  {source:"./img/nak.jpg", id:"낙지"},
			  {source:"./img/dak.jpg", id:"닭갈비"}
		  	  ],
			activeIndex: '1',
			activeIndex2:'1'
	  }
  },
  computed:{
	  items(){
		  return this.$store.state.items;
	  },
	  sortItems(){
		  let temp = this.$store.state.items;
		  let arr = [];

          // obj가 오류나서 배열로 변경
		  for(let key in temp) {
			  arr.push(temp[key]);
		  }
         // sort후 리턴
		 return arr.sort((item, old)=>{
			return old.num- item.num;
		 })
	  }
 },
  methods:{
	  search(){
		  if(this.value.length==0){
			  return [];
		  }

			return this.list.filter((item)=>{
				return item.id.indexOf(this.value) !== -1;
			})
	  },
	  handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
#rank{
  width:60px;
  font-size:20px;
  color: #000000;
  font-weight:bold;
}

#searchfor{
	background:#ffffff;
	margin:0;
	padding:0;
	width:1004px;
	border-top:1px solid rgb(230, 230, 230);
	border-bottom:1px solid rgb(230, 230, 230);
}
#searchfor img{
	float:left;
	width:130px;
	height:130px;
}
#searchfor:hover{
	background:rgb(232, 245, 254);
}
#searchfor #FoodName{
	position:absoulute;
	font-size:50px;
	text-align:center;
}
a{
	text-decoration:none;
}
#wrap{
	width:100%;
	height:960px;
}
#title{
	position:absoulte;
	width:100%;
	font-size:100px;
	text-align:center;
	margin-top:200px;
	color:#ffffff;
	margin-bottom:40px;
}
#search{
	margin:0 auto;
	text-align:center;
}
#searchbtn{
	width:1000px;
	height:100px;
	margin:0 auto;
	text-align:center;
	font-size:30px;
}
#searchfor{
	background-color:#ffffff;
	margin:0 auto;
}
#gobtn{
	width:70px;
	position:absoulte;
}
#food-list{
	width:100%;
	margin-top:100px;
	text-align:center;
}
#MainTop{
	background-color:#210B61;
	text-align:right;
	width:100%;
	height:40px;
	font-size:15px;	
	font-weight:bold;
	font-color:#ffffff;
}
#MainTop #login{
	margin:0.5px;
}
#wrap{
	background-color:#0174DF;
}
</style>

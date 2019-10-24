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
  <el-menu-item index="4"><router-link to="/signup">Sign-Up</router-link></el-menu-item>
  <el-menu-item index="5">Login</el-menu-item>
</el-menu>
    </div>
    <div id="title">냠냠.GG</div>
	<div id="search">
	<div id="Home">
	<input id="searchbtn" type="text" v-model="value" placeholder="오늘 뭐 먹을까?">
	<div id="searchfor" v-for="food in search()">
		<router-link v-bind:to="food.site">
		<img v-bind:src="food.source">
		<span id="FoodName">{{food.id}}</span>
		<span id="rank" v-for="(item,index) in sortItems" v-if="item.name==food.id">({{index+1}}위)</span>
		</router-link>
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
			  {source:"./img/dduck.jpg", id:"떡볶이", site:"/dduck"},
			  {source:"./img/zza.jpg", id:"자장면", site:"/zza"},
			  {source:"./img/sam.jpg", id:"삼겹살", site:"/sam"},
			  {source:"./img/gop.jpg", id:"곱창", site:"/gop"},
			  {source:"./img/pa.jpg", id:"파스타", site:"/pa"},
			  {source:"./img/pi.jpg", id:"피자", site:"/pi"},
			  {source:"./img/ham.jpg", id:"햄버거", site:"/ham"},
			  {source:"./img/ke.jpg", id:"케이크", site:"/ke"},
			  {source:"./img/ppang.jpg", id:"빵", site:"/ppang"},
			  {source:"./img/la.jpg", id:"라면", site:"/la"},
			  {source:"./img/don.jpg", id:"돈까스", site:"/don"},
			  {source:"./img/Kal.jpg", id:"칼국수", site:"/Kal"},
			  {source:"./img/gal.jpg", id:"갈비", site:"/gal"},
			  {source:"./img/naeng.jpg", id:"냉면", site:"/naeng"},
			  {source:"./img/Soon.jpg", id:"순대", site:"/Soon"},
			  {source:"./img/dak.jpg", id:"닭갈비", site:"/dak"},
			  {source:"./img/Seol.jpg", id:"설렁탕", site:"/Seol"},
			  {source:"./img/samgye.jpg", id:"삼계탕", site:"/samgye"},
			  {source:"./img/Ka.jpg", id:"카레", site:"/Ka"},
			  {source:"./img/nak.jpg", id:"낙지", site:"/nak"}
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
	height:71px;
	border-top:1px solid rgb(230, 230, 230);
	border-bottom:1px solid rgb(230, 230, 230);
}
#searchfor img{
	float:left;
	width:70px;
	height:70px;
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

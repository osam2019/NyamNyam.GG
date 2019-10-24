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
 <el-menu-item index="5"><router-link to="/">Log Out</router-link></el-menu-item>
</el-menu>
    </div>
   <div id="Main">
   
   <tr>
       <td><img src="./img/dduck.jpg"></td>
	   <td>
	   <span id="FoodName">떡볶이</span>
	   <span id="rank" v-for="(item,index) in sortItems" v-if="item.name=='떡볶이'">({{index+1}}위)</span>
	   </td>
   </tr>
   </div>


   <div id="first-line">
   <span id="Image">
				<a href="#"><router-link to="/food"><img src="./img/dduck.jpg"></router-link></a>
			</span>
			<span id="Image">
				<a href="#"><img src="./img/dduck3.jpg"></a>
			</span>
			<span id="Image">
				<a href="#"><img src="./img/dduck4.jpg"></a>
			</span>
			<span id="Image">
				<a href="#"><img src="./img/dduck5.jpg"></a>
			</span>
			<span id="Image">
				<a href="#"><img src="./img/dduck6.jpg"></a>
			</span>
   </div>

   <div id="map"><router-link to="/map"><i id="tomap" type="primary" class="el-icon-map-location"></i></router-link></div>
   
</div>
</template>


<script>	
export default {
  name:'dduck',
  computed:{
	  data(){
        return{
            activeIndex:'1',
            activeIndex2:'1'
        };
    
    },
	  items(){
		  return this.$store.state.items
		  	},
	  sortItems(){
		  let temp = this.$store.state.items;
		  let arr = [];

          // obj가 오류나서 배열로 변경
		  for(let dducky in temp) {
			  arr.push(temp[dducky]);
		  }
         // sort후 리턴
		 return arr.sort((item, old)=>{
			return old.num- item.num;
		 })
	  }
 }
}
</script>


<style scoped>

#tomap{
font-size:100px;
text-align:center;
margin-left:980px;
}

a{
text-decoration: none;
}

.clear{
	clear:both;
}


#wrap{
  
	width:1920px;
	height:1080px;
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



#Main{
	background-color:#2E2E2E;
	text-align:left;
}

#Main #Taste{
  margin-left:20px;
  width:100px;
  height:50px;
  font-size:30px;
  color:#ffffff;
  background:#DF0101;
}

#Main img{
	margin-left:-330px;
	margin-top:30px;
	background:#ffffff;
	padding:20px;
  	width:180px;
  	height:180px;
}

#Main #FoodName{
  margin-left:-80px;
  margin-bottom:10px;
  font-size:75px;
  color:#ffffff;
}

#Main #rank{
  margin-top:-50px;
  width:300px;
  font-size:20px;
  display:inline-block;
  color: #000000;
  font-weight:bold;
}



#first-line img{
	padding:2%;
	width:15%;
	height:auto;
}

#MainRight{
  padding-top:10%;
  float:right;
	background-color:#ffffff;
  margin-right:15%;
}

#MainRight #search #searchbtn{
	width:50%;
	height:1%;
	padding:5%;
}

#MainRight #statistic{
	margin-top:100px;
	border:5px solid #000000;
	font-size:25px;
}

#first-line img{
	padding:0.1%;
	width:19.5%;
	height:310px;
}

#map{
	margin-top:50px;
}

</style>


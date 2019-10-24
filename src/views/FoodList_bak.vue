<template>
  <div id="FoodList">
  <div id="wrap">
	<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title"><router-link to="/foodlist">FoodList</router-link></template>
    <el-menu-item index="2-1"><router-link to="/dduck">떡볶이</router-link></el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>

    </el-submenu>
  <el-menu-item index="3">Login</el-menu-item>
</el-menu>

	<div id="Main">	
	<div id="title">냠냠.GG</div>
	<div id="MainLeft">		
		<div id="first-line">
	
			<template v-if="display==0">
				<span v-for="(item,index) in filterItem('모든음식')" id="Image">
				<router-link v-bind:to="item.site"><img v-bind:src="item.source"></router-link>
				</span>
			</template>
			
			<template v-if="display==1">
				<span v-for="(item,index) in filterItem('매운맛')" id="Image">
					<router-link v-bind:to="item.site"><img v-bind:src="item.source"></router-link>
				</span>
			</template>
			<template v-if="display==2">
				<span v-for="(item,index) in filterItem('면류')" id="Image">
					<router-link v-bind:to="item.site"><img v-bind:src="item.source"></router-link>
				</span>
			</template>
			<template v-if="display==3">
				<span v-for="(item,index) in filterItem('고기류')" id="Image">
					<router-link v-bind:to="item.site"><img v-bind:src="item.source"></router-link>
				</span>
			</template>

		</div>
		
		
	</div>
		
	</div>

	<div id="MainRight">
	<div id="search">
	<input id="searchbtn" v-model="SearchValue" type="text" placeholder="search">
	</div>
	<div id="statistic">
	<el-tabs type="card" @tab-click="handleClick">
	<el-tab-pane label="모든음식"></el-tab-pane>
    <el-tab-pane label="매운맛"></el-tab-pane>
    <el-tab-pane label="면류"></el-tab-pane>
    <el-tab-pane label="고기류"></el-tab-pane>
  	</el-tabs>

		<template  v-if="display==0">
		     <div id="ranking" v-for="(item, index) in filterItem('모든음식')">
		         <router-link v-bind:to="item.site"><span id="rankleft">{{index+1}}</span><img v-bind:src="item.source">{{item.name}}: {{item.num}}건</router-link>
			</div>	
	    </template>
		<template  v-else-if="display==1">
		     <div id="ranking" v-for="(item, index) in filterItem('매운맛')">
		         <router-link v-bind:to="item.site"><span id="rankleft">{{index+1}}</span><img v-bind:src="item.source">{{item.name}}: {{item.num}}건</router-link>
			</div>	
	    </template>
		<template  v-else-if="display==2">
		     <div id="ranking" v-for="(item, index) in filterItem('면류')">
		        <router-link v-bind:to="item.site">{{index+1}}</span><img v-bind:src="item.source">{{item.name}}: {{item.num}}건</router-link>
			</div>	
	    </template>
		
		<template  v-else>
		     <div id="ranking" v-for="(item, index) in filterItem('고기류')">
		         <router-link v-bind:to="item.site">{{index+1}}</span><img v-bind:src="item.source">{{item.name}}: {{item.num}}건</router-link>
			</div>	
	    </template>




	</div>
	<el-checkbox v-model="checked1">최근 먹은건 제외</el-checkbox>
	<el-checkbox v-model="checked2">먹은지 오래된 음식 강조</el-checkbox>	
	</div>
	
  </div>
  <div class="clear"></div>
  </div>
</div> 
</div> 
</template>

<script>
export default{
  name:'FoodList',
  data(){
	  return {
		  checked1:false,
		  checked2:false,
		  display:0,
		  SearchValue:"",
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
	  handleClick(tab, event){
		  console.log("tab, event", tab);
		  this.display = tab.index;
	  },
	  ChangeDisplay(a){
		  console.log("tttt", a);
         this.display=a;
	  },
	   filterItem(feature){
		   let targetItems = this.sortItems;
		   if(this.SearchValue.length!=0){
			   	targetItems = this.sortItems.filter((item)=>{
					   return item.name.indexOf(this.SearchValue)!=-1
				})
		   }

		   if(feature=="모든음식"){
			   return targetItems;
		   }

            return targetItems.filter((item)=>{
				return item.feature == feature;
			})
	  },
	   handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
	 
  }
}







</script>

<style scoped>
a{
text-decoration: none;
color:#000000;
}

.clear{
	clear:both;
}


#wrap{
	width:1920px;
	height:1080px;
	background-color:#F2F2F2
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
background-color:#0174DF;
}


#MainLeft{
	margin-top:15px;
	float:left;
	height:20%;
	width:70%;
	margin-left:1%;
	background-color:#ffffff;
	padding:10px;
}

#Main #title{
	text-align:center;
	font-size:30px;
	padding:20px;
	color:#ffffff;
}

#MainLeft #first-line img{
	padding:0.1%;
	width:19.5%;
	height:310px;
}

#MainLeft #second-line img{
	padding:0.1%;
	width:19.5%;
	height:auto;
}

#MainLeft #third-line img{
	padding:0.1%;
	width:19.5%;
	height:310px;
}

#MainLeft #fourth-line img{
	padding:0% 7% 0% 7%;
	width:5%;
	height:auto;
}

#MainLeft #fifth-line img{
	padding:0.1%;
	width:19.5%;
	height:310px;
}

#MainLeft #sixth-line img{
	padding:0% 7% 0% 7%;
	width:5%;
	height:auto;
}


#MainRight{
  margin-top:60px;
  width:20%;
  float:right;
  background-color:#ffffff;
  margin-right:3%;
}

#ranking{
height:50px;
text-align:center;
border-top:1px solid #e6e6e6;
border-bottom:1px solid #e6e6e6;
color:#000000;
}
#ranking rankleft{
	text-align:left;
}
#ranking img{
	width:40px;
	height:40px;
}

#ranking:hover{
background:rgb(232, 245, 254);
}

#MainRight #search #searchbtn{
	margin-top:30px;
	margin-bottom:-50px;
	width:50%;
	height:1%;
	padding:5%;
}

#MainRight #statistic{
	margin-top:100px;
	border:1px #000000;
	font-size:25px;
}
</style>

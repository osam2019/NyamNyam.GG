<template>
  <div>
     
    <div>
      <router-view />
    </div>
  </div> 
</template>

<script>
 export default {
  name: 'App',
  components: {
  },
  mounted(){
    this.$store.dispatch("loadItems");
  },
  data: () => ({
    //
  }),
};
</script>
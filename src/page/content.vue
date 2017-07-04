<template>
  <div class="content">
    <ul class="country-display">
      <li v-for="country in countries">
        {{country.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data:function(){
      return {
        countries:{
          code:this.countries.code,
          name:this.countries.name,
          population:this.countries.population,
        }
      }
    },
    mounted:function () {
      console.log("ready.");
      this.$ajax({
        method:'get',
        url:'/content',
      }.then(function (response) {
        console.log(response);
        this.countries = response.data.countries;
      }),function(response){
        console.log(response);
      })
    }
  }
</script>

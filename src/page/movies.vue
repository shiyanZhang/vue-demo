<template>
  <div class="movies">
    <ul>
      <li v-for="topic in topics">
        {{topic.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        topics:[],
      }
    },
    mounted:function () {
      var _this = this;
      this.$ajax.get('https://cnodejs.org/api/v1/topics')
        .then(function (response) {
          _this.topics = response.data.data;

        }),function (response) {
        console.log(response);
      }
    }
  }
</script>

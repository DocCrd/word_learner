<template>
<div class="hello">
  <div class="top">
    <h1>{{ msg }}</h1>
    <h3>на сайт-приложение для улучшения вашего английского.
      <hr class="breaker" />
    </h3>
    <p class="description">

      Как известно,
      для восприятия речи и текста необходимо иметь некоторый словарный запас<br>
      и мы рады предоставить вам средство для заучивания необходимого минимума!
    </p>
    <hr class="breaker" />
  </div>
  <div class="bottom">

  </div>

</div>
</template>

<script>
export default {
  name: 'StartingPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breaker {
  width: 50%
}

.description {
  width: 85%
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
<div id="nav">
  <router-link to="/">Стартовая</router-link> |
  <router-link to="/quiz">Викторина</router-link> |
  <router-link to="/settings">Настройки</router-link>
</div>
<router-view />
</template>
<style>
#app {
  /*half-blueviolet*/
  background: rgba(138, 43, 226, 0.5);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-settings {
  height: auto;
}

.app-quiz {
  height: 100%;
}

.app-home {
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}

html,
body {
  height: 100%;
  line-height: 1;
  margin: 0;
  display: block;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  margin: auto;
  height: 100%;
  bottom: 0;
  top: 0;
  align: center;
}
</style>

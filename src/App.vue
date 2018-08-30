<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}
body{
	margin: 0;
	padding: 0;
}
p,h1,h2,h3,h4,h5,h6,ul{
	-webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
     -webkit-padding-start:0px;
}

li{
	list-style: none;
}
#app {
  font-family: "microsoft yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
	position: relative;
	width: 1300px;
	margin: 0 auto;
}
	@media only screen and (max-width:1300px){
		.container{
			width: 100%;
		}
	}
</style>

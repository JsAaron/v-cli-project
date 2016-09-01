<template>
	<form id="search">
       Search <input name="query" v-model="filterKey">
    </form>
</template>

<script>
	export default {
		props:{
		  filterKey:{
		  	type:'String',
		  	toWay:true
		  }
		}
	}
</script>
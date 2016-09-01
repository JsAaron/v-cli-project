<style src="./style.css" ></style>

<style scoped>
#demo{
	margin: 30px;
}
</style>

<template>
    <div id="demo">
		<form-search></form-search>
		<demo-grid
		  :data="gridData"
	      :columns="gridColumns"
	      :filter-key="searchQuery">
	    </demo-grid>
    </div>
</template>

<script>
import search from './search.vue';
import grid from './grid.vue';

export default {
	data:function(){
		return {
		    searchQuery: '',
		    gridColumns: ['name', 'power'],
		    gridData: [
		      { name: 'Chuck Norris', power: Infinity },
		      { name: 'Bruce Lee', power: 9000 },
		      { name: 'Jackie Chan', power: 7000 },
		      { name: 'Jet Li', power: 8000 }
		    ]
		}
	},
    components: {
        'form-search':search,
        'demo-grid':grid
    }
}


</script>
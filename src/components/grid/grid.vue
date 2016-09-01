<template>
	<table>
        <thead>
        	<tr>
				<th v-for="key in columns">
				{{key}}
				</th>
        	</tr>
        </thead>
        <tbody>
			<tr v-for="entry in data">
				 <td>{{entry.name}}</td>
				 <td>{{entry.power}}</td>
			</tr>
        </tbody>
    </table>
</template>


<script>
	export default {
		props: {
		  data: Array,
		  columns: Array,
		  filterKey: String
		},
		data:function(){
			return {

			}
		}
	}
</script>
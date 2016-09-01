<template>
	<table>
        <thead>
        	<tr>
				<th v-for="key in columns"
				 @click="sortBy(key)"
				 :class="{active:sortKey==key}">
				 {{key | capitalize}}
	              <span class="arrow"
	                :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
	              </span>
				</th>
        	</tr>
        </thead>
        <tbody>
			<tr v-for="entry in data
			    | filterBy filterKey
				| orderBy sortKey sortOrders[sortKey]">
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
		  filterKey:String
		},
		data:function(){
		    var sortOrders = {}
		    this.columns.forEach(function (key) {
		      sortOrders[key] = 1
		    })
		    return {
		      sortKey: '',
		      sortOrders: sortOrders
		    }
		},
		methods:{
			sortBy:function(key){
		      this.sortKey = key
		      this.sortOrders[key] = this.sortOrders[key] * -1
			}
		}
	}
</script>
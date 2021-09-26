<template>
  <div>
    <h1>Vehicles list</h1>
	<table>
		<thead>
			<tr>
				<th>Photo</th>
				<th>Type</th>
				<th>Model</th>
				<th>Features</th>
				<th>Price/day</th>
				<th>Price total rental days</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(actV,index) of arrVehicles" :key="index">
				<td><a :href="actV.photo" target="_blank">View photo</a></td>
				<td>{{ actV.type }}</td>
				<td>{{ actV.model }}</td>
				<td>{{ actV.features }}</td>
				<td>{{ actV.priceDay }}E/day</td>
				<td>{{ actV.priceDay * datesDiff}}E</td>
			</tr>
		</tbody>
	</table>
	<h3>Total rental days: {{ datesDiff }}</h3>
		<p class="mt-5">
			<router-link to="/"><i class="material-icons">arrow_back</i></router-link>
	</p>
  </div>
</template>
<script>
import DB from '../models/db.js'
export default {
	data () {
		return {
			arrVehicles: [],
			datesDiff: 0
		}
	},
	methods: {
		getList () {
			this.datesDiff = Math.ceil((parseInt(this.$route.params.returnTimeUnix) - parseInt(this.$route.params.originTimeUnix)) / 1000 / 60 / 60 / 24)

			// aquí podríamos hacer una consulta por ajax al backend pero en este ejercicio de ejemplo lo vamos a hacer sin ello
			DB.arrVehicles.forEach((actV) => {
				let flagAdd = true
				if (actV.type !== this.$route.params.type) {
					flagAdd = false
				}
				if (flagAdd) {
					this.arrVehicles.push (actV)
				}
			})
		}
	},
	mounted () {
		this.getList ()
	}
}
</script>

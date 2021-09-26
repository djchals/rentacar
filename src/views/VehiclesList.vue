<template>
	<div>
		<div>
			<div class="collection">
				<h4 class="center">Vehicles list</h4>
				<table class="mb-5">
					<caption>Total rental days: {{ datesDiff }}</caption>
					<thead>
						<tr>
							<th class="center">Photo</th>
							<th class="center">Type</th>
							<th class="center">Model</th>
							<th class="center">Features</th>
							<th class="center">Price/day</th>
							<th class="center">Price total rental days</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(actV,index) of arrVehicles" :key="index">
							<td class="center"><a :href="actV.photo" target="_blank"><i class="material-icons">remove_red_eye</i></a></td>
							<td class="center"><i class="material-icons">{{ arrIconsType[actV.type] }}</i></td>
							<td class="center">{{ actV.model }}</td>
							<td class="center">{{ actV.features }}</td>
							<td class="center">{{ actV.priceDay }}E/day</td>
							<td class="center">{{ actV.priceDay * datesDiff}}E</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="mt-5">
				<router-link to="/"><i class="material-icons">arrow_back</i></router-link>
			</p>
		</div>
	</div>
</template>
<script>
import DB from '../models/db.js'
export default {
	data () {
		return {
			arrVehicles: [],
			arrIconsType: {
				car: 'directions_car',
				motorbike: 'motorcycle'
			},
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

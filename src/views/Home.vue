<template>
	<div>
		<h1>Reserva tu vehículo</h1>
		<form @submit.prevent="sendData" name="formRent" action="/" method="post">
			Tipo:
			<select name="type">
				<option value="car">Coche</option>
				<option value="motorbike">Moto</option>
			</select>
			<br>
			Lugar de recogida:
			<input type="text" name="originPlace" value="" required/>
			<br>
			Lugar de devolución:
			<input type="text" name="returnPlace" value="" required/>
			<br>
			Fecha/hora de recogida:
			<input type="date" name="originDate" value=""  min="2021-01-01" max="2999-12-31" required style="border:1px solid red"/>
			<input type="time" name="originTime" value="" required/>
			<br>
			Fecha/hora de devolución:
			<input type="date" name="returnDate" value=""  min="2021-01-01" max="2999-12-31" required/>
			<input type="time" name="returnTime" value="" required/>
			<br>
			<button type="submit">Buscar vehículo</button>
		</form>
	</div>
</template>
<script>
import DB from '../models/db.js'
export default {
	data () {
		return {
			arrVehicles: DB.arrVehicles
		}
	},
	methods: {
		async sendData () {
			let flagSend = true

			const originTimeUnix = this.convertDateTimeToTimeUnix (document.formRent.originDate.value, document.formRent.originTime.value)
			const returnTimeUnix = this.convertDateTimeToTimeUnix (document.formRent.returnDate.value, document.formRent.returnTime.value)

			if (originTimeUnix >= returnTimeUnix) {
				alert('La fecha de inicio tiene que ser anterior a la fecha de retorno')
				flagSend = false
			}

			if (flagSend) {
				const urlVehiclesList = '/vehicles-list/' +
					document.formRent.type.value + '/' +
					document.formRent.originPlace.value + '/' +
					document.formRent.returnPlace.value + '/' +
					originTimeUnix + '/' +
					returnTimeUnix
				this.$router.push(urlVehiclesList)
			}
		},
		convertDateTimeToTimeUnix (date, time) {
			const tmpDateParts = date.split('-')
			const tmpTimeParts = time.split(':')

			const tmpDateTime = new Date (tmpDateParts[0], parseInt(tmpDateParts[1], 10) - 1, tmpDateParts[2], tmpTimeParts[0], tmpTimeParts[1])

			return tmpDateTime.getTime ()
		}
	},
	mounted () {
		console.log(this.arrVehicles)
	}
}
</script>

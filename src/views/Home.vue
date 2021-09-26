<template>
	<div class="container">
		<h4 class="center">Rentacar.com</h4>
		<form @submit.prevent="sendData" name="formRent" action="/" method="post">
			<div class="row">
				<div class="col s12">
					<p class="center">Select your reservation details </p>
				</div>
			</div>
			<div class="row">
				<div class="col s12">
					<div class="input-field col s4">
						<select class="browser-default" name="type">
							<option value="car">Car</option>
							<option value="motorbike">Motorbike</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col s12">
					<div class="input-field col s6">
						<input type="text" id="originPlace" name="originPlace" required class="validate">
						<label for="originPlace">Origin Place</label>
					</div>
					<div class="input-field col s6">
						<input type="text" id="returnPlace" name="returnPlace" required class="validate">
						<label for="returnPlace">Return Place</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s6">
					<div class="col s12">
						<label for="originDate">Picked up at</label>
					</div>
					<div class="col s12 m6 l6">
						<input
							class="validate"
							type="date"
							id="originDate"
							name="originDate"
							min="2021-01-01"
							max="2999-12-31"
							required
							>
					</div>
					<div class="col s12 m6 l6">
						<input
							class="validate"
							type="text"
							id="originTime"
							placeholder="HH:MM"
							maxlength="5"
							name="originTime"
							required
							pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
							>
					</div>
				</div>
				<div class="input-field col s6">
					<div class="col s12">
						<label for="returnDate">Returned at</label>
					</div>
					<div class="col s12 m6 l6">
						<input
							class="validate"
							type="date"
							id="returnDate"
							name="returnDate"
							min="2021-01-01"
							max="2999-12-31"
							required
							>
					</div>
					<div class="col s12 m6 l6">
						<input
							class="validate"
							type="text"
							id="returnTime"
							name="returnTime"
							placeholder="HH:MM"
							maxlength="5"
							pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
							required
							>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col s12">
					<button class="right btn waves-effect waves-light" type="submit" name="action">Search vehicle</button>
				</div>
			</div>
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
				alert('The Origin Date must be previous to the Return Date.')
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
	}
}
</script>

/* - Listado de vehiculos disponibles: Modelo, foto, características, precio diario y precio total
(precio unitario x número de días). */

module.exports = {
	arrVehicles: [
		{
			type: 'car',
			model: 'Seat Toledo',
			photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2014_Seat_Toledo_1.6_TDI_front_view.jpg/280px-2014_Seat_Toledo_1.6_TDI_front_view.jpg',
			features: 'Great seats, GPS',
			priceDay: 15
		}, {
			type: 'car',
			model: 'Toyota Celica',
			photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/TC2004GTS-AP.jpeg/280px-TC2004GTS-AP.jpeg',
			features: 'Hidraulic engine, 3 doors',
			priceDay: 20
		}, {
			type: 'car',
			model: 'Lamborgini Diablo',
			photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Paris_-_RM_Sotheby%E2%80%99s_2018_-_Lamborghini_Diablo_SE30_-_1996_-_007.jpg/280px-Paris_-_RM_Sotheby%E2%80%99s_2018_-_Lamborghini_Diablo_SE30_-_1996_-_007.jpg',
			features: '100CV, Great trunk',
			priceDay: 100
		}, {
			type: 'car',
			model: 'Ferrari Testarrosa',
			photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/1991_Ferrari_Testarossa_4.9.jpg/280px-1991_Ferrari_Testarossa_4.9.jpg',
			features: 'Red plated, 3 doors',
			priceDay: 70
		}, {
			type: 'motorbike',
			model: 'Harley Davidson',
			photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Harley_Davidson_Livewire_at_Motorcycle_Live_2014_01.jpg/300px-Harley_Davidson_Livewire_at_Motorcycle_Live_2014_01.jpg',
			features: 'Grey plated, Great stability',
			priceDay: 20
		}
	]
}

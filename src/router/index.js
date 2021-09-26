import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

/*
const urlVehiclesList = '/vehicles-list/' +
document.formRent.type.value + '/' +
document.formRent.originPlace.value + '/' +
document.formRent.returnPlace.value + '/' +
document.formRent.originDate.value + '/' +
document.formRent.returnDate.value + '/' +
document.formRent.originTime.value + '/' +
document.formRent.returnTime.value
{path: "/dashboard/word-list-:courseId([0-9a-f]{24})",component: WordList, redirect: '/dashboard/word-list-:courseId([0-9a-f]{24})-textM-asc-10-0'},
*/
const routes = [
	{ path: '/', component: Home },
	{ path: '/vehicles-list/:type(car|motorbike)/:originPlace([0-9a-zA-Z ]{1,24})/:returnPlace([0-9a-zA-Z ]{1,24})/:originTimeUnix([0-9]{13})/:returnTimeUnix([0-9]{13})', component: () => import('../views/VehiclesList.vue') }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router

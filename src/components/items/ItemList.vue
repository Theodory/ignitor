<template>
	<section class="post-list">
		<h1>Items</h1>
		<hr />
		<b-row >
			<b-col class="text-center"> <div class="lds-dual-ring"></div> </b-col>
		</b-row>
		<div>
			<Items/>
		</div>
	</section>
</template>

<script>
	import Items from '@/components/items/Item.vue'

	export default{
		name: 'items',
		data() {
			return {
			};
		},
		components: {
			Items
		},
		methods: {
			created(){
			}
		}

	}
</script>

<style>
h1 {
	margin-top: 25px !important;
}
.lds-dual-ring {
	display: inline-block;
	width: 64px;
	height: 64px;
}
.lds-dual-ring:after {
	content: " ";
	display: block;
	width: 46px;
	height: 46px;
	margin: 1px;
	border-radius: 50%;
	border: 5px solid #ccc;
	border-color: #ccc transparent #ccc transparent;
	animation: lds-dual-ring 5s linear infinite;
}
@keyframes lds-dual-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
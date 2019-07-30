<template>
	<div v-if="loading">
		<b-row >
			<b-col class="text-center"> <div class="lds-dual-ring"></div> </b-col>
		</b-row>
	</div>
	<b-row  v-else-if="!loading">
		<b-col>
			<b-card
			tag="article"
			v-for="item in items"
			:key="item.id"
			:title="item.title"
			class="mb-2"
			>
			<b-card-text>
				{{item.body}}
			</b-card-text>

			<router-link class="btn btn-primary" :to="'/items/' + item.id">
			View Item</router-link>
		</b-card>:
	</b-col>
</b-row>
</template>

<script>
	import axios from 'axios'

	export default{
		name: 'Item',
		data(){
			return {
				loading: false,
				items: []
			}
		},
		mounted(){
			this.getItems()
		},
		methods: {
			async getItems() {
				this.loading = true;
				try {
					await axios.get('https://jsonplaceholder.typicode.com/posts').then(
						response => {
							this.items = response.data
							this.loading = false

						})
				} catch (error) {
					this.loading = false
				}
			}
		}
	}
</script>
<style scoped>
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
	animation: lds-dual-ring 1.2s linear infinite;
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
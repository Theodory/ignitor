<template>
	<div>
		<b-card
		tag="article"
		v-for="item in items"
		:key="item.id"
		title="Card Title"
		img-src="https://picsum.photos/600/300/?image=25"
		img-alt="Image"
		img-top
		style="max-width: 20rem;"
		class="mb-2"
		>
		<b-card-text>
			{{item}}
		</b-card-text>

		<b-button href="#" variant="primary">View Item</b-button>
	</b-card>
</div>
</template>

<script>
	import axios from 'axios'

	export default{
		name: 'Item',
		data(){
			return {
				items: []
			}
		},
		mounted(){
			this.getItems()
		},
		methods: {
			async getItems() {
				try {
					axios.get('https://jsonplaceholder.typicode.com/photos').then(
						response => {this.items = response})
				} catch (error) {
					return null;
				}
			}
		}
	}
</script>
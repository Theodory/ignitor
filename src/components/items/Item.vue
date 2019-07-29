<template>
	<b-card
	title="Card Title"
	img-src="https://picsum.photos/600/300/?image=25"
	img-alt="Image"
	img-top
	tag="article"
	style="max-width: 20rem;"
	class="mb-2"
	>
	<b-card-text>
		Some quick example text to build on the card title and make up the bulk of the card's content.
	</b-card-text>

	<b-button href="#" variant="primary">View Item</b-button>
</b-card>
</template>

<script>
	import axios from 'axios'

	export default{
		data(){
			return {
				items: []
			}
		},
		name: 'Item',
		methods: {
			async getItems() {
				try {
					const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
					console.log(response);
				} catch (error) {

				}
			},
			created(){
				this.getItems()
			}
		}
	}
</script>
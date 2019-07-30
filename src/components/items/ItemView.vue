<template>
	<section class="post">
		<b-row v-if="loading">
			<b-col> <div class="lds-dual-ring text-center"></div> </b-col>
		</b-row>
		<b-row v-if="!loading">
			<b-col>
				<h1><button class="btn btn-primary btn-xs" @click="back()">Back</button>{{ post.title }}</h1>
				<h4 class="text-muted">
				</h4>
				<hr />
				<p>{{ post.body }}</p>
			</b-col>
		</b-row>
		
	</section>
</template>
<script>
	import axios from 'axios'

	export default{
		props: ['id'],
		name: 'ItemView',
		data(){
			return {
				post: {},
				loading: false
			}
		},
		mounted(){
			this.fetchItem()
		}
		,
		methods: {
			async fetchItem() {
				this.loading = true
				try {

					await axios.get('https://jsonplaceholder.typicode.com/posts/'+
						this.id
					).then(
					response => {
						this.post = response.data
						this.loading = false

					})
				} catch (error) {
					this.loading = false
				}
			},
			created() {
				this.fetchItem();
			},
			back(){
				this.$router.push('/')
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
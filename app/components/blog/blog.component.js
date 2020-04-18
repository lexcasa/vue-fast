let BlogComponent = Vue.component('blog-component', function (resolve, reject){
	Servicio.view('./app/components/blog/blogView.html', function (view){
		resolve({
			template: view,
			data: function (){
				return {
					titulo: 'Bienvenido a mi blog!',
					articles: [
						{
							_id: 1,
							name: "El futuro de Vue.js",
							shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing ...",
							description: `
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							`,
							img:"./assets/vue-01.jpg",
							link:"#/blog/1"
						},
						{
							_id: 2,
							name: "VUE para iniciantes",
							shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing ...",
							description: `
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							`,
							img:"./assets/vue-02.jpeg",
							link:"#/blog/2"
						}
					],
					article: {},
					seeMore: false
				}
			},
			methods: {
				verMas: function (item){
					this.seeMore = true;
					this.article = item;
				},
				back: function (){
					this.seeMore = false;
				}
			}
		})
	})
})
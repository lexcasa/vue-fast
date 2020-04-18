let BlogCMComponent = Vue.component('blog-cm-component', function (resolve, reject){
	Servicio.view('./app/components/blogCM/blogCMView.html', function (view){
		resolve({
			template: view,
			data: function (){
				return {
					article: {
						name: "",
						shortDescription: "",
						description: "",
						img:""
					}
				}
			},
			methods: {
				guardarArticulo: function (){

					// INVOCO SERVICIO DE AXIOS
					// ENVIO UN POST
					axios({
					  method: 'post',
					  url: API + '/blogs',
					  // HEADERS PARA ENVIAR UN JSON
					  headers: { 'Content-Type':'application/json'},
					  data: this.article
					}).then( function (response){
						// CALLBACK DE LA API
						console.log("response: ", response)
					})
				}
			}
		})
	})
})
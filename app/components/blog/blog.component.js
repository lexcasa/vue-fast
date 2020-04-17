Vue.component('blog-component', function (resolve, reject){
	Servicio.view('./app/components/blog/blogView.html', function (view){
		resolve({
			template: view,
			data: function (){
				return {
					titulo: 'Bienvenido a mi blog!'
				}
			}
		})
	})
})
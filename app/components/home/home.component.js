let HomeComponent = Vue.component('home-component', function (resolve, reject){
	Servicio.view('./app/components/home/homeView.html', function (view){
		resolve({
			template: view
		})
	})
})
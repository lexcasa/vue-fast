Vue.component('footer-item', function (resolve, reject){
	Servicio.view('./app/shared/footerView.html', function (view){
		resolve({
			props:['title','year'],
			template: view
		})
	})
})
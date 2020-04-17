Vue.component('menu-item', function (resolve, reject){
	Servicio.view('./app/shared/menuView.html', function (view){
		resolve({
			props:['title','menuItems'],
			template: view
		})
	})
})
let app = new Vue({
	el: '#app',
	data: {
		titulo: 'Mi blog!',
		footerTitle: "Mi blog dinámico!",
		year: "2035",
		arrMenu: [
			{
				name:"Home",
				link:"#"
			},
			{
				name:"Blog",
				link:"#"
			},
			{
				name:"Contact",
				link:"#"
			}
		]
	}
})
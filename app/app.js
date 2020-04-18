const NotFound = { template: '<p>Page not found</p>' }
const Blog = BlogComponent;
const BlogCM = BlogCMComponent;
const Home = HomeComponent;

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: Blog },
  { path: '/blog/content/new', component: BlogCM }
]

const router = new VueRouter({
  routes
})

let app = new Vue({
  router,
  data: {
		titulo: 'Mi blog!',
		footerTitle: "Mi blog dinámico!",
		year: "2035",
		arrMenu: [
			{
				name:"Home",
				link:"/"
			},
			{
				name:"Blog",
				link:"/blog"
			},
			{
				name:"Contact",
				link:"/contact"
			}
		],
		currentRoute: window.location.pathname
	}
}).$mount('#app')
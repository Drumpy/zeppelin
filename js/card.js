
// CREAR COMPONENTE

Vue.component('card',{
	props:{
		clasePrincipal:{
			type: String,
			default:'slider-item'
		}
	},
	
	template:`
	<div class="flex">

		<div v-for="item in menuLista" class="card">
			<div class="card-top">
				<img :src="item.foto" alt="Imagen de Unsplash"/>
				<span>U$S {{item.precio}}</span>
			</div>
		
			<div class="card-body">
				<h4>{{item.nombre}}</h4>
				<p>{{item.descripcion}}</p>
				<a href="#" aria-label="Más Información">Más Información</a>	
			</div>
		</div>

	</div>
	`,
	data(){
		return{
				menuLista: [
						{
							nombre:'Paris',
							precio:'1300',
							foto:'./images/paris.jpg',
							descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eum.'
						},
						{
							nombre:'Brasil',
							precio:'960',
							foto:'./images/brasil.jpg',
							descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eum.'
						},
						{
							nombre:'Japon',
							precio:'1700',
							foto:'./images/japon.jpg',
							descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eum.'
						},
						{
							nombre:'Egipto',
							precio:'1300',
							foto:'./images/egipto.jpg',
							descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eum.'
						},
				],
		}
	},
});

const app = new Vue({
	el: '#app',
	data: {

	}
});
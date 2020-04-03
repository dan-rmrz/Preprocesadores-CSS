import React from 'react';

import avatar from '../../assets/static/sass/avatar.jpg';
import mapMarker from '../../assets/static/sass/map-marker.png';
import galeria1 from '../../assets/static/sass/galeria1.jpg';
import galeria2 from '../../assets/static/sass/galeria2.jpg';
import galeria3 from '../../assets/static/sass/galeria3.jpg';
import galeria4 from '../../assets/static/sass/galeria4.jpg';

import '../../assets/styles/sass/Perfil.scss';

const Perfil = () => pug`
	//- include head.pug
	//- includes no son soportados por transform-react-pug :/

	main
		section.perfil
			img.perfil__avatar(src= avatar)
			h2.perfil__nombre Jhon Wick
			h3.perfil__titulo Asesino Legendario
			a.perfil__boton Seguir
			.estadistica--perfil
				//- +stats("12k", "Seguidores")
				//- +stats("1.7k", "Siguiendo")
				//- +stats("48", "Articulos")
				//- Mixins no son soportados por transform-react-pug :/

				.estadistica_elemento
					h3 12K
					span Seguidores
				.estadistica_elemento
					h3 1.7K
					span Siguiendo
				.estadistica_elemento
					h3 48
					span Articulos
			.perfil__minibio
				h2 Acerca de Mi
				h3 Asesino a sueldo retirado y amante de perros
			.ubicacion--perfil
				div
					img(src= mapMarker)
				div
					h2 Estados Unidos
					h3 227km Cerca
			.galeria
				h2 Mis Fotos
				.galeria__contenedor
					.galeria__foto-principal: img(src= galeria1)
					.galeria__fotos-adicionales
						img(src= galeria2 width="160")
						img(src= galeria3)
						img(src= galeria4)
		aside.articulos
			//- +article("Playstation", "GTA VI: Filtraciones de información que son bastante dudosas","Recientemente se filtró en Internet una importante cantidad de supuesta información sobre Grand Theft Auto VI (GTA VI) que nos ofrece una muy buena idea de lo que podemos esperar.")
			//- +article("Switch", "Secuela de The Legend of Zelda: Breath of the Wild anunciada en el E3 2019","Nintendo anunció la secuela de The Legend of Zelda: Breath of the Wild en el E3 2019 y todos estamos más que emocionados con esto.")
			//- +article("Xbox", "Red Dead Online recibe actualización masiva y sale de Beta","Rockstar lanzó el día de hoy la actualización más grande de Red Dead Online desde que el componente online de Red Dead Redemption 2 se lanzó en noviembre.")
			//- Mixins no son soportados por transform-react-pug :/

			.articulo
				span.articulo__categoria Playstation
				h2.articulo__titulo GTA VI: Filtraciones de información que son bastante dudosas
				p.articulo__descripcion
					|Recientemente se filtró en Internet una importante cantidad de 
					|supuesta información sobre Grand Theft Auto VI (GTA VI) que nos 
					|ofrece una muy buena idea de lo que podemos esperar.
			.articulo
				span.articulo__categoria Switch
				h2.articulo__titulo Secuela de The Legend of Zelda: Breath of the Wild anunciada en el E3 2019
				p.articulo__descripcion
					|Nintendo anunció la secuela de The Legend of Zelda: Breath of the 
					|Wild en el E3 2019 y todos estamos más que emocionados con esto.
			.articulo
				span.articulo__categoria Xbox
				h2.articulo__titulo Red Dead Online recibe actualización masiva y sale de Beta
				p.articulo__descripcion
					|Rockstar lanzó el día de hoy la actualización más grande de Red 
					|Dead Online desde que el componente online de Red Dead Redemption 
					|2 se lanzó en noviembre.
`;

export default Perfil;
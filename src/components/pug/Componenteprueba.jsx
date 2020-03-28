import React from 'react';
import '../../assets/styles/pug/Landing.css';
import imagen from '../../assets/static/pug/imagen.png';

const Componenteprueba = () => (
	<>
		<header>
			<h1>PlatziGames</h1>
			<a href="" className="boton">Registro</a>
		</header>      

		<section className="intro">
			<div className="intro__imagen">
				<img src={imagen} alt="imagen"/>
			</div>
			<div className="intro__contenido">
				<h2>Titulo Principal</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					 Adipisci delectus unde tempora modi ipsam officia explicabo 
					 quibusdam! Iste, cumque nihil. Voluptatibus tempora temporibus 
					 vitae? Maxime cum saepe cupiditate possimus ut?
					 <span>
						 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						 Magnam repellendus obcaecati, unde in explicabo ut! Atque 
						 officia architecto esse laboriosam, non provident fugiat, 
						 tempora aliquid excepturi necessitatibus sint, earum illum?
						</span>
				</p>
			</div>
		</section>
	</>
);

export default Componenteprueba
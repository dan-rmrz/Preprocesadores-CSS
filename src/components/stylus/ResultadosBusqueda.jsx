import React from 'react';

import apex from '../../assets/static/stylus/apex.jpg';
import crash from '../../assets/static/stylus/crash.jpg';
import ff from '../../assets/static/stylus/ff.jpg';
import shared from '../../assets/static/stylus/share.png';
import views from '../../assets/static/stylus/views.png';
import coments from '../../assets/static/stylus/coments.png';

import filter1 from '../../assets/static/stylus/filter1.png';
import filter2 from '../../assets/static/stylus/filter2.png';

import '../../assets/styles/stylus/ResultadosBusqueda.styl';

const ResultadosBusqueda = () => pug`
  .buscador: form: input(type='text' placeholder='PlayStation' class='buscador__input')

  header.encabezado--con-filtros
    h2 20 Resultados para "Playstation"
    .filtros
      span Filtrar Por
        a: img(src= filter1)
        a: img(src= filter2)
      //- a(href="#" class="fa fa-th-large")
      //- a(href="#" class="fa fa-bars")

  section.contenido
    .caja
      a(href="#",class="caja__imagen"): img(src= apex)
      .caja__contenido
        span.caja__categoria Video
        h3 Apex Legends Temporada 2: un nuevo trailer muestra cambios al mapa
        p
          |Dos nuevos trailers de Apex Legends muestran lo que nos espera 
          |en la Temporada 2 del battle royale de Respawn.
      .estadistica--articulos: ul
        li
          img(src= shared, alt='shared icon')
          span 275
        li
          img(src= views, alt='views icon')
          span 275
        li
          img(src= coments, alt='comments icon')
          span 12

    .caja
      a(href="#",class="caja__imagen"): img(src= crash)
      .caja__contenido
        span.caja__categoria Video
        h3 Ya salio la reseña de Crash Team Racing Nitro Fueled
        p
          |Veinte años después del lanzamiento del original, Crash Team 
          |Racing ha recibido un remake total que logra mantener todos 
          |los aspectos originales.
      .estadistica--articulos: ul
        li
          img(src= shared, alt='shared icon')
          span 275
        li
          img(src= views, alt='views icon')
          span 275
        li
          img(src= coments, alt='coments icon')
          span 12

    .caja
      a(href="#",class="caja__imagen"): img(src= ff)
      .caja__contenido
        span.caja__categoria Video
        h3 Final Fantasy XIV recibirá una serie live-action en televisión
        p
          |Final Fantasy XIV Online recibirá una adaptación aTV de parte de 
          |Square Enix con Sony Pictures Television y Hivemind.
      .estadistica--articulos: ul
        li
          img(src= shared, alt='shared icon')
          span 275
        li
          img(src= views, alt='views icon')
          span 275
        li
          img(src= coments, alt='coments icon')
          span 12

    //- +caja("apex.jpg", "Video", "Apex Legends Temporada 2: un nuevo trailer muestra cambios al mapa", "Dos nuevos trailers de Apex Legends muestran lo que nos espera en la Temporada 2 del battle royale de Respawn.")
    //- +caja("crash.jpg", "Video", "Ya salio la reseña de Crash Team Racing Nitro Fueled", "Veinte años después del lanzamiento del original, Crash Team Racing ha recibido un remake total que logra mantener todos los aspectos originales.")
    //- +caja("ff.jpg", "Video", "Final Fantasy XIV recibirá una serie live-action en televisión ", "Final Fantasy XIV Online recibirá una adaptación aTV de parte de Square Enix con Sony Pictures Television y Hivemind.")
`;

export default ResultadosBusqueda;
import { Auto } from './../interfaces/auto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private _auto: Auto[]  = [
    {
      id: 1,
      modelo: 'Mustang 2020',
      imgInicial:'../assets/img/completo/mustang-2020.jpg',
      marca: 'Ferrari',
      tipo:'deportivo',
      infoGeneral: '•	Transmisión Automática de 10 Velocidades o Manual de 6 Velocidades <br>•	Sistema de Inyección Directa Dual (PDFI) •	5 Modos de Manejo: Normal, Sport, Nieve/Lluvia, Pista y Pista de Carreras<br>•	Suspensión Traseraa Independiente <br> •	Sistema de Frenos Eléctrico de Disco Ventilados<br>•	Sistema de Monitoreo de Presión de Llantas<br>•	Escape Doble con 4 Salidas<br>•	Spoiler Trasero<br>•	Luces Traseras Secuenciales LED<br>•	Luces Direccionales LED<br>•	Faros Delanteros LED de Alta Intensidad<br>•	Faros de Niebla Frontales LED<br>',
      imgInfo: '../assets/img/info/Mustang.png',
      infoInterior: 'Podrás disfrutar de un gran espacio tanto en la parte delantera como en la trasera que permitirá, cuando enciendas el aire acondicionado, que todo el auto se pueda mantener a una misma temperatura. ¡Eso es fascinante!<br>Los asientos son sumamente cómodos y suaves, hechos con almohadones de algodón que absorben el calor y la humedad, en cualquier caso. ¡Sorprendente! ',
      imgInterior1: '../assets/img/interior/depo-int-1.jpg',
      imgInterior2: '../assets/img/interior/depo-int-2.jpg',
      infoExterior: 'La carrocería es totalmente brillante, el acabado es espectacular y además ahora es más resistente que nunca. ¡Todos querrán uno!<br>La iluminación led en sus faros, permite una gran y larga visibilidad al momento de estar al volante en la oscuridad. ¡Wow!',
      imgExterior2:'../assets/img/exterior/depo-ext-1.png',
      imgExterior1:'../assets/img/exterior/depo-ext-2.png',
      precio: 852700.00,
      video: '../assets/video/mustang.mp4',
    },
    {
      id: 2,
      modelo: '911 Carrera S Cabriolet',
      imgInicial:'../assets/img/completo/911-porsche.jpg',
      marca: 'Porsche',
      tipo:'convertible',
      infoGeneral: '•	Asistente de advertencia y frenado<br>•	Cuadro de instrumentos con cuentarrevoluciones central y 2 displays de 7’ TFT<br>•	Porsche Communication Management (PCM) incluyendo módulo de navegación online<br>•	Porsche Connect Plus incluyendo módulo de comunicación LTE<br>•	Radio Digital<br>•	Sistema de Sonido Plus: 8 altavoces, 150 w con amplificador y procesamiento digital de señal<br>•	Sistema de sonido BOSE Surround Sound System<br>•	Sistema de sonido Burmester High-End Surround Sound System<br>•	Alfombrilla con ribete en cuero<br>•	Asientos Deportivos con ajuste eléctrico del respaldo y de la altura del asiento, ajuste manual<br>•	Botón SPORT para activar la configuración del motor y la transmisión para conducción dinámica<br>•	Conector de 12v en el espacio reposapiés del pasajero',
      imgInfo: '../assets/img/info/Porche.png',
      infoInterior: 'Porsche 911 Carrera S Cabriolet cuenta con un volante de cuero y suave para disfrutar mejor la experiencia al momento de conducir y escuchar tu música favorita gracias al sistema bluetooth. ¡Que emocionante!<br>Sus asientos de cuero son muy cómodos al momento que te subes y cuenta con un gran espacio entre ellos. ¿Qué mejor comodidad que tu Porsche 911 Carrera S Cabriolet?',
      imgInterior2: '../assets/img/interior/convertible-int-1.jpg',
      imgInterior1: '../assets/img/interior/convertible-int-2.jpg',
      infoExterior: 'Su estructura y forma son realmente envidiables además de su gran tono brillante contra la luz y su amplio maletero que se encuentra en la parte trasera. ¡Todos quieren uno!<br>Su iluminación led es muy potente y hace iluminar el auto por las noches al momento de frenarlo convirtiéndolo en un verdadero espectáculo. ¡Brillante!',
      imgExterior2:'../assets/img/exterior/convertible-ext-1.jpg',
      imgExterior1:'../assets/img/exterior/convertible-ext-2.jpg',
      precio: 2498000,
      video: '../assets/video/porsche.mp4',
    },
    {
      id: 3,
      modelo: 'Model X 2020',
      imgInicial:'../assets/img/completo/tesla.jpg',
      marca: 'Tesla',
      tipo:'electrico',
      infoGeneral: '•	Batería de 100 kWh<br>•	Autonomía máxima de hasta 565 WLTP<br>•	Potencia de hasta 612 CV<br>•	Tracción a las 4 ruedas<br>•	Capaz de acelerar de forma casi increíble<br>•	Velocidad máxima de 250 km/h<br>•	Independiente, paralelogramo deformable, resortes neumáticos y barra estabilizadora<br>•	Climatizador bizona<br>•	Calefaccionables, con ajuste eléctrico, con ajuste eléctrico y memorias solo conductor<br>•	Espejos exteriores con función de plegado eléctrico , con memorias, eléctricos - térmicos y antideslumbrantes<br>•	Faros antiniebla delanteros con led<br>•	Faros delanteros con cambio automático de luces en carretera, con encendido automático, con luces led, con regulación automática',
      imgInfo: '../assets/img/info/Tesla.png',
      infoInterior: 'Tu mejor experiencia al conducir un Tesla Model X es siempre estar muy cómodo con sus asientos de algodón de un color totalmente blanco y elegante. ¡Asombroso!<br>Cuenta con una tecnología de amplia gama en su tablero. Una pantalla táctil tipo Tablet que sobre sale ante todo que te permitirá manejar diferentes funciones del sistema. Su volante combina con el acabado de los asientos y es muy suave. ¡Increíble!',
      imgInterior2: '../assets/img/interior/electrico-int-1.jpg',
      imgInterior1: '../assets/img/interior/electrico-int-2.jpg',
      infoExterior: 'Con su amplio espacio, el Tesla Model X te concede un espacio extra para llevar tus maletas en su maletero trasero, el cual puede abrirse con el detector de pie que hemos instalado en su sistema. ¡Una nueva tecnología!<br>Las puertas del Model X atraen mucho su atención, pues estas no son como las puertas tradicionales, sino, estas se despliegan hacia arriba al momento de tirar de su manija. ¡Sorprendente! ',
      imgExterior2:'../assets/img/exterior/electrico-ext-1.jpg',
      imgExterior1:'../assets/img/exterior/electrico-ext-2.jpg',
      precio: 2298900,
      video: '../assets/video/electrico.mp4',
    },
    {
      id: 4,
      modelo: 'Raptor 2020',
      imgInicial:'../assets/img/completo/raptor.jpg',
      marca: 'Ford',
      tipo:'camioneta',
      infoGeneral: '•	6 modos de Manejo (Normal, Sport, Clima, Lodo, Roca y Carrera en el Desierto)<br>•	Asistencia de Pre-Colisión con Freno de Emergencia Automático<br>•	Control Crucero Todo Terreno<br>•	Medallón Trasero Deslizable Eléctrico con Cristal de Privacidad y Desempañante<br>•	SYNC® 3 con Pantalla Táctil de 8 pulgadas, Applink, Apple Carplay y Android Auto<br>•	Techo Panorámico Vista Roof<br>•	Volante Deportivo Forrado de Piel con Calefacción, Ajuste de Inclinación/Profundidad y Controles de Velocidad y Audio<br>•	Twin-turbo de 3.5 litros<br>•	Independiente de doble horquilla y barra estabilizadora – Con muelle de hojas y amortiguadores al exterior del chasis<br>•	450 caballos de fuerza<br>•	Transmisión Automática de 10 Velocidades<br>•	Elaborada con una aleación de Aluminio Grado Militar<br>',
      imgInfo: '../assets/img/info/Camioneta.png',
      infoInterior: 'Disfruta del gran espacio y comodidad que Ford Raptor 2020 brinda a sus usuarios.<br>Espectaculares Asientos Delanteros de piel con calefacción, enfriamiento y ajuste eléctrico de 10 posiciones con memoria para el conductor',
      imgInterior2: '../assets/img/interior/camioneta-int-1.jpg',
      imgInterior1: '../assets/img/interior/camioneta-int-2.jpg',
      infoExterior: 'Espectacular diseño de Ford Raptor 2020, la camioneta pick up hecha para sobresalir en cualquier lugar, digna de la fuerza y potencia que representa Ford Performance.<br>Equipada con la Asistencia de Pre-Colisión con Freno de Emergencia Automático, que se encarga de notificar al conductor sobre un riesgo de colisión',
      imgExterior2:'../assets/img/exterior/camioneta-ext-1.jpg',
      imgExterior1:'../assets/img/exterior/camioneta-ext-2.jpg',
      precio: 1582300,
      video: '../assets/video/camioneta.mp4',
    },
    {
      id: 5,
      modelo: 'Edge ST 2020',
      imgInicial:'../assets/img/completo/edge.jpg',
      marca: 'Ford',
      tipo:'familiar',
      infoGeneral: '•	Iluminación Ambiental<br>•	Volante Forrado de Cuero con Control de Velocidad, de Audio Secundarios y de 5 Direcciones<br>•	Consola Delantera con Apoyabrazos, Bandeja de Almacenamiento y Dos Portavasos Abre superposición de imagen para Consola Delantera con Apoyabrazos, Bandeja de Almacenamiento y Dos Portavasos<br>•	Consola en el Techo con Portagafas de Sol<br>•	Tracción Inteligente en Todas las Ruedas (AWD)<br>•	Suspensión Delantera y Trasera Independiente<br>•	AdvanceTrac® con RSC® (Roll Stability Control™ ) y Control en Curvas<br>•	Transmisión Automática de Ocho Velocidades<br>•	Palanca de Cambios Giratoria<br>•	Sistema de Parrilla Activa<br>•	Aire acondicionado<br>•	Bolsa de Aire Delantera Tipo Cortina',
      imgInfo: '../assets/img/info/Familiar.png',
      infoInterior: 'Descubre el espectacular diseño interior de Ford Edge ST 2020 el cual cuenta con detalles que realzan su atractiva apariencia y generan una atmósfera deportiva que hace de cada trayecto una experiencia de dinamismo y aventura inigualable<br>Amplitud en tu cajuela para llevar de todo en los viajes largos.',
      imgInterior2: '../assets/img/interior/familiar-int-1.jpg',
      imgInterior1: '../assets/img/interior/familiar-int-2.jpg',
      infoExterior: 'Su baño de accesorios Racing compuesto por una parrilla más grande —con la misión de mejorar el fujo de aire hacia el motor—, rines de aluminio de 20", faldones, estribos y alerones lo distinguen.<br>Las exclusivas salidas del Doble Escape con sonido Deportivo que, además, cuenta con Faldones laterales profundos que reducen la carga aerodinámica.',
      imgExterior2:'../assets/img/exterior/familiar-ext-1.jpg',
      imgExterior1:'../assets/img/exterior/familiar-ext-2.jpg',
      precio: 957800,
      video: '../assets/video/familiar.mp4',
    },
    {
      id: 6,
      modelo: 'Partner (2020)',
      imgInicial:'../assets/img/completo/Peugeot.jpg',
      marca: 'Peugeot',
      tipo:'comercial',
      infoGeneral: '•	Carga útil hasta 1000 kg<br>•	Tablero i-Cockpit, diseñado para optimizar la visibilidad y mejorar la ergonomía<br>•	Cabina con profundidad ampliada<br>•	Tres asientos delanteros<br>•	Seis ganchos de amarre en el piso de carga<br>•	Sistemas de asistencia a la conducción que faciliten las maniobras<br>•	Equipo eléctrico<br>•	Sensor de luz<br>•	Rines de acero de 16 pulgadas<br>•	Control de velocidad crucero<br>•	Frenos ABS, bolsas de aire frontales<br>•	Control de tracción y de estabilidad y asistente de arranque en pendientes.',
      imgInfo: '../assets/img/info/Auto-Comercial.png',
      infoInterior: 'Por primera vez en un vehículo industrial, disfrute de un diseño moderno en el que se combinan un volante compacto, un cuadro de mandos elevado y una gran pantalla táctil ultrasensible de 8 pulgadas.<br>Gran maniobrabilidad y una conducción verdaderamente placentera gracias a la ergonomía de la posición de conducción sin precedentes en el segmento.',
      imgInterior2: '../assets/img/interior/comercial-int-1.jpg',
      imgInterior1: '../assets/img/interior/comercial-int-2.jpg',
      infoExterior: 'Porque un vehículo comercial es una herramienta de movilidad e imagen, el cuidado especial que se ha prestado al estilo, el confort a bordo y la facilidad de uso aportan un valor añadido a los profesionales.<br>Con un frente robusto con una parrilla vertical y unas ópticas trabajadas. Las proporciones están perfectamente equilibradas con el capó corto y horizontal.',
      imgExterior2:'../assets/img/exterior/familiar-ext-1.jpg',
      imgExterior1:'../assets/img/exterior/familiar-ext-2.jpg',
      precio: 349900,
      video: '../assets/video/comercial.mp4',
    }
  ]

  constructor() { }

  public getAuto(index: number): Auto{
    return this._auto[index];
  }

  public obtenerAutoTipo(search: string): Auto{
    let autoArr: Auto;
    search = search.toLocaleLowerCase();
    for (let index = 0; index < this._auto.length; index++){
      let auto = this._auto[index];
      let tipo  = auto.tipo.toLocaleLowerCase();
      if(tipo.indexOf(search) >= 0) {
        autoArr = auto;
      }
    }
    return autoArr;
  }

  public buscarAuto(cadena: string){
    let autoArr: Auto[] = [];
    cadena = cadena.toLocaleLowerCase();
    for (let index = 0; index < this._auto.length; index++){
      let auto = this._auto[index];
      let modelo  = auto.modelo.toLocaleLowerCase();
      if(modelo.indexOf(cadena) >= 0) {
        autoArr.push(auto);
      }
    }
    return autoArr;    
  }

}

import image1 from './images/1.png';
export const allQuestions = [
  {
    score: 1,
    inquiry: 'Un dispositivo de capa 3 podría ser:',
    responses: [
      {
        description: 'Un servidor',
        correct: false
      },
      {
        description: 'Un computador',
        correct: false
      },
      {
        description: 'Un firewall',
        correct: true
      },
      {
        description: 'Un satélite',
        correct: false
      }
    ]
  },
  {
    score: 4,
    inquiry:
      'A través de la consola de su computador, ejecute el comando <code>“ipconfig /all”</code> en windows. ¿A qué se refiere la “Physical Address”? Y ¿Qué significado tienen los 6 primeros dígitos?',
    responses: [
      {
        description: 'La dirección IP / La dirección MAC',
        correct: false
      },
      {
        description: 'La dirección MAC / El serial del computador',
        correct: false
      },
      {
        description: 'El identificador del fabricante / La dirección IP',
        correct: false
      },
      {
        description: 'La dirección MAC / El identificador del fabricante',
        correct: true
      }
    ]
  },
  {
    score: 8,
    inquiry:
      'YouTube tiene la característica de “live streaming”. Cuando un usuario se conecta a un live streaming, pueden ocurrir algunas distorsiones en el audio o el vídeo, esto se debe a:',
    responses: [
      {
        description:
          'Los paquetes fragmentados por la capa 4 se perdieron, debido a que es etiquetado con el protocolo TCP.',
        correct: false
      },
      {
        description:
          'Los paquetes fragmentados por la capa 4 se perdieron, debido a que es etiquetado con el protocolo HTTPS.',
        correct: false
      },
      {
        description:
          'Los paquetes fragmentados por la capa 4 se perdieron, debido a que es etiquetado con el protocolo UDP.',
        correct: true
      },
      {
        description:
          'Los paquetes fragmentados por la capa 4 se perdieron y el dispositivo está esperando a que el protocolo UDP los encuentre.',
        correct: false
      }
    ]
  },
  {
    score: 5,
    inquiry:
      'Cuando está descargando un archivo por el navegador y momentáneamente pierde la conexión, el navegador consigue continuar la descarga. Esto es posible gracias a:',
    responses: [
      {
        description:
          'El motor V8 de Javascript, el cual solicita de nuevo los paquetes que se perdieron.',
        correct: false
      },
      {
        description:
          'A que los datos son enviados y etiquetados con el protocolo TCP en la capa 4. Lo cual asegura que todos los paquetes lleguen a su destino.',
        correct: true
      },
      {
        description:
          'A que los datos son enviados y etiquetados con el protocolo HTTPS en la capa 4. Lo cual asegura que todos los paquetes lleguen a su destino.',
        correct: false
      },
      {
        description:
          'A que los datos son enviados y etiquetados con el protocolo TCP en la capa 6. Lo cual asegura que todos los paquetes lleguen a su destino.',
        correct: false
      }
    ]
  },
  {
    score: 6,
    inquiry:
      'Esta trivia está en un dominio con HTTPS, el cual asegura la encriptación de la información que es enviada hacia y desde el dispositivo hasta el servidor. Esta encriptación ocurre en:',
    responses: [
      {
        description:
          'La capa 1, cuando se transporta la información en forma de bits.',
        correct: false
      },
      {
        description:
          'La capa 4, cuando se fragmenta y etiqueta la información.',
        correct: false
      },
      {
        description:
          'La capa 5, en donde se abre la comunicación entre los dispositivos.',
        correct: false
      },
      {
        description:
          'La capa 6, en donde se encripta, comprime y traduce la información.',
        correct: true
      }
    ]
  },
  {
    score: 10,
    inquiry: `Felipe le envió un email a un cliente, a cabo de unos minutos recibe este mensaje: <img src="${image1}" /> <br>Lo más probable es que este error haya ocurrido en la capa:`,
    responses: [
      {
        description:
          'La capa 7, porque es allí en donde se elige el protocolo SMTP.',
        correct: false
      },
      {
        description:
          'La capa 5, porque es allí en donde se abre la comunicación y autorización.',
        correct: true
      },
      {
        description:
          'La capa 1, porque es allí en dónde el servidor recibe la información.',
        correct: false
      },
      {
        description: 'En ninguna de las capas.',
        correct: false
      }
    ]
  },
  {
    score: 7,
    inquiry:
      'Al enviar un dato de un dispositivo a otro, el router determina el direccionamiento lógico, es decir la IP a la que se envía el paquete y luego, se busca el direccionamiento físico, es decir la dirección MAC a la que será enviado el paquete y a la cual está asociada la IP. Esto ocurre respectivamente en las capas:',
    responses: [
      {
        description: '1 y 3',
        correct: false
      },
      {
        description: '1 y 2',
        correct: false
      },
      {
        description: '3 y 4',
        correct: false
      },
      {
        description: '3 y 2',
        correct: true
      }
    ]
  },
  {
    score: 8,
    inquiry:
      'Un ataque DDoS, o de Denegación del Servicio, es un ataque dirigido a capas del modelo OSI específicas. Existe un tipo de ataque bastante común que se realiza haciendo miles de peticiones GET y POST por segundo a un recurso en la web (página web, API, etc.) de manera constante. Este ataque está dirigido a la capa:',
    responses: [
      {
        description: 'Capa 5, porque allí ocurre la autorización.',
        correct: false
      },
      {
        description: 'Capa 3, porque allí se rutea el ataque hacia el recurso.',
        correct: false
      },
      {
        description: 'Capa 7, porque allí se ataca directamente la interfaz.',
        correct: true
      },
      {
        description: 'Capa 1, porque allí es por donde llega el ataque.',
        correct: false
      }
    ]
  },
  {
    score: 9,
    inquiry:
      'En el modelo OSI y TCP/IP cada capa coloca en el paquete su propio encabezado, utilizando las capas de Transporte, Red y Enlace de datos. ¿Cuál es la información que coloca cada capa en el encabezado respectivamente?',
    responses: [
      {
        description:
          'Direcciones de puertas TCP o UDP, Direcciones IP y Direcciones MAC.',
        correct: true
      },
      {
        description:
          'Direcciones IP, Direcciones MAC y Direcciones de puertas TCP.',
        correct: false
      },
      {
        description:
          'Direcciones de puertas TCP o UDP, Direcciones MAC y Direcciones IP.',
        correct: false
      }
    ]
  },
  {
    score: 1,
    inquiry: 'Según el modelo OSI, la capa Física, es la encargada de:',
    responses: [
      {
        description: 'Transportar los vídeos e imágenes en forma de bits.',
        correct: false
      },
      {
        description: 'Transportar bits de un lugar a otro.',
        correct: true
      },
      {
        description: 'Recibir los paquetes TCP y pasarlo a bits.',
        correct: false
      }
    ]
  },
  {
    score: 6,
    inquiry:
      ' Cuando María envía un mensaje de WhatsApp, a través de la capa de aplicación ella escribe el mensaje, luego en la capa de presentación el mensaje es encriptado y traducido al formato necesario, después en la capa de sesión se abre la comunicación y autorización, luego <i>la capa de transporte divide el mensaje en paquetes y lo etiqueta con el protocolo UDP</i>. ¿Cuál de las siguientes afirmaciones es correcta sobre la última frase?',
    responses: [
      {
        description:
          'En realidad etiqueta a los paquetes con el protocolo HTTPS, para añadir más seguridad.\n',
        correct: false
      },
      {
        description:
          'Los paquetes son etiquetados con el protocolo TCP, ya que así se asegura que el mensaje sea recibido.',
        correct: true
      },
      {
        description:
          'Los paquetes son etiquetados con el protocolo IP, ya que se así asegura que el mensaje sea recibido en el destinatario correcto.',
        correct: false
      }
    ]
  },
  {
    score: 3,
    inquiry:
      ' En Google, un analista necesita cambiar la dirección MAC de uno de los servidores conectados a la red. ¿Qué acción debería tomar?',
    responses: [
      {
        description:
          'Ir a las configuraciones del servidor y cambiarla manualmente.',
        correct: false
      },
      {
        description: 'Cambiar el router.',
        correct: false
      },
      {
        description: 'Cambiar el procesador.',
        correct: false
      },
      {
        description: 'Cambiar la placa de red.',
        correct: true
      }
    ]
  },
  {
    score: 2,
    inquiry:
      'En Google, un analista necesita cambiar la dirección IP de uno de los servidores conectados a la red. ¿Qué acción debería tomar?',
    responses: [
      {
        description:
          'Ir a las configuraciones del servidor y cambiarla manualmente.',
        correct: true
      },
      {
        description: 'Cambiar la placa de red.',
        correct: false
      },
      {
        description: 'Cambiar el procesador.',
        correct: false
      },
      {
        description: 'Cambiar el router.',
        correct: false
      }
    ]
  },
  {
    score: 6,
    inquiry: 'Sobre los HUBS, es correcto afirmar que:',
    responses: [
      {
        description:
          'Permite que todos los dispositivos se comuniquen al tiempo.',
        correct: false
      },
      {
        description:
          'Envía los paquetes a todos los dispositivos, pero cada dispositivo, decide si es para ellos el paquete.',
        correct: true
      },
      {
        description: 'Sabe en cuál dirección está cada dispositivo.\n',
        correct: false
      }
    ]
  },
  {
    score: 8,
    inquiry: 'Sobre los Switches, es correcto afirmar que:',
    responses: [
      {
        description:
          'No permite que todos los dispositivos se comuniquen al tiempo.',
        correct: false
      },
      {
        description:
          'Cada dispositivo “ve” lo que los otros envían, pero cada uno decide si es para ellos el paquete.',
        correct: false
      },
      {
        description: 'Sabe en cuál dirección está cada dispositivo.',
        correct: true
      }
    ]
  },
  {
    score: 5,
    inquiry: 'Sobre los Routers, es correcto afirmar que:',
    responses: [
      {
        description:
          'No permite que todos los dispositivos se comuniquen al tiempo.',
        correct: false
      },
      {
        description:
          'Cada dispositivo “ve” lo que los otros envían, pero cada uno decide si es para ellos el paquete.',
        correct: false
      },
      {
        description: 'Asigna una dirección local a cada dispositivo.',
        correct: true
      }
    ]
  },
  {
    score: 8,
    inquiry: 'Sobre los HUBS, es incorrecto afirmar que:',
    responses: [
      {
        description:
          'Permite que todos los dispositivos se comuniquen al tiempo.',
        correct: false
      },
      {
        description:
          'Cada dispositivo “ve” lo que los otros envían, pero cada uno decide si es para ellos el paquete.',
        correct: false
      },
      {
        description: 'No sabe en cuál dirección está cada dispositivo.',
        correct: true
      }
    ]
  },
  {
    score: 7,
    inquiry: 'Sobre los Switches, es incorrecto afirmar que:',
    responses: [
      {
        description:
          'Permite que todos los dispositivos se comuniquen al tiempo.',
        correct: false
      },
      {
        description: 'Envía el mensaje a todos los dispositivos.',
        correct: true
      },
      {
        description: 'Sabe en cuál conexión está cada dispositivo.',
        correct: false
      }
    ]
  },
  {
    score: 7,
    inquiry: 'Sobre los Routers, es incorrecto afirmar que:',
    responses: [
      {
        description:
          'Permite que todos los dispositivos se comuniquen al tiempo.',
        correct: false
      },
      {
        description: 'El mensaje llega a un único dispositivo.',
        correct: false
      },
      {
        description: 'Asigna una dirección MAC a cada dispositivo.',
        correct: true
      }
    ]
  },
  {
    score: 10,
    inquiry:
      'Cuando inicias sesión en LinkedIn, los datos son enviados en formato JSON y luego encriptados. ¿Porqué se realiza este proceso?',
    responses: [
      {
        description: 'Para que sea más rápida la transmisión de los datos.',
        correct: false
      },
      {
        description: 'Para que la API (backend) entienda los datos que envías',
        correct: true
      },
      {
        description:
          'Para tener mayor seguridad de que los datos lleguen a su destino.',
        correct: false
      }
    ]
  },
  {
    score: 10,
    inquiry:
      'El usuario trabaja directamente en la capa 7, o de Aplicación. ¿Es verdadera o falsa esta afirmación?',
    responses: [
      {
        description: 'Falsa',
        correct: true
      },
      {
        description: 'Verdadera',
        correct: false
      }
    ]
  },
  {
    score: 10,
    inquiry:
      ' La capa de enlace de datos, utiliza la dirección IP para elegir un destinatario, en caso de que la conexión no sea de punto a punto.  ¿Es verdadera o falsa esta afirmación?',
    responses: [
      {
        description: 'Falsa',
        correct: true
      },
      {
        description: 'Verdadera',
        correct: false
      }
    ]
  },
  {
    score: 2,
    inquiry:
      'Cuando enviamos un mensaje por Instagram, ese mensaje nos va a llegar sí o sí. ¿Cuál es la capa del modelo OSI que proporciona esta confiabilidad en la entrega?',
    responses: [
      {
        description: 'Móvil',
        correct: false
      },
      {
        description: 'Física',
        correct: false
      },
      {
        description: 'Aplicación',
        correct: false
      },
      {
        description: 'Transporte',
        correct: true
      }
    ]
  },
  {
    score: 7,
    inquiry:
      'Para asegurar el envío de información em milisegundos, se utiliza fibra óptica, ¿con qué capa se relaciona la fibra óptica?',
    responses: [
      {
        description: 'Aplicación',
        correct: false
      },
      {
        description: 'Red de datos',
        correct: false
      },
      {
        description: 'Física',
        correct: true
      },
      {
        description: 'Transporte',
        correct: false
      }
    ]
  },
  {
    score: 8,
    inquiry:
      'Las tramas, son unidades de información con sentido lógico, ¿con cuál capa del modelo OSI se relacionan las tramas?',
    responses: [
      {
        description: 'Aplicación',
        correct: false
      },
      {
        description: 'Historia del usuario',
        correct: false
      },
      {
        description: 'Enlace',
        correct: true
      },
      {
        description: 'Presentación',
        correct: false
      }
    ]
  },
  {
    score: 8,
    inquiry:
      'Al iniciar sesión en LinkedIn, hablamos de sesión. Esa sesión nos asegura la autorización para entrar a nuestro perfil, cambiarlo, realizar posts, etc. La sesión se relaciona con la capa:',
    responses: [
      {
        description: 'Autorización',
        correct: false
      },
      {
        description: 'Sesión',
        correct: true
      },
      {
        description: 'Autenticación',
        correct: false
      },
      {
        description: 'Enlace',
        correct: false
      }
    ]
  },
  {
    score: 7,
    inquiry:
      'Al conectarnos al Wi-Fi, nuestro dispositivo puede quedarse en "Obteniendo IP..." y no pasará de ahí. ¿En cuál capa se identificará más fácil este problema?',
    responses: [
      {
        description: 'Router',
        correct: false
      },
      {
        description: 'Red',
        correct: true
      },
      {
        description: 'Switch',
        correct: false
      },
      {
        description: 'IP Management',
        correct: false
      }
    ]
  },
  {
    score: 5,
    inquiry:
      'Verdadero o Falso: Un UDP, es un dispositivo que está conectado a nuestro computador',
    responses: [
      {
        description: 'Verdadero',
        correct: false
      },
      {
        description: 'Falso',
        correct: true
      }
    ]
  },
  {
    score: 10,
    inquiry:
      'Verdadero o Falso: Cuando establecemos una conexión segura en una página web, lo hacemos por medio el protocolo TCPS',
    responses: [
      {
        description: 'Verdadero',
        correct: false
      },
      {
        description: 'Falso',
        correct: true
      }
    ]
  },
  {
    score: 10,
    inquiry:
      '¿Es posible enviar paquetes por Wi-Fi a otro computador con diferente IP?',
    responses: [
      {
        description: 'Sí',
        correct: false
      },
      {
        description: 'No',
        correct: true
      }
    ]
  },
  {
    score: 10,
    inquiry:
      '¿¿Es posible enviar paquetes por ethernet a otro computador con diferente IP?',
    responses: [
      {
        description: 'Sí',
        correct: false
      },
      {
        description: 'No',
        correct: true
      }
    ]
  },
  {
    score: 10,
    inquiry:
      '¿Cuáles aplicaciones utilizan el protocolo UDP para envío de paquetes?',
    responses: [
      {
        description: 'Live streaming por YouTube',
        correct: false
      },
      {
        description: 'BluRadio en vivo por internet',
        correct: false
      },
      {
        description: 'Una llamada internacional por Skype utilizando VoIP',
        correct: false
      },
      {
        description: 'Todas las anteriores',
        correct: true
      }
    ]
  },
  {
    score: 10,
    inquiry:
      '¿Cuáles aplicaciones utilizan el protocolo TCP para envío de paquetes?',
    responses: [
      {
        description: 'Live streaming por YouTube',
        correct: false
      },
      {
        description: 'Envío de un mensaje por Skype',
        correct: true
      },
      {
        description: 'BluRadio en vivo por internet',
        correct: false
      },
      {
        description: 'Una llamada internacional por Skype utilizando VoIP',
        correct: false
      }
    ]
  },
  {
    score: 10,
    inquiry: '¿Cuáles tipos de cables no tienen relación con el modelo OSI?',
    responses: [
      {
        description: 'Cable Coaxial',
        correct: false
      },
      {
        description: 'Cable Dial',
        correct: false
      },
      {
        description: 'Cable SATA',
        correct: true
      },
      {
        description: 'Cable ethernet',
        correct: false
      }
    ]
  },
  {
    score: 10,
    inquiry:
      'ETB ofrece servicios de televisión, telefonía e Internet por fibra óptica. ¿Es correcto afirmar que para los tres servicios es utilizado el modelo OSI?',
    responses: [
      {
        description: 'Sí, porque es obligatorio por ley el uso del modelo OSI.',
        correct: false
      },
      {
        description:
          'Sí, porque los tres utilizan el internet para la transmisión de datos.',
        correct: true
      },
      {
        description:
          'No, porque no es posible utilizar el teléfono por internet.',
        correct: false
      },
      {
        description: 'No, porque la televisión no utiliza el modelo OSI',
        correct: false
      }
    ]
  },
  {
    score: 10,
    inquiry:
      '<b>Conteste la respuesta más adecuada para los modelos OSI</b></br>Cuando estamos viendo televisión vía TDT y nos perdemos la mitad del partido de fútbol, podemos identificar el problema en:',
    responses: [
      {
        description: 'La posición de la antena',
        correct: false
      },
      {
        description: 'La transmisión de paquetes vía UDP',
        correct: true
      },
      {
        description: 'La transmisión de paquetes vía TCP',
        correct: false
      },
      {
        description: 'La transmisión vía antena',
        correct: false
      }
    ]
  }
  /*  {
    score: 10,
    inquiry: '',
    responses: [
      {
        description: '',
        correct: false
      },
      {
        description: '',
        correct: false
      },
      {
        description: '',
        correct: false
      },
      {
        description: '',
        correct: false
      }
    ]
  },*/
];

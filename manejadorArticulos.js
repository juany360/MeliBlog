var Articulo = function (titulo, resumen,contenido,id,imagen,autor,imgautor) {
    this.titulo = titulo;
    this.resumen = resumen;
    this.contenido = contenido;
    this.id = id;
    this.imagen = imagen;
    this.cantComentarios = 0;
    this.comentarios = {};
    this.autor = autor;
    this.imgautor = imgautor;
};

var Articulos = function(){
    this.articulos = {};
    this.cantidadArticulos = 0;
    this.ultimoArticulo = 0;
};

var Comentario = function(comment,usuario){
    this.comentario = comment;
    this.nombre = usuario;
}


var manejadorArticulos = new Articulos();
var nuevo1 = new Articulo("Fin de año, con la cabeza quemada: tips para hacerle frente","El síndrome de “Burnout” es la epidemia del siglo XXI, que afecta cada vez a más personas. Cuáles son sus causas y quiénes son más propensos a sufrirlo","¿Qué tienen en común el papa Benedicto XVI y la cantante Mariah Carey? No mucho a primera vista, pero ambos fueron diagnosticados con uno de los grandes males que acongojan a las personas que viven en el siglo XXI: el síndrome del burnout. Pesadez mental, falta de energía y cansancio constante son tan sólo algunos de los síntomas de este agotamiento que lleva a que concentrarse en el trabajo sea cada vez más complicado y que afecta la vida personal de quienes lo sufren. El burnout es aún más fuerte en la época de las fiestas, donde las tareas parecen acumularse en demasía y las responsabilidades familiares abundan. No hay dudas de que en la actualidad el agotamiento es una preocupación alarmante. Un relevamiento llevado a cabo con médicos alemanes reveló que el 50% de los profesionales de la salud estaba sufriendo de burnout, un síndrome que se caracteriza por la presencia prolongada de estrés producido por el trabajo y cuyos síntomas incluyen fatiga crónica e ineficiencia laboral. Los individuos manifestaron sentirse agotados durante todo el día, y que el sólo hecho de pensar en el trabajo antes de levantarse a la mañana los dejaba agotados","0","/images/post1.jpg","admin","../images/avatar.png");
var nuevo2 = new Articulo("Estos son los teléfonos en los que dejará de funcionar WhatsApp","Estos son los teléfonos en los que dejará de funcionar WhatsApp.","WhatsApp, uno de los servicios de mensajería más populares, dejará de estar disponible en ciertos modelos de celulares a fines de diciembre. LEA MÁS: Cuál es el servicio de mensajería más seguro del mundo Según anunció la compañía, los smartphones que cuenten con los siguientes sistemas operativos ya no podrán usar la aplicación entre fines de diciembre de este año y el 1 de enero de 2017: * Android 2.1 and Android 2.2  * Windows Phone 7 * iPhone 3GS/iOS 6 Quienes quieran seguir enviando y recibiendo mensajes por medio de esta app, tendrán que comprar móviles que funcionen, al menos, con Android 2.3, Windows Phone 8 o iOS 7. LEA MÁS: 7 claves para elegir los mejores celulares Pero estos no son los únicos equipos que van a ser jubilados  por la compañía. Según anunciaron en su blog, los siguiente modelos podrán seguir usando WhatsApp pero tan solo hasta junio de 2017: *BlackBerry OS *BlackBerry 10 *Nokia S40  *Nokia Symbian S60 De acuerdo con con la empresa, esta decisión se debe a que esos teléfonos antiguos no ofrecen el tipo de capacidades que necesitamos para expandir las posibilidades de WhatsApp en el futuro. LEA MÁS: Cuáles son los smartphones más potentes del año quienes quieran seguir usando el servicio tendrán que pensar en cambiar de modelo en los próximos días o bien renunciar a WhatsApp. Después de todo, no es el único sistema disponible para estar conectado. Telegram o Google Allo son apenas algunos de los tantos servicios de mensajería que se pueden utilizar. Por otra parte, casi todas las redes sociales, como Twitter, Facebook (por medio de Messenger), Snapchat o Instagram ofrecen la opción de enviar mensajes directos.","1","/images/post2.jpg","admin","../images/avatar.png");
var nuevo3 = new Articulo("La receta millonaria que se vendió por solo un dólar","La receta millonaria que se vendió por solo un dólar."," La crisis económica azotaba a los Estados Unidos en la década del 30. Los comerciantes peleaban por mantenerse en pie frente a una economía en recesión constante. Algunos, sin embargo, lograronsortear la crisis e hicieron la base de su fortuna mientras otros emigraban en busca de un futuro próspero. Es la historia de Ruth Graves Wakefield, nacida en 1903 en Massachusetts, Boston, y dueña de uno de los inventos gastronómicos que perduraron para siempre. Con 27 años, era la persona que estaba al frente del Toll House, un restaurante que había construido junto a Kenneth Wakefield -su marido- y que ofrecía comida casera y un elegante servicio que atraía a un grupo selecto de clientes. En los primeros cuatro meses, Wakefield se las arregló con solo 12 empleados. Tres años más tarde, necesitó 50 personas para que se encolumnen detrás de ella en un modesto imperio que tenía varios locales añadidos al original, en donde en 1938 más de 100 trabajadores servían alrededor de mil comidas al día.","2","/images/post3.jpg","admin","../images/avatar.png");

manejadorArticulos.articulos[nuevo1.id] = nuevo1;
manejadorArticulos.articulos[nuevo2.id] = nuevo2;
manejadorArticulos.articulos[nuevo3.id] = nuevo3;
manejadorArticulos.ultimoArticulo = nuevo3.id;
manejadorArticulos.cantidadArticulos = 2;



module.exports = {
    imprimirNoticias: function () {
        return manejadorArticulos.articulos;
    },
    imprimirArticulo: function (id) {
        return manejadorArticulos.articulos[id];
    },
    imprimirUltimo: function () {
        var ultimo = manejadorArticulos.ultimoArticulo;
        return manejadorArticulos.articulos[ultimo];
    },
    nuevoArticulo: function (body) {
        var id = manejadorArticulos.cantidadArticulos+1;
        var nuevoArticulo = new Articulo(body.titulo,body.resumen,body.contenido,id,body.imagen,body.autor,body.imgautor);
        manejadorArticulos.cantidadArticulos++;
        manejadorArticulos.articulos[nuevoArticulo.id] = nuevoArticulo;
    },

    borrarArticulos: function(idBorrar){
        delete  manejadorArticulos.articulos[idBorrar];
    },

    nuevoComentario: function(body,post){
        var articulo =  manejadorArticulos.articulos[post.toString()];
        var idComment = articulo.cantComentarios;
        var comentario = new Comentario(body.comentario,body.nombre);
        manejadorArticulos.articulos[post].comentarios[idComment] = comentario;
        manejadorArticulos.articulos[post].cantComentarios++;
        console.log(manejadorArticulos.articulos);

    }
};
    // var a = Articulo("Chapecoense","Gana la copa");
    //var nuevo1 = new Articulo("Nico Rosberg se retira de la Fórmula 1: bomba para el automovilismo mundial","Nadie se lo esperaba","Apenas cinco días después de consagrarse por primera vez campeón mundial de Fórmula 1, Nico Rosberg anunció en Viena su retiro. La decisión del alemán, de apenas 31 años, cae como una bomba para el ambiente del automovilismo mundial, ya que no había indicios que permitieran suponer semejante medida. Mirá también: Fórmula 1: Nico Rosberg les agradeció a sus padres con un emotivo video Rosberg cumplió su sueño hace cinco días en el Gran Premio de Abu Dhabi, donde además igualó el logro de su padre, Keke Rosberg, quien se coronó en 1982.",'index.html');
    //var nuevo2 = new Articulo("Otra vez aumentan las prepagas: un 6% a partir de enero","Mal ahi","Las prepagas vuelven a subir la cuota de los afiliados. Así le dijo a Clarín el Superintendente de Servicios de Salud, Luis Scervino quien adelantó que en los próximos días el Gobierno autorizará un aumento del 6% en las cuotas de las prepagas que regirá a partir de enero. Mirá también: El oficialismo logró dictamen de Ganancias sin apoyo opositor y siguen las dudas Este año las cuotas de las empresas de medicina privada tuvieron un ajuste en marzo, del 9% retroactivo a febrero, en compensación por desfases de 2015, un 15% en junio, un adicional del 5% de julio, y otro 9% en octubre. En total un aumento acumulado del 42,6%. Si se excluyera del cálculo el 9% de marzo por ser compensatorio de 2015 y se computa el 6% de enero que cubre 2016, el aumento acumulado es del 38,6%, dijo Cerviño.","index.html");
    //var nuevo3 = new Articulo("Una polémica ley permitirá que los chicos puedan ir a bailar con los grandes","Alta fiesta","El control de las actividades nocturnas siempre arrastra discusiones. Resulta difícil la supervisión e involucra a actores con características complejas: los jóvenes y los adolescentes. La Legislatura bonaerense se sumergió otra vez en ese laberinto y resolvió aprobar en la noche del miércoles una reforma a la denominada “Ley de Nocturnidad” para habilitar el ingreso de menores de entre 14 y 17 años a boliches bailables junto con mayores, en ciudades con menos de 30 mil habitantes. La reforma llega a pocos días del inicio de la temporada de verano, cuando se intensifica la frecuencia y cantidad de fiestas, bailes y salidas. Y alcanza a por lo menos cuatro municipios ubicados en la Costa, donde comienza la temporada en un par de semanas: Pinamar, Mar Chiquita, San Cayetano y Monte Hermoso. En términos técnicos, la normativa faculta a 58 municipios con hasta 30 mil habitantes a regular a través de los concejos deliberantes las condiciones y los requisitos para permitir la convivencia de menores y mayores en los locales bailables. Es una excepción en la ley 14.050 que prohíbe la presencia de chicos con menos de 18 años en esos lugares. Los ediles podrán entonces “regular, a través de sus concejos deliberantes, sobre otros límites etarios, conforme a su realidad socio-demográfica y cultural, estableciendo como límite de tal atribución legislativa, la prohibición de ingreso a los menores de 14 años a los locales e instalaciones bailables, cualquiera sea su denominación”. La iniciativa del senador Patricio García (Bloque Peronista) tuvo un fuerte respaldo de los intendentes de todos los colores políticos. El jefe comunal de General Alvear, Alejandro Celillo (Cambiemos), viajó hasta La Plata para apoyar la reforma. “Pronto enviaremos el proyecto de ordenanza para reglamentar el ingreso de menores”, anticipó ayer el alcalde. También recibió el aval de los intendentes de Laprida, Hipólito Yrigoyen, Daireaux, Carmen de Areco y Colón, entre otros municipios. Walter Torchio, de Carlos Casares explicó que “en el pueblo hay un solo boliche y sin esta modificación no existe la posibilidad de que los más chicos puedan empezar a salir, como ocurre en ciudades grandes del Conurbano o el resto de la Provincia”. En las localidades del interior la oferta nocturna es reducida. “Vemos cómo muchos jóvenes viajan de un lugar a otro para asistir a fiestas y resulta un peligro los traslados en plena madrugada”, fue uno de los argumentos . El senador García aclaró que, en realidad, la nueva legislación devuelve a los municipios la facultad de reglamentar esta actividad, que les fue quitada con la ley 14.050.",'index.html');
    //var nuevo4 = new Articulo("Alfonso Prat Gay: Nos faltan 2 puntos para llegar a 10","Que bien","El ministro de Hacienda, Alfonso Prat-Gay, eligió hoy utilizar la calificación de gestión como hizo el presidente Mauricio Macri, al destacar que al Gabinete le faltan dos puntos para llegar a 10. Nos faltan dos puntos para llegar a 10… Mejorar la gestión de cara del año que viene para madurar muchas de las decisiones que tomamos , expresó el funcionario. Prat-Gay formuló estas declaraciones durante una conferencia de prensa tras finalizar la primer parte del retiro espiritual que realizaba el Gabinete en el chalet de veraneo de Chapadmalal, ubicado en la ciudad de Mar del Plata. Asimismo, reiteró que la modificación del Impuesto a las Ganancias que auspicia el Ejecutivo significa la rebaja más alta de la historia y apuntó contra la oposición al asegurar que es gratis la demagogia de decir 'quiero bajar todo' cuando no se es gobierno. Tenemos que ser muy responsables en la situación fiscal en que estamos, porque cada peso, es un peso más para atender la situación social muy precaria que recibimos, enfatizó Prat Gay, al defender una vez más el proyecto oficial vinculado al impuesto a las ganancias. En una conferencia de prensa ofrecida en el marco del retiro espiritual que el presidente Mauricio Macri encabeza en Chapadmalal con sus funcionarios, el titular de Hacienda insistió: Lo que cobró de más Cristina Fernández de Kirchner (por ganancias) se lo devolvemos al contribuyente. Al ser consultado sobre el valor del dólar, Prat Gay fue contundente: Me río, con respeto, pero me río respecto del tipo de cambio. El funcionario recordó que hace una semana decían que un dólar a 15,30  está atrasado y ahora, en 15,80, parece que se disparó. En un régimen de flotación cambiaria eso es lo que se presume que ocurra, explicó el titular del Palacio de Hacienda y agregó que el tipo de cambio subió en línea con el resto de las monedas de la región. En este sentido, aseguró que la principal preocupación del Gobierno sigue siendo la inflación. El precio que nos preocupa es el precio de los alimentos, de la canasta básica. Después de una primera mitad del año con fuertes subas, la inflación se acomodó y estamos cerrando con un nivel de 1.5%, que es lo que prometíamos. Del contacto con la prensa también participaron la ministra de Seguridad de la Nación, Patricia Bullricha, y el titular del Ministerio del Interior, Rogelio Frigerio. En este marco, Frigerio estimó que el diálogo con los gobernadores peronistas va a continuar como hasta ahora, en una construcción de gobernabilidad de ida y vuelta",'index.html');
    //var nuevo5 = new Articulo("Walter va a frontend","Se lo merece","Lo decidio el mismisimo galperin, luego de ver su desempeño en la escuelita","index.html");
    //var nuevo6 = new Articulo("Chapecoense","...","Gana la copa",'index.html');
    //var nuevo7 = new Articulo("Fin de año, con la cabeza quemada: tips para hacerle frente","El síndrome de “Burnout” es la epidemia del siglo XXI, que afecta cada vez a más personas. Cuáles son sus causas y quiénes son más propensos a sufrirlo","imagenes/post1")

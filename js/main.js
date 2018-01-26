$(document).ready(function () {

    var countCalls = 0;
    var total_pages = "";

    var cantVideos = 0;

    //Array de datos, de cada página
    var dataArray = [];
    var metodologiasArray = [];
    var descripcionArray = [];
    var plantilla7Array = [];
    var titulos = [];

    //Obtener datos de Google Docs Plantilla 1
    $('#mainTemplate').sheetrock({
        url: linkPlantilla1,
        sql: "select B,C,D,E,F where A = 'Contenido'",
        labels: ['titulo', 'imagen', 'contenido', 'orden', 'tipo'],
        //Llamada asíncrona a Google Docs
        callback: function (error, options, response) {
            //Reiniciar template
            $('#mainTemplate').empty();
            //Recorrer cada una de las filas del documento
            $.each(response.raw.table.rows, function (k, v) {
                //Agregar fila al array de datos
                dataArray.push(v.c);
            });
            //Contar la cantidad de llamadas asíncronas que se han realizado
            countCalls++;
            //Llamar función que se iniciar cada vez que se termina una llamada asíncrona
            finishedAsync();
        }
    });

    //Obtener datos de Google Docs Plantilla 2
    $('#mainTemplate').sheetrock({
        url: linkPlantilla2,
        sql: "select B,C,D,E,F where A = 'Contenido'",
        labels: ['titulo', 'tiporecurso', 'contenido', 'orden', 'tipo'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                dataArray.push(v.c);
            });
            countCalls++;
            finishedAsync();
        }
    });

    //Obtener datos de Google Docs Plantilla 3
    $('#mainTemplate').sheetrock({
        url: linkPlantilla3,
        sql: "select B,C,D,E,F,G,H,I,J,K where A = 'Contenido'",
        labels: ['titulo', 'lecturas', 'video1', 'video2', 'video3', 'video4', 'video5', 'video6', 'orden', 'tipo'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                dataArray.push(v.c);
            });
            countCalls++;
            finishedAsync();
        }
    });

    //Obtener datos de Google Docs Plantilla 4
    $('#mainTemplate').sheetrock({
        url: linkPlantilla4,
        sql: "select B,C,D,E,F,G,H,I,J,K,L,M,N,O,P where A = 'Contenido'",
        labels: ['titulo', 'titulo_paso', 'contenido_paso', 'tipo1', 'video1', 'tipo2', 'video2', 'nota_1', 'nota_2', 'nota_3', 'nota_4', 'nota_5', 'nota_6', 'orden', 'tipo'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                dataArray.push(v.c);
            });
            countCalls++;
            finishedAsync();
        }
    });

    //Obtener datos de Google Docs Plantilla 5
    $('#mainTemplate').sheetrock({
        url: linkPlantilla5,
        sql: "select B,C,D,E,F,G,H,I,J where A = 'Contenido'",
        labels: ['titulo', 'intrucciones_video', 'video', 'insutrcciones_pregunta', 'pregunta', 'instrucciones_padlet', 'padlet', 'orden', 'tipo'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                dataArray.push(v.c);
            });
            countCalls++;
            finishedAsync();
        }
    });

    //Obtener datos de Google Docs Descripción del módulo
    $('#mainTemplate').sheetrock({
        url: linkDescripcionModulo,
        sql: "select B,C where A = 'Contenido'",
        labels: ['titulo', 'descripcion'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                descripcionArray.push(v.c);
            });
            countCalls++;
            finishedAsync();
        }
    });

    //Obtener datos de la plantilla 6
    $('#mainTemplate').sheetrock({
        url: linkPlantilla6,
        sql: "select B,C,D,E where A = 'Contenido'",
        labels: ['titulo', 'imagen', 'orden', 'tipo'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                dataArray.push(v.c);
            });
            countCalls++;
            finishedAsync();
        }
    });

    //Obtener datos de las metodologías
    $('#mainTemplate').sheetrock({
        url: linkPlantillaMetodologias,
        sql: "select B,C,D,E where A = 'Contenido'",
        labels: ['titulo', 'descripcion', 'icono', 'ID'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                metodologiasArray.push(v.c);
            });
            countCalls++;
            finishedAsync();
        }
    });

    //Obtener datos de la plantilla 7
    $('#mainTemplate').sheetrock({
        url: linkPlantilla7,
        sql: "select B,C,D,E,F where A = 'Contenido'",
        labels: ['titulo', 'descripcion', 'metodologia', 'orden', 'tipo'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                plantilla7Array.push(v.c);
            });
            if(plantilla7Array.length > 0)
                dataArray.push(plantilla7Array[0]);
            countCalls++;
            finishedAsync();
        }
    });

    //Obtener datos de la plantilla 8
    $('#mainTemplate').sheetrock({
        url: linkPlantilla8,
        sql: "select B,C,D,E,F,G,H,I where A = 'Contenido'",
        labels: ['titulo', 'instrucciones', 'tipo1', 'recurso1', 'tipo2', 'recurso2', 'orden', 'tipo'],
        callback: function (error, options, response) {
            $('#mainTemplate').empty();
            $.each(response.raw.table.rows, function (k, v) {
                dataArray.push(v.c);
            });
            countCalls++;
            finishedAsync();
        }
    });


    /**
     * Crea el template 1
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplate1(valor) {
        $("#mainTemplate").append('<div class="card template-1">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + converter.makeHtml(valor[0].v) + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row align-items-center">' +
            '<div class="col-12 col-md-6"><img src="' + valor[1].v + '"></div>' +
            '<div class="col-12 col-md-6 align-items-center"><div class="text-scroll">' + converter.makeHtml(valor[2].v) + '</div></div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    /**
     * Crea el template 2
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplate2(valor) {
        $("#mainTemplate").append('<div class="card template-2">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + converter.makeHtml(valor[0].v) + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row align-items-center">' +
            '<div class="col-12 estrategia d-flex align-items-center">' + putIcon(valor[1].v) + '</div>' +
            '<div class="col-12 align-items-center"><div class="text-scroll">' + converter.makeHtml(valor[2].v) + '</div></div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    /**
     * Crea el template 3
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplate3(valor) {
        var video1 = check(valor[2]),
            video2 = check(valor[3]),
            video3 = check(valor[4]),
            video4 = check(valor[5]),
            video5 = check(valor[6]),
            video6 = check(valor[7]);
        $("#mainTemplate").append('<div class="card template-3">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + converter.makeHtml(valor[0].v) + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row align-items-center">' +
            '<div class="col-12 col-md-6 align-items-center"><div class="text-scroll">' + converter.makeHtml(valor[1].v) + '</div></div>' +
            '<div class="row col-12 col-md-6 align-items-center justify-content-center">' +
            putVideo(video1) +
            putVideo(video2) +
            putVideo(video3) +
            putVideo(video4) +
            putVideo(video5) +
            putVideo(video6) +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    /**
     * Crea el template 4
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplate4(valor) {
        var video1 = check(valor[4]),
            video2 = check(valor[6]);

        var nota1 = check(valor[7]),
            nota2 = check(valor[8]),
            nota3 = check(valor[9]),
            nota4 = check(valor[10]),
            nota5 = check(valor[11]),
            nota6 = check(valor[12]);

        var tipo1 = check(valor[3]),
            tipo2 = check(valor[5]);
        $("#mainTemplate").append('<div class="card template-4">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + converter.makeHtml(valor[0].v) + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row align-items-center">' +
            '<div class="col-12 col-md-4 align-items-center"><div class="text-scroll"><h3>' + converter.makeHtml(valor[1].v) + '</h3>' + converter.makeHtml(valor[2].v) + '</div></div>' +
            '<div class="row col-12 col-md-4 align-items-center justify-content-center">' +
            putVideo2(video1, tipo1) +
            putVideo2(video2, tipo2) +
            '</div>' +
            '<div class="col-md-4 justify-content-center"><h3></h3>' +
            '<div class="notas">' +
            putNote(nota1) +
            putNote(nota2) +
            putNote(nota3) +
            putNote(nota4) +
            putNote(nota5) +
            putNote(nota6) +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    /**
     * Crea el template 5
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplate5(valor) {
        var titulo = check(valor[0]);
        var instruccion_video = check(valor[1]);
        var video = check(valor[2]);
        var instruccion_pregunta = check(valor[3]);
        var pregunta = check(valor[4]);
        var instruccion_padlet = check(valor[5]);
        var padlet = check(valor[6])

        $("#mainTemplate").append('<div class="card template-5">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + converter.makeHtml(titulo) + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row">' +

            '<div class="row col-12 instrucciones">' +

            '<div class="col-12 col-md-4 d-flex justify-content-center"><h5>' + converter.makeHtml(instruccion_video) + '</h5></div>' +
            '<div class="col-12 col-md-4 d-flex justify-content-center"><h5>' + converter.makeHtml(instruccion_pregunta) + '</h5></div>' +
            '<div class="col-12 col-md-4 d-flex justify-content-center"><h5>' + converter.makeHtml(instruccion_padlet) + '</h5></div>' +

            '</div>' +

            '<div class="row col-12 justify-content-center align-items-center">' +

            '<div class="col-12 col-md-4">' +
            putVideo2(video, "video") +
            '</div>' +
            '<div class="col-12 col-md-4">' +
            '<div class="text-scroll" style="text-align: center;">' + converter.makeHtml(pregunta) + '</div>' +
            '</div>' +
            '<div class="col-12 col-md-4">' +
            putVideo2(padlet, "padlet") +
            '</div>' +

            '</div>' +

            '</div>' +
            '</div>' +
            '</div>');
    }

    /**
     * Crea el template de la descripción del módulo
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplateDescription(valor) {
        var titulo = check(valor[0]);
        var descripcion = check(valor[1]);
        $(".container").append('<div id="descripcion-modulo" class="card template-6 zoom-anim-dialog mfp-hide">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + converter.makeHtml(titulo) + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row align-items-center">' +
            '<div class="col-12 align-items-center"><div class="text-scroll">' + converter.makeHtml(descripcion) + '</div></div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }


    /**
     * Crea el template 6
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplate6(valor) {
        var titulo = check(valor[0]);
        var imagen = check(valor[1]);
        $("#mainTemplate").append('<div class="card template-7">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + converter.makeHtml(titulo) + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row align-items-center">' +
            '<div class="col-12"><img src="' + imagen + '"></div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    /**
     * Crea los PopUp de las metodologías
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplateMetodologias(valor) {
        var titulo = check(valor[0]);
        var descripcion = check(valor[1]);
        var icono = check(valor[2]);
        var id = check(valor[3]);

        if (id != 0) {
            $(".container").append('<div id="metodologia-' + id + '" class="card template-6 zoom-anim-dialog mfp-hide">' +
                '<div class="card-body">' +
                '<div class="card-content row align-items-center">' +
                '<div class="col-12 estrategia d-flex align-items-center"><img src="' + icono + '" /><h4>' + converter.makeHtml(titulo) + '</h4></div>' +
                '<div class="col-12 align-items-center"><div class="text-scroll">' + converter.makeHtml(descripcion) + '</div></div>' +
                '</div>' +
                '</div>' +
                '</div>');
        }
    }


    /**
     * Crea el template 7
     * @param {Object[]} array - El array completo de las filas de la plantilla 7 que se rendirzará
     * @param {string} array[].v - Valor de la celda a renderizar 
     */
    function createTemplate7(array) {
        var tituloTemplate = array[0][0].v;
        $("#mainTemplate").append('<div class="card template-submodulos">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + tituloTemplate + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row justify-content-center align-items-stretch">');

        for (var i = 1; i < array.length; i++) {
            var titulo = check(array[i][0]);
            var descripcion = check(array[i][1]);
            var metodologia = putIcon(array[i][2].v);
            $('.template-submodulos .card-content').append(
                '<div class="boxSubmodule col-12 col-md-3">' +
                '<div class="submodule d-flex flex-column justify-content-between">' +
                '<div class="title"><h5>' + titulo + '</h5></div>' +
                '<div class="description">' + converter.makeHtml(descripcion) + '</div>' +
                '<div class="metodologia-link d-flex align-items-center">' + metodologia + '</div>' +
                '</div>' +
                '</div>'
            );
        }

        $('.template-submodulos').append('</div>' +
            '</div>' +
            '</div>');
    }

    /**
     * Crea el template 8
     * @param {Object[]} valor - La fila que va a ser renderizada en el DOM
     * @param {string} valor[].v - Valor de la celda a renderizar 
     */
    function createTemplate8(valor) {
        var video1 = check(valor[3]),
            video2 = check(valor[5]);
        var tipo1 = check(valor[2]),
            tipo2 = check(valor[4]);
        var titulo = check(valor[0]);
        var instrucciones = check(valor[1]);
        $("#mainTemplate").append('<div class="card template-8">' +
            '<div class="border-header"></div>' +
            '<div class="card-header d-flex align-items-center d-flex align-items-center"><div class="module-icon"><img src="' + ModuleImg + '" /><div class="shape-icon"></div></div><span>' + converter.makeHtml(titulo) + '</span></div>' +
            '<div class="card-body">' +
            '<div class="card-content row align-items-center">' +
            '<div class="col-12 col-md-6 align-items-center"><div class="text-scroll">' + converter.makeHtml(instrucciones) + '</div></div>' +
            '<div class="row col-12 col-md-6 align-items-center justify-content-center">' +
            putVideo2(video1, tipo1) +
            putVideo2(video2, tipo2) +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    /**
     * Analizar si la celda es nula o tiene algún valor
     * @param {string} variable - Valor de la celda en el documento
     * @returns {string} Retorna el valor de la celda o un string vacío
     */
    function check(variable) {
        if (variable === null || typeof variable === 'undefined') {
            return "";
        } else {
            return variable.v;
        }
    }

    /**
     * Analiza si en la celda hay un link a un video
     * @param {string} variable - Valor de la celda
     * @returns {string} Retorna un string vacío o una estructura HTML, la cual coloca el ícono del video
     */
    function putVideo(variable) {
        cantVideos = cantVideos + 1;
        if (variable === "") {
            return "";
        } else {
            let var2 = variable.substring(0, (variable.indexOf("&") === -1) ? variable.length : variable.indexOf("&"));
            return '<div class="col-md-4"><div class="video-label d-flex align-items-center"><i class="fa fa-play-circle-o" aria-hidden="true"></i><h4>Video ' + cantVideos + '</h4></div><a class="popup-video video" href="' + var2 + '"><img src="https://img.youtube.com/vi/' + var2.substring(var2.indexOf("=") + 1, var2.length) + '/0.jpg"></a></div>';
        }
    }

    /**
     * Analiza si el contenido de la celda es un video, un padlet o ninguno
     * @param {string} variable - Valor de la celda
     * @param {string} tipo - Tipo del recurso. Sea video o padlet
     * @returns {string} Retorna un string vacío, o una estructura HTML, la cual coloca el ícono del video o el ícono del padlet
     */
    function putVideo2(variable, tipo) {
        switch (tipo) {
            case "video":
                return '<div class="row justify-content-center"><a class="popup-video video" href="' + variable + '"><img src="https://img.youtube.com/vi/' + variable.substring(variable.indexOf("=") + 1, (variable.indexOf("&") === -1) ? variable.length : video1.indexOf("&")) + '/0.jpg"></a></div>';
                break;
            case "padlet":
                return '<div class="row justify-content-center"><a class="popup-video padlet" href="' + variable + '"><img src="img/play-padlet.png"></a></div>';
                break;
            default:
                return "";
                break;
        }
    }

    /**
     * Analizar si el contenido está vacío o no para colocarlo como un slider
     * @param {string} variable - Valor de la celda
     * @returns {string} Retorna vacío o una structura HTML, para formar el slider de notas
     */
    function putNote(variable) {
        if (variable === "") {
            return "";
        } else {
            return '<div><div>' + converter.makeHtml(variable) + '</div></div>';
        }
    }

    /**
     * Analizar que ícono es el que se desea aplicar, y colocarlo en el slide, con el respectivo formato
     * @param {string} variable - Valor de la celda 
     * @returns {string} Retorna la estructura HTML, para formar el título de la metodología
     */
    function putIcon(variable) {
        if (variable != "Ninguno") {
            for (var i = 1; i < metodologiasArray.length; i++) {
                var titulo = metodologiasArray[i][0].v;
                var imagen = metodologiasArray[i][2].v;
                var id = metodologiasArray[i][3].v;
                if (variable === titulo) {
                    return '<img src="' + imagen + '" /><h4><a href="#metodologia-' + id + '" class="popup-metodologias">' + titulo + '</a></h4>';
                    break;
                }
            }
            return '';
        } else {
            return '';
        }
    }

    /**
     * Se ejecuta cada vez que se hace un llamado a Google Docs, para renderizar los datos
     */
    function finishedAsync() {
        //Evalua si todas las llamadas fueron ejectudadas
        if (countCalls == 10) {
            //Ordena los slides
            dataArray.sort(function (a, b) {
                return a[a.length - 2].v - b[b.length - 2].v;
            });

            //Guarda el total de páginas que tendrá
            total_pages = dataArray.length;

            //Recorre todo el array de datos, evaluando que tipo de templates ,
            //se usará para cada conjunto de datos
            $.each(dataArray, function (k, v) {
                titulos.push(v[0].v);
                switch (v[v.length - 1].v) {
                    case 1:
                        createTemplate1(v);
                        break;
                    case 2:
                        createTemplate2(v);
                        break;
                    case 3:
                        createTemplate3(v);
                        break;
                    case 4:
                        createTemplate4(v);
                        break;
                    case 5:
                        createTemplate5(v);
                        break;
                    case 6:
                        createTemplate6(v);
                        break;
                    case 7:
                        if(plantilla7Array.length > 0)
                            createTemplate7(plantilla7Array);
                        break;
                    case 8:
                        createTemplate8(v);
                        break;
                    default:
                        break;
                }
            });

            createTemplateDescription(descripcionArray[0]);

            $.each(metodologiasArray, function (k, v) {
                createTemplateMetodologias(v);
            });

            $(".module-icon").css("background-color", moduleColor);
            $(".card-header span").css("color", moduleColor);
            $(".border-header").css("border-top-color", moduleColor);
            $(".shape-icon").css("border-bottom-color", moduleColor);

            //Inicializa el slide principal que contendrá cada página
            $('#mainTemplate').slick({
                dots: false,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                swipe: false
            });

            //Inicializa el slide de notas
            $('.notas').slick({
                dots: true,
                arrows: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                swipe: false
            });

            var maxHeight = $("#mainTemplate .slick-active .card-content").height() + $("#mainTemplate .slick-active .card-header").height(); 
            $('#mainTemplate').css({height: maxHeight + 200, overflow:'visible'});
            //Cuando se avanza en cada página, cambia el número actual y ajusta la propiedad Height
            $('#mainTemplate').on('afterChange', function (event, slick, currentSlide) {
                $(".current_page").text(currentSlide + 1);

                 // Check the class "slick-active" for which has the highest height 
                var maxHeight = $("#mainTemplate .slick-active .card-content").height() + $("#mainTemplate .slick-active .card-header").height(); 
                // Apply the height to the slider conatiner to adapt the height
                // .css overflow added to prevent hide arrows on change - it adds overflow hidden by default
                $(this).css({height: maxHeight + 200, overflow:'visible'});
                $(".dropdown-menu").css({"max-height": maxHeight});
            });

            //Inicializa el scrollbar personalizado para cada contenedor de texto
            $(".text-scroll").mCustomScrollbar({
                theme: "inset"
            });
            
            //Cambia la estructura del scrbollbar personalizado
            $(".mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden").parent().css({
                'display': '-webkit-box',
                'display': '-ms-flexbox',
                'display': 'flex',
                '-webkit-box-align': 'center',
                '-ms-flex-align': 'center',
                'align-items': 'center'
            });

            //Agregar link a todos los títulos
            $(".card-header span").wrap('<a href="#descripcion-modulo" class="popup-description"></a>');
            $(".popup-description, .metodologia-link").append('<span class="lnr lnr-pointer-up"></span>');

            //Inicializa las ventanas PopUp de videos
            $('.popup-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });

            //Inicializa las ventanas PopUp de descripción y metodologías
            $('.popup-description, .popup-metodologias').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });

            //Agrega el footer (paginador del slider principal y menú)
            $('#mainTemplate').append("<div id='slide-nav'><div>" +
            "<div id='goTo'>" +
            "<div id='gotoStart'><span>Inicio</span><div class='circle2'></div></div>" +
            "<div id='gotoEnd'><span>Fin</span><div class='circle2'></div></div>" +
            "</div>" +
            "<div class='pages'>" +
            "<span class='current_page'>1</span><span> de </span><span class='total_pages'>" + total_pages + "</span>" +
            "</div>" +
            "<div id='menu' data-toggle='dropdown'>" +
            "<div class='line'></div>" +
            "<div class='line'></div>" +
            "<div class='line'></div>" +
            "</div>" +
            "<div id='menu-dropup' class='btn-group dropup'>" +
            "</div>" +
            "</div>" +
            "</div>");

            
            //titulos = titulos.slice(0,2);
            //Construye el menú de los slides
            var items = "";
            $.each(titulos, (k, v) => {
                items = `${items} <a id="item${k}" class="dropdown-item">${v}</a>`;
            });
            $('#menu-dropup').append(`<div class='dropdown-menu'> 
                ${items}
                </div>`);

                
            $(".dropdown-menu").css({"max-height": maxHeight});

            //Inicializa el scrollbar del menú
            $(".dropdown-menu").mCustomScrollbar({
                theme: "inset"
            });

                
            //Va al slide al que se da clic
            $.each(titulos, (k, v) => {
                $(`#item${k}`).click((e) => {
                    e.preventDefault();
                    $('#mainTemplate').slick('slickGoTo', k);
                });
            });

            //Va a la primera página
            $("#gotoStart").click(function () {
                $('#mainTemplate').slick('slickGoTo', 0);
            });

            //Va a la última página
            $("#gotoEnd").click(function () {
                $('#mainTemplate').slick('slickGoTo', total_pages - 1);
            });

        }
    }
});

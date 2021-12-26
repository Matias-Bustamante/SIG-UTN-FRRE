
$(document).ready(function(){
    $("#mensaje").hide(); 

    
})



// definicion del mapa y su capa
    var capaBase=new ol.layer.Tile({
        title: "Base Map",
        source: new ol.source.TileWMS({
            url: 'http://wms.ign.gob.ar/geoserver/wms',
            params: {
                'LAYERS': 'capabaseargenmap'
            }
        })
    });

    




//Capa Curso de Agua

var wms_curso_agua=new ol.layer.Tile({ 
title: "Curso de Agua",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Curso_de_Agua_Hid'
    }
})

})

//Capa curvas de Nivel 

var wms_curva_nivel=new ol.layer.Tile({ 
title: "Curva de Nivel",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Curvas_de_Nivel'
    }
})

})









// Capa Espejo de Agua 

var wms_espejo_agua=new ol.layer.Tile({ 
title: "Espejo De Agua",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Espejo_de_Agua_Hid'
    }
})

})






// Capa Isla 


var wms_isla=new ol.layer.Tile({ 
title: "Isla",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Isla'
    }
})

})




// Capa LImite Administrativo 
var wms_limite_pol_admin=new ol.layer.Tile({ 
title: "Limite Politico y Administrativo",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Limite_Politico_Administrativo_Lim'
    }
})

})

//LInea de Conduccion 

var wms_linea_de_conduccion=new ol.layer.Tile({ 
title: "Linea de Conduccion",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Líneas_de_Conducción_Ene'
    }
})

})

// Muro Embalse 

var wms_muro_embalse=new ol.layer.Tile({ 
title: "Muro Embalse",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Muro_Embalse'
    }
})

})
// Red Vial

var wms_red_vial=new ol.layer.Tile({ 
title: "Red Vial",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Red_Vial'
    }
})

})

// Red Ferroviaria 

var wms_red_ferroviaria=new ol.layer.Tile({ 
title: "Red Ferroviaria",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Red_ferroviaria'
    }
})

})



var wms_via_secundaria=new ol.layer.Tile({ 
title: "Vias Secundaria",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Vias_Secundarias'
    }
})

})
sourceA= new ol.source.TileWMS({
url: 'http://localhost:8080/geoserver/GIS/wms',
params: {
    'LAYERS': '	GIS:Actividades_Agropecuarias'
}
})


var wms_agropecuarias=new ol.layer.Tile({ 
title: "Actividades Agropecuarias",
visible:false,
source:sourceA

})

var wms_actividades_economicas=new ol.layer.Tile({ 
title: "Actividades Economicas",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Actividades_Economicas'
    }
})

})


var wms_complejo_energia_ene=new ol.layer.Tile({ 
title: "Complejo de Energia Ene",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Complejo_de_Energia_Ene'
    }
})

})

var wms_edif_construcciones_turisticas=new ol.layer.Tile({ 
title: "Edificio Construcciones Turisticas",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Edif_Construcciones_Turisticas'
    }
})

})


var wms_depor_y_esparcimiento=new ol.layer.Tile({ 
title: "Deportes y Esparcimiento",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Edif_Depor_y_Esparcimiento'
    }
})

})

var wms_educacion=new ol.layer.Tile({ 
title: "Educacion",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Edif_Educacion'
    }
})

})


var wms_religioso=new ol.layer.Tile({ 
title: "Religioso",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Edif_Religiosos'
    }
})

})


var wms_edificio_publico=new ol.layer.Tile({ 
title: "Edificio Publico",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Edificio_Publico_IPS'
    }
})
})


var wms_salud=new ol.layer.Tile({ 
title: "Edificio Salud",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Edificio_de_Salud_IPS'
    }
})

})

var wms_seguridad=new ol.layer.Tile({ 
title: "Edificio Seguridad",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Edificio_de_Seguridad_IPS'
    }
})

})


var wms_ferroviario=new ol.layer.Tile({ 
title: "Edificio Ferroviario",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Edificios_Ferroviarios'
    }
})

})


var wms_ejido=new ol.layer.Tile({ 
title: "Ejido",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Ejido'
    }
})

})


var wms_espejo_agua=new ol.layer.Tile({ 
title: "Espejo de Agua",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Espejo_de_Agua_Hid'
    }
})

})



var wms_estructura_portuaria=new ol.layer.Tile({ 
title: "Estructura Portuaria",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Estructuras_portuarias'
    }
})

})


var wms_infra_aeroportuaria=new ol.layer.Tile({ 
title: "Infraestructura Aeroportuaria",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Infraestructura_Aeroportuaria_Punto'
    }
})

})


var wms_infra_hidro=new ol.layer.Tile({ 
title: "Infraestructura Hidro",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Infraestructura_Hidro'
    }
})

})


var wms_isla=new ol.layer.Tile({ 
title: "Isla",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Isla'
    }
})

})



var wms_localidades=new ol.layer.Tile({ 
title: "Localidades",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Localidades'
    }
})

})


var wms_marcas_señales=new ol.layer.Tile({ 
title: "Marcas y Señales",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Marcas_y_Señales'
    }
})

})


var wms_obra_portuaria=new ol.layer.Tile({ 
title: "Obra Portuaria",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Obra_Portuaria'
    }
})

})

var wms_obra_comunicacion=new ol.layer.Tile({ 
title: "Comunicacion",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Obra_de_Comunicación'
    }
})

})


var wms_otras_edificaciones=new ol.layer.Tile({ 
title: "Otras Edificaciones",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Otras_Edificaciones'
    }
})

})


var wms_pais_limitrofe=new ol.layer.Tile({ 
title: "Pais Limitrofe",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Pais_Lim'
    }
})

})



var wms_provincias=new ol.layer.Tile({ 
title: "Provincias",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Provincias'
    }
})

})


var wms_puente_red_vial=new ol.layer.Tile({ 
title: "Puente Red Vial",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Puente_Red_Vial_Puntos'
    }
})

})


var wms_alturas_topograficas=new ol.layer.Tile({ 
title: "Altura Topograficas",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Puntos_de_Alturas_Topograficas'
    }
})

})


var wms_punto_del_terreno=new ol.layer.Tile({ 
title: "Puntos del Terreno",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Puntos_del_Terreno'
    }
})

})

var wms_salvado_obstaculo=new ol.layer.Tile({ 
title: "Salvado de Obstaculo",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Salvado_de_Obstaculo'
    }
})

})


var wms_senial=new ol.layer.Tile({ 
title: "Señalizaciones",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Señalizaciones'
    }
})

})


var wms_suelo_costero=new ol.layer.Tile({ 
title: "Suelo Costero",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Sue_Costero'
    }
})

})


var wms_suelo_hidromorfologico=new ol.layer.Tile({ 
title: "Suelo hidromorfologico",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Sue_Hidromorfologico'
    }
})

})


var wms_suelo_no_consolidado=new ol.layer.Tile({ 
title: "Suelo no consolidado",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Sue_No_Consolidado'
    }
})

})



var wms_suelo_congelado=new ol.layer.Tile({ 
title: "Suelo Congelado",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Sue_congelado'
    }
})

})

var wms_suelo_consolidado=new ol.layer.Tile({ 
title: "Suelo Consolidado",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Sue_consolidado'
    }
})

})


var wms_veg_arborea=new ol.layer.Tile({ 
title: "Vegetacion Arborea",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Veg_Arborea'
    }
})

})

var wms_veg_arbustiva=new ol.layer.Tile({ 
title: "Vegetacion Arbustiva",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Veg_Arbustiva'
    }
})

})


var wms_veg_cultivos=new ol.layer.Tile({ 
title: "Vegetacion de Cultivos",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:Veg_Cultivos'
    }
})

})


var wms_veg_suelo_desnudo=new ol.layer.Tile({ 
title: "Suelo Desnudo",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:Veg_Suelo_Desnudo'
    }
})

})



var wms_veg_hidro=new ol.layer.Tile({ 
title: "Vegetacion Hidrofila",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': '	GIS:veg_Hidrofila'
    }
})

})



var wms_nueva_capa=new ol.layer.Tile({ 
title: "Nueva Capa",
visible:false,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'GIS:nueva_capa', 
        
    }
})

})
                                      
                                    
var wms_provincias_base=new ol.layer.Tile({ 
title: "Provincias",
visible:true,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver//wms',
    params: {
        'LAYERS': 'prueba:Provincias'
    }
})

})                        
                        

var wms_limite_base=new ol.layer.Tile({ 
title: "Limite Administrativo",
visible:true,
source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/GIS/wms',
    params: {
        'LAYERS': 'prueba:Limite_Politico_Administrativo_Lim'
    }
})

})                        

           
            
    




var rotate=new ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom(), new ol.interaction.KeyboardPan()])


  
    var map = new ol.Map({
        target: 'map',
        layers: [capaBase,wms_provincias_base,wms_limite_base,wms_agropecuarias,wms_actividades_economicas, wms_punto_del_terreno,wms_senial,
            wms_edif_construcciones_turisticas, wms_depor_y_esparcimiento,wms_educacion,wms_religioso,wms_edificio_publico,wms_salud,wms_seguridad, 
            wms_ferroviario,wms_estructura_portuaria,wms_infra_aeroportuaria,wms_localidades,wms_infra_hidro,wms_obra_portuaria,wms_obra_comunicacion,
            wms_otras_edificaciones,wms_marcas_señales,wms_puente_red_vial, wms_alturas_topograficas,wms_salvado_obstaculo,wms_complejo_energia_ene,
            wms_curso_agua,wms_curva_nivel,wms_limite_pol_admin,wms_linea_de_conduccion,wms_muro_embalse,
            wms_red_vial,wms_red_ferroviaria,wms_via_secundaria,wms_ejido,wms_espejo_agua,wms_isla,wms_pais_limitrofe,wms_provincias,
            wms_suelo_costero,wms_suelo_hidromorfologico,wms_suelo_no_consolidado,wms_suelo_congelado,wms_suelo_consolidado,
            wms_veg_arborea,wms_veg_arbustiva,wms_veg_cultivos,wms_veg_suelo_desnudo,wms_veg_hidro,wms_nueva_capa
    
           
        ],
        
        view: new ol.View({
            projection: 'EPSG:4326',
            center: [-59,-40],
            zoom: 4, 
            minZoom:4, 
            maxZoom:100
        }), 
    });
    

    control=new ol.control.MousePosition({numDigits:2, 
        coordinateFormat:function(coordinate) { 
            return ol.coordinate.toStringHDMS(coordinate)
        },
        projection:'EPSG:4326', 
        target:document.getElementById('myposition'), 
        undefinedHTML:' EPSG:4326 El cursor no esta sobre el mapa  &nbsp'
    }); 
    map.addControl(control); 
      


 // muestra las capas activada en el mapa
 for (let x=3; x<=50; x++) 
 { 
     checkbox=document.getElementById(x); 
     checkbox.addEventListener('change', function () {
         var checked = this.checked; 
         
         //seteo la propiedad "visible" de mi capa en función al valor
         if (checked !== map.getLayers().item(x).getVisible()) {
             map.getLayers().item(x).setVisible(checked); 
             
         }


 })
}; 


map.addControl(new ol.control.ZoomSlider())

//Interaccion para crear un dragBox
var selectInteraction = new ol.interaction.DragBox({
    //condicion mediante la cual se activa la interaccion
    condition: ol.events.condition.shiftKeyOnly, //| //ol.events.condition.altShiftKeysOnly
    //estilo del rectangulo a dibujar (el dragbox)
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color:[0,0,255,1],
            width:9
        }), 
        fill:new ol.style.Fill({ 
            color:'rgba(255, 255, 255, 5)'

        })
    })
});
//agrego la interaction al mapa



// subscribo una funcion al evento boxend de la interaction
selectInteraction.on('boxend', function (evt) {
    //mando por consola las coordenadas de la geometria creada
    console.log('boxend', selectInteraction);
    //console.log(map.getLayers().item(3)); 
    
    consultar(selectInteraction.getGeometry().getCoordinates())

});



map.addInteraction(new ol.interaction.PinchZoom({Duration:100}))
const navegacion=document.querySelector("#navegacion"); 

navegacion.addEventListener('click', function() { 
   
    map.addInteraction(new ol.interaction.DragPan({ kinetic: new ol.Kinetic(-0.01, 0.1, 200)}))
    map.addInteraction(new ol.interaction.DoubleClickZoom())
    map.addInteraction(new ol.interaction.DragZoom()); 
   map.removeInteraction(draw)
   
})



var consultar=function(coordinate) { 
    var geometria; 
    var resolucion; 
    if (coordinate.length===2) 
    { 
       
        wkt='POINT('+coordinate[0]+'00000'+' '+ coordinate[1]+'00000'+')';  
        geometria=1; 
        resolucion=map.getView().getResolution(); 
    }else 
    { 
        RESOLUCION=0
        geometria=2; 
       
        var wkt
         wkt = 'POLYGON((';
         for (var i = 0; i < coordinate[0].length - 1; i++) 
         {
                 wkt += coordinate[0][i][0] + ' ' + coordinate[0][i][1] + ',';
                }
                wkt += coordinate[0][0][0] + ' ' + coordinate[0][0][1] + '))'
    }
   
    //window.open('consulta.php?wkt='+wkt);
    var capa; 
    for (var i=3; i<51; i++) 
    { 
        if (map.getLayers().item(i).getVisible()) 
        { 
            capa=i; 
        }
    }
    

    if (capa !==undefined) 
    { 
       if (capa!=50) 
       {  

        var parametros={ 
            "wkt":wkt, 
            "valor_2": capa, 
            "condicion":geometria, 
            "resolucion":resolucion
        }

        $.ajax({ 
            url:"consulta.php", 
            type:"GET", 
            data:parametros, 
            success: function(response) {  
               
                
                if (jQuery.isEmptyObject(response)===false) 
                { 
                   response=JSON.parse(response); 
                   console.log(response)
                    
                   
                    let tabla='<tr><td>Geometria</td><td>Escala</td><td>Fuente</td><td>Responsable</td>';
                    for (elem of response) 
                    { 
                        tabla+=`<tr><td>${elem.campo_1}</td><td>${elem.campo_2}</td> <td> ${elem.campo_3}</td> <td> ${elem.campo_4}</td></tr>`
                    } 
                    document.querySelector(".titulo").innerHTML=map.getLayers().item(capa).N.title;
                    document.querySelector(".table").innerHTML=tabla;
                    $("#resultado").show();
                }else 
                {
                    let tabla='<tr><td>Geometria</td><td>Nombre</td><td>Escala</td><td>Fuente</td><td>Operador</td>';
                    for (elem of response) 
                    { 
                        tabla+=`<tr><td>${elem.geom}</td><td>${elem.nombre}</td> <td> ${elem.escala}</td> <td> ${elem.fuente}</td><td> ${elem.operador}</td></tr>`
                    } 
                    document.querySelector(".titulo").innerHTML=map.getLayers().item(capa).N.title;
                    document.querySelector(".table").innerHTML=tabla;
                    $("#resultado").show();
                    
                }
                 
            }
        })
    }else 
    { 
        console.log(capa)
        var param={ 
            'wkt':wkt,
            'condicion':geometria,
            'resolucion':resolucion,
        }
        $.ajax({ 
            url:'consulta_capaNueva.php', 
            data:param, 
            type:'GET', 
            success:function(response){ 
                
                response=JSON.parse(response); 
                let tabla='<tr><td>Geometria</td><td>Campo1</td><td>Campo2</td>';
                for (elem of response) 
                { 
                    tabla+=`<tr><td>${elem.geom}</td><td>${elem.campo_1}</td> <td> ${elem.campo_2}</td></tr>`
                } 
                document.querySelector(".titulo").innerHTML=map.getLayers().item(capa).N.title;
                document.querySelector(".table").innerHTML=tabla;
                $("#resultado").show();
               
            }
        })
    }
         
      
        
    }
   
    //return;
};

var drawingSource = new ol.source.Vector();
//Add drawing layer
var drawingLayer = new ol.layer.Vector({
    source: drawingSource
});
map.addLayer(drawingLayer);
var draw;
var modify;



// Drawing interaction
draw = new ol.interaction.Draw({
    source : drawingSource,
    type : 'Polygon',
    //only draw when Ctrl is pressed.
    condition : ol.events.condition.platformModifierKeyOnly
});




draw.on('drawend', function(e) {

    // features that intersect the box are added to the collection of
    // selected features, and their names are displayed in the "info"
    // div
    var extent = e.feature.getGeometry().getExtent();
    
    consultar(e.feature.getGeometry().getCoordinates()); 
    
});


map.on('click',function(evt){
    if(evt.dragging){
        return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    
    var hit = map.forEachFeatureAtPixel(pixel,function(feature){
        return true;
    });
    map.getTargetElement().style.cursor = hit? 'pointer' : '';
});




draw.on('drawstart', function() { 
    drawingSource.clear()
})

punto=document.getElementById('punto')


$('#modal_punto').hide()
punto.onclick=function() 
{ 
    map.addInteraction(draw)
    var coord; 
    map.on('click', function(evt) 
    { 
        $('#modal_punto').show(); 
        coord='POINT('+evt.coordinate[0]+' '+evt.coordinate[1]+')';
        document.getElementById("campo_3").value=coord; 
        
       
        
    })

  
    $('#enviar').on('click', function() 
    { 
        campo_1=$('#campo_1').val(); 
        campo_2=$('#campo_2').val(); 
        coord=$("#campo_3").val(); 
       
        var parametros={ 
            'valor_1':campo_1, 
            'valor_2':campo_2, 
            'valor_3':coord
        }
        $.ajax({ 
            url:'insertar.php', 
            data:parametros, 
            type:'GET', 
            success:function(response) 
            { 
               if (response==1) 
               { 
                   
                   $("#mensaje").show(); 
               }
              
            }
        })
       
    })
   
}


$("#resultado").hide(); 
consulta=document.getElementById("consulta"); 
consulta.addEventListener('click', function() { 
    
    map.addInteraction(selectInteraction);
    map.addInteraction(draw)
})

consulta_punto=document.getElementById('consulta_punto'); 
consulta_punto.addEventListener('click', function() 
{ 
    map.addInteraction(draw); 
            map.on('click', function(evt) 
                { 
                
                $("#modal_punto").hide(); 
                consultar(evt.coordinate)

                })


})


var scale=new ol.control.ScaleLine( { 
    units:'degrees', 
    minWidth:100
}); 

map.addControl(scale); 


var borrar=document.getElementById("borrar"); 
borrar.addEventListener('click', function()
{   
    
    drawingSource.clear()
    map.removeInteraction(draw)
    punto.checked=false; 
    $("#campo_1").val(' '); 
    $("#campo_2").val(' ')
   
    $('#modal_punto').hide(); 
    $("#resultado").hide(); 
  

    map.removeInteraction(draw2)
    if (measureTooltipElement) 
    { 
        var elem=document.getElementsByClassName('tooltip tooltip-static'); 
        for (var i=elem.length-1; i>=0; i--) 
        { 
            elem[i].remove(); 
        }
    }
    if (vector) 
    { 
        vector.getSource().clear(); 
    }
   
   
     
})









var source = new ol.source.Vector();

var vector = new ol.layer.Vector({
  source: source,
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(0, 255, 255, 0.2)'
    }),
    stroke: new ol.style.Stroke({
      color: '#ffcc33',
      width: 2
    }),
    image: new ol.style.Circle({
      radius: 7,
      fill: new ol.style.Fill({
        color: '#ffcc33'
      })
    })
  })
});


/**
 * Currently drawn feature.
 * @type {ol.Feature}
 */
var sketch;


/**
 * The help tooltip element.
 * @type {Element}
 */
var helpTooltipElement;


/**
 * Overlay to show the help messages.
 * @type {ol.Overlay}
 */
var helpTooltip;


/**
 * The measure tooltip element.
 * @type {Element}
 */
var measureTooltipElement;


/**
 * Overlay to show the measurement.
 * @type {ol.Overlay}
 */
var measureTooltip;


/**
 * Message to show when the user is drawing a polygon.
 * @type {string}
 */
var continuePolygonMsg = 'Click to continue drawing the polygon';


/**
 * Message to show when the user is drawing a line.
 * @type {string}
 */
var continueLineMsg = 'Click to continue drawing the line';


/**
 * Handle pointer move.
 * @param {ol.MapBrowserEvent} evt
 */
var pointerMoveHandler = function(evt) {
  if (evt.dragging) {
    return;
  }
  /** @type {string} */
  var helpMsg = 'Click to start drawing';

  if (sketch) {
    var geom = (sketch.getGeometry());
    if (geom instanceof ol.geom.Polygon) {
      helpMsg = continuePolygonMsg;
    } else if (geom instanceof ol.geom.LineString) {
      helpMsg = continueLineMsg;
    }
  }

  //helpTooltipElement.innerHTML = "Siga Dibujando";
  helpTooltip.setPosition(evt.coordinate);

  $(helpTooltipElement).removeClass('hidden');
};


map.on('pointermove', pointerMoveHandler);

$(map.getViewport()).on('mouseout', function() {
  $(helpTooltipElement).addClass('hidden');
});
map.addLayer(vector)

var typeSelect = document.getElementById('type');
createMeasureTooltip();
createHelpTooltip();


var draw2; // global so we can remove it later
function addInteraction() {
  var type = (typeSelect.value == 'area' ? 'Polygon' : 'LineString');
  draw2 = new ol.interaction.Draw({
    source: source,
    type: (type), /** @type {ol.geom.GeometryType} */ 
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 0,0, 0.5)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255, 0, 0, 0.9)',
        lineDash: [10, 10],
        width: 2
      }),
      image: new ol.style.Circle({
        radius: 5,
        stroke: new ol.style.Stroke({
          color: 'rgba(255, 0, 0, 0.7)'
        }),
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        })
      })
    })
  });

  if (typeSelect.value=='select') 
  { 
      map.removeInteraction(draw2); 
     
      if (vector) 
      { 
          vector.getSource().clear(); 
      }
      map.removeOverlay(helpTooltip); 
      
      
     
      console.log(typeSelect.value)

      if (measureTooltipElement) 
      { 
          var elem=document.getElementsByClassName('tooltip tooltip-static'); 
          for (var i=elem.length-1; i>=0; i--) 
          { 
              elem[i].remove(); 
          }
      }

  }else if (typeSelect.value=='area' || typeSelect.value=='length') 
  { 
      map.addInteraction(draw2)
    
      
      
  

           

  var listener;
  draw2.on('drawstart',
      function(evt) {
        // set sketch
        sketch = evt.feature;

        /** @type {ol.Coordinate|undefined} */
        var tooltipCoord = evt.coordinate;

        listener = sketch.getGeometry().on('change', function(evt) {
          var geom = evt.target;
          var output;
          if (geom instanceof ol.geom.Polygon) {
            output = formatArea(/** @type {ol.geom.Polygon} */ (geom));
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
          } else if (geom instanceof ol.geom.LineString) {
            output = formatLength( /** @type {ol.geom.LineString} */ (geom));
            tooltipCoord = geom.getLastCoordinate();
          }
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      }, this);


      draw2.on('drawend',
      function(evt) {
        
        measureTooltipElement.className = 'tooltip tooltip-static';
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        ol.Observable.unByKey(listener);
      }, this);
    }
}

function createHelpTooltip() {
    if (helpTooltipElement) {
      helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'tooltip hidden';
    helpTooltip = new ol.Overlay({
      element: helpTooltipElement,
      offset: [15, 0],
      positioning: 'center-left'
    });
    map.addOverlay(helpTooltip);
  }

  function createMeasureTooltip() {
    if (measureTooltipElement) {
      measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'tooltip tooltip-measure';
    measureTooltip = new ol.Overlay({
      element: measureTooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent:false, 
      insertFirst:false
    });
    map.addOverlay(measureTooltip);
  }



  var formatLength = function(line) {
    var length = ol.Sphere.getLength(line,{projection:'EPSG:4326'});
    var output;
    if (length > 100) {
      output = (Math.round(length / 1000 * 100) / 100) +
          ' ' + 'km';
    } else {
      output = (Math.round(length * 100) / 100) +
          ' ' + 'm';
    }
    return output;
  };
  
  
  /**
   * Format area output.
   * @param {ol.geom.Polygon} polygon The polygon.
   * @return {string} Formatted area.
   */
  var formatArea = function(polygon) {
    var area = ol.Sphere.getArea(polygon,{projection:'EPSG:4326'});
    var output;
    if (area > 10000) {
      output = (Math.round(area / 1000000 * 100) / 100) +
          ' ' + 'km<sup>2</sup>';
    } else {
      output = (Math.round(area * 100) / 100) +
          ' ' + 'm<sup>2</sup>';
    }
    return output;
  };
typeSelect.onchange=function() 
{ 
    map.removeInteraction(draw2); 
    addInteraction(draw2)
}
 
      addInteraction()
  
  













<?php 
$conexion=pg_connect("host=localhost dbname=GIS user=postgres password=root"); 
$wkt=$_GET['wkt']; 
$capanumero=$_GET['valor_2']; 
$geometria=$_GET['condicion']; 



if ($conexion) 
{ 
    $capa=["null","null","null","actividades_agropecuarias","actividades_economicas","punto_terreno",
    "senial","construcciones_turisticas","depor_esparcimiento","edif_educacion","edif_religiosos", 
    "edif_publico_ips","edif_salud_ips","edif_seguridad_ips","edif_ferroviarios","estructura_portuaria", 
    "infra_aeroportuaria","localidades","infra_hidro","obra_portuaria","obra_comunicacion", 
    "otras_edificaciones","marcas_seniales","puente_red_vial","alturas_topograficas","salvado_obstaculo",
    "complejo_energia_ene","curso_agua","curva_nivel","limite_pol","linea_conduccion", 
    "muro_embalse","red_vial","red_ferroviaria","vias_secundarias","ejido","espejo_agua",
    "isla","paises_lim","provincias","sue_costero","sue_hidromorfologico","sue_no_consolidado",
    "sue_congelado","sue_consolidado","veg_arborea","veg_cultivos","veg_suelo_desnudo", 
    "veg_hidrofila"

]; 
    
if ($geometria==2) 
{ 


$query=<<<EOD
SELECT st_astext(geom),escala,fuente,responsabl FROM $capa[$capanumero] WHERE 
st_intersects(
ST_geomfromtext('$wkt',4326),
geom
) 

EOD;
    $resultado=pg_query($conexion, $query); 
    $json=array(); 
    while ($resul=pg_fetch_row($resultado)) 
    { 
        $json[] =array( 
            'campo_1'=>$resul[0], 
            'campo_2'=>$resul[1],
            'campo_3'=>$resul[2],
            'campo_4'=>$resul[3]
            
           
            
            
        );
    }
    if (pg_num_rows($resultado)>0) 
    { 
    $jsonString=json_encode($json); 
    echo $jsonString;  
    }else 
    { 
        
$query=<<<EOD
SELECT st_astext(geom),escala,fuente,responsabl FROM $capa[$capanumero] 

EOD;
    $resultado=pg_query($conexion, $query); 
    $json=array(); 
    while ($resul=pg_fetch_row($resultado)) 
    { 
        $json[] =array( 
            'campo_1'=>$resul[0], 
            'campo_2'=>$resul[1],
            'campo_3'=>$resul[2],
            'campo_4'=>$resul[3]
            
           
            
            
        );
    }
    $jsonString=json_encode($json); 
    echo $jsonString; 
    
    
    
    
    }  

}else 
{ 
$resolucion=$_GET['resolucion'];
$resolucion=$resolucion*3;

$query=<<<EOD
SELECT st_astext(geom),escala,fuente,responsabl FROM $capa[$capanumero] 
WHERE st_dwithin(st_geomfromtext('$wkt',4326),geom,$resolucion)
EOD; 
    $resultado=pg_query($conexion, $query); 
    $json=array(); 
   
    while ($resul=pg_fetch_row($resultado)) 
    { 
        $json[] =array( 
            'campo_1'=>$resul[0], 
            'campo_2'=>$resul[1], 
            'campo_3'=>$resul[2],
            'campo_4'=>$resul[3],
        );
    }

    if (pg_num_rows($resultado)>0) 
    { 
    $jsonString=json_encode($json); 
    echo $jsonString;   
    }else 
    { 
        $query=<<<EOD
SELECT st_astext(geom),escala,fuente,responsabl FROM $capa[$capanumero] 
EOD; 
    $resultado=pg_query($conexion, $query); 
    $json=array(); 
   
    while ($resul=pg_fetch_row($resultado)) 
    { 
        $json[] =array( 
            'campo_1'=>$resul[0], 
            'campo_2'=>$resul[1], 
            'campo_3'=>$resul[2],
            'campo_4'=>$resul[3],
        );
    }
    $jsonString=json_encode($json); 
    echo $jsonString; 

    } 




    
}
}
 

//echo "$name $variable"; 
//header("Location: visor.html"); 
//echo '<script>$variable</script>'
?>
<?php 
$conexion=pg_connect("host=localhost dbname=GIS user=postgres password=root"); 
$wkt=$_GET['wkt']; 
$geometria=$_GET['condicion']; 

if ($conexion) 
{ 
    if ($geometria==2) 
    {
    $query=<<<EOD
    SELECT ST_AsText(geom),provincia,responsable FROM "nueva_capa" WHERE ST_intersects(st_geomfromtext('$wkt',4326),geom)
    EOD; 
    $consulta=pg_query($conexion,$query); 
    $json=array(); 
    while($resul=pg_fetch_row($consulta)) 
    { 
        $json[]=array( 
            'geom'=>$resul[0], 
            'campo_1'=>$resul[1], 
            'campo_2'=>$resul[2], 
        ); 
    }
    $jsonString=json_encode($json); 
    echo $jsonString; 
}else 
{ 
    $resolucion=$_GET['resolucion']; 
    $resolucion=$resolucion*3;

$query=<<<EOD
SELECT ST_AsText(geom),provincia,responsable FROM "nueva_capa" 
WHERE st_dwithin(st_geomfromtext('$wkt',4326),geom,$resolucion)
EOD; 
    $resultado=pg_query($conexion, $query); 
    $json=array(); 
   
    while ($resul=pg_fetch_row($resultado)) 
    { 
        $json[] =array( 
            'geom'=>$resul[0], 
            'campo_1'=>$resul[1], 
            'campo_2'=>$resul[2],
           
        );
    }

    $jsonString=json_encode($json); 
    echo $jsonString;
}
}

?>
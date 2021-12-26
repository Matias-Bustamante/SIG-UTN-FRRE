<?php 
$conexion=pg_connect("host=localhost dbname=GIS user=postgres password=root");
$campo_1=$_GET['valor_1']; 
$campo_2=$_GET['valor_2']; 
$geometria=$_GET['valor_3']; 

if ($conexion) 
{  
    $query="Select * from nueva_capa"; 
    $consulta=pg_query($conexion,$query); 
    $registro=pg_num_rows($consulta); 
    $registro=$registro+1; 

    $query="INSERT INTO nueva_capa (id, geom,provincia, responsable) values($registro, ST_geomfromtext('$geometria',4326), '$campo_2', '$campo_1') "; 
    $ingreso=pg_query($conexion,$query); 
    if ($ingreso) 
    { 
        echo true; 
    }else 
    { 
        echo false; 
    }
}


?>
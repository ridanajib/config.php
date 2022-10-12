<?php

include "triangle.php";
include "multiplication.php";
include "tri_selection.php";
include "moyenne.php";

define("EXERCICE",2);

if (EXERCICE == 0){
    $mes_notes=array(12,8,10);
    echo  moyenne($mes_notes);
}

if(EXERCICE==1){
    if(isset($_GET['n']))
    {
        triangle($_GET['n']);
    }
    else{
        echo "n manquant";
    }
}

if (EXERCICE == 2){

    multiplication($_GET['n'] , $_GET['m'] );
}

if(EXERCICE == 4 ){
    tri_selection($t=$_GET['t']);
}



?>

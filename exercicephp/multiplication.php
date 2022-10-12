<?php

function multiplication($my_n , $my_m){


    $my_n=$_GET['n'];
    $my_n=$_GET['m'];


    for ($i=1; $i <= $my_n; $i++){
        for ($j=1; $j <= $my_m; $j++)
        {
            echo $i*$j ;
        }
        echo"</br>";
    }

}


?>
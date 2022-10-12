<?php
function triangle($nbr){
    $nbr=$_GET['n'];
    for($i=1;$i<=$nbr ; $i++){
        for($j=1; $j<=$i ; $j++){
            echo '*';
        }
        echo"</br>";
    }
}
?>
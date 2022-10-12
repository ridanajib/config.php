<?php
function moyenne($notes){
    $somme=0;
    $l=sizeof($notes);
    for($i=0 ; $i<$l ; $i++){
        $somme=$somme+$notes[$i];
    }
    $result=$somme/$l;


    return $result;



}
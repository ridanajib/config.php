<?php

function tri_selection($t){
    $n = sizeof($t);
    for ($i=0; $i<n-2; $i++){
        $min = $i;
        for ($j=$i+1; $j<$n-1; $j++){
            if (t[$j]<$t[$min])
                $min = $j;
        }
        if ($min != $i){
            $save = $t[$i];
            $t [$min] = t [$min];
            $t [$min] = $save;
        }
    }
}

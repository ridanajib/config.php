<?php
//recupére l'id a partir de l'url traitement.php?id=*
$id=$_GET['id'];
//est une fonction intégrée en PHP qui lit un fichier dans une chaîne de caractères.
$data=file_get_contents("courses.json");
//est une fonction intégrée en PHP qui est utilisé pour décoder ou convertir un objet JSON en un objet PHP.
$data=json_decode($data);
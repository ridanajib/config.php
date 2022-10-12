// The following example creates complex markers to indicate markers near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap(idSelect) {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        //center: {lat: 48.95930033308523, lng: 2.5477890651742516},
    });
    if(idSelect== undefined)
        idSelect =0;
    console.log(idSelect);
    setMarkers(map,idSelect);
}

function setMarkers(map,idSelect=0) {
    $.ajax({
            url: "courses.json",
            method:"get",
            dataType: "JSON",
            data: idSelect,
            success: function(courses){

                /*  courses is an array of objects with two key
                    [{…}, {…}, {…}, {…}, {…}, {…}]
                    0: {lat: 48.95930033308523, lng: 2.5477890651742516}
                    1: {lat: 48.95901659236071, lng: 2.544364368005043}
                    2: {lat: 48.96083250510581, lng: 2.5428194730675138}
                    3: {lat: 48.96334006261106, lng: 2.5503223316267305}
                    4: {lat: 48.96146800531762, lng: 2.553135524155863}
                    5: {lat: 48.95997156116078, lng: 2.548567662388221}
                */
                console.log(courses[idSelect]['markers']);

                /*
                Drawing the map with markers of the selected course
                */
                markers = courses[idSelect]["markers"];
                //on  centre la map sur le premier repère du tableau de reperes
                // {lat: ..., lng:...}
                map.setCenter(markers[0]);

                for(let i=0; i<markers.length; i++){
                    mylat = markers[i].lat
                    mylng = markers[i].lng
                    new google.maps.Marker(
                        {
                            position : {lat: mylat, lng:  mylng},
                            map
                        }
                    );

                }

                // polylines
                const flightPath = new google.maps.Polyline({
                    path: markers,
                    geodesic: true,
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                });

                flightPath.setMap(map);


            }
        }
    );


}
var div_root = document.querySelector('#root');

let tab = [];
do{
    val =parseInt( prompt("saisissez un nombre > 0"));
    if (val>0) tab.push(val);
}while(val > 0)

console.log(tab);

$.ajax({
    url: "main.php",
    method: "GET",
    data: {t:tab},
    dataType: "json",
    success: function(data){
        console.log(data);
        let p = document.createElement('p');
        div_root.appendChild(p);
        //  Interpolation Template literals `${}`
        p.textContent = `${data}`;
        div_root.style.display="";
    }
});
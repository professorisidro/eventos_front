function recuperaDeptos(){
    var search = window.location.search;
    var idDepto = search.substr(4);

    console.log("Id Depto = "+idDepto);

    fetch("http://localhost:8088/departamentos/"+idDepto)
        .then(res => res.json())
        .then(res => console.log(res));
}
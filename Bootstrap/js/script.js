/*Pour la liste déroulantes*/ 
let deroulant = document.querySelector('deroulant');
deroulant.onclick() = function(){
    deroulant.style.display = "block";
    deroulant.style.display = "none";

}





let point1 = document.querySelector('#point1');
point1.onclick = function(){
    point1.style.backgroundColor = "#0000FF";
    point2.style.backgroundColor = "white";
    point3.style.backgroundColor = "white";
    let slide1 = document.getElementById('slide1');
    let slide2 = document.getElementById('slide2');
    let slide3 = document.getElementById('slide3');
    slide2.style.display = 'none';
    slide3.style.display = 'none';
    slide1.style.display = 'block';
}

let point2 = document.querySelector('#point2');
point2.onclick = function(){
    point2.style.backgroundColor = "#0000FF";
    point1.style.backgroundColor = "white";
    point3.style.backgroundColor = "white";
    let slide2 = document.getElementById('slide2');
    let slide3 = document.getElementById('slide3');
    let slide1 = document.getElementById('slide1');
    slide2.style.display = 'block';
    slide1.style.display = 'none';
    slide3.style.display = 'none';
}

let point3 = document.querySelector('#point3');
point3.onclick = function(){
    point3.style.backgroundColor = "#0000FF";
    point2.style.backgroundColor = "white";
    point1.style.backgroundColor = "white";
    let slide3 = document.getElementById('slide3');
    let slide2 = document.getElementById('slide2');
    let slide1 = document.getElementById('slide1');
    slide3.style.display = 'block';
    slide1.style.display = 'none';
    slide2.style.display = 'none';


}



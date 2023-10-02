//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

let links = document.querySelectorAll("a");
for (let i =  0; i<links.length; i++){
    links[i].href = "";
}

/*Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.*/

let pics = document.querySelectorAll("img");
for (let i =  0; i<pics.length; i++){
    pics[i].addEventListener("click", function(){
        pics[i].src =  getRandom(giftsAleatorios);
    })
    
};

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
let textos = document.querySelectorAll("p");
for (let i =  0; i<textos.length; i++){
    textos[i].addEventListener("click", function(){
        textos[i].style.backgroundColor = getRandom(colors2);
        textos[i].style.color = getRandom(colors2);
    });

};

//2.3 Bloques de article o section: Cambia el color de fondo.
let cuadroSection = document.querySelectorAll("section");
for (let i =  0; i<cuadroSection.length; i++){
    cuadroSection[i].addEventListener("click", function(){
        cuadroSection[i].style.backgroundColor = getRandom(colors2);
    });
};

let cuadroArticle = document.querySelectorAll("article");
for (let i =  0; i<cuadroArticle.length; i++){
    cuadroArticle[i].addEventListener("click", function(){
        cuadroArticle[i].style.backgroundColor = getRandom(colors2);
    });
};


/*Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.*/
for (let i = 0; i<pics.length; i++){
    var originalSrc = []
    for (let i = 0; i<pics.length; i++){
        originalSrc[i] = pics[i].src
    }
    pics[i].addEventListener("mouseover", function(){
        pics[i].src = "assets/abracadabra.gif"
    })
    pics[i].addEventListener("mouseout", function(){
        pics[i].src = originalSrc[i];
    })
};

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for (let i =  0; i<textos.length; i++){
    textos[i].addEventListener("mouseover", function(){
        textos[i].classList.toggle("pMouseOver")
    });
    textos[i].addEventListener("mouseout", function(){
        textos[i].classList.toggle("pMouseOver")
    });
};

//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

for (let i =  0; i<cuadroSection.length; i++){
    cuadroSection[i].addEventListener("mouseover", function(){
        cuadroSection[i].classList.toggle("sectionMouseOver")
    });
    cuadroSection[i].addEventListener("mouseout", function(){
        cuadroSection[i].classList.toggle("sectionMouseOver")
    });
};

for (let i =  0; i<cuadroArticle.length; i++){
    cuadroArticle[i].addEventListener("mouseover", function(){
        cuadroArticle[i].classList.toggle("articleMouseOver")
    });
    cuadroArticle[i].addEventListener("mouseout", function(){
        cuadroArticle[i].classList.toggle("articleMouseOver")
    });
};

/*Premium

Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.*/

// imprime 'red', 'blue' o 'green'

const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
    let colorNum = Math.floor(Math.random() * array.length);
    return array[colorNum]
}

console.log(getRandom(colors))

//Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

const colors2 = ["#8ECAE6", "#219EBC", '#023047', "#FFB703", "#FB8500"];

//Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.

const giftsAleatorios = ["assets/magic-1.gif",  "assets/magic-2.gif",  "assets/magic-3.gif",  "assets/magic-4.gif",  "assets/magic-5.gif",  "assets/magic-6.gif"]
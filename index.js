
const precio = 30;
console.log(precio);

if(precio === 30) {
    console.log('El precio es igual a 30');
}
else if(precio < 30) {
    console.log('El precio es menor que 30');
}
else {
    console.log('El precio es mayor que 30');
};



let sum = 0;

for(let i = 0; i < 10; i = i + 1){
    sum = sum + i;
};
console.log(sum);




let counter = 0;

while(counter < 10){
    counter = counter + 1;
};
console.log(counter);





function calcularPrice(a,b){
    return a + b;
};
console.log(calcularPrice(2,3));


function createWelcomeMessage(name){
    const message = 'Welcome to the party ' + name;
    return message;
};

const welcomeMessage = createWelcomeMessage('Jaime');
console.log(welcomeMessage);


const despedidaMessage = (nombre) => {
    return 'Nos vemos pronto ' + nombre;
};
console.log(despedidaMessage('Jaime'));





// const money = prompt('Cuanto dinero tienes?');
// const productPrice = 100;

// if(money < productPrice){
//     console.log('No tienes suficiente dinero para comprar el producto');
// }
// else{
//     const newMoney = money - productPrice;
//     console.log('Product comprado. Te quedan ' + newMoney + '€');
// };


const prices = [100, 50, 10];

let totalPrice = 0;

for(let i = 0; i < prices.length; i += 1){
    totalPrice += prices[i];
};
console.log(totalPrice);



//Kata codewars: Pasando edad del padre y del hijo, cuantos años hace que el padre tenia el doble de edad que el hijo, o cuantos años quedan para que pase
const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    return Math.abs(dadYearsOld - (sonYearsOld * 2));
};

console.log(twiceAsOld(36,7));


//Kata codewars: Pasamos 2 arrays y tiene que devolvernos un array que junte los otros 2 y los ordene ascendentemente (y si hay valores repetidos, que solo se quede con los unicos)
const mergeArrays = (arr1, arr2) => {

    const arr3 = arr1.concat(arr2)
                .sort(function(a, b){return a-b});
    return [...new Set(arr3)];
};

const arr1 = [1,3,5,7,9];
const arr2 = [10,8,6,4,2];
console.log(mergeArrays(arr1, arr2));




//Kata codewars: Pasand 2 listas de enteros positivos que representan el area de 2 cuboides (multiplicacion de todos sus elementos), devolver la diferencia entre las areas de los 2 cuboides pasados, independientemente de cual sea mas grande

const findDifference = (a, b) => {

    let areaA = 1;
    let areaB = 1;

    for(let i = 0; i < a.length; i += 1){
        areaA = areaA * a[i];
    };

    for(let j = 0; j < b.length; j += 1){
        areaB = areaB * b[j];
    };

    return Math.abs(areaA - areaB);
    //return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));

};

console.log(findDifference([3, 2, 5], [1, 4, 4]));





//Kata codewars: pasamos una lista de numeros y strings y tiene que devolver la suma de todos los elementos (incluidos los strings)
const sumMix = (x) => {
    let suma = 0;
    
    for(let i = 0; i < x.length; i += 1){
        suma = suma + x[i]*1;
    };

    return suma;

    
};

console.log(sumMix([9, 3, '7', '3']));

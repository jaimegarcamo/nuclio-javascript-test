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



function repeatStr (n, s) {
    for(let i=0;i<n;i+=1){
      return s;  
    }
};

console.log(repeatStr(6,'*'));

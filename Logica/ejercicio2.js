function movie (tarjeta, ticket, desc){
    let n = 1;
    let precio_ticket;
    let temp = ticket;
    let total = 0;
    
    while(true){
        precio_ticket = ticket *n;
        temp *= desc;
        total = total + temp;
        if(precio_ticket > Math.ceil(total+tarjeta)){
            break;
        }
        n++;
    }
    return n;
    
}
console.log (movie(12, 4, .90));
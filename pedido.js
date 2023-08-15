var nombreCliente=prompt("Cliente");
var NitCliente=prompt("Nit");
var subtotal=0
do{
    let item=prompt("item")
    let producto=prompt("producto")    
    let precio=prompt("precio");
    let cantidad=prompt("cantidad");
    let subtotal1= precio*cantidad;
subtotal=subtotal+subtotal1;
var iva=0.19*subtotal;
var total=subtotal+iva;
}
while(confirm("desea agregar otro producto"));
console.log("FABRINOX SA");
console.log("pedido CCO001");
console.log("cliente:"+nombreCliente);
console.log("Nit:"+NitCliente);
console.log("Subtotal:$"+subtotal);
console.log("Impuestos 19%:$"+iva);
console.log("Total:$"+total);




console.log("profe tenga piedad apenas estoy aprendiendo a programar")

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
document.write("FABRINOX SA");
document.write("pedido CCO001");
document.write("cliente:"+nombreCliente);
document.write("Nit:"+NitCliente);
document.write("Subtotal:$"+subtotal);
document.write("Impuestos 19%:$"+iva);
document.write("Total:$"+total);




console.log("profe tenga piedad apenas estoy aprendiendo a programar")

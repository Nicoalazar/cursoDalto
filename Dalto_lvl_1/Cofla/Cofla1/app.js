let dineroCofla = prompt("Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1 ){
    alert("Cofla comprate el helado de agua");
    alert("y te sobran "+ (dineroCofla-0.6)+" usd");   
}
else if (dineroCofla >=1 && dineroCofla < 1.6){
    alert("Cofla comprate el helado de crema");
    alert("y te sobran "+ (dineroCofla-1)+" usd");
}
else if (dineroCofla >=1.6 && dineroCofla < 1.7){
    alert("Cofla comprate el heladix");
    alert("y te sobran "+ (dineroCofla-1.6)+" usd");
}
else if (dineroCofla >=1.7 && dineroCofla < 1.8){
    alert("Cofla comprate el heladovich");
    alert("y te sobran "+ (dineroCofla-1.7)+" usd");
}
else if (dineroCofla >=1.8 && dineroCofla < 2.9){
    alert("Cofla comprate el helardo");
    alert("y te sobran "+ (dineroCofla-1.8)+" usd");
}
else if (dineroCofla >=2.9){
    alert("Cofla comprate con confites o el pote de 1/4Kg");
    alert("y te sobran "+ (dineroCofla-2.9)+" usd");
}
else {
    alert("Cofla lo siento, sos pobre y no te alcanza para nada")
};

if (dineroRoberto >= 0.6 && dineroRoberto < 1 ){
    alert("Roberto comprate el helado de agua")
}
else if (dineroRoberto >=1 && dineroRoberto < 1.6){
    alert("Roberto comprate el helado de crema")
}
else if (dineroRoberto >=1.6 && dineroRoberto < 1.7){
    alert("Roberto comprate el heladix")
}
else if (dineroRoberto >=1.7 && dineroRoberto < 1.8){
    alert("Roberto comprate el heladovich")
}
else if (dineroRoberto >=1.8 && dineroRoberto < 2.9){
    alert("Roberto comprate el helardo")
}
else if (dineroRoberto >=2.9){
    alert("Roberto comprate con confites o el pote de 1/4Kg")
}
else {
    alert("Roberto lo siento, sos pobre y no te alcanza para nada")
};

if (dineroPedro >= 0.6 && dineroPedro < 1 ){
    alert("Pedro comprate el helado de agua")
}
else if (dineroPedro >=1 && dineroPedro < 1.6){
    alert("Pedro comprate el helado de crema")
}
else if (dineroPedro >=1.6 && dineroPedro < 1.7){
    alert("Pedro comprate el heladix")
}
else if (dineroPedro >=1.7 && dineroPedro < 1.8){
    alert("Pedro comprate el heladovich")
}
else if (dineroPedro >=1.8 && dineroPedro < 2.9){
    alert("Pedro comprate el helardo")
}
else if (dineroPedro >=2.9){
    alert("Pedro comprate con confites o el pote de 1/4Kg")
}
else {
    alert("Pedro lo siento, sos pobre y no te alcanza para nada")
};
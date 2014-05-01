var peso=0,estatura=0,imc=0;
function calcula(){
	peso=document.getElementById("txtpeso").value;
	peso=parseFloat(document.getElementById("txtpeso").value);
	estatura=document.getElementById("txtesta").value;
	estatura=parseFloat(document.getElementById("txtesta").value);
	imc=peso/(estatura*estatura);
	document.getElementById("txtResul").value=imc;
	if(imc<18.00){
		alert("peso bajo");}
		else if (imc>=18.00 && imc<=24.9){
		alert("peso normal");	
		}
		else if (imc>=25.00 && imc<=26.9){
		alert("sobrepeso");	
		}
		else if (imc>=27.00 && imc<28){
		alert("obesidad");	
		}
		else if (imc>28 && imc<=29){
		alert("obesidad grado 1");	
		}
		else if (imc>=30.00 && imc<=39.9){
		alert("obesidad grado 2");	
		}
		else if (imc>40.00){
		alert("obesidad grado 3");	
		}	
}
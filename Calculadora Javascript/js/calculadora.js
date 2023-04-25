// calculadora em javascript
function soma() {
    let numero1 = document.getElementById('num1').value;  
    let numero2 = document.getElementById('num2').value;
    let soma = parseFloat(numero1) + parseFloat(numero2);
        
    return document.getElementById('resultado').value = soma;
        
}
    
    
function sub() {
    let numero1 = document.getElementById('num1').value;  
    let numero2 = document.getElementById('num2').value; 
    let subtrair = parseFloat(numero1) - parseFloat(numero2);
        
    return document.getElementById('resultado').value = subtrair;
        
}
    
    
function mult() {
    let numero1 = document.getElementById('num1').value; 
    let numero2 = document.getElementById('num2').value;
    let multiplicacao = parseFloat(numero1) * parseFloat(numero2);
        
    return document.getElementById('resultado').value = multiplicacao;
        
}
    
     
function divi() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    let divisao = parseFloat(numero1) / parseFloat(numero2);
        
    return document.getElementById('resultado').value = divisao;
        
}


function Encriptando(texto)
{
    let lowerText=texto.toLowerCase();
   
let textoEncriptado="";
 let contador=0;
for (let i = 0; i < texto.length; i++) {
    contador=i;
    while (contador<=texto.length) {

         if (lowerText[i]=="e") 
         {
            textoEncriptado+="enter";
            break;
         }
         if (lowerText[i]=="i") 
         {
            textoEncriptado+="imes";
            break;
         }
         if (lowerText[i]=="a") 
         {
            textoEncriptado+="ai";
            break;
         }
         if (lowerText[i]=="o") 
         {
            textoEncriptado+="ober";
            break;
         }
         if (lowerText[i]=="u") 
         {
            textoEncriptado+="utaf";
            break;
         }
         else{
            textoEncriptado+=lowerText[i];
            break;
         }
    }
  
   contador++;
    
}
return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    let texto = "";
    let i = 0;
    while (i < textoEncriptado.length) {
      if (textoEncriptado[i] === "e" && textoEncriptado.substring(i, i + 5) === "enter") {
        texto += "e";
        i += 5;
      } else if (textoEncriptado[i] === "i" && textoEncriptado.substring(i, i + 4) === "imes") {
        texto += "i";
        i += 4;
      } else if (textoEncriptado[i] === "a" && textoEncriptado.substring(i, i + 2) === "ai") {
        texto += "a";
        i += 2;
      } else if (textoEncriptado[i] === "o" && textoEncriptado.substring(i, i + 4) === "ober") {
        texto += "o";
        i += 4;
      } else if (textoEncriptado[i] === "u" && textoEncriptado.substring(i, i + 4) === "ufat") {
        texto += "u";
        i += 4;
      } else {
        texto += textoEncriptado[i];
        i++;
      }
    }
    return texto;
  }
  
  // Ejemplo de uso
  console.log(desencriptarTexto("Holai mundober")); // "Hola mundo"
  
// Referenciar los elementos del DOM
const textoArea = document.getElementById('texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const resultado = document.getElementById("resultado");
const btnCopiarTexto= document.getElementById("btn-Copiartexto");
var reemplazo="";


// Agregar un listener al botón 'Encriptar'
btnEncriptar.addEventListener('click', () => {
  // Obtener el texto ingresado en el textarea
  const textoIngresado = textoArea.value;

  // Encriptar el texto y escribir el resultado en el textarea
  resultado.innerText = Encriptando(textoIngresado);
  reemplazo=Encriptando(textoIngresado);
  document.getElementById("imagen-aviso").style.display = "none";

});

// Referenciar los elementos del DOM
const btnDesencriptar = document.getElementById('btn-desencriptar');

// Agregar un listener al botón 'Desencriptar'
btnDesencriptar.addEventListener('click', () => {
  // Obtener el texto encriptado ingresado en el textarea
  const textoEncriptado = textoArea.value;

  // Desencriptar el texto y escribir el resultado en el textarea
  resultado.textContent = desencriptarTexto(textoEncriptado);
  reemplazo=desencriptarTexto(textoEncriptado);
  document.getElementById("imagen-aviso").style.display = "none";
});

btnCopiarTexto.addEventListener('click',()=>{
 
 textoArea.value=reemplazo;
 document.getElementById("imagen-aviso").style.display = "none";
});



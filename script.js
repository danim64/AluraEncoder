const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.getElementById("botonCopiar");
function display() {
    
    botonCopiar.style.display = "block";
    
}
    

function codificarTexto() {
    const textoEncriptado = codificador(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    document.getElementById("p_mensaje").innerHTML = "";
    document.getElementById("titulo_mensaje").innerHTML = "";
    display();

}

function decodificarTexto() {
    const textoEncriptado = decodificador(textArea.value);
    mensaje.value = textoEncriptado;


}


function codificador(frase) {
    let codificada = '';
    for (let i = 0; i < frase.length; i++) {
        let char = frase[i];
        if (char === 'e') {
            codificada += 'enter';
        } else if (char === 'i') {
            codificada += 'imes';
        } else if (char === 'a') {
            codificada += 'ai';
        } else if (char === 'o') {
            codificada += 'ober';
        } else if (char === 'u') {
            codificada += 'ufat';
        } else {
            codificada += char;
        }
    }
    return codificada;
}

function decodificador(frase) {
    let decodificada = '';
    let i = 0;
    while (i < frase.length) {
        if (frase.substring(i, i + 5) === 'enter') {
            decodificada += 'e';
            i += 5;
        } else if (frase.substring(i, i + 4) === 'imes') {
            decodificada += 'i';
            i += 4;
        } else if (frase.substring(i, i + 2) === 'ai') {
            decodificada += 'a';
            i += 2;
        } else if (frase.substring(i, i + 4) === 'ober') {
            decodificada += 'o';
            i += 4;
        } else if (frase.substring(i, i + 4) === 'ufat') {
            decodificada += 'u';
            i += 4;
        } else {
            decodificada += frase[i];
            i++;
        }
    }
    return decodificada;
}



async function copiarTexto() {
    try {
      await navigator.clipboard.writeText(mensaje.value );
      console.log("Texto copiado al portapapeles")
    } catch (error) {
      console.error(error.message);
    }
  }
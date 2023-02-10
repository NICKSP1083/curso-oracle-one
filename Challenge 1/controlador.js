const texto_original = document.getElementById("OriginalTxt");
const texto_modificado = document.getElementById("ModifiedTxt");
const copiarTexto = document.querySelector("#ModifiedTxt");
const btnCopiar = document.querySelector("#copiar");


function encriptar() {
  const texto_a_encriptar = texto_original.value;
  let encryptedText = "";
  const encryptionKey = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
  };
    
  for (let char of texto_a_encriptar) {
    encryptedText += encryptionKey[char] ? encryptionKey[char] : char;
  }
  texto_modificado.value = encryptedText;
}
  
function desencriptar() {
  const texto_a_desencriptar = texto_original.value;

  let texto_desencriptado = "";
  texto_desencriptado = texto_a_desencriptar.replace(/enter/img,"e")
                                            .replace(/ober/img,"o")
                                            .replace(/imes/img,"i")
                                            .replace(/ai/img,"a")
                                            .replace(/ufat/img,"u");

  texto_modificado.value = texto_desencriptado;
}

btnCopiar.addEventListener('click', function() {
  copiarTexto.select();
  document.execCommand('copy');
});
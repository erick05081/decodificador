function criptografar() {
  let textoCriptografar = document.getElementById("inserirTexto").value;
  let textoArray = textoCriptografar.split("");
  let chaves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  let textoCriptografadoArray = textoArray.map((char) => {
    if (chaves[char]) {
      return chaves[char];
    } else {
      return char;
    }
  });
  let textoCriptografado = textoCriptografadoArray.join("");
  imprimirResultado(textoCriptografado);
  limparTextArea();
}

function descriptografar() {
  let chaves = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  let textoDescriptografar = document.getElementById("inserirTexto").value;

  for (let chave in chaves) {
    let regex = new RegExp(chave, "g");
    textoDescriptografar = textoDescriptografar.replace(regex, chaves[chave]);
  }
  imprimirResultado(textoDescriptografar);
  limparTextArea();
}

function imprimirResultado(textoCriptografado) {
  let mensagemErroElement = document.querySelector(
    ".conteudo__principal__mensagemErro"
  );
  let resultadoElement = document.querySelector(".resultado");
  let resultadoParagrafo = document.getElementById("resultado");

  if (textoCriptografado !== "") {
    mensagemErroElement.style.display = "none";
    resultadoElement.style.display = "flex";
    resultadoParagrafo.textContent = textoCriptografado;
  } else {
    mensagemErroElement.style.display = "flex";
    resultadoElement.style.display = "none";
    resultadoParagrafo.textContent = "";
  }
}

function limparTextArea() {
  let textArea = document.getElementById("inserirTexto");
  textArea.value = "";
}

function copiarTexto() {
  let texto = document.getElementById("resultado").innerHTML;
  navigator.clipboard.writeText(texto);

  let textoBotao = document.getElementById("copiar");
  let textoOriginal = textoBotao.innerHTML;
  textoBotao.innerHTML = "Copiado!";

  setTimeout(() => {
    textoBotao.innerHTML = textoOriginal;
  }, 3000);
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;
    const amigos = document.getElementById("listaAmigos");
    const amigoElement = document.createElement("li");
    amigoElement.textContent = amigo;
    if (amigo === "") {
        alert("Por favor, ingresa un nombre de amigo.");
        return;
        
    } else {
    amigos.appendChild(amigoElement);
    document.getElementById("amigo").value = "";
    }

}

function sortearAmigo() {
    const amigos = document.querySelectorAll("#listaAmigos li");
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo secreto es: " + amigoSecreto.textContent;
}


const titulo = document.querySelector(".titulo")
titulo.textContent = "Esse é meu título"
titulo.style.texteAlign = "Center"

const lista = document.querySelector(".lista")
lista.innerHTML = `
                    <ul>
                        <li> Item 1 </li>
                        <li> Item 2 </li>
                        <li> Item 3 </li>
                    </ul>`

const body = document.querySelector("body")
body.style.backgroundColor = "pink"
body.style.color = "green"
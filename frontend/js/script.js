const tbody = document.querySelector('tbody')
const addForm = document.querySelector('.add-form')

const nakamaName = document.querySelector('#nakamaName')
const dataPartida = document.querySelector('#dataPartida')
const persFav = document.querySelector('#persFav')
const nakamaHomage = document.getElementById('nakamaHomage')

const fetchTributes = async () => {
    const response =  await fetch('http://localhost:3333/')
    const tributes = await response.json()
    return tributes
}

const addHomage = async (event) => {
    event.preventDefault()

    const homage = { 
        name: nakamaName.value,
        obito: dataPartida.value,
        pers_fav: persFav.value,
        homenagem: nakamaHomage.value
    }
    
    await fetch('http://localhost:3333/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(homage)
    })
    
    loadTributes()

}

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag)
    
    if (innerText){
        element.innerText = innerText
    }

    if (innerHTML) {
        element.innerHTML = innerHTML
    }

    return element
}

const createRow = (homage) => {

    const { name, obito, pers_fav, homenagem } = homage

    const tr = createElement('tr')
    const taName = createElement('td', name)
    const tdObito = createElement('td', obito)
    const tdPersFav = createElement('td', pers_fav)
    const tdHomenagem = createElement('td', homenagem)

    tr.appendChild(taName)
    tr.appendChild(tdObito)
    tr.appendChild(tdPersFav)
    tr.appendChild(tdHomenagem)

    return tr
}

const loadTributes = async () => {
    const homage = await fetchTributes()

    tbody.innerHTML = ''

    homage.forEach((homage) => {
        const tr = createRow(homage)
        tbody.appendChild(tr)
    });
}

addForm.addEventListener('submit', addHomage)

loadTributes()
// Get Ranger Data
const getData = async() => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// Create Constants to hold DOM elements
const DOM_Elements = {
    ranger_list : ".ranger-list"
}

// Create the Ranger List HTML
const create_list = (id,name,color) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}, ${color}</a>`
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML("beforeend",html)
}

// Functions to Load/Clear Data and Display HTML
const load_data = async() => {
    const rangers = await getData();
    rangers.forEach(element => create_list(element.id, element.name, element.color))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = ""
}
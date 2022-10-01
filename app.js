let search_inp = document.getElementById('search')
let search_menu = document.querySelector('.search-block')
let search_history = document.querySelector('.search-history')
search_inp.addEventListener('focus', (e) => {
    search_menu.classList.add('focus')
})
search_inp.addEventListener('blur', () => {
    search_menu.classList.remove('focus')
})

function create() {
    let history_item = document.createElement('div')
    history_item.className = "history-item"
    search_history.append(history_item)
    let history_word = document.createElement('p')
    history_word.className = "history-word"
    history_item.append(history_word)
    history_word.innerHTML = search_inp.value
    let delete_it = document.createElement('span')
    delete_it.className = "delete"
    delete_it.innerHTML = "&#x2715;"
    history_item.append(delete_it)
    delete_it.addEventListener('click', () => {
        history_item.parentElement.removeChild(history_item)
    })
}

document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (search_inp.value.length > 0) {
            create()
        } else {
            Toastify({
                text: "Please, write some words",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                className: 'warning',
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #ff0021 #e31648);",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }
    }
})


// let remove = document.querySelectorAll('.delete')
// let history_item = document.querySelectorAll('.history-item')
// remove.forEach((item, index)=>{
//     item.addEventListener('click', ()=>{
//         history_item[index].parentElement.removeChild(history_item[index])
//         console.log(history_item[index]);
//     })
// })
function da() {
    console.log(remove.length);
}
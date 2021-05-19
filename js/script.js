const contactList = Array.from(document.querySelectorAll(".contact-list li"));
const listElements = document.querySelector(".contact-list");
const pageDiv = document.querySelector(".page-numbers");

let currentPage = 1;
let rowsPerPage = 10;


function displayList(items, element, rowsPerPage, page) {
    htmlBlock = "";
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        htmlBlock += paginatedItems[i].outerHTML;
    }
    element.innerHTML = htmlBlock;
}

function setUpPages(items, element, rowsPerPage) {
    element.innerHTML = "";
    let pageCount = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = pageButton(i, items);
        element.appendChild(btn);
    }
}

function pageButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    if (currentPage == page) button.classList.add('active');
    button.addEventListener('click', function() {
        currentPage = page;
        displayList(items, listElements, rowsPerPage, currentPage);
        let currentBtn = document.querySelector('.page-numbers button.active');
        currentBtn.classList.remove('active');

        button.classList.add('active');
    })
    return button;
}


displayList(contactList, listElements, rowsPerPage, currentPage);
setUpPages(contactList, pageDiv, rowsPerPage);

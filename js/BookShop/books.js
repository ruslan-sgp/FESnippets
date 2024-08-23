const books = [];
const bookList = document.querySelector('.bookList');

start();

function start(e) {
    books.push({
        title: 'My Title',
        author: 'My Author',
        year: 2017,
        genre: 'Sci-Fi',
        status: 'Unread'
    });

    books.push({
        title: 'My Title 2',
        author: 'My Author',
        year: 2019,
        genre: 'Sci-Fi',
        status: 'Unread'
    });

    books.push({
        title: 'My Title 3',
        author: 'My Author',
        year: 2023,
        genre: 'Sci-Fi',
        status: 'Read'
    });

    displayBooks();
}

function displayBooks() {
    bookList.innerHTML = null;
    books.forEach(b => {
        const html = `
            <div class="book">
                <h2>${b.title}</h2>
                <p>${b.author}</p>
                <p>${b.year}</p>
                <p>${b.genre}</p>
                <p>${b.status}</p>
            </div>
        `;
        bookList.innerHTML += html;
    })
}

function addBook() {
    const book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        year: document.getElementById('year').value,
        genre: document.getElementById('genre').value,
        status: document.getElementById('status').value
    }
    books.push(book);
    document.forms[0].reset();
    displayBooks();
    return false;
}
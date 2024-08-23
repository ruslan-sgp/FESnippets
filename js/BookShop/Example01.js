document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');
    const bookCount = document.getElementById('book-count');
    const filterGenre = document.getElementById('filter-genre');
    const filterStatus = document.getElementById('filter-status');
    const clearBooksButton = document.getElementById('clear-books');
    const refreshPageButton = document.getElementById('refresh-page');

    let books = JSON.parse(localStorage.getItem('books')) || [];

    function renderBooks(filteredBooks = books) {
        bookList.innerHTML = '';
        filteredBooks.forEach((book, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${book.title}</strong> by ${book.author} (${book.year}) - ${book.genre} - ${book.status}
                <span>
                    <button class="edit" data-index="${index}">Edit</button>
                    <button class="delete" data-index="${index}">Delete</button>
                </span>
            `;
            bookList.appendChild(li);
        });
        updateBookCount(filteredBooks.length);
    }

    function updateBookCount(count) {
        bookCount.textContent = `Total Books: ${count}`;
    }

    function addBook(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;
        const genre = document.getElementById('genre').value;
        const status = document.getElementById('status').value;

        const newBook = { title, author, year, genre, status };
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
        bookForm.reset();
    }

    function editBook(index) {
        const book = books[index];
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('year').value = book.year;
        document.getElementById('genre').value = book.genre;
        document.getElementById('status').value = book.status;

        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    }

    function deleteBook(index) {
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    }

    function clearBooks() {
        books = [];
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    }

    function filterBooks() {
        const genre = filterGenre.value.toLowerCase();
        const status = filterStatus.value;
        const filteredBooks = books.filter(book => {
            return (
                (genre === '' || book.genre.toLowerCase().includes(genre)) &&
                (status === '' || book.status === status)
            );
        });
        renderBooks(filteredBooks);
    }

    bookForm.addEventListener('submit', addBook);

    bookList.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit')) {
            const index = e.target.dataset.index;
            editBook(index);
        } else if (e.target.classList.contains('delete')) {
            const index = e.target.dataset.index;
            deleteBook(index);
        }
    });

    filterGenre.addEventListener('input', filterBooks);
    filterStatus.addEventListener('change', filterBooks);

    clearBooksButton.addEventListener('click', clearBooks);
    refreshPageButton.addEventListener('click', () => window.location.reload());

    renderBooks();
});

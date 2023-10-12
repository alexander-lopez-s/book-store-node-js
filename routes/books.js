import express from "express";

const router = express.Router();
let books = [
    { 
        id: '1',
        title: 'Great Expectations',
        author: 'Charles Dickens'
    },
    {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
    },
    {
        id: '3',
        title: '1984',
        author: 'George Orwell'
    },
    {
        id: '4',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger'
    },
    {
        id: '5',
        title: 'Pride and Prejudice',
        author: 'Jane Austen'
    }
];

// Search a book function 

const getBookById = (id) => {
    return books.find((book) => book.id === id);
}

// Get books

router.get('/', (req, res) => {
    res.status(200).json(books);
})

// Get books by ID

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const bookExist = getBookById(id);
    if (bookExist) {
        res.status(200).json(bookExist);
    } else {
        res.status(404).json({
            message: `Book with ID ${id} does not exist`
        });
    }
});

// Make a post request

router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = {
        id: String(books.length + 1),
        title: title,
        author: author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Make a put request

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const bookExist = getBookById(id);

    if (bookExist) {
        books.forEach((book, index) => {
            if (book.id === id) {
                const updatedBook = {
                    id: id,
                    title: title,
                    author: author
                };
                books[index] = updatedBook;
                res.status(200).json(updatedBook);
            }
        });
    } else {
        res.status(404).json({
            message: `Book with ID ${id} does not exist`
        });
    }
});

// Make a delete request

router.delete('/:id', (req, res)=> {
    const { id } = req.params;
    const bookExist = getBookById(id);
    if (bookExist) {
        books = books.filter((book) => book.id !== id);
        res.status(200).json({
            message: 'Book deleted successfully'
        });
    } else {
        res.status(404).json({
            message: 'Book with ID ${id} does not exist'
        });
    }
});

export default router;

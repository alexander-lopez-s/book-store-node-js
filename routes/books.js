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
    const {id} = req.params;
    console.log(id);
    const bookExist = getBookById(id);
    if(bookExist) {
        res.status(200).json(bookExist);
    } else {
        res.status(404).json({
            message : `booj with the ${id} does not exist`
        });
    };
})

export default router;
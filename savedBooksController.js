function deleteBook(index) {
    model.data.savedBooks.splice([index], 1);
    savedBooksView();
    }

model = {
    app: {
        currentPage: ["addNewBook"],
    },
    input: {
        newBook: {
            title: "",
            author: "",
            publicationYear: "",
            genre: "",
            rating: null,
        },
    },

    data: {
        savedBooks: [
            {
                title: "The Secret History",
                author: "Donna Tartt",
                publicationYear: "1992",
                genres: [fiction, literary, mystery, thriller],
                rating: 4.5,
            },
        ],
    },
}


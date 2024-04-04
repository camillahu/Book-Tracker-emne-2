
const model= {
    app: {
        currentPage: ["addNewBook"],
    },
    input: {
        newBook: {
            title: "",
            author: "",
            publicationYear: "",
            genre: "",
            rating: 0,
        },
    },

    data: {
        savedBooks: [
            {   id: 0,
                title: "The Secret History",
                author: "Donna Tartt",
                publicationYear: "1992",
                genre: ["fiction"],
                rating: 4.5,
            },
        ],
        genres: ["Non-Fiction", "Historical Fiction",
                "Horror", "Romance", "Mystery", "Thriller",
                "Adventure", "Fantasty", "Contemporary",
                "Dystopian", "Sci-Fi", ],
        rating: [1, 2, 3, 4, 5],
    },
}


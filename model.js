
const model= {
    app: {
        currentPage: "",
    },
    input: {
        newBook: {
            title: "",
            author: "",
            publicationYear: "",
            genre: "",
            rating: 0,
        },
        editBook:{
            id:null,
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
                genre: ["Mystery"],
                rating: 4.5,
                picture: "TSH.jpeg",
            },
            {   id: 1,
                title: "A Court of Thorns and Roses",
                author: "Sarah J. Maas",
                publicationYear: "2015",
                genre: ["Fantasy"],
                rating: 5,
                picture: "ACOTAR.jpg",
            },
            {   id: 2,
                title: "A Court of Mist and Fury",
                author: "Sarah J. Maas",
                publicationYear: "2016",
                genre: ["Fantasy"],
                rating: 5,
                picture: "ACOMAF.jpg",
            },
            

        ],
        genres: ["Non-Fiction", "Historical Fiction",
                "Horror", "Romance", "Mystery", "Thriller",
                "Adventure", "Fantasty", "Contemporary",
                "Dystopian", "Sci-Fi", ],
        rating: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    },
}


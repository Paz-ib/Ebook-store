//Vinculamos Airtable con JS

const API_KEY = "key";
const BASE_ID = "appq8OZtXKELrMPjI";        // acá el ID de mi base EbookStore de airtable
const TABLE_NAME = "Products";

const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

const headers = {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json"
};


// función para crear un nuevo libro en Airtable
async function createBook(book) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers,
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            Title: book.title,
                            Author: book.author,
                            Price: book.price,
                            Image: book.image,
                            Category: book.category
                        }
                    }
                ]
            })
        });

        const data = await response.json();
        console.log("El libro se ha creado correctamente:", data);
        return data;

    } catch (error) {
        console.error("Error al crear el libro:", error);
    }
}

//Armo un array para crear los productos de Best Sellers en Airtable todos juntos
const bestSellers = [
    {
        title: "La Felicidad",
        author: "Gabriel Rolón",
        price: 45000,
        image: "https://i.pinimg.com/1200x/e6/2c/16/e62c1657e43eb8ce7c4ad1232a929a12.jpg",
        category: "Best Sellers"
    },
    {
        title: "1984",
        author: "George Orwell",
        price: 40000,
        image: "https://i.pinimg.com/1200x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg",
        category: "Best Sellers"
    },
    {
        title: "Mujercitas",
        author: "Louisa May Alcott",
        price: 60000,
        image: "https://i.pinimg.com/736x/b5/9a/22/b59a22489386b621f2664ba5eff21fa3.jpg",
        category: "Best Sellers"
    },
    {
        title: "The Letters of Vincent van Gogh",
        author: "Ronald de Leeuw",
        price: 40000,
        image: "https://i.pinimg.com/1200x/60/b3/c7/60b3c7cec9864f6620293ad4252da2ab.jpg",
        category: "Best Sellers"

    },
    {
        title: "El Arte de Amar",
        author: "Erich Fromm",
        price: 25000,
        image: "https://i.pinimg.com/1200x/35/d9/1e/35d91e4e37d138db9b4e568b27abc8b1.jpg",
        category: "Best Sellers"

    }
];
// Va el foraech para crear los productos en Airtable.
bestSellers.forEach(book => createBook(book));


//Armo un array para crear los productos de Ciencia Ficción en Airtable todos juntos   
const fiction= [
    {
        title: "Fundacion",
        author: "Isaac Asimov ",
        price: 70000,
        image: "https://i.pinimg.com/736x/51/74/38/517438780ab6f2ad55b4ee48ce844aae.jpg",
        category: "Ciencia Ficción"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        price: 70000,
        image: "https://i.pinimg.com/736x/6a/8c/ef/6a8cef356b67c14e75e256f275436fd8.jpg",
        category: "Ciencia Ficción"
    },
    {
        title: "Farenheit 451",
        author: "Ray Bradbury",
        price: 60000,
        image: "https://i.pinimg.com/736x/b4/2e/49/b42e498dd2bcda90c8e7ffda96eeafa5.jpg",
        category: "Ciencia Ficción"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        price: 80000,
        image: "https://i.pinimg.com/736x/4d/e4/46/4de4461b2faf2356cfc3954c978f9485.jpg",
        category: "Ciencia Ficción"

    },
    {
        title: "Neuromancer",
        author: "William Gibson",
        price: 66000,
        image: "https://i.pinimg.com/736x/7e/77/bd/7e77bd6f9a20bfaa9e121578d37e1b08.jpg",
        category: "Ciencia Ficción"

    }
];
// Va el foraech para crear los productos en Airtable.
fiction.forEach(book => createBook(book));

// Array para crear los productos Clásicos en Airtable todos juntos

const classic= [
    {
        title: "Orgullo y Prejuicio",
        author: "Jane Austen",
        price: 45000,
        image: "https://i.pinimg.com/736x/92/64/a4/9264a4efe574d462d6dccc9f7ae8951e.jpg",
        category: "Clásicos"
    },
    {
        title: "Odisea",
        author: "Homero",
        price: 40000,
        image: "https://i.pinimg.com/736x/59/38/36/593836936de6ce668991b163f82495b0.jpg",
        category: "Clásicos"
    },
    {
        title: "Romeo y Julieta",
        author: "Wiilliam Shakespeare",
        price: 60000,
        image: "https://i.pinimg.com/1200x/c8/7b/0f/c87b0f154ab3b6bf4ef875b97ba392e7.jpg",
        category: "Clásicos"
    },
    {
        title: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        price: 40000,
        image: "https://i.pinimg.com/1200x/a1/e2/d3/a1e2d3cda1075798c1a181f9ca07ebe1.jpg",
        category: "Clásicos"

    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        price: 60000,
        image: "https://i.pinimg.com/736x/78/f1/a9/78f1a9d67c5f90ecae81977ae3b0ef4f.jpg",
        category: "Clásicos"

    }
];

//Foreach para crear los productos en Airtable.
classic.forEach(book => createBook(book));

// Array para crear los productos de Policiales en Airtable todos juntos
const crimeFiction= [
    {
        title: "La Sombra del Viento",
        author: "Carlos Ruiz Zafón",
        price: 55000,
        image: "https://i.pinimg.com/1200x/e6/f8/34/e6f83475ff93a9ee97d1bfed6e825fbb.jpg",
        category: "Policiales"
    },
    {
        title: "El día en que se perdió el amor",
        author: "Javier Castillo",
        price: 50000,
        image: "https://i.pinimg.com/736x/1d/d9/c4/1dd9c4f3a7a02c2d8958b3798626cc67.jpg",
        category: "Policiales"
    },
    {
        title: "Punto Ciego",
        author: "Paula Hawkins",
        price: 60000,
        image: "https://i.pinimg.com/736x/8e/fa/d2/8efad2c858c1f72b014e8c42aec635aa.jpg",
        category: "Policiales"
    },
    {
        title: "Los casos del comisario Croce",
        author: "Ricardo Piglia",
        price: 45000,
        image: "https://i.pinimg.com/736x/3b/79/cf/3b79cf4d3d0f7b06aa9301620b14d2ff.jpg",
        category: "Policiales"

    },
    {
        title: "El caso Alaska Sanders",
        author: "Joel Dicker",
        price: 65000,
        image: "https://i.pinimg.com/1200x/08/48/e7/0848e70b5c1188fcd4d09c02404ebd25.jpg",
        category: "Policiales"

    }
];

//Foreach para crear los productos en Airtable.
crimeFiction.forEach(book => createBook(book));

//Array para crear los productos de Terror en Airtable todos juntos
const terror= [
    {
        title: "It",
        author: "Stephen King",
        price: 70000,
        image: "https://i.pinimg.com/736x/68/ea/96/68ea969667d3083fd0685556f9f300fc.jpg",
        category: "Terror"
    },
    {
        title: "La Maldición de Hill House",
        author: "Shirley Jackson",
        price: 80000,
        image: "https://i.pinimg.com/736x/39/e7/bb/39e7bb0b7ef1ca73c11ec41ec49f8f5e.jpg",
        category: "Terror"
    },
    {
        title: "La Mujer de Negro",
        author: "Susan Hill",
        price: 60000,
        image: "https://i.pinimg.com/736x/45/58/f4/4558f4a86e4230a0bc64adfd285a8540.jpg",
        category: "Terror"
    },
    {
        title: "El Resplandor",
        author: "Stephen King",
        price: 70000,
        image: "https://i.pinimg.com/736x/48/75/5a/48755ae251b247debe6219a0179d084b.jpg",
        category: "Terror"

    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        price: 75000,
        image: "https://i.pinimg.com/1200x/22/e6/18/22e6180f1ec041f5213d02d0249fa53b.jpg",
        category: "Terror"

    }
];
//Foreach para crear los productos en Airtable.
terror.forEach(book => createBook(book));



// Traemos los libros desde Airtable
async function getBooks() {
    try {
        const response = await fetch(API_URL, { headers });
        const data = await response.json();
        console.log("Libros desde Airtable:", data.records);
        return data.records;
    } catch (error) {
        console.error("Error al obtener libros:", error);
    }
}
//Llamamos a la función para obtener los libros
getBooks();



export const colors = {
    COLOR_PRIMARY: "#f96163",
    COLOR_LIGHT: "#fff",
    COLOR_DARK: "#000",
    COLOR_DARK_ALT: "#262626",
};



export const categories = [
    {
        id: "01",
        category: "Breakfast",
    },
    {
        id: "02",
        category: "Lunch",
    },
    {
        id: "03",
        category: "Dinner",
    },
    {
        id: "04",
        category: "Asian",
    },
    {
        id: "05",
        category: "Italian",
    },
];

export const recipeList =[
    {
    id: "01",
    name: "Sopa de Pollo",
    image: require("../assets/Tuna-tartare.jpg"),
    rating: "4.5",
    ingredients: ["Pechugas de pollo", "Caldo de pollo", "Zanahorias", "Apio", "Cebolla", "Ajo", "Papas", "Arroz", "Sal", "Pimienta", "Cilantro fresco"],
    time: "1 hora",
    difficulty: "Fácil",
    calories: "250 cal",
    color: "#FFE800",
    description: "¡Prepara una reconfortante sopa de pollo casera con esta deliciosa receta! Esta sopa está llena de sabor y es perfecta para calentar el cuerpo en los días fríos. ",
    steps: [
        "En una olla grande, calienta un poco de aceite de oliva a fuego medio. Agrega la cebolla picada, el apio y las zanahorias en rodajas y cocina hasta que estén tiernas.",
        "Agrega el ajo picado y cocina por un minuto más hasta que esté fragante.",
        "Añade las pechugas de pollo enteras y el caldo de pollo a la olla. Lleva a ebullición, luego reduce el fuego y deja que hierva a fuego lento durante 20-25 minutos, o hasta que el pollo esté cocido.",
        "Retira las pechugas de pollo de la olla y córtalas en trozos pequeños o desmenúzalas con un tenedor. Vuelve a colocar el pollo en la olla.",
        "Agrega las papas en cubos y el arroz a la olla. Cocina a fuego lento durante 15-20 minutos, o hasta que las papas estén tiernas y el arroz esté cocido.",
        "Condimenta la sopa con sal y pimienta al gusto. Sirve caliente, adornando cada tazón con cilantro fresco picado."
    ],

    },
    {
            id: "02",
    name: "Espagueti",
    image: require("../assets/Spaggeti.jpg"),
    rating: "4.2",
    ingredients: ["Espagueti", "Tomate", "Cebolla", "Ajo", "Aceite de oliva", "Sal", "Pimienta", "Albahaca fresca", "Queso parmesano rallado"],
    time: "30 mins",
    difficulty: "Fácil",
    calories: "350 cal",
    color: "#F39C12",
    description: "¡Prepara un delicioso plato de espagueti italiano con esta receta fácil de seguir! Los espaguetis al dente se mezclan con una salsa de tomate fresca y aromática, sazonada con ajo, cebolla y albahaca. ¡Termina con una generosa cantidad de queso parmesano rallado para un toque final perfecto!",
    steps: [
        "Hierve agua en una olla grande. Agrega sal y espagueti y cocina hasta que estén al dente, según las instrucciones del paquete.",
        "Mientras tanto, calienta el aceite de oliva en una sartén grande a fuego medio. Agrega el ajo picado y la cebolla finamente picada y cocina hasta que estén dorados y fragantes.",
        "Agrega los tomates picados a la sartén y cocina hasta que se ablanden y se deshagan un poco, aproximadamente 10 minutos. Condimenta con sal, pimienta y albahaca fresca picada al gusto.",
        "Escurre la pasta cocida y agrégala a la sartén con la salsa de tomate. Mezcla bien para cubrir los espaguetis con la salsa.",
        "Sirve el espagueti caliente, espolvorea generosamente con queso parmesano rallado y disfruta de este clásico plato italiano."
    ],

    },
]
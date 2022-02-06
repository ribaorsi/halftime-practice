const customers = [
    {
        id: 1,
        name: "Kristóf",
        favouriteProducts: [
        {
            category: "tv",
            color: "white"
        }
    ]
    },

    {
        id: 2,
        name: "Ferenc",
        favouriteProducts: [
            {
                category: "headphone",
                color: "black"
            }
        ]
    }
]
const products = [
    {
        id: 1,
        category: "tv",
        color: "white"
    }

]

const findFavouriteProductId = (prods, custs) => {
    const result = [];
    for (const prod of prods) {
        for (const cust of custs) {
            for (const fav of cust.favouriteProducts) {
                if (fav.category === prod.category && fav.color === prod.color){
                    result.push({
                        customerName: cust.name,
                        productId: prod.id
                    })
                }
            }
        }
    }
    return result;
}

console.log(findFavouriteProductId(products, customers));


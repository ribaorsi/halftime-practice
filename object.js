const customers = [
    {
        id: 1,
        name: "Kristóf",
        favouriteProducts: [
        {
            category: "tv",
            color: "black"
        }
    ]
    }
    {
        id: 2,
        name: "Ferenc",
        favouriteProducts: [
            {
                category: "headphone",
                color: "white"
            }
        ]
    }
]
const products = [
    {
        id: 1
        category: "tv",
        color: "white"
    }

]

const findFavouriteProductId = (prods, custs) => {
    const result = [];
    for (const prod of prods) {
        for (const cust of custs) {
            for (const fav of cust.favouriteProducts) {
                if (fav === prod.category && fav.color === prod.color){
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

findFavouriteProductsId(products, customers);

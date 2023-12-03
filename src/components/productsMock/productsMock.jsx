const productos = [
    { id: "1", name: "Diamond Necklace", desc: "Elegant diamond necklace with a beautiful pendant.", stock: 10, category: "Necklaces", imageUrl: "../src/assets/products/diamond-necklace.png" },
    { id: "2", name: "Sapphire Earrings", desc: "Stunning sapphire earrings perfect for any occasion.", stock: 5, category: "Earrings", imageUrl: "../src/assets/products/sapphire-earrings.png" },
    { id: "3", name: "Gold Bracelet", desc: "Classic gold bracelet with intricate design work.", stock: 7, category: "Bracelets", imageUrl: "../src/assets/products/gold-bracelet.png" },
    { id: "4", name: "Silver Ring", desc: "Simple yet stylish silver ring for everyday wear.", stock: 15, category: "Rings", imageUrl: "../src/assets/products/silver-ring.png" },
    { id: "5", name: "Pearl Brooch", desc: "Graceful pearl brooch to complement your attire.", stock: 8, category: "Brooches", imageUrl: "../src/assets/products/pearl-brooch.png" },
    { id: "6", name: "Ruby Pendant", desc: "Exquisite ruby pendant on a delicate chain.", stock: 12, category: "Necklaces", imageUrl: "../src/assets/products/ruby-pendant.png" },
    { id: "7", name: "Emerald Studs", desc: "Chic emerald studs that add a pop of color.", stock: 6, category: "Earrings", imageUrl: "../src/assets/products/esmerald-studs.png" },
    { id: "8", name: "Gold Bangle", desc: "Sleek and modern gold bangle for a trendy look.", stock: 10, category: "Bracelets", imageUrl: "../src/assets/products/gold-bangle.png" },
    { id: "9", name: "Diamond Ring", desc: "Classic diamond ring with a timeless design.", stock: 9, category: "Rings", imageUrl: "../src/assets/products/diamong-ring.png" },
    { id: "10", name: "Crystal Necklace", desc: "Sparkling crystal necklace for a touch of glamour.", stock: 11, category: "Necklaces", imageUrl: "../src/assets/products/crystal-necklace.png" },
  ];

  export const getProducts = ( id = null, category = null ) => {

    return new Promise( (resolve, reject)  => {
        if (productos.length > 0 ) {
            setTimeout( () => {
                if ( id !== undefined && id !== null) {
                    const prod = productos.filter( (prod) => prod.id === id  ) 
                    resolve(prod)
                }else if (category !== undefined &&  category !== null){
                    const prod = productos.filter( (prod) => prod.category === category  ) 
                    resolve(prod)
                }else{
                    resolve(productos)
                }
            }, 2000)
        } else {
            reject("No hay productos")
        }
    })
  }
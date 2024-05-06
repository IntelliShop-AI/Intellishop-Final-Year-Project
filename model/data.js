const PRODUCTS = [

  // {
  //   id: 432419,
  //   Category: "Apparel",
  //   Gender: "Men",
  //   Title: "Wool Sweater",
  //   image: require("../assets/sweaterwool.png"),
  //   price: "250",
  //   description:
  //     "Stylish and comfortable girl's apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
  // },

  // {
  //   id: 132345,
  //   Category: "Apparel",
  //   Gender: "Men",
  //   Title: "Long Coat",
  //   image: require("../assets/greylong.png"),
  //   price: "300",
  //   description:
  //     "Adorable and fashionable girl's dress featuring a cute floral print, perfect for special occasions and everyday wear. Made with high-quality fabric for comfort and style.",
  // },
  // {
  //   id: 342009,
  //   Category: "Apparel",
  //   Gender: "Men",
  //   Title: "Warm Hoodie",
  //   image: require("../assets/hoodiepic.jpg"),
  //   price: "200",
  //   description:
  //     "Stylish and comfortable Warm apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
  // },

  {
    id: 42419,
    Category: "Apparel",
    Gender: "girl",
    Title: "Gini and Jony Girls Knit White Top",
    image: require("../assets/shirt.png"),
    price: "250",
    description:
      "Stylish and comfortable girl's apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
  },

  {
    id: 12345,
    Category: "Apparel",
    Gender: "girl",
    Title: "Floral Pink Dress",
    image: require("../assets/dress.png"),
    price: "300",
    description:
      "Adorable and fashionable girl's dress featuring a cute floral print, perfect for special occasions and everyday wear. Made with high-quality fabric for comfort and style.",
  },
   {
    id: 67890,
    Category: "Apparel",
    Gender: "girl",
    Title: "Denim Jeans for Girls",
    image: require("../assets/jeans.jpeg"),
    price: "180",
    description:
      "Trendy denim jeans designed for girls who love a casual and stylish look. These jeans are comfortable, durable, and perfect for everyday adventures.",
  },
  {
    id: 34009,
    Category: "Apparel",
    Gender: "girl",
    Title: "Gini and Jony Girls Black Top",
    image: require("../assets/shirt.png"),
    price: "200",
    description:
      "Stylish and comfortable girl's apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
  },

 
  {
    id: 673677001,
    Category: "Apparel",
    Gender: "Boys",
    Title: "Warm Grey Sweater",
    image: require("../assets/sweater1.jpg"),
    price: "150",
    description:
      "Warm Grey Sweater for boys with unique designs and vibrant colors. Made from soft and breathable fabric, ensuring comfort and style for young adventurers.",
  },
  {
    id:551080020,
    Category: "Apparel",
    Gender: "Boys",
    Title: "Graphic Sweatshirt",
    image: require("../assets/0551080020.jpg"),
    price: "280",
    description:
      "Graphic sweatshirt designed for men who love a casual and stylish look. This sweatshirt is comfortable, durable, and perfect for everyday adventures",
  },
  {
    id: 648414023,
    Category: "Apparel",
    Gender: "Boys",
    Title: "Green Hoodie",
    image: require("../assets/0648414023.jpg"),
    price: "120",
    description:
      "Durable and comfortable green hoodie designed for active boys. These hoddie are perfect for outdoor activities and casual everyday wear.",
  },
  {
    id: 673677004,
    Category: "Apparel",
    Gender: "Boys",
    Title: "Classic High Neck",
    image: require("../assets/0673677004.jpg"),
    price: "220",
    description:
      "Class HighNeck for boys, adding a cool and stylish layer to their outfits. Made with quality wool for durability and a classic look.",
  },


   {
    id: 760036001,
    Category: "Apparel",
    Gender: "Men",
    Title: "Warm Cap",
    image: require("../assets/0760036001.jpg"),
    price: "150",
    description:
      "Warm Cap for boys with unique designs and vibrant colors. Made from soft and breathable fabric, ensuring comfort and style for young adventurers.",
  },
  {
    id:551080020,
    Category: "garments",
    Gender: "Men",
    Title: "Pair of Socks",
    image: require("../assets/0760024019.jpg"),
    price: "280",
    description:
      "Stylish and warm pair of socks for men who love a casual and stylish look. This sweatshirt is comfortable, durable, and perfect for everyday adventures",
  },
  {
    id: 648414023,
    Category: "Accessories",
    Gender: "Men",
    Title: "Dark Green Muffler",
    image: require("../assets/0760085006.jpg"),
    price: "120",
    description:
      "Durable and comfortable muffler designed for active boys. These mufflers are perfect for outdoor activities and casual everyday wear.",
  },
  {
    id: 673677004,
    Category: "Apparel",
    Gender: "Men",
    Title: "Classic High Neck",
    image: require("../assets/0760195005.jpg"),
    price: "220",
    description:
      "Class HighNeck for boys, adding a cool and stylish layer to their outfits. Made with quality wool for durability and a classic look.",
  },
];
export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
// import { firebase } from "../config";

// const getProductsFromFirebase = async () => {
//   try {
//     const snapshot = await firebase.firestore().collection("products").get();
//     const products = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     return products;
//   } catch (error) {
//     console.error("Error fetching products: ", error);
//     return [];
//   }
// };

// const getProductFromFirebase = async (productId) => {
//   try {
//     const snapshot = await firebase
//       .firestore()
//       .collection("products")
//       .doc(productId)
//       .get();
//     return { id: snapshot.id, ...snapshot.data() };
//   } catch (error) {
//     console.error("Error fetching product: ", error);
//     return null;
//   }
// };

// export { getProductFromFirebase };

// export { getProductsFromFirebase };

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Static product data
const products = [
    {
        id: 1,
        title: "Generic",
        image: "",
        description: "Elevate your style",
        price: 840,
        left_stock: 2,
        discount: "-25%",
        top_pattern: "Neck",
        color: ["Red", "Green", "Blue", "Yellow", "White"],
        size: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        type: ["Reyon", "Cotton", "Linen", "Imported", "Cotton Blend"]
    },
    {
        id: 2,
        title: "London hills",
        image: "",
        description: "Women cords set",
        price: 800,
        left_stock: 1,
        discount: "-10%",
        top_pattern: "Top",
        color: ["Green", "Yellow", "White"],
        size: ["XS", "S", "3XL", "4XL"],
        type: ["Reyon", "Cotton Blend"]
    },
    {
        id: 3,
        title: "Go Sriki",
        image: "",
        description: "Elevate your style",
        price: 1000,
        left_stock: 5,
        discount: "-15%",
        top_pattern: "Neck",
        color: ["Red", "Green"],
        size: ["XS", "S", "M", "2XL", "3XL", "4XL"],
        type: ["Reyon", "Cotton", "Linen", "Cotton Blend"]
    },
    {
        id: 4,
        title: "Litzo",
        image: "",
        description: "Dress for women",
        price: 500,
        left_stock: 2,
        discount: "-15%",
        top_pattern: "Cotton",
        color: ["Red", "Blue", "Yellow", "White"],
        size: ["XL", "2XL", "3XL", "4XL"],
        type: ["Reyon", "Cotton"]
    },
    {
        id: 5,
        title: "Amazon brand",
        image: "",
        description: "Top reviews",
        price: 711,
        left_stock: 1,
        discount: "-45%",
        top_pattern: "Neck",
        color: ["Blue", "Yellow", "White"],
        size: ["XS", "S", "3XL", "4XL"],
        type: ["Cotton", "Linen", "Cotton Blend"]
    },
    {
        id: 6,
        title: "CotLand",
        image: "",
        description: "Elevate your style",
        price: 1500,
        left_stock: 2,
        discount: "-25%",
        top_pattern: "Neck",
        color: ["Red", "Green", "Blue"],
        size: ["XS", "S", "3XL", "4XL"],
        type: ["Linen", "Imported", "Cotton Blend"]
    },
    {
        id: 7,
        title: "Sun fashion",
        image: "",
        description: "Elevate your style",
        price: 2500,
        left_stock: 2,
        discount: "-25%",
        top_pattern: "Neck",
        color: ["Red", "Green", "Blue", "Yellow"],
        size: ["XS", "S", "M", "L", "XL", "4XL"],
        type: ["Reyon", "Cotton", "Linen", "Imported"]
    },
    {
        id: 8,
        title: "Trendy Wear",
        image: "",
        description: "Stylish and comfortable",
        price: 1200,
        left_stock: 3,
        discount: "-20%",
        top_pattern: "Round Neck",
        color: ["Black", "White"],
        size: ["S", "M", "L", "XL"],
        type: ["Cotton", "Polyester"]
    },
    {
        id: 9,
        title: "Fashion Hub",
        image: "",
        description: "Casual wear for daily use",
        price: 900,
        left_stock: 4,
        discount: "-18%",
        top_pattern: "V Neck",
        color: ["Blue", "Pink", "White"],
        size: ["XS", "S", "M", "L", "XL"],
        type: ["Cotton", "Linen"]
    },
    {
        id: 10,
        title: "Elite Wear",
        image: "",
        description: "Premium quality fashion",
        price: 2000,
        left_stock: 2,
        discount: "-30%",
        top_pattern: "Collar Neck",
        color: ["Maroon", "Black"],
        size: ["M", "L", "XL", "2XL"],
        type: ["Silk", "Cotton Blend"]
    },
    {
        id: 11,
        title: "FashionPoint",
        image: "",
        description: "Modern and stylish",
        price: 1400,
        left_stock: 2,
        discount: "-35%",
        top_pattern: "Collar Neck",
        color: ["Red", "Yellow"],
        size: ["S", "M", "L"],
        type: ["Linen", "Silk"]
    },
    {
        id: 12,
        title: "Urban Chic",
        image: "",
        description: "Trendy outfit",
        price: 1200,
        left_stock: 3,
        discount: "-20%",
        top_pattern: "Round Neck",
        color: ["Black", "White", "Gray"],
        size: ["S", "M", "L", "XL"],
        type: ["Cotton", "Linen"]
    },
    {
        id: 13,
        title: "StyleWave",
        image: "",
        description: "Casual wear",
        price: 950,
        left_stock: 4,
        discount: "-30%",
        top_pattern: "V Neck",
        color: ["Blue", "Green"],
        size: ["M", "L", "XL", "2XL"],
        type: ["Reyon", "Cotton Blend"]
    },
    ...Array.from({ length: 7 }, (_, i) => ({
        id: 14 + i,
        title: `Product ${14 + i}`,
        image: "",
        description: "New stylish product",
        price: 1000 + i * 50,
        left_stock: 2 + i,
        discount: `${-10 - i * 5}%`,
        top_pattern: "Round Neck",
        color: ["Red", "Blue", "Green"],
        size: ["S", "M", "L"],
        type: ["Cotton", "Silk"]
    }))
];



app.get('/', (req, res) => {
    res.json({
        status_code: 200,
        message: "Successfully test api called",
        data: {}
    });
});

// Get product list
app.get('/products', (req, res) => {
    res.json({
        status_code: 200,
        message: "Product list fetched successfully",
        data: products
    });
});

// Get product detail by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json({
            status_code: 200,
            message: "Product detail fetched successfully",
            data: product
        });
    } else {
        res.status(404).json({
            status_code: 404,
            message: "Product not found"
        });
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

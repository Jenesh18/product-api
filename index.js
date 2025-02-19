const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Static product data
const products = [
    {
        id: 1,
        title: "Generic",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
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
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
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
        image: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
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
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
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
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
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
        image: "https://images.unsplash.com/photo-1538330627166-33d1908c210d",
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
        image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7",
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
        image: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a",
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
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68",
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
        image: "https://images.unsplash.com/photo-1583759136431-9d70db2eb04c",
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
        image: "https://images.unsplash.com/photo-1554568218-fab8079e4653",
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
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
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
        image: "https://images.unsplash.com/photo-1548624149-f9461d5c1af1",
        description: "Casual wear",
        price: 950,
        left_stock: 4,
        discount: "-30%",
        top_pattern: "V Neck",
        color: ["Blue", "Green"],
        size: ["M", "L", "XL", "2XL"],
        type: ["Reyon", "Cotton Blend"]
    },
    {
        id: 14,
        title: "Comfort Plus",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
        description: "Everyday comfort wear",
        price: 1100,
        left_stock: 5,
        discount: "-15%",
        top_pattern: "Round Neck",
        color: ["Navy", "Beige", "Pink"],
        size: ["S", "M", "L", "XL", "2XL"],
        type: ["Cotton", "Modal"]
    },
    {
        id: 15,
        title: "Elegance",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
        description: "Premium party wear",
        price: 2800,
        left_stock: 2,
        discount: "-40%",
        top_pattern: "Halter Neck",
        color: ["Gold", "Silver", "Black"],
        size: ["XS", "S", "M", "L"],
        type: ["Silk", "Satin"]
    },
    {
        id: 16,
        title: "Casual Vibes",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
        description: "Perfect weekend wear",
        price: 750,
        left_stock: 6,
        discount: "-20%",
        top_pattern: "Crew Neck",
        color: ["Olive", "Rust", "Brown"],
        size: ["S", "M", "L", "XL"],
        type: ["Cotton", "Linen Blend"]
    },
    {
        id: 17,
        title: "Athleisure",
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
        description: "Sports and leisure wear",
        price: 1600,
        left_stock: 4,
        discount: "-25%",
        top_pattern: "High Neck",
        color: ["Gray", "Black", "Neon"],
        size: ["XS", "S", "M", "L", "XL"],
        type: ["Polyester", "Spandex"]
    },
    {
        id: 18,
        title: "Boho Chic",
        image: "https://images.unsplash.com/photo-1538330627166-33d1908c210d",
        description: "Bohemian style collection",
        price: 1800,
        left_stock: 3,
        discount: "-30%",
        top_pattern: "Off Shoulder",
        color: ["Maroon", "Forest Green", "Mustard"],
        size: ["S", "M", "L"],
        type: ["Rayon", "Cotton"]
    },
    {
        id: 19,
        title: "Work Wear",
        image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7",
        description: "Professional office attire",
        price: 2200,
        left_stock: 4,
        discount: "-22%",
        top_pattern: "Peter Pan Collar",
        color: ["White", "Blue", "Black"],
        size: ["XS", "S", "M", "L", "XL"],
        type: ["Cotton Blend", "Polyester"]
    },
    {
        id: 20,
        title: "Evening Glam",
        image: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a",
        description: "Evening party collection",
        price: 3000,
        left_stock: 2,
        discount: "-35%",
        top_pattern: "Sweetheart Neck",
        color: ["Red", "Black", "Purple"],
        size: ["XS", "S", "M", "L"],
        type: ["Silk", "Velvet"]
    }
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

// Keep Render App Alive
setInterval(() => {
    axios.get('https://product-api-dsrg.onrender.com/products')
        .then(() => console.log("Pinged the server to keep it alive."))
        .catch(err => console.error("Error pinging server:", err));
}, 14 * 60 * 1000);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

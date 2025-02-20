const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Static product data
const products = [
{
      "id": 1,
      "title": "Generic",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      "description": "Elevate your style",
      "price": 840,
      "discount": "-25%",
      "top_pattern": "Neck",
      "variants": {
        "Red": {
          "XS": [
            "Imported",
            "Linen"
          ],
          "M": [
            "Cotton Blend",
            "Reyon",
            "Linen"
          ],
          "L": [
            "Cotton",
            "Reyon"
          ],
          "XL": [
            "Cotton",
            "Cotton Blend",
            "Reyon"
          ]
        },
        "Green": {
          "S": [
            "Linen",
            "Cotton Blend"
          ],
          "M": [
            "Reyon",
            "Cotton"
          ],
          "L": [
            "Cotton Blend",
            "Linen"
          ],
          "XL": [
            "Cotton",
            "Cotton Blend",
            "Linen",
            "Imported"
          ]
        },
        "White": {
          "XS": [
            "Linen",
            "Cotton Blend",
            "Imported"
            
          ],
          "S": [
            "Linen",
            "Cotton Blend"
          ],
          "M": [
            "Reyon",
            "Cotton"
          ],
          "L": [
            "Cotton Blend",
            "Linen"
          ],
          "XL": [
            "Cotton",
            "Cotton Blend",
            "Linen",
            "Imported"
          ]
        }
        
      }
    },
    {
      "id": 2,
      "title": "London Hills",
      "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      "description": "Women cords set",
      "price": 800,
      "discount": "-10%",
      "top_pattern": "Top",
      "variants": {
        "Blue": {
          "XS": [
            "Imported",
            "Reyon"
          ],
          "S": [
            "Cotton",
            "Linen"
          ],
          "M": [
            "Cotton Blend",
            "Imported",
            "Linen"
          ],
          "L": [
            "Imported",
            "Reyon",
            "Cotton Blend"
          ],
          "XL": [
            "Cotton Blend",
            "Cotton"
          ]
        }
      }
    },
    {
      "id": 3,
      "title": "Urban Trend",
      "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      "description": "Stylish casual wear",
      "price": 950,
      "discount": "-15%",
      "top_pattern": "Round Neck",
      "variants": {
        "Yellow": {
          "XS": [
            "Cotton Blend",
            "Linen"
          ],
          "S": [
            "Reyon",
            "Imported"
          ],
          "M": [
            "Cotton",
            "Linen"
          ],
          "L": [
            "Linen",
            "Cotton Blend"
          ],
          "XL": [
            "Cotton",
            "Cotton Blend"
          ]
        },
        "White": {
          "S": [
            "Cotton",
            "Linen"
          ],
          "M": [
            "Reyon",
            "Imported"
          ],
          "L": [
            "Imported",
            "Cotton Blend"
          ],
          "XL": [
            "Cotton Blend",
            "Reyon"
          ]
        }
      }
    },
    {
      "id": 4,
      "title": "Elite Wear",
      "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "description": "Formal collection",
      "price": 1020,
      "discount": "-20%",
      "top_pattern": "Collar",
      "variants": {
        "Blue": {
          "XS": [
            "Cotton Blend",
            "Reyon"
          ],
          "S": [
            "Reyon",
            "Linen"
          ],
          "M": [
            "Linen",
            "Cotton"
          ],
          "L": [
            "Cotton",
            "Cotton Blend"
          ],
          "XL": [
            "Imported",
            "Cotton"
          ]
        },
        "Green": {
          "S": [
            "Cotton",
            "Linen"
          ],
          "M": [
            "Reyon",
            "Cotton Blend"
          ],
          "L": [
            "Cotton Blend",
            "Imported"
          ],
          "XL": [
            "Linen",
            "Reyon"
          ]
        },
        "Red": {
          "S": [
            "Linen",
            "Reyon"
            
          ],
          "M": [
            "Linen",
            "Cotton Blend"
          ],
          "L": [
            "Cotton Blend",
            "Imported",
            "Reyon"
          ],
          "XL": [
            "Cotton Blend",
            "Cotton",
            "Imported"
          ]
        }
        
      }
    },
    {
      "id": 5,
      "title": "Casual Fit",
      "image": "https://images.unsplash.com/photo-1591084728795-1149f32d9866",
      "description": "Perfect daily wear",
      "price": 700,
      "discount": "-5%",
      "top_pattern": "V Neck",
      "variants": {
        "Red": {
          "XS": [
            "Cotton",
            "Reyon"
          ],
          "S": [
            "Reyon",
            "Linen"
          ],
          "M": [
            "Linen",
            "Cotton Blend"
          ],
          "L": [
            "Cotton Blend",
            "Imported"
          ],
          "XL": [
            "Cotton Blend",
            "Cotton"
          ]
        },
        "White": {
          "S": [
            "Imported",
            "Reyon"
          ],
          "M": [
            "Cotton Blend",
            "Linen"
          ],
          "L": [
            "Cotton",
            "Imported"
          ],
          "XL": [
            "Linen",
            "Cotton Blend"
          ]
        }
      }
    },
    {
      "id": 6,
      "title": "Trendy Look",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      "description": "Latest fashion trends",
      "price": 850,
      "discount": "-18%",
      "top_pattern": "Boat Neck",
      "variants": {
        "Blue": {
          "XS": [
            "Imported",
            "Cotton Blend"
          ],
          "S": [
            "Cotton Blend",
            "Linen"
          ],
          "M": [
            "Cotton",
            "Reyon"
          ],
          "L": [
            "Linen",
            "Cotton Blend"
          ],
          "XL": [
            "Reyon",
            "Imported"
          ]
        },
        "Green": {
          "M": [
            "Cotton",
            "Reyon"
          ],
          "L": [
            "Linen",
            "Cotton Blend"
          ],
          "XL": [
            "Reyon",
            "Imported"
          ]
        },
        "Red": {
          "XS": [
            "Imported",
            "Cotton Blend"
          ],
          "S": [
            "Cotton Blend",
            "Linen"
          ],
          "M": [
            "Cotton",
            "Reyon"
          ],
          "L": [
            "Linen",
            "Cotton Blend"
          ]
          
        }
        
      }
    },
    {
      "id": 7,
      "title": "Classic Touch",
      "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "description": "Timeless designs",
      "price": 900,
      "discount": "-12%",
      "top_pattern": "Square Neck",
      "variants": {
        "Green": {
          "XS": [
            "Reyon",
            "Cotton"
          ],
          "S": [
            "Cotton",
            "Linen"
          ],
          "M": [
            "Cotton Blend",
            "Reyon"
          ],
          "L": [
            "Linen",
            "Cotton"
          ],
          "XL": [
            "Imported",
            "Cotton Blend"
          ]
        }
      }
    },
    {
      "id": 8,
      "title": "Fashionista",
      "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      "description": "Make a statement",
      "price": 780,
      "discount": "-22%",
      "top_pattern": "Off Shoulder",
      "variants": {
        "Blue": {
          "XS": [
            "Cotton Blend",
            "Linen"
          ],
          "S": [
            "Reyon",
            "Cotton"
          ],
          "M": [
            "Linen",
            "Imported"
          ]
          
        },
        "Yellow": {
          "XS": [
            "Cotton Blend",
            "Linen"
          ],
          "S": [
            "Reyon",
            "Cotton"
          ],
          "M": [
            "Linen",
            "Imported"
          ],
          "L": [
            "Cotton",
            "Cotton Blend"
          ],
          "XL": [
            "Imported",
            "Reyon"
          ]
        }
      }
    },
    {
      "id": 9,
      "title": "Formal Bliss",
      "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      "description": "Perfect for office wear",
      "price": 890,
      "discount": "-14%",
      "top_pattern": "Shirt Collar",
      "variants": {
        "Green": {
          "XS": [
            "Imported",
            "Cotton Blend"
          ],
          "S": [
            "Cotton Blend",
            "Linen"
          ],
          "M": [
            "Reyon",
            "Imported"
          ],
          "L": [
            "Cotton",
            "Linen"
          ]
          
        },
        "White": {
          "S": [
            "Cotton Blend",
            "Linen"
          ],
          "L": [
            "Cotton",
            "Linen"
          ],
          "XL": [
            "Linen",
            "Cotton Blend"
          ]
        }
      }
    },
    {
      "id": 10,
      "title": "Minimalist",
      "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      "description": "Simple yet elegant",
      "price": 720,
      "discount": "-10%",
      "top_pattern": "Crew Neck",
      "variants": {
        "Blue": {
          "XS": [
            "Cotton Blend",
            "Linen"
          ],
          "S": [
            "Linen",
            "Reyon"
          ],
          "M": [
            "Reyon",
            "Cotton"
          ],
          "L": [
            "Cotton",
            "Imported"
          ],
          "XL": [
            "Imported",
            "Cotton Blend"
          ]
        }
      }
    },
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

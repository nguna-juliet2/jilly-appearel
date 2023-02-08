const Products = [
    {
        id: 1,
        images:"images/images (1).jpg" ,
        name:'MEN`S clothes',
        price:17000,
        tag:'MEN`S clothes',
        incart:0

    },
    {
        id: 2,
        images:"images/images (3).jpg" ,
        name:'womens jackect',
        price:17000,
        tag:'womens jackect',
        incart:0

    },
    {
        id: 3,
        images:"images/images (4).jpg" ,
        name:'black jacket',
        price:17000,
        tag:'black jacket',
        incart:0

    },
    {
        id: 4,
        images:"images/images (6).jpg" ,
        name:'orange shoes',
        price:17000,
        tag:'orange shoes',
        incart:0

    },
    {
        id: 5,
        images:"images/images (7).jpg" ,
        name:'black boots',
        price:17000,
        tag:'black boots',
        incart:0

    },
    {
        id: 6,
        images:"images/images (2).jpg" ,
        name:'men jackets',
        price:17000,
        tag:'men jackets',
        incart:0

    },
    {
        id: 7,
        images:"images/download (2).jpg" ,
        name:'black men`s jacket',
        price:17000,
        tag:'black men`s jacket',
        incart:0

    },
    {
        id: 8,
        images:"images/download (5).jpg" ,
        name:'branded shoe',
        price:17000,
        tag:'branded shoe',
        incart:0

    }]

    
    // render products
    Products.forEach((product) =>{
        $('product-container').append(`
        <div class="cart-product-item">
        <div class="cart-product">
            <p class="deletebtn" id="delete">&times</p>
            <img src="./${product.images}" alt="">
            <span>${product.name}</span>
        </div>
        <div class="price">${product.price}</div>
        <div class="quantity">
            <p>+</p>
            <span>${product.incart}</span>
            <p>-</p>
        </div>
        <div class="total">$ ${product.incart * product.price}./-</div>
        <div class="remove-btn" id="remove-btn-id">Remove</div>
    </div>
        `);
    });
     const addToCart =id=>{
        alert(id)
     }
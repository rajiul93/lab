import React, { useState } from 'react';



function Test() {


 

    const product = [
        {
            id: "1",
            name: "Great Value Frozen Wild Blueberries, 40 oz",
            price: "500",
            img: "https://i.ibb.co/dWS6nFK/product-thumnail-89.png",




            departments: "Groceries",
            categorys: "Food",
            discrioption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "2",
            img: "https://i.ibb.co/Pxg00f1/product-thumbnail-253.png",
            name: "Lemons, 2 lb bag",
            price: "2.99",
            "images": [
                "https://i.ibb.co/Pxg00f1/product-thumbnail-253.png",
                "https://i.ibb.co/dWS6nFK/product-thumnail-89.png"
            ],
            brand: "",
            departments: "Groceries",
            categorys: "Food",
            discrioption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "3",
            img: "https://i.ibb.co/McxLLPR/product-thumbnail-277.png",
            name: "Navel Oranges, 3 lb Bag",
            price: "2.99",
            images: [
                "https://i.ibb.co/McxLLPR/product-thumbnail-277.png",
                "https://i.ibb.co/jTQ56wy/product-thumnail-90.png"
            ],
            brand: "",
            departments: "Groceries",
            categorys: "Food",
            discrioption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "4",
            img: "https://i.ibb.co/0sq9Mqc/product-thumnail-86.png",
            name: "Small Hass Avocados, 4-6 Count Bag",
            price: "4.99",
            images: [
                "https://i.ibb.co/0sq9Mqc/product-thumnail-86.png",
                "https://i.ibb.co/h77HTVr/product-thumbnail-248.png"
            ],
            brand: "",
            deparments: "Groceries",
            category: "Food",
            discrioption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "5",
            img: "https://i.ibb.co/VNTV8qd/product-thumbnail-241.png",
            name: "Whole Brown Mushrooms, 8 oz",
            price: "3.89",
            images: [
                "https://i.ibb.co/VNTV8qd/product-thumbnail-241.png",
                "https://i.ibb.co/XDLCjpT/product-thumnail-87.png"
            ],
            brand: "", "departments": "Groceries",
            categrys: "Food",
            discriopion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "6",
            img: "https://demo.agnidesigns.com/cartify/wp-content/uploads/2021/10/product-thumnail-75.png",
            name: "Homesvale Van Pay Button Tufted Pushback Recliner, Caribbean Blue",
            price: "24.00",
            images: [
                "https://demo.agnidesigns.com/cartify/wp-content/uploads/2021/10/product-thumnail-75.png",
                "https://demo.agnidesigns.com/cartify/wp-content/uploads/2021/11/product-thumbnail-192.png"
            ],
            brand: "Puvinar",
            deparments: "Home_Appliance",
            category: "chairs",
            discrioption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "7",
            img: "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-497.png",
            name: "Mainstays Faux Leather Bucket Accent Chair, Multiple Colors",
            price: "256",
            images: [
                "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-497.png",
                "https://demo.agnidesigns.com/cartify/wp-content/uploads/2021/11/product-thumbnail-285.png"
            ],
            brand: "Puvinar",
            deparments: "Home_Appliance",
            category: "chairs",
            discrioption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "8",
            img: "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-494.png",
            name: "Relax-A-Lounger Reynolds Faux Suede Recliner, Espresso",
            price: "65.00",
            images: [
                "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-494.png",
                "https://demo.agnidesigns.com/cartify/wp-content/uploads/2021/11/product-thumbnail-220.png"
            ],
            brand: "Puvinar",
            "deparments": "Home_Appliance",
            "category": "chairs",
            "discrioption": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "9",
            img: "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/02/product-thumbnail-435.png",
            name: "Lyocell shirt with pocket",
            price: "16.00",
            images: [
                "",
                ""
            ],
            brand: "Aogue",
            "deparments": "Fashion_Clothings",
            "category": "shirt",
            "discrioption": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "10",
            img: "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/02/product-thumbnail-431.png",
            name: "Zipped cotton jersey shirt with all-over logo",
            price: "22.00",
            images: [
                "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/02/product-thumbnail-431.png"
            ],
            brand: "Aongue",
            departments: "Fashion_Clothings",
            categorys: "shirt",
            discrioption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        },
        {
            id: "11",
            img: "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/02/product-thumbnail-435.png",
            name: "Double-breasted silk shirt",
            price: "18.00",
            images: [
                "https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/02/product-thumbnail-435.png"
            ],
            brand: "Aongue",
            departments: "Fashion_Clothings",
            categorys: "shirt",
            discrioption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        }
    ]


    const [filterProduct, setFilterProduct] = useState('');






   


    return (
        <div className=''>
            <h1 className='text-center fs-3'>Product Search</h1>
            <div className='text-center mb-4 ' >
                <input
                    onChange={(event => {
                        setFilterProduct(event.target.value);
                    })}
                    className='p-2'
                    type="text"
                />
                <button className='btn btn-dark ms-3'>Search</button>
            </div>
            <div className='text-center pd_container' >
                {
                    product
                    .filter((val) => {
                        if (filterProduct === "") {
                            return val;
                        }else if(val.name.toLowerCase().includes(filterProduct.toLowerCase())) {
                            return val
                        }
                    })
                    .map((val)=>{
                        return <div className="product_design mb-5" key={val.id}>
                        <img className='img-fluid' width={200} src={val.img} alt="" />
                        <h6>Product Name: {val.name2}</h6>
                        <p>Price: {val.price}</p>
                        <p>Category: {val.category}</p>


                    </div>
                    })
                }
            </div>
        </div>
    )
}


export default Test;

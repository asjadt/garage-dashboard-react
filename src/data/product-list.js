import React from 'react';
import product1 from "../assets/images/ecommerce/product-table-1.png"
import product2 from '../assets/images/ecommerce/product-table-2.png';
import product3 from '../assets/images/ecommerce/product-table-3.png';
import product4 from '../assets/images/ecommerce/product-table-4.png';
import product5 from '../assets/images/ecommerce/product-table-5.png';
import product6 from '../assets/images/ecommerce/product-table-6.png';
import product7 from "../assets/images/ecommerce/product-table-1.png";
import product8 from '../assets/images/ecommerce/product-table-2.png';
import product9 from '../assets/images/ecommerce/product-table-3.png';
import product10 from '../assets/images/ecommerce/product-table-4.png';

export const productDB = [
    {
        image: <img src={product1} style={{ width: 50, height: 50 }} />,
        details: "Red Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: "<div class='font-success'>In Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product2} style={{ width: 50, height: 50 }} />,
        product_name: "Pink Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: "<div class='font-danger'>Out of Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product3} style={{ width: 50, height: 50 }} />,
        product_name: "Gray Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: "<div class='font-danger'>Out of Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product4} style={{ width: 50, height: 50 }} />,
        product_name: "Green Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$20",
        stock: "<div class='font-primary'>Low Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product5} style={{ width: 50, height: 50 }} />,
        product_name: "Black Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$30",
        stock: "<div class='font-success'>In Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product6} style={{ width: 50, height: 50 }} />,
        product_name: "White Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$40",
        stock: "<div class='font-success'>In Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product7} style={{ width: 50, height: 50 }} />,
        product_name: "light Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: "<div class='font-success'>In Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product8} style={{ width: 50, height: 50 }} />,
        product_name: "Gliter Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: "<div class='font-success'>In Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product9} style={{ width: 50, height: 50 }} />,
        product_name: "Yellow Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: "<div class='font-success'>In Stock</div>",
        start_date: "2011/4/25"
    },
    {
        image: <img src={product10} style={{ width: 50, height: 50 }} />,
        product_name: "Green Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: "<div class='font-success'>In Stock</div>",
        start_date: "2011/4/25"
    }
]
export default productDB;

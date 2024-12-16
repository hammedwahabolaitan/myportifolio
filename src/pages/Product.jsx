import React from 'react';
import { useNavigate } from 'react-router-dom';

// ProductCard Component
const ProductCard = ({ imageUrl, title, price, originalPrice, colors, rating }) => {


  return (
    <div className="w-80 border rounded-md shadow-sm">
      {/* Product Image */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-[60vh] object-cover" />
        <div className="absolute bottom-0 left-0 flex justify-center w-full space-x-1">
          {/* Image Thumbnails */}
          <img src={imageUrl} className="w-8 h-12 opacity-75" alt="Thumbnail 1" />
          <img src={imageUrl} className="w-8 h-12 opacity-75" alt="Thumbnail 2" />
          <img src={imageUrl} className="w-8 h-12 opacity-75" alt="Thumbnail 3" />
        </div>
      </div>
      {/* Product Details */}
      <div className="text-center mt-4">
        <div className="flex items-center justify-center space-x-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.198 2.392 9.802 2.392 9.951 2.927l1.234 4.045a1 1 0 00.95.676h4.243c.56 0 .79.716.34 1.065l-3.33 2.42a1 1 0 00-.363 1.118l1.234 4.045c.15.535-.404.974-.816.707l-3.33-2.42a1 1 0 00-1.176 0l-3.33 2.42c-.412.267-.966-.172-.816-.707l1.234-4.045a1 1 0 00-.363-1.118L2.775 8.713c-.45-.349-.22-1.065.34-1.065h4.243a1 1 0 00.95-.676L9.049 2.927z" />
            </svg>
          ))}
        </div>
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <div className="text-lg font-bold text-orange-600">${price.toFixed(2)}</div>
        <div className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</div>

        {/* Color Options */}
        <div className="flex justify-center mt-2 space-x-2">
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ProductList Component
const ProductList = () => {
  // Define your products array

  const navigate = useNavigate();
  const goto = (page) => {
    navigate(page);
  };
  const products = [
    {
      id: 1,
      imageUrl: 'src/assets/img/39.jpg',
      title: 'Waist Dress',
      price: 184,
      originalPrice: 230,
      rating: 4,
      colors: ['#4CAF50', '#2C3E50']
    },
    {
      id: 2,
      imageUrl: 'src/assets/img/25.jpg',
      title: 'Crop Top',
      price: 72.6,
      originalPrice: 121,
      rating: 4,
      colors: ['#B0A78B', '#D3B5A5', '#DCDCDC']
    },
    {
      id: 3,
      imageUrl: 'src/assets/img/22.jpg',
      title: 'Jacket',
      price: 95.5,
      originalPrice: 140,
      rating: 5,
      colors: ['#2E2E2E', '#FF5733']
    },

    {
        id: 4,
        imageUrl: 'src/assets/img/16.jpg',
        title: 'Jacket',
        price: 95.5,
        originalPrice: 140,
        rating: 5,
        colors: ['#2E2E2E', '#FF5733']
      },

      {
        id: 5,
        imageUrl: 'src/assets/img/3.jpg',
        title: 'Jacket',
        price: 95.5,
        originalPrice: 140,
        rating: 5,
        colors: ['#2E2E2E', '#FF5733']
      },

      {
        id: 6,
        imageUrl: 'src/assets/img/4.jpg',
        title: 'Jacket',
        price: 95.5,
        originalPrice: 140,
        rating: 5,
        colors: ['#2E2E2E', '#FF5733']
      },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="title1 section-t-space my-5 grid justify-center items-center">
        <h4 className="text-lg font-semibold">Exclusive Products</h4>
        <h2 className="title-inner1 text-2xl font-bold uppercase">Special Products</h2>
        <div className="line my-2 border-t-2 border-gray-300"></div>
      </div>
      <ul className="tabs flex gap-4 mb-4 border-b-2 border-gray-300">
        <li className="active cursor-pointer px-4 py-2 text-blue-500 border-b-2 border-blue-500">NEW ARRIVAL</li>
        <li className="cursor-pointer px-4 py-2 hover:text-blue-500 " onClick={() =>goto('/feature')} >FEATURED</li>
        <li className="cursor-pointer px-4 py-2 hover:text-blue-500" onClick={()=>goto('/special')}>SPECIAL</li>
      </ul>
      {/* Product List */}
      <div className="flex flex-wrap justify-around gap-5" onClick={()=> goto('/singleproduct')} >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            colors={product.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;



      


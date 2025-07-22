"use client";
import { useState } from 'react';
import Image from 'next/image';

// Dummy data produk
const allProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 199,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Smart Watch Series 8",
    price: 1599,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "MacBook Pro M2",
    price: 1699,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "iPhone 15 Pro",
    price: 1199,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Sony Gaming Console",
    price: 499,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "4K Ultra HD Monitor",
    price: 299,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "Mechanical Keyboard RGB",
    price: 59,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Wireless Mouse Gaming",
    price: 39,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 9,
    name: "Tablet Pro 12.9 inch",
    price: 999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 10,
    name: "Portable Speaker Bluetooth",
    price: 79,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 11,
    name: "Drone Camera 4K",
    price: 599,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=300&fit=crop&crop=center"
  },
  {
    id: 12,
    name: "VR Headset Premium",
    price: 399,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&h=300&fit=crop&crop=center"
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export default function Store() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + productsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              />
            </div>
            
            {/* Product Info */}
            <div className="p-4">
              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              {/* Product Price */}
              <p className="text-xl font-light text-gray-900">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => goToPage(pageNum)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === pageNum
                ? 'bg-white text-black border'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {pageNum}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
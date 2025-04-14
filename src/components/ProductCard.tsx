import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        {product.isPromotion && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
            PROMO
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Rupture de stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-sm text-gray-600 h-12 overflow-hidden">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            {product.isPromotion ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-green-600">{product.promotionPrice?.toFixed(2)}€</span>
                <span className="ml-2 text-sm text-gray-500 line-through">{product.price.toFixed(2)}€</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800">{product.price.toFixed(2)}€</span>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              product.inStock 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={() => product.inStock && onAddToCart(product)}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Ajouter' : 'Indisponible'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

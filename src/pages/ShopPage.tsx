import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, categories, Product } from '../data/products';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous les produits');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Filtrer les produits en fonction de la catégorie sélectionnée et du terme de recherche
  useEffect(() => {
    let result = products;
    
    // Filtre par catégorie
    if (selectedCategory !== 'Tous les produits') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filtre par terme de recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(term) || 
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm]);

  // Ajouter un produit au panier
  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => [...prevItems, product]);
    // Dans une vraie application, cela ajouterait le produit au panier et mettrait à jour le state global
    console.log('Produit ajouté au panier:', product);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Effet de défilement fluide
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* En-tête de la boutique */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Notre boutique</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar avec filtres */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Rechercher</h2>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Catégories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      selectedCategory === category
                        ? 'bg-green-100 text-green-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Filtres</h2>
              <div className="space-y-4">
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-gray-700">En promotion</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-gray-700">En stock uniquement</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grille de produits */}
          <div className="flex-1">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg text-gray-800">
                  {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
                </h2>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Trier par:</span>
                  <select className="border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm">
                    <option>Pertinence</option>
                    <option>Prix croissant</option>
                    <option>Prix décroissant</option>
                    <option>Nouveautés</option>
                  </select>
                </div>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
                <p className="mt-1 text-gray-500">
                  Essayez de modifier vos filtres ou votre recherche.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={() => {
                      setSelectedCategory('Tous les produits');
                      setSearchTerm('');
                    }}
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProducts.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard product={product} onAddToCart={handleAddToCart} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

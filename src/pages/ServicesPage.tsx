import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/products';

const ServicesPage: React.FC = () => {
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
      {/* En-tête de la page */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Nos services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-lg mx-auto text-xl"
          >
            Découvrez l'ensemble des services que nous proposons pour vous accompagner au quotidien.
          </motion.p>
        </div>
      </div>
      
      {/* Section Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                        {service.icon === 'chat-dots' && (
                          <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        )}
                        {service.icon === 'truck' && (
                          <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                          </svg>
                        )}
                        {service.icon === 'bag-check' && (
                          <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4" />
                          </svg>
                        )}
                        {service.icon === 'clipboard-check' && (
                          <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        )}
                      </div>
                      <h3 className="ml-4 text-2xl font-semibold text-gray-800">{service.name}</h3>
                    </div>
                    <p className="mt-4 text-gray-600">{service.description}</p>
                    
                    {service.id === 1 && (
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Comment ça marche ?</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Posez votre question via notre formulaire en ligne ou par téléphone</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Un pharmacien vous rappelle dans les 2 heures</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Obtenez des conseils personnalisés sur vos médicaments et traitements</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    {service.id === 2 && (
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Délais et tarifs</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Livraison standard (24-48h) : 4,90€ (gratuite dès 49€ d'achat)</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Livraison express (le jour même) : 9,90€</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Suivi en temps réel de votre commande</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    {service.id === 3 && (
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Comment utiliser le Click & Collect</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Commandez vos produits sur notre site</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Recevez un SMS dès que votre commande est prête (généralement sous 2h)</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Récupérez votre commande au comptoir dédié sans faire la queue</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    {service.id === 4 && (
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Avantages du suivi de traitement</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Rappels personnalisés pour la prise de vos médicaments</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Historique de vos traitements accessible en ligne</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Alertes automatiques pour le renouvellement de vos ordonnances</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-6">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Section FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Questions fréquentes</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Vous avez des questions sur nos services ? Consultez notre FAQ.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Comment puis-je bénéficier du conseil pharmaceutique ?</h3>
                <p className="mt-2 text-gray-600">
                  Vous pouvez bénéficier du conseil pharmaceutique en contactant notre équipe par téléphone, via notre formulaire en ligne ou directement en pharmacie. Un pharmacien vous répondra dans les plus brefs délais.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">La livraison à domicile est-elle disponible partout en France ?</h3>
                <p className="mt-2 text-gray-600">
                  La livraison standard est disponible partout en France métropolitaine. La livraison express le jour même est disponible uniquement dans certaines zones géographiques (principalement les grandes villes et leurs périphéries).
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Puis-je faire livrer mes médicaments sur ordonnance ?</h3>
                <p className="mt-2 text-gray-600">
                  Oui, vous pouvez faire livrer vos médicaments sur ordonnance. Il vous suffit de télécharger votre ordonnance lors de votre commande en ligne. Notre équipe vérifiera sa validité avant de préparer votre commande.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Comment fonctionne le service de suivi de traitement ?</h3>
                <p className="mt-2 text-gray-600">
                  Après inscription au service, vous renseignez vos traitements en cours. Vous recevrez ensuite des rappels personnalisés pour la prise de vos médicaments, des alertes pour le renouvellement de vos ordonnances et pourrez consulter l'historique de vos traitements.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Le Click & Collect est-il gratuit ?</h3>
                <p className="mt-2 text-gray-600">
                  Oui, le service Click & Collect est totalement gratuit, sans minimum d'achat. Vous recevez une notification dès que votre commande est prête à être retirée en pharmacie.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Section Contact */}
      <section className="py-12 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold sm:text-4xl">Une question sur nos services ?</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-green-100 sm:mt-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <div className="mt-8 flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white">
                  Contactez-nous
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

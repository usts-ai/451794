export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  isPromotion: boolean;
  promotionPrice?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vitamine C 1000mg",
    category: "Compléments alimentaires",
    price: 12.99,
    image: "https://via.placeholder.com/300x300?text=Vitamine+C",
    description: "Complément alimentaire à base de vitamine C pour renforcer le système immunitaire.",
    inStock: true,
    isPromotion: true,
    promotionPrice: 9.99
  },
  {
    id: 2,
    name: "Crème hydratante visage",
    category: "Soins du visage",
    price: 18.50,
    image: "https://via.placeholder.com/300x300?text=Creme+Hydratante",
    description: "Crème hydratante pour tous types de peau. Hydratation 24h.",
    inStock: true,
    isPromotion: false
  },
  {
    id: 3,
    name: "Gel hydroalcoolique 100ml",
    category: "Hygiène",
    price: 3.99,
    image: "https://via.placeholder.com/300x300?text=Gel+Hydroalcoolique",
    description: "Gel désinfectant pour les mains, élimine 99,9% des bactéries.",
    inStock: true,
    isPromotion: true,
    promotionPrice: 2.99
  },
  {
    id: 4,
    name: "Paracétamol 500mg",
    category: "Médicaments",
    price: 4.50,
    image: "https://via.placeholder.com/300x300?text=Paracetamol",
    description: "Médicament contre la douleur et la fièvre. Boîte de 16 comprimés.",
    inStock: true,
    isPromotion: false
  },
  {
    id: 5,
    name: "Brosse à dents électrique",
    category: "Hygiène bucco-dentaire",
    price: 49.99,
    image: "https://via.placeholder.com/300x300?text=Brosse+Electrique",
    description: "Brosse à dents électrique rechargeable avec 3 modes de brossage.",
    inStock: false,
    isPromotion: true,
    promotionPrice: 39.99
  },
  {
    id: 6,
    name: "Huile essentielle de lavande",
    category: "Aromathérapie",
    price: 8.99,
    image: "https://via.placeholder.com/300x300?text=Huile+Lavande",
    description: "Huile essentielle 100% pure et naturelle pour favoriser la détente et le sommeil.",
    inStock: true,
    isPromotion: false
  },
  {
    id: 7,
    name: "Thermomètre frontal",
    category: "Matériel médical",
    price: 29.99,
    image: "https://via.placeholder.com/300x300?text=Thermometre",
    description: "Thermomètre infrarouge sans contact pour une prise de température rapide et précise.",
    inStock: true,
    isPromotion: false
  },
  {
    id: 8,
    name: "Masques chirurgicaux (boîte de 50)",
    category: "Protection",
    price: 15.99,
    image: "https://via.placeholder.com/300x300?text=Masques",
    description: "Masques chirurgicaux 3 plis à usage unique. Filtration bactérienne > 98%.",
    inStock: true,
    isPromotion: true,
    promotionPrice: 12.99
  }
];

export const categories = [
  "Tous les produits",
  "Médicaments",
  "Compléments alimentaires",
  "Soins du visage",
  "Hygiène",
  "Hygiène bucco-dentaire",
  "Aromathérapie",
  "Matériel médical",
  "Protection"
];

export const services = [
  {
    id: 1,
    name: "Conseil pharmaceutique",
    description: "Nos pharmaciens sont à votre écoute pour vous conseiller sur vos traitements et répondre à vos questions.",
    icon: "chat-dots"
  },
  {
    id: 2,
    name: "Livraison à domicile",
    description: "Livraison gratuite pour toute commande supérieure à 49€, dans un délai de 24 à 48h.",
    icon: "truck"
  },
  {
    id: 3,
    name: "Click & Collect",
    description: "Commandez en ligne et récupérez vos produits en pharmacie sous 2h.",
    icon: "bag-check"
  },
  {
    id: 4,
    name: "Suivi de traitement",
    description: "Service personnalisé pour le suivi de vos traitements chroniques.",
    icon: "clipboard-check"
  }
];

export const promotions = [
  {
    id: 1,
    title: "Offre de printemps",
    description: "Jusqu'à -30% sur les soins du visage",
    backgroundColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 2,
    title: "Pack Immunité",
    description: "1 Vitamine C achetée = 1 Zinc offert",
    backgroundColor: "bg-yellow-100",
    textColor: "text-yellow-800"
  },
  {
    id: 3,
    title: "Nouveaux clients",
    description: "5€ offerts sur votre première commande",
    backgroundColor: "bg-blue-100",
    textColor: "text-blue-800"
  }
];

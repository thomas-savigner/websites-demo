export const menuSections = [
  {
    id: "cafes",
    eyebrow: "Au moulin",
    title: "Cafés de spécialité",
    note: "Notre café du moment est torréfié à Paris. Toutes nos boissons sont disponibles avec un lait d’avoine (+ 0,50 €).",
    items: [
      { name: "Espresso", description: "Court, précis et chocolaté", price: "2,80 €" },
      { name: "Allongé", description: "Double extraction, tout en douceur", price: "3,20 €" },
      { name: "Noisette", description: "Espresso, nuage de lait", price: "3,30 €" },
      { name: "Cappuccino", description: "Espresso, lait soyeux, cacao", price: "4,50 €" },
      { name: "Flat white", description: "Double espresso, lait micro-moussé", price: "4,80 €", signature: true },
      { name: "Moka de l’Atelier", description: "Espresso, chocolat noir, lait, pointe de fleur de sel", price: "5,50 €", signature: true },
      { name: "Filtre du jour", description: "Origine et méthode selon l’arrivage", price: "4,20 €" },
    ],
  },
  {
    id: "thes",
    eyebrow: "À infuser",
    title: "Thés & infusions",
    note: "Feuilles entières infusées à la commande — théière individuelle.",
    items: [
      { name: "Earl Grey bergamote", description: "Thé noir, bergamote naturelle", price: "4,80 €" },
      { name: "Sencha du matin", description: "Thé vert vif aux notes végétales", price: "4,80 €" },
      { name: "Rooibos abricot", description: "Doux, fruité et sans théine", price: "4,80 €" },
      { name: "Verveine fraîche", description: "Feuilles de verveine, zeste de citron", price: "4,50 €" },
      { name: "Chaï maison", description: "Épices douces, thé noir et lait chaud", price: "5,50 €", signature: true },
      { name: "Matcha latte", description: "Matcha cérémonial et lait au choix", price: "5,80 €" },
    ],
  },
  {
    id: "frais",
    eyebrow: "Servi frais",
    title: "Sans alcool",
    note: "Jus pressés, boissons maison et bulles légères.",
    items: [
      { name: "Citronnade Moka", description: "Citron jaune, basilic, sirop de romarin", price: "5,50 €", signature: true },
      { name: "Thé glacé pêche", description: "Thé blanc, pêche et verveine", price: "5,80 €" },
      { name: "Jus minute", description: "Orange ou pamplemousse rose", price: "5,50 €" },
      { name: "Pomme trouble", description: "Pur jus artisanal d’Île-de-France", price: "4,80 €" },
      { name: "Kéfir du moment", description: "Fermentation maison, fruits de saison", price: "6,00 €" },
      { name: "Eau filtrée", description: "Plate ou pétillante, à volonté", price: "2,00 €" },
    ],
  },
];

export const foodSections = [
  {
    id: "matin",
    eyebrow: "8h — 11h30",
    title: "Le petit déjeuner",
    note: "Du simple, du frais, préparé chaque matin.",
    items: [
      { name: "Tartines du matin", description: "Pain au levain, beurre demi-sel, confiture maison", price: "7,50 €", vegetarian: true },
      { name: "Granola de l’Atelier", description: "Yaourt fermier, fruits de saison, graines torréfiées", price: "9,50 €", vegetarian: true },
      { name: "Œufs à la coque", description: "Deux œufs bio, mouillettes au levain, beurre fumé", price: "10,00 €", vegetarian: true },
      { name: "Brioche perdue", description: "Poire rôtie, crème crue, noisettes", price: "11,50 €", vegetarian: true, signature: true },
    ],
  },
  {
    id: "brunch",
    eyebrow: "Toute la journée",
    title: "Les assiettes brunch",
    note: "Des assiettes généreuses, servies lorsque vous en avez envie.",
    items: [
      { name: "Avocado toast", description: "Levain, avocat citronné, œuf poché, graines, jeunes pousses", price: "14,50 €", vegetarian: true, signature: true },
      { name: "Œufs Moka", description: "Œufs brouillés, champignons rôtis, pommes grenaille, salade d’herbes", price: "15,00 €", vegetarian: true },
      { name: "Bun du matin", description: "Brioche toastée, œuf, cheddar affiné, oignons confits, pickles", price: "14,00 €", vegetarian: true },
      { name: "Assiette du jardin", description: "Houmous de haricots blancs, légumes rôtis, œuf mollet, focaccia", price: "15,50 €", vegetarian: true },
      { name: "Pancakes de saison", description: "Compotée de fruits, sirop d’érable, crème fouettée", price: "13,50 €", vegetarian: true },
    ],
  },
  {
    id: "pouce",
    eyebrow: "Midi — 18h",
    title: "Sur le pouce",
    note: "À savourer sur place ou à emporter.",
    items: [
      { name: "Croque Moka", description: "Jambon blanc, comté affiné, crème moutardée, salade", price: "15,50 €", signature: true },
      { name: "Focaccia du moment", description: "Légumes grillés, ricotta citronnée, roquette", price: "12,50 €", vegetarian: true },
      { name: "Soupe du marché", description: "Légumes de saison, huile d’herbes, pain au levain", price: "9,50 €", vegan: true },
      { name: "Salade de lentilles", description: "Lentilles vertes, feta, betterave, noix, vinaigrette au miel", price: "13,50 €", vegetarian: true },
    ],
  },
  {
    id: "douceurs",
    eyebrow: "Au comptoir",
    title: "Les douceurs",
    note: "Notre sélection change selon l’humeur du pâtissier.",
    items: [
      { name: "Cookie chocolat & fleur de sel", description: "Cœur moelleux, chocolat noir", price: "4,00 €", vegetarian: true },
      { name: "Cake citron pavot", description: "Glaçage citron, graines de pavot", price: "4,80 €", vegetarian: true },
      { name: "Financier noisette", description: "Beurre noisette, praliné maison", price: "4,50 €", vegetarian: true },
      { name: "Dessert du jour", description: "À découvrir auprès de notre équipe", price: "6,50 €", vegetarian: true },
    ],
  },
];

export const quickLinks = [
  ["Cafés", "#cafes"],
  ["Thés", "#thes"],
  ["Boissons fraîches", "#frais"],
  ["Petit déjeuner", "#matin"],
  ["Brunch", "#brunch"],
  ["Sur le pouce", "#pouce"],
];

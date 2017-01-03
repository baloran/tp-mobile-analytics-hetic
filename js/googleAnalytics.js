// Attention à bien supprimer les balises " <script type="text/javascript"> " et " </script> "
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89744919-1', 'auto');
ga('send', 'pageview');

ga('require', 'ec');

function gaButton(category, action, label) {
  ga('send', 'event', category, action, label);
}


function addToCart() {
  ga('ec:addProduct', {
    'id': 'P12345', // ID du produit (« SKU » ; obligatoire)
    'name': 'Iphone', // Nom du produit (obligatoire)
    'category': 'Apparel', // Cégorie du produit (optionnelle)
    'brand': 'Apple', // Marque du produit (optionnelle)
    'variant': 'black', // Variante (couleur etc.) (optionnelle)
    'price': '399.5', // Prix unitaire du produit (optionnelle)
    'quantity': 1 // Quantité du produit (optionnelle)
  });
  ga('ec:addProduct', {
    'id': 'P123456', // ID du produit (« SKU » ; obligatoire)
    'name': 'House Iphone', // Nom du produit (obligatoire)
    'category': 'Apparel', // Cégorie du produit (optionnelle)
    'brand': 'Apple', // Marque du produit (optionnelle)
    'variant': 'black', // Variante (couleur etc.) (optionnelle)
    'price': '49', // Prix unitaire du produit (optionnelle)
    'quantity': 2 // Quantité du produit (optionnelle)
  });
  ga('ec:addProduct', {
    'id': 'P12347', // ID du produit (« SKU » ; obligatoire)
    'name': 'Oreillette bluetooth', // Nom du produit (obligatoire)
    'category': 'Apparel', // Cégorie du produit (optionnelle)
    'brand': 'Google', // Marque du produit (optionnelle)
    'variant': 'black', // Variante (couleur etc.) (optionnelle)
    'price': '99', // Prix unitaire du produit (optionnelle)
    'quantity': 1 // Quantité du produit (optionnelle)
  });
}

function checkout() {
  ga('ec:setAction', 'purchase', {
    'id': 'T12345', // ID de la transaction (obligatoire)
    'affiliation': 'Google Store - Online', // Variable libre (utilisé pour un code de réduc. par ex. ; optionnelle)
    'revenue': '547.5', // Total complet (prix produit + frais d’expédition + taxes ; optionnelle)
    'tax': '2.85', // Taxes (optionnelle)
    'shipping': '5.34', // Frais d’expédition (optionnelle)
    'coupon': 'SUMMER2013'    // Coupon de réduction (optionnelle)
  });
}

// CategoryDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const categoryDetails = {
  1: { name: 'Sport', description: 'Description du sport', image: 'url_de_l_image_sport' },
  2: { name: 'Musique', description: 'Description de la musique', image: 'url_de_l_image_musique' },
  3: { name: 'Voyage', description: 'Description du voyage', image: 'url_de_l_image_voyage' },
  // Ajoutez d'autres détails de catégories selon vos besoins
};

function CategoryDetails() {
  const { id } = useParams();
  const category = categoryDetails[id];

  if (!category) {
    return <div>Catégorie non trouvée</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <img src={category.image} alt={category.name} />
      <Link to="/">Retour à la liste des catégories</Link>
    </div>
  );
}

export default CategoryDetails;
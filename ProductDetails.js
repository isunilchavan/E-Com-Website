import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ productsArr }) {
  const { productId } = useParams();
  const product = productsArr[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p>Price: ${product.price}</p>
      <h3>Reviews:</h3>
      {product.reviews.map((review, index) => (
        <div key={index} className="review">
          <img src={review.image} alt={`Review ${index}`} />
          <p>{review.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;
import { Link } from "react-router-dom";
/* import ProductData from "./ProductData"; */
const ProductList = ({ product }) => {
  return (
    <div className="product-list">
      {product.map((product) => (
        <div className={`products-card-sm ${product.company}`} key={product.id}>
          <div className="product-info-before">
            <h2>{product.title}</h2>
            <p>{product.description.substring(0, 125)}...</p>
          </div>
          <div className="product-pris-btn">
            <span>${product.price}</span>
            <Link to={`/pages/products/${product.id}`}>
              <button className="my-btn">Detalis</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import { Link } from "react-router-dom";

const RelatedProducts = ({ data }) => {
  const { id, mainProduct, productName, price } = data;
  return (
    <Link
      to={`/product/${id}`}
      className="col-12 col-md-3 d-flex flex-column align-items-center text-center related-single-products"
    >
      <div className="image">
        <img src={mainProduct} alt="Vintage Armchair" className="img-fluid" />
      </div>

      <div className="content">
        <div className="header text-dark">{productName}</div>
        <div className="meta text-deepred">₦{parseFloat(price).toFixed(2)}</div>
      </div>
    </Link>
  );
};

export default RelatedProducts;

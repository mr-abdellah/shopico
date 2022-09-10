import "./Product.css";
import Rating from "./../rating/Rating";

const Product = ({
  id,
  title,
  image,
  description,
  category,
  price,
  rating,
  pending,
  failed,
}) => {
  return (
    <>
      {pending ? (
        <div className="Card loading"></div>
      ) : (
        <div className="Card">
          <div className="deal-background">
            <img src={image} alt={title} />
          </div>
          <h3 id="deal-title">{title}</h3>
          <div className="deal-info">
            <p id="deal-price">{`Price ${price}$`}</p>
          </div>
          {Rating(rating)}
        </div>
      )}
    </>
  );
};

export default Product;

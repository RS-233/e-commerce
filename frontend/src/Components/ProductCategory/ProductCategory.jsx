import "./ProductCategory.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assest";

const Productcategory = () => {

  return (
    <div className="section_1">
      <div className="productcategory">
        <Link to="/electronics"  className="category-list-item">
          <div>
            <img className="category_images" src={assets.electronics} alt="" />
            <p>Electronics</p>
          </div>
        </Link>
        <Link to="/appliances" className="category-list-item">
          <div>
            <img className="category_images" src={assets.appliance} alt="" />
            <p>Appliances</p>
          </div></Link>
        
        <Link to="/fashion" className="category-list-item">
          <div>
            <img className="category_images" src={assets.fashion} alt="" />
            <p>Fashion</p>
          </div>
        </Link>
        <Link to="/toys" className="category-list-item">
          <div>
            <img className="category_images" src={assets.toys} alt="" />
            <p>Toys</p>
          </div>
        </Link>
        <Link to="/kitchen" className="category-list-item">
          <div>
            <img className="category_images" src={assets.Kitchen} alt="" />
            <p>Kitchen</p>
          </div>
        </Link>
        <Link to="/furniture" className="category-list-item">
          <div>
            <img className="category_images" src={assets.furniture} alt="" />
            <p>Furniture</p>
          </div>
        </Link>
        <Link to="/grocery" className="category-list-item">
          <div>
            <img className="category_images" src={assets.grocery} alt="" />
            <p>Grocery</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Productcategory;

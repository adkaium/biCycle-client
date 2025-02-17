import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json"
import { ProductType} from "../Shop/productType";

const CategoryPage = () => {
    const {categoryName} = useParams();
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

    useEffect(() => { 
        const filterd = products.filter((product) => product.category === categoryName?.toLocaleLowerCase())
        setFilteredProducts(filterd);
    },[])
  return (
    <div>Category</div>
  )
}

export default CategoryPage
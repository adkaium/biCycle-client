import { ProductType } from "./productType";


export const ProductCard  = ({products}:ProductType) => {
    console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
            products.map(( product:ProductType, index:number) => (
                <div key={index} >

                </div>
            )
        }
    </div>
  )
}



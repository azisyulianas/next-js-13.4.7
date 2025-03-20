import { ProductType } from "@/types/productType";
import ProductView from "@/views/Product";

const ProductPage = (props: {products:ProductType[]}) => {
  const { products } = props;  
  return (
    <div>
      <ProductView products={products}/>
    </div>
  )
}

export default ProductPage;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/product')
  const response = await res.json()
  return {
    props:{
      products: response.data
    },
  }
}
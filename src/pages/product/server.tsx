import ProductView from "@/views/Product";
import { ProductType } from "../../types/productType";

const ProductPage = (props: {products:ProductType[]}) => {
  const { products } = props;  
  return (
    <div>
      <ProductView products={products}/>
    </div>
  )
}

export default ProductPage;

// Dipanggil tiap dibuka
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/product')
  const response = await res.json()
  return {
    props:{
      products: response.data
    },
  }
}
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetcher, useSWR } from '@/utils/swr/fetcher'


const ProductPage = () =>{
  const [products, setProducts] = useState([])
  const { push } = useRouter()

  const { data, error, isLoading } = useSWR(
    '/api/product',
    fetcher
  );
 
  return (
    <div>
      <ProductView products={isLoading? []: data.data}/>
    </div>
  )
}

export default ProductPage;
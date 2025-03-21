import { ProductType } from "@/types/productType";
import { fetcher, useSWR } from "@/utils/swr/fetcher";
import DetailProdcut from "@/views/DetailProduct";
import { useRouter } from "next/router";

const DetailProdcutPage = ({product}:{product:ProductType}) =>{
  const { query } = useRouter();
  // Client Side
  const { data, error, isLoading } = useSWR(
    `/api/product/${query.product}`,
    fetcher
  );

  return (
    <div>
      {/* Client Side */}
      <DetailProdcut product={isLoading?{}:data.data} />
      {/* Server & Static Side */}
      {/* <DetailProdcut product={product} /> */}
    </div>
  )
}

export default DetailProdcutPage;

// Untuk Server
// export async function getServerSideProps({params,}:{params:{product:string}}) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.product}`)
//   const response = await res.json()
//   return {
//     props:{
//       product: response.data
//     },
//   }
// }


// Untuk Static
// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/product`)
//   const response = await res.json()

//   const paths  = response.data.map((product:ProductType)=>({
//     params:{
//       product: product.id,
//     }
//   }))
//   return {paths, fallback:false} 
// }

// export async function getStaticProps({params,}:{params:{product:string}}) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.product}`)
//   const response = await res.json()
//   return {
//     props:{
//       product: response.data
//     },
//   }
// }
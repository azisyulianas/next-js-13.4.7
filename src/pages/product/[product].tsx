import { useRouter } from "next/router";

const DetailProdcutPage = () =>{
  const { query } = useRouter();
  return (
    <div>
      <h1>Ini Detail Product Pages</h1>
      <h1>Product : {query.product}  </h1>
    </div>
  )
}

export default DetailProdcutPage;
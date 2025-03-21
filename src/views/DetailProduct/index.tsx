import { ProductType } from "@/types/productType";
import style from "./DetailProduct.module.scss"

const DetailProdcut = ({product}:{product:ProductType}) => {
  return (
    <>
      <h1 className={style.title}>Ini Detail Product Pages</h1>
      <div className={style.productDetail}>
        <div className={style.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={style.productDetail__name}>{product.name}</h4>
        <p className={style.productDetail__category}>{product.category}</p>
        <p className={style.productDetail__prices}>
          {product.price && product.price.toLocaleString('id-ID',{
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
    </>
  )
}

export default DetailProdcut;
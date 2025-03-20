import { ProductType } from '@/types/productType'
import style from '@/views/Product/Product.module.scss'

const ProductView = ({products}: {products:ProductType[]}) => {
  return (
    <div className={style.product}>
      <h1 className={style.product__title}>Product</h1>
      <div className={style.product__content}>
        {products.length > 0 ?(
          <>
            {products.map((product:ProductType) => (
              <div key={product.id} className={style.product__content__item}>
                <div className={style.product__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={style.product__content__item__name}>{product.name}</h4>
                <p className={style.product__content__item__category}>{product.category}</p>
                <p className={style.product__content__item__prices}>
                  {product.price.toLocaleString('id-ID',{
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className={style.product__content__skeleton}>
              <div className={style.product__content__skeleton__image} />
              <div className={style.product__content__skeleton__name} />
              <div className={style.product__content__skeleton__category} />
              <div className={style.product__content__skeleton__prices} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}


export default ProductView
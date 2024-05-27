import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'


const SingleProductPage = async ({params}) => {
  const {id} = params;
    const product = await fetchProduct(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt='' fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name='id' value={product.id} />
          <label>Title</label>
          <input type="text" name='title' defaultValue={product.title} />
          <label>Price</label>
          <input type="number" name='price' defaultValue={product.price}/>
          <label>Stock</label>
          <input type="number" name='stock' defaultValue={product.stock} />
          <label>Color</label>
          <input type="text" name='color' defaultValue={product.color} />
          <label>Size</label>
          <input type="text" name='size' defaultValue={product.size} />
          <label htmlFor="">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="phones">Phones</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea name="desc" id="desc" rows="10" defaultValue={product.desc || ""} />

          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
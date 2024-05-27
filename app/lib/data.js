import { Product, User } from "./models";
import { connectToDB } from "./utils";

// users

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const fetchUsers = async (q, page) => {
  const url = `${baseUrl}/api/users?q=${q}&page=${page}`;

  try {
      const res = await fetch(url, { cache: 'no-store' });

      if (!res.ok) {
          throw new Error("Failed to Fetch Users");
      }
      return res.json();
  } catch (err) {
      console.log("Error Loading Users: ", err);
      throw new Error("Failed to Fetch Users");
  }
};

export const fetchUser = async (id)=>{
  const url = `${baseUrl}/api/users/${id}`;

  try{
    const res = await fetch(url, {cache: 'no-store'});
    if(!res.ok) {
      throw new Error("Failed to fetch Users")
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// products
export const fetchProducts = async (q, page)=>{

const itemPerPage = 3

const regex = RegExp(q, "i");
  try{
    connectToDB()
    const count = await Product.find({ title: { $regex:
regex } }).count();
    const products = await Product.find({title: { $regex : regex } } ).limit(itemPerPage).skip(itemPerPage * (page-1));
    return {count, products}
  }catch(err){
    console.log(err)
    throw new Error("Failed to Fetch products!!")
  }
}

export const fetchProduct = async (id)=>{

  try{
    connectToDB()
    const product = await Product.findById(id)
    return product
  }catch(err){
    console.log(err)
    throw new Error("Failed to Fetch Product!!")
  }
}
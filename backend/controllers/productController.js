import Product from "../model/product.js";
import { isAdmin } from "./userController.js";

export async function createProduct(req, res){

  if(!isAdmin(req)){
    return res.status(403).json(
        {
            message: "Access denied.admins only"
        }
    )
  }



    const product = new Product(req.body)

    try {
        
        const reponse = await product.save()

        res.json(
            {
                message : "Product created succesfully"
            }
        )
    } catch (error) {

        console.error("error creating product", error)
        return res.status(500).json(
            {
                message: "failed to created product"
            }
        )
        
    }

}


export async function getProducts(req, res){

    try {

        if(isAdmin(req)){
            const product = await Product.find();
            return res.json(product);
        }else{
           const product = await Product.find({ isAvailble: true}) ;
           return res.json(product)
        }
        
    } catch (error) {
        console.error("error fetching products :", error);
        return res.status(500).json({
            message: "failed to fetch products"
        })
    }

}
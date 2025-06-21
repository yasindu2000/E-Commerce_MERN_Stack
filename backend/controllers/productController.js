import Product from "../model/product";

export async function createProduct(req, res){

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
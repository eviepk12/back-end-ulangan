import Products from "../models/ProductModel.js"

export const getProduct = async (req, res) => {
    try {
        const response = await Products.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getProductById = async(req, res) => {
    try {
        const response = await Products.findOne({
            where:{
                uuid: req.params.uuid
            }
        }) 
        res.status(200).json({response})
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createProduct = async (req, res) => {
    const { nama, price } = req.body

    try {
        await Products.create({
            nama: nama,
            price: price,
        })
        res.status(200).json({ msg: "Product succefully added" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {

}
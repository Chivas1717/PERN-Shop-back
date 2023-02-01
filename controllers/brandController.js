const {Brand, Type} = require("../models/models");

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async deleteBrand(req,res) {
        const {name} = req.body
        await Brand.destroy({where: {name}})
        return res.json(await Brand.findAll())
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()
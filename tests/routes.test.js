const request = require('supertest')
const app = require('../server.js')

describe('User API', () => {
    it('should show all products', async () => {
        const res = await request(app).get('/api/products')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('products')
    }),    
    
    it('should show a product', async () => {
        const res = await request(app).get('/api/products/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('product')
    }),    
    
    it('should create a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                sku: 'CLIBAR',
                name: 'CLIF BARS - Energy Bars',
                short_description: 'CLIF BAR is The Ultimate Energy Bar',
                description: 'CLIF BAR is The Ultimate Energy Bar, purposefully crafted with an ideal mix of protein, fat, and carbohydrates to sustain active bodies.',
                tags: 'White Chocolate,Macadamia Nut,Crunchy Peanut Butter,Chocolate Chips,Blueberry Crisp',
                image: 'http://placehold.jp/3d4070/ffffff/150x150.png?text=Placeholder%20Product%20Image',
                stock: 16,
                price: '6.20',
                createdAt: new Date(),
                updatedAt: new Date()
              })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('product')
    }),    
    
    it('should update a product', async () => {
        const res = await request(app)
            .put('/api/products/1')
            .send({
                sku: 'CLIBAR',
                name: 'CLIF BARS - Energy Bars',
                short_description: 'CLIF BAR is The Ultimate Energy Bar',
                description: 'CLIF BAR is The Ultimate Energy Bar, purposefully crafted with an ideal mix of protein, fat, and carbohydrates to sustain active bodies.',
                tags: 'White Chocolate,Macadamia Nut,Crunchy Peanut Butter,Chocolate Chips,Blueberry Crisp',
                image: 'http://placehold.jp/3d4070/ffffff/150x150.png?text=Placeholder%20Product%20Image',
                stock: 16,
                price: '6.20',
                createdAt: new Date(),
                updatedAt: new Date()
              })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('product')
    }),    
    
    it('should delete a product', async () => {
        const res = await request(app)
            .del('/api/products/1')
        expect(res.statusCode).toEqual(204)
    })
})
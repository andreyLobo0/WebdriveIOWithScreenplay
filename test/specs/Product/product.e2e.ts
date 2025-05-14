import { browser } from '@wdio/globals'
import { faker } from '@faker-js/faker';
import { AdminUser } from '../..//actors/AdminUser'
import { LoginAsAdmin } from '../../tasks/LoginAsAdmin'
import { CreateProduct } from '../../tasks/CreateProduct'
import { IspageVisible } from '../../questions/IsPageVisible'

describe('Product', () => {
    let productName: string
    let productPrice: number
    let productDescription: string
    let productQuantity: number

    beforeEach(async () => {
        // Arrange
        await browser.url(`/login`)
        const user = new AdminUser()
        // Act
        await user.attemptTo(LoginAsAdmin('fulano2@qa.com', 'teste'))
        // Assert
        await IspageVisible('admin/home', 'Bem Vindo teste')()
    })
    context('Sucess', () => {
        it('Create Product - Should create a product successfully.', async () => {
            // Arrange
            productName = faker.commerce.productName ();
            productPrice = faker.number.int({ min: 1, max: 100 });
            productDescription = faker.commerce.productDescription();
            productQuantity = faker.number.int({ min: 1, max: 100 });
            // Act
            await browser.url(`/admin/cadastrarprodutos`)
            const user = new AdminUser()
            // Act
            await user.attemptTo(CreateProduct(productName, productPrice, productDescription, productQuantity))
            // Assert
            await IspageVisible('admin/listarprodutos', 'Lista dos Produtos')()
        })
    })
    context('Error', () => {
        it('Product Duplicate - Should exhibit alert message and not create product.', async () => {
            // Arrange
            await browser.url(`/admin/cadastrarprodutos`)
            const user = new AdminUser()
            // Act
            await user.attemptTo(CreateProduct(productName, productPrice, productDescription, productQuantity))
            // Assert
            await IspageVisible('admin/cadastrarprodutos', 'Cadastro de Produtos')()
        })
    })
})


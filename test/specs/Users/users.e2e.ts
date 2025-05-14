import { browser } from '@wdio/globals'
import { faker } from '@faker-js/faker';
import { AdminUser } from '../../actors/AdminUser'
import { LoginAsAdmin } from '../../tasks/LoginAsAdmin'
import { CreateUsers } from '../../tasks/CreateUsers'
import { IspageVisible } from '../../questions/IsPageVisible'

describe('Users', () => {
    let userName: string
    let userEmail: string
    let userPassword: string

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
        it('Create User - Should create a product successfully.', async () => {
            // Arrange
            userName = faker.person.fullName();
            userEmail = faker.internet.email();
            userPassword =faker.string.uuid();
            // Act
            await browser.url(`/admin/cadastrarusuarios`)
            const user = new AdminUser()
            // Act
            await user.attemptTo(CreateUsers(userName, userEmail, userPassword))
            // Assert
            await IspageVisible('admin/listarusuarios', 'Lista dos usuários')()
        })
    })
    context('Error', () => {
        it('User Duplicate - Should exhibit alert message and not create user.', async () => {
            // Arrange
            await browser.url(`/admin/cadastrarusuarios`)
            const user = new AdminUser()
            // Act
            await user.attemptTo(CreateUsers(userName, userEmail, userPassword))
            // Assert
            await IspageVisible('/admin/cadastrarusuarios', 'Cadastro de usuários')()
        })
    })
})


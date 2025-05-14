import { browser } from '@wdio/globals'
import { AdminUser } from '../..//actors/AdminUser'
import { LoginAsAdmin } from '../../tasks/LoginAsAdmin'
import { IspageVisible } from '../../questions/IsPageVisible'

describe('Login', () => {
    context('Sucess', () => {
        it('Valid Credentials - Should log in successfully and open the home screen.', async () => {
            // Arrange
            await browser.url(`/login`)
            const user = new AdminUser()
            // Act
            await user.attemptTo(LoginAsAdmin('fulano2@qa.com', 'teste'))
            // Assert
            await IspageVisible('admin/home', 'Bem Vindo teste')()
        })
    })
    context('Error', () => {
        it('Invalid Credentials - Should log in without successfully and display message of the error', async () => {
            // Arrange
            await browser.url(`/login`)
            const user = new AdminUser()
            // Act
            await user.attemptTo(LoginAsAdmin('fulano2@qa.com', 'teste123456'))
            // Assert
            await IspageVisible('login', 'Login')()
        })
    })
})


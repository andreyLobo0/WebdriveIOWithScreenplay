import { FillInput } from '../interactions/FillInput'
import { ClickButton } from '../interactions/ClickButton'

export const CreateProduct = (name: string, price: number, description: string, quantity: number) => async () => {
        await FillInput('#nome', name)()
        await FillInput('#price', price.toString())()
        await FillInput('#description', description)()
        await FillInput('#quantity', quantity.toString())()
        // await $('#image').setValue(await browser.uploadFile('./src/uploads/img.png'))
        await ClickButton('Cadastrar')()
}
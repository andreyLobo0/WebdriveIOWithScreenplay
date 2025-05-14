import { FillInput } from '../interactions/FillInput'
import { ClickButton } from '../interactions/ClickButton'

export const CreateUsers = (name: string, email: string, password: string) => async () => {
        await FillInput('#nome', name)()
        await FillInput('#email', email.toString())()
        await FillInput('#password', password)()
        await ClickButton('Cadastrar')()
}
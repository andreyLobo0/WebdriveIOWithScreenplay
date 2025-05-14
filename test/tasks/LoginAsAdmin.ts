import { FillInput } from '../interactions/FillInput'
import { ClickButton } from '../interactions/ClickButton'

export const LoginAsAdmin = (email: string, password: string) => async () => {
        await FillInput('#email', email)()
        await FillInput('#password', password)()
        await ClickButton('Entrar')()
}
import { $ } from '@wdio/globals'

export const ClickButton = (nameButton: string) => async () => {
    await $(`button=${nameButton}`).click()
}
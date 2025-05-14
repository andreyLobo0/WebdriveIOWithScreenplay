import { expect, $ } from '@wdio/globals'

export const IspageVisible = (path: string, validation: string) => async () => {
    await expect(browser).toHaveUrl(expect.stringContaining(path))
    await expect($(`h1=${validation}`)).toHaveText(expect.stringContaining(validation))
}
import { $ } from '@wdio/globals'

export const FillInput = (identifier: string, value: string) => async () => {
    await $(identifier).setValue(value)
}
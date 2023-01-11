export const errorMessage = (value: string, errors: any, name: string, isRequired: boolean) => {
    if (!!errors[name] && isRequired === true) return "Por favor revise el campo requerido"
    if (value?.length >= 65) return "Has excedido el numero máximo de caracteres"
    return null
}
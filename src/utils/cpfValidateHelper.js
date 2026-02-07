module.exports = (cpf) =>{
    if (!cpf) return false;

    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;

    const nums = cpf.split('').map(n => parseInt(n));
    const [
        num1, num2, num3, num4, num5, num6,
        num7, num8, num9, num10, num11
    ] = nums;
    const todosIguais = nums.every(n => n === nums[0]);
    if (todosIguais) return false;

    const soma1 =
        num1 * 10 + num2 * 9 + num3 * 8 + num4 * 7 + num5 * 6 +
        num6 * 5 + num7 * 4 + num8 * 3 + num9 * 2;

    let resto1 = (soma1 * 10) % 11;
    if (resto1 === 10) resto1 = 0;

    const soma2 =
        num1 * 11 + num2 * 10 + num3 * 9 + num4 * 8 + num5 * 7 +
        num6 * 6 + num7 * 5 + num8 * 4 + num9 * 3 + num10 * 2;
    let resto2 = (soma2 * 10) % 11;
    if (resto2 === 10) resto2 = 0;

    return resto1 === num10 && resto2 === num11;
};
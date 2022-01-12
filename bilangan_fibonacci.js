function fibonacci(bilangan) {
    if (bilangan === 1 || bilangan === 0) {
        return true;
    }
    let rumus1 = bilangan - 1;
    let rumus2 = bilangan - 2;
    return (rumus1 + rumus2 === bilangan);
}

console.log(fibonacci(7))
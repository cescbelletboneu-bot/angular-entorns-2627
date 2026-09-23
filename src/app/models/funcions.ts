export function saludar(nom: string): string {
    return `Hola, ${nom}!`;
}

export function esMajorEdat(edat: number): boolean {
    return edat >= 18;
}

export function sumarArray(nums: number[]): number {
    let suma = 0;
    for (const num of nums) {
        suma += num;
    }
    return suma;
}

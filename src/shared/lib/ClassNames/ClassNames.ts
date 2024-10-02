type Mods = Record<string, string | boolean>;


export function ClassNames (cls: string, mode?:Mods, additional?:string[]):string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}
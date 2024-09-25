type Mods = Record<string, string | boolean>;


export function ClassNames (cls: string, mode:Mods, additions:string[]):string {
    return [
        cls,
        ...additions,
        ...Object.entries(mode)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}
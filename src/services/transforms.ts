export function allIds<TId extends string | number>(data: Array<{ id: TId }>): TId[] {
    return data.map((item) => item.id);
}

export function byId<TItem extends { id: string | number }>(data: TItem[]): { [id: string]: TItem } {
    return data.reduce((result, item) => {
        result[item.id.toString()] = item;

        return result;
    }, {});
}

export function choice<T>(array: T[] | null): T | null {
    if (!array) {
        return null;
    }

    return array[Math.floor(Math.random() * array.length)] || null;
}

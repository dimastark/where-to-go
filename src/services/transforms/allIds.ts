export default function <TId extends string | number> (data: Array<{ id: TId }>): TId[] {
    return data.map(item => item.id);
}

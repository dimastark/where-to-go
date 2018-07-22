export default function <TItem extends { id: string | number }> (data: TItem[]): { [id: string]: TItem } {
    return data.reduce((result, item) => {
        result[item.id.toString()] = item;

        return result;
    }, {});
}

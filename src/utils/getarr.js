export const getArr = (x,y) => {
    let arr = [];
    for (let i=0; i < x; i++) {
        arr.push([]);
        for (let j=0; j < y; j++) {
            arr[i].push(null);
        }
    }
    return arr
}

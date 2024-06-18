export const sortArrDataString = (arrToSort, nameAtributeToSort) => {
    return arrToSort.sort((a, b) => {
        if (a[nameAtributeToSort] < b[nameAtributeToSort]) {
            return -1
        } else if (a[nameAtributeToSort] > b[nameAtributeToSort]) {
            return 1
        } else {
            return 0
        }
    })
}
export const sortArrDataNumber = (arrToSort, nameAtributeToSort) => {
    console.log(nameAtributeToSort)
    return arrToSort.sort((a, b) => a[nameAtributeToSort] - b[nameAtributeToSort])
}
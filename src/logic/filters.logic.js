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
export const sortNumberSmallToLarge = (arrToSort, nameAtributeToSort) => {
    return arrToSort.sort((a, b) => a[nameAtributeToSort] - b[nameAtributeToSort])
}

export const sortNumberLargeToSmall = (arrToSort, nameAtributeToSort) => {
    return arrToSort.sort((a, b) => b[nameAtributeToSort] - a[nameAtributeToSort])
}

export const getMonthNamesForNumber = (numeroMes) => {
    var fecha = new Date(2000, numeroMes - 1, 1);
    var nombreMes = fecha.toLocaleString('es-ES', { month: 'long' });

    return nombreMes;
}

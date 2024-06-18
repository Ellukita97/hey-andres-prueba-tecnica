

export function TableClient(nameAgency, dataCompany) {
    const HeaderTableClient = [
        "Nombre cliente",
        "Personas",
        "Dia",
        "Hora",
        "Valor venta"
    ]

    const propiertiesToShow = [
        "name",
        "people",
        "day",
        "hour",
        "finalPrice"
    ]

    const DataClientToArray = (data, agencyName) => {
        const filteredData = data.filter(agency => {
            return (
                agency.nameAgency == agencyName
            )
        })
        return filteredData.map(d => ({
            name: d.name,
            people: d.persons,
            day: d.day,
            hour: d.hour,
            finalPrice: "$" + d.finalPrice
        }))
    }

    return {
        header: HeaderTableClient,
        data: DataClientToArray(dataCompany, nameAgency),
        propiertiesToShow: propiertiesToShow
    }

}






export function TableAgency(dataCompany) {

    //console.log(dataCompany[0]['nameAgency'])

    const HeaderTableAgency = [
        "Nombre empresa",
        "Total de ventas",
        "Comision",
        "Detalle",
    ]

    const propiertiesToShow = [
        "nameAgency",
        "sumPrice",
        "comision",
        "detalle",
    ]

    const DataAgencyToArray = (data) => {

        const arr = []

        const sumPrice = (name) => {
            let totalPrice = 0
            data.map(d => {
                if (d.nameAgency == name) {
                    totalPrice += d.finalPrice

                }
            })
            return totalPrice
        }

        const commissionPrice = (averagePrice) => {
            return averagePrice * 0.025
        }



        data?.map(d => {
            if (!arr.find(ad => ad.nameAgency == d.nameAgency)) {
                arr.push({
                    nameAgency: d.nameAgency,
                    sumPrice: sumPrice(d.nameAgency),
                    comision: commissionPrice(sumPrice(d.nameAgency)),
                    detalle: "detalle"
                })
            }

        })
        return arr
    }

    return {
        header: HeaderTableAgency,
        data: DataAgencyToArray(dataCompany),
        propiertiesToShow: propiertiesToShow
    }

}
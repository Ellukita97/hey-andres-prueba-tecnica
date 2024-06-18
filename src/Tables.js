

export function TableClient(nameAgency, dataCompany) {
    const HeaderTableClient = [
        "Nombre cliente",
        "Personas",
        "Dia",
        "Hora",
        "Valor venta"
    ]

    const DataClientToArray = (data, agency) => {
        const filteredData = data.filter(c => {
            return (
                c.nameAgency == agency
            )
        })
        return filteredData.map(d => ([
            d.name,
            d.persons,
            d.day,
            d.hour,
            "$" + d.finalPrice
        ]))
    }

    return {
        header: HeaderTableClient,
        data: DataClientToArray(dataCompany, nameAgency)
    }

}






export function TableAgency(dataCompany) {

    console.log(dataCompany[0]['nameAgency'])

    const HeaderTableAgency = [
        "Nombre empresa",
        "Total de ventas",
        "Comision",
        "Detalle",
    ]

    const propiertiesToShow = [
        "nameAgency",
        "averagePrice",
        "Comision",
        "Detalle",
    ]

    const DataAgencyToArray = (data) => {

        const arr = []

        const maxPrice = (name) => {
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
            for (const prop in propiertiesToShow) {
                return 
            }


            /*
                        if (!arr.find(ad => ad[0] == d.nameAgency)) {
                            arr.push([
                                d.nameAgency,
                                maxPrice(d.nameAgency),
                                commissionPrice(maxPrice(d.nameAgency)),
                                "detalle"
                            ])
                        }
                            */
        })
        return arr
    }

    return {
        header: HeaderTableAgency,
        data: DataAgencyToArray(dataCompany)
    }

}
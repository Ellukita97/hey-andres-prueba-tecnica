import { sortNumberLargeToSmall } from './filters.logic.js'


export function TableClientLogic(nameAgency, dataCompany) {
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

    const DataClientToArray = (agencyName, data) => {
        const filteredData = data?.filter(agency => {
            return (
                agency.nameAgency == agencyName
            )
        })
        return filteredData.map(d => ({
            name: d.name,
            people: d.persons,
            day: d.day,
            hour: d.hour,
            finalPrice: d.finalPrice
        }))
    }

    return {
        header: HeaderTableClient,
        data: DataClientToArray(nameAgency, dataCompany),
        propiertiesToShow: propiertiesToShow
    }

}






export function TableAgencyLogic(dataCompany) {

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

    const maxSalesAgency = () => {

        const ventasPorMes = {};

        function obtenerMes(fecha) {
            return fecha.split('-')[1];
        }

        dataCompany.forEach(venta => {
            const mes = obtenerMes(venta.day);
            if (!ventasPorMes[mes]) {
                ventasPorMes[mes] = 0;
            }
            ventasPorMes[mes] += venta.finalPrice;
        });

        let mesConMasVentas = '';
        let ventasMaximas = 0;

        for (const mes in ventasPorMes) {
            if (ventasPorMes[mes] > ventasMaximas) {
                ventasMaximas = ventasPorMes[mes];
                mesConMasVentas = mes;
            }
        }

        return mesConMasVentas


    }

    const sumPrice = (name) => {
        let totalPrice = 0
        dataCompany.map(d => {
            if (d.nameAgency == name) {
                totalPrice += d.finalPrice

            }
        })
        return totalPrice
    }

    const DataAgencyToArray = (data) => {

        const arr = []

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

    const data = DataAgencyToArray(dataCompany)
    const monthMoreSales = sortNumberLargeToSmall(data, 'sumPrice')[0].sumPrice

    return {
        header: HeaderTableAgency,
        data: data,
        propiertiesToShow: propiertiesToShow,
        monthMoreSales: monthMoreSales,
        maxSalesAgency: maxSalesAgency()
    }

}

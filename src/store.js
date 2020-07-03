import { createStore } from 'redux';

const initialState = {
    players: [
        {
            id: 6,
            nombre: "Thibaut Courtois",
            foto: "https://pbs.twimg.com/media/EbnYyF1XsAAXFNK.jpg"
        },
        {
            id: 11,
            nombre: "Ter Stegen",
            foto: "https://i2.wp.com/www.todofichajes.com/wp-content/uploads/2019/12/TER-STEGEN.jpg?resize=991%2C558&ssl=1"
        },
        {
            id: 5,
            nombre: "Carlos Casemiro",
            foto: "https://www.grupoerik.com/63556-large_default/postal-real-madrid-2019-2020-casemiro-busto.jpg"
        },
        {
            id: 8,
            nombre: "Sergio Ramos",
            foto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sergio-ramos-cumplean-os-00-1553718162.jpg?crop=0.669xw:1.00xh;0.194xw,0&resize=640:*"
        },
        {
            id: 9,
            nombre: "De Ligt",
            foto: "https://www.tvn-2.com/futbol_internacional/Vecchia-Signora-futbolista-Matthijs-Ligt_14687426.jpg"
        },
        {
            id: 7,
            nombre: "Luka Modric",
            foto: "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2020/06/15/lukamodric.jpg?itok=o6Hvjrkq"
        },
        {
            id: 13,
            nombre: "Kevin De Bruyne",
            foto: "https://s.hs-data.com/bilder/spieler/gross/142263.jpg"
        },
        {
            id: 10,
            nombre: "Paulo Dybala",
            foto: "https://i1.wp.com/soycalcio.com/wp-content/uploads/2020/03/juventus-v-bologna-fc-serie-a.jpg?resize=1080%2C675"
        },
        {
            id: 2,
            nombre: "Leonel Messi",
            foto: "https://img.huffingtonpost.com/asset/5e39d0512700003d0338b364.jpeg?ops=scalefit_630_noupscale"
        },
        {
            id: 3,
            nombre: "Neymar Jr",
            foto: "https://www.fcbarcelonanoticias.com/uploads/s1/11/93/77/4/neymar-setien-barcelona.jpeg"
        },
        {
            id: 4,
            nombre: "Eden Hazar",
            foto: "https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/06/13/15604531882006.jpg"
        },
        {
            id: 1,
            nombre: "Cristiano Ronaldo",
            foto: "https://elbocon.pe/resizer/iCyK1PXcCoKipo3_vaQh1ZHLK4E=/1200x900/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HXSIZHISEFH3ZKJ4HF2BJVOXRE.jpg"
        },
        {
            id: 12,
            nombre: "Erling Haland",
            foto: "https://assets-es.imgfoot.com/media/cache/1200x1200/media/erling-haland-es-uno-de-los-delanteros-mas-en-forma-de-europa_162825.jpg"
        },

    ],
    headlines: [],
    alternates: []
}

const reducerManager = (state = initialState, action) => {

    if (action.type === "ADD_HEADLINE") {
        return {
            ...state,
            headlines: state.headlines.concat(action.player),
            players: state.players.filter(player => player.id !== action.player.id)
        }
    }
    if (action.type === "ADD_ALTERNATE") {
        return {
            ...state,
            alternates: state.alternates.concat(action.player),
            players: state.players.filter(player => player.id !== action.player.id)
        }
    }
    if (action.type === "REMOVE_HEADLINE") {
        return {
            ...state,
            headlines: state.headlines.filter(player => player.id !== action.player.id),
            players: state.players.concat(action.player),

        }
    }
    if (action.type === "REMOVE_ALTERNATE") {
        return {
            ...state,
            alternates: state.alternates.filter(player => player.id !== action.player.id),
            players: state.players.concat(action.player),

        }
    }
    return state
}
export default createStore(reducerManager);
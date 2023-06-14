import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': { //Todos os elementos da página
        margin: 0,
        padding: 0,
    },

    body: {
        backgroundColor: "$gray900",
        color: "$gray100",
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },

})
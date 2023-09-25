import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto"; 
import "@fontsource/syncopate"

const theme = extendTheme({
    colors: {
        black: {
            100 : '#0D0D0D'
        },
        white: {
            100 : '#FFFFFF'
        },
        orange: {
            100: '#E76028'
        },
        blue:{
            100: '#11B4F8',
            700: '#040E2C'
        }
    },
    fontFamily:{
        heading: 'Roboto',
        main: 'Syncopate'
    },
    fontSize:{
        sm: '14px'
    },
    fontWeight:{
        100 : '100',
        400 : '400',
        700 : '700'
    }
})
export default theme

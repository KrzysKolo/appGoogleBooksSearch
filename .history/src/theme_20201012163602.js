import { createMuiTheme } from "@material-ui/core/styles";
export default createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(242, 198, 137)',

        },
        secondary: {
            main:  'rgb(240, 239, 234)',
        },
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      absCenterDiv: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },


})
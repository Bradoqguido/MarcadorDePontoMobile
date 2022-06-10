import { StatusBar, Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#fff',
      display: 'flex',
      flexGrow: 1
    },     
    containerHeader: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
    },
    app: {
      marginHorizontal: 'auto',
      maxWidth: 500
    },
    column: {
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
    },
    row: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center',
    },
    scrollView: {
      margin: 8,
    },
    logo: {
      height: 80
    },
    header: {
      padding: 20
    },
    title: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 28,
      marginVertical: 1,
    },
    subTitle: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 20,
      marginVertical: 1,
    },
    textBold: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 'bold'
    },
    text: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontSize: 14,
    },
    textStatusAtrasado: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 14,
      color: 'red'
    },
    textStatusHoraExtra: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 14,
      color: 'blue'
    },
    textStatusRegistroInesperado: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 14,
      color: 'purple'
    },
    link: {
      color: '#1B95E0'
    },
    input: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 0,
      position: 'absolute',
      width: 328,
      height: 56,
      left: 0
    },
    card: {
      elevation: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 8,
      position: 'relative',
      margin: 8,
      backgroundColor: 'white',
      borderRadius: 8
    },
    cardHeader: {
      flex: 0,
      alignSelf: 'stretch',
      flexGrow: 0,
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      paddingVertical: 0,
      paddingHorizontal: 16,
      alignSelf: 'stretch',
    },
    cardConstHeight30PercentContent: {
      display: 'flex',
      flexDirection: 'column',
      padding: 8,
      height: (Dimensions.get('window').height - (Dimensions.get('window').height*(70/100))),
    },
    cardConstHeight40PercentContent: {
      display: 'flex',
      flexDirection: 'column',
      padding: 8,
      height: (Dimensions.get('window').height - (Dimensions.get('window').height*(40/100)))
    },
    cardActions: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    cardActionButtons: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      margin: 8,
    }
});
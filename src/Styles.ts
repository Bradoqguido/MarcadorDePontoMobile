import { StatusBar, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
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
    listItem: {
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
      flex: 0,
      alignSelf: 'stretch',
      flexGrow: 0,
      marginVertical: 1,
      margin: 8,
    },
    text: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      flex: 0,
      flexGrow: 1,
      fontSize: 14,
      marginVertical: 1,
      textAlign: 'center'
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 0,
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
      alignItems: 'flex-start',
      paddingVertical: 0,
      paddingHorizontal: 16,
      flex: 0,
      alignSelf: 'stretch',
      flexGrow: 0
    },
    cardActions: {
      flex: 0,
      alignSelf: 'stretch',
      flexGrow: 0
    },
    cardActionButtons: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      left: 8,
      top: 8
    }
});
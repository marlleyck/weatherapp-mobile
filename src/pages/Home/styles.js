import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#683ec9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
      background: {
        width: 390,
        height: 350,
        backgroundColor: '#483CA9',
        borderRadius: 30,
        overflow: 'hidden',
        zIndex: 1,
        elevation: 1,
        position: 'absolute',
        bottom: 0,
      },
      content: {
        width: 350,
        height: '90%',
        margin: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 15,
        zIndex: 2,
        overflow: 'hidden',
        position: 'absolute',
        flexDirection: 'column'
      },
      city: {
        fontSize: 45,
        fontFamily: 'Raleway_400Regular',
        textTransform: 'uppercase',
        marginTop: 10,
        color: 'white'
      },
      temperature: {
        fontSize: 70,
        fontFamily: 'sans-serif',
        color: 'white',
        marginLeft: 25
      },
      description: {
        fontSize: 30,
        fontFamily: 'Raleway_200ExtraLight',
        textTransform: 'uppercase',
        color: 'white'
      },
      img: {
        width: 310,
        height: 310
      },
})

export default styles;
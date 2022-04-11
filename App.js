import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
    return ( 
      <View style = {styles.container}>
          
          <View style={styles.carContainer}>

              <ImageBackground source={require('./assets/images/ModelX.jpeg')}
              style={styles.image}/>

              <View style={styles.titles}>
                  <Text style={styles.title}>Model S</Text>
                  <Text style={styles.subtitle}>Starting at $69,000</Text>
                  
              </View>

          </View>




        <StatusBar style="auto" />    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    carContainer:{
        width: '100%',
        height: '100%',

    },

    titles:{
        marginTop: '30%',
        width: '100%',
        alignItems:'center',
    },

    title:{
        fontSize: 40,
        fontWeight: '500', 
    },

    subtitle:{
        fontSize: 16,
        color: '#5c5e62',
    },

    image: {
        width: '100%',
        height:'100%',
        resizeMode: 'cover',
        position: 'absolute',
    }

});


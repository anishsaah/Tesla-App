import { StyleSheet, View, Text, Dimensions,FlatList  } from "react-native";
import CarsList from "./components/CarsList";
import Header from "./components/Header";
import { Modal } from 'native-base';
import {useState} from "react";
import menu from "./components/Header/menu";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Base() {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
      };
    const closeModal = () => {
        setOpen(false);
    };

    return ( 
      <View style = {styles.container}>
         <Modal style={styles.modalStyles}
            isOpen={open} 
            onClose={closeModal}
            >
            <View style={styles.iconMainContainer}>
                <Ionicons style={styles.iconContainer}
                    name="md-close-outline" 
                    color='black'
                    onPress={closeModal}
                />
            </View>
           <View style={styles.menuListContainer} >
           <FlatList 
            data={menu}
            renderItem={({item}) => (<View  ><Text style={styles.nameContainer}>{item.name}</Text></View>)}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
           
            />
            </View>
         </Modal>
        <Header openModal= {openModal} closeModal={closeModal} />  
        <CarsList/>   
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
    modalStyles:{
        width:200,
        backgroundColor: 'white',
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent:'flex-start',
        position:'absolute',
        right:0,
    },
    iconContainer:{
        fontSize: 40,
        borderRadius:30,
        backgroundColor: 'silver',

    },
    iconMainContainer:{
        position: 'absolute',
        right: 10,
        top: 10,
    },
    nameContainer:{
        fontSize: 20,
        marginBottom: 15,
    },
    menuListContainer:{
        marginTop: 80,
        
    },

    

});


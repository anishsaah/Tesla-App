import { View, Text,Image, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.png'


export default function Header({openModal,closeModal}) {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <TouchableOpacity 
          onPress={openModal}
          >
        <Image 
          style={styles.menu} 
          source={menu} 
          />
        </TouchableOpacity>
        

        
    </View>
  )
}
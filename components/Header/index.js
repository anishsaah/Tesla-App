import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.png'



export default function Header() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Image style={styles.menu} source={menu} />
        
    </View>
  )
}
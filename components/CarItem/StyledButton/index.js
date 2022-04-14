import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const StyledButton = ({type,content,onPress}) => {

  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;

  //Instead of these three lines

  // const { type, content, onPress } = props;
  
  const backgroundColor = type === 'primary'? '#171A20CC' :'#FFFFFF';
  const textColor = type === 'primary'? '#FFFFFF' :'#171A20CC';

  return (
    <View style={styles.container} >
      <Pressable
        style={[styles.button,{backgroundColor : backgroundColor}]}
        onPress={() => onPress()}
      >

        <Text style={[styles.text,{color: textColor}]} > {content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
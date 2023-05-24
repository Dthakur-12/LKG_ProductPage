import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={styles.Container}>
      <Text style={{color:'red'}}>Cart</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    color:'red',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
})
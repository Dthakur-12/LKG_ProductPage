import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.Container}>
      <Text style={{color:'red'}}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    color:'red',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
})
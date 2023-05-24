import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.Container}>
      <Text style={{color:'red'}}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    color:'red',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
})
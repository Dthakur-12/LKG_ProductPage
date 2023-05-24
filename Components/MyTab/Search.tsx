import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.Container}>
      <Text style={{color:'red'}}>Search</Text>
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    color:'red',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
})
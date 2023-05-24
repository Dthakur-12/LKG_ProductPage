import {StyleSheet, Text, View, TextInput} from 'react-native';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

const UserInput = () => {
const [Input,setInput]=useState('');
  return (
    <View style={styles.inputcontainer}>
     
        <TextInput
          style={styles.input}
        />
        <Icon name="search" color={'gray'} size={25} style={styles.Icon} />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  inputcontainer: {
    // flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: '#d3d3d3',
    // padding: 5,
    borderRadius: 10,
  },
  input: {
    color: 'red',
    flex:1,
  },
  Icon: {
    paddingHorizontal:10,
  },
});

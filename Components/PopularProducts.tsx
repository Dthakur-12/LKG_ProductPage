import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons'

const DATA = [
  {
    id: '0',
    img: 'https://images.pexels.com/photos/211760/pexels-photo-211760.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '1',
    img: 'https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    img: 'https://images.pexels.com/photos/3847432/pexels-photo-3847432.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    img: 'https://images.pexels.com/photos/4112727/pexels-photo-4112727.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '4',
    img: 'https://images.pexels.com/photos/4805236/pexels-photo-4805236.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '5',
    img: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];
const PopularProducts = () => {

  const Item = ({title}) => (
    <View
      style={{
        // flexDirection: 'row',
        elevation: 2,
        backgroundColor: 'white',
        margin: 5,
        borderRadius:5,
      }}>

      <View style={Styles.refcontainertwo}>
      <Icon name='heart' color='red' size={30} style={{marginVertical:5}}/>
        <Image
          source={{
            uri: title,
          }}
          style={{height: 150, width: 150, borderRadius: 5}}
        />
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
       
        <Text style={{color:'black',fontWeight:'bold',textAlign:'left'}}>$60.00</Text>
        <Text style={{textAlign:'right'}}><Text style={{color:'red'}}>4.3k </Text><Text style={{color:'black',fontWeight:'bold'}}>sold</Text></Text>        
      </View>
      <Text style={{color:'black',fontWeight:'bold',textAlign:'left'}}>LFK Circle {'\n'}
      Gold Work (28cm)</Text>

      </View>
      
    </View>
  );

  return (
    <View>
      <View style={Styles.Container}>
        <Text style={Styles.textone}>Popular Products</Text>
        <Text style={Styles.texttwo}>View All</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.img} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          numColumns={'2'}
          style={{alignSelf:'center',}}
        />
      </View>
    </View>
  );
};

export default PopularProducts;

const Styles = StyleSheet.create({
  Container: {
    // flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  textone: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  texttwo: {
    color: 'orange',
    fontSize: 15,
  },
  refcontainertwo: {
    flex: 5,
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    padding: 2,
    margin:3,
    // flex: 5,
    // justifyContent: 'center',
  },
});

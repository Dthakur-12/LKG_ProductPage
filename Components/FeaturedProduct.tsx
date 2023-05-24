import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';

const DATA = [
  {
    id: '0',
    img: 'https://images.unsplash.com/photo-1516824711718-9c1e683412ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW4lMjB1dGVuc2lsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpdGNoZW4lMjB1dGVuc2lsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpdGNoZW4lMjB1dGVuc2lsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];
const FeaturedProduct = () => {
  const [data, setData] = useState([1, 1, 1]);
  const Item = ({title}) => (
    <View
      style={{
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: 'white',
        margin: 5,
      }}>

      <View style={Styles.refcontainertwo}>
        <Text style={{color:'black',alignSelf:'flex-end',backgroundColor:'#cd5c5c'}}>15% off</Text>
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
      <Text style={{color:'black',fontWeight:'bold',textAlign:'left'}}>Joeunga Brown {'\n'}Rice Trumeric Tea (28cm)</Text>

      </View>
      
    </View>
  );

  return (
    <View>
      <View style={Styles.Container}>
        <Text style={Styles.textone}>Featured Products</Text>
        <Text style={Styles.texttwo}>View All</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.img} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.map((item, index) => {
            // console.log(index);
            return (
              <View
                key={index}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'orange',
                  marginLeft: 5,
                }}></View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default FeaturedProduct;

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
    // flex: 5,
    // justifyContent: 'center',
  },
});

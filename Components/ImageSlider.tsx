import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';

const DATA = [
  {
    id: '0',
    img: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW4lMjBtYXRlcmlhbHMlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1520981825232-ece5fae45120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW4lMjBtYXRlcmlhbHMlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];
const ImageSlider = () => {
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
        <Image
          source={{
            uri: title,
          }}
          style={{height: 150, width: 150, borderRadius: 5}}
        />
      </View>
    </View>
  );

  return (
    <View>
      <View style={Styles.Container}>
        <Text style={Styles.textone}>Categories</Text>
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

export default ImageSlider;

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
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 2,
    // flex: 5,
    // justifyContent: 'center',
  },
});

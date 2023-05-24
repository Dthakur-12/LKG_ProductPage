import {StyleSheet, Text, View, Pressable, Image, FlatList, Dimensions} from 'react-native';
import React,{useState} from 'react';


const DATA = [
  {
    id: '0',
    img: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
 
];
const Cardslider = () => {
    const [data,setData]=useState([1,1,1,]);
    const [CurrentIndex,setCurrrentIndex]=useState(0);
  const Item = ({title}) => (
    <View
      style={{
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: 'white',
        margin: 5,
        marginTop: 20,
        // marginHorizontal: 10,
      }}>
      <View style={Styles.refcontainer}>
        <Text style={Styles.refereltext}>
          <Text style={{fontWeight: '500'}}>Essential Cookware</Text>
          {'\n'}
          <Text style={{color: 'red', fontWeight: '800', fontSize: 15}}>
            50% off
          </Text>{' '}
          on{'\n'}Every Cookware {'\n'}Products
        </Text>
        <Pressable style={Styles.btnone} android_ripple={{color: 'pink'}}>
          <Text
            style={{color: 'white', fontSize: 12, fontWeight: 700, padding: 5}}>
            SHOP NOW
          </Text>
        </Pressable>
      </View>
      <View style={Styles.refcontainertwo}>
        <Image
          source={{
            uri: title,
          }}
          style={{height: 120, width: 140, borderRadius: 5}}
        />
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.img} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
       
      />
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       {
        data.map((item,index)=>{
            // console.log(index);
            return(
                <View key={index} style={{width:8,height:8,
                    borderRadius:4,
                    backgroundColor:'orange',
                    marginLeft:5}}></View>
            )
        })
       }
      </View>
    </View>
  );
};

export default Cardslider;

const Styles = StyleSheet.create({
  refereltext: {
    fontWeight: '800',
    fontSize: 12,
    color: '#826F6F',
    textAlign: 'left',
    lineHeight: 20,
    // padding:30,
  },
  refcontainer: {
    padding: 20,
    flex: 5,
    justifyContent: 'center',
  },
  btnone: {
    backgroundColor: 'red',
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  refcontainertwo: {
    flex: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    // flex: 5,
    // justifyContent: 'center',
  },
});

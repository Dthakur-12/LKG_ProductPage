import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import UserInput from './UserInput'
import Cardslider from './Cardslider';
import ImageSlider from './ImageSlider';
import TodayDeal from './TodayDeal';
import FlashDeal from './FlashDeal';
import FeaturedProduct from './FeaturedProduct';
import PopularProducts from './PopularProducts';

const MainHome = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
     <View style={styles.header}>
     <View style={{ flex: 1, }}>
    <Icon name='menu' color={'red'} size={35} />
    </View>
    <View style={{ flex: 1,}}>
      <Image
        source={{
          uri: 'https://www.shutterstock.com/image-vector/lfg-letter-initial-logo-design-260nw-2133298969.jpg',
        }}
        style={styles.img}
      />
      </View>
      <View
        style={{ flex: 1 }}>
      </View>
      </View>
      <View style={styles.userinput}>
        <UserInput/>
      </View>
     <View >
        <Cardslider/>
        </View>
      <ImageSlider/>
      <TodayDeal/>
      <View>
      <FlashDeal/>
      </View>
      <View>
      <FeaturedProduct/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
        <Image  source={{
        uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-red-landscape-sale-flyer-template-28c45ee3d3df6f96130d7b0f90ab855c_screen.jpg?ts=1561727816',
      }}
      style={{height:100,width:200}}
      />
      </View>
      <PopularProducts/>
      </ScrollView>
    </View>
   
  )
}

export default MainHome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding:10,
    },
    header:{
      padding:10,
      flexDirection:'row',
      justifyContent: 'space-between',
      // borderColor: '#ffffff',
      // borderBottomColor: '#f7fcf9',
      // borderWidth:1,
    },
    img:{
      height:50,
      width:100,
      alignSelf:'center',
    },
    imgcontainer:{
      flex:1,
      alignItems:'center',
    },
    userinput:{
      padding:10,
    }
  });
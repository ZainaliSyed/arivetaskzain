import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import { itemWidth } from '../utility';
import {bannerImg} from '../theme/Images';

const Banner = (props: any) => {  
  return (
    <View style={styles.bannerContainer}>
      <ImageBackground  
        source={bannerImg} 
        resizeMode="cover"
        style={styles.bannerStyle} 
      >
      <Text style={styles.text}>Personal Care</Text>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bannerContainer: {
    height: 200, 
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 20
  },
  bannerStyle: {
    width: itemWidth * 2, 
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  }
})

export default Banner;
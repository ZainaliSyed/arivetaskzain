import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { itemWidth } from '../../utility';
import Colors from '../../theme/Colors';

const Detail = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image 
          source={{uri: props.route.params.product.imgName}} 
          style={styles.bannerStyle} 
        />
      </View>
      <View style={{alignSelf: 'flex-start', marginTop: 20}}>
          <Text style={[
            styles.txtTitle, 
            {color: Colors.blue}
          ]}>{props.route.params.product.brand}</Text>
          <Text style={styles.txtTitle}>{props.route.params.product.title}</Text>
          <Text style={styles.txtTitle}>Price: {props.route.params.product.price}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginHorizontal: 10
  },
  bannerContainer: {
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    borderBottomColor: Colors.black,
    borderBottomWidth: 5
  },
  bannerStyle: {
    width: itemWidth * 2 - 100, 
    height: 300, 
    paddingHorizontal: 20,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10
  },
})

export default Detail;
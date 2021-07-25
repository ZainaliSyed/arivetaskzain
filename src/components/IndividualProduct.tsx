import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { itemWidth } from '../utility';
import Colors from '../theme/Colors';

const IndividualProduct = (props: any) => {
  return (
    <TouchableOpacity style={styles.dashboardItem} onPress={props.onPressDashboardItem}>
      <View style={styles.viDashboard}>
        <Image source={{uri: props.item.imgName}} style={{height: 140, width: 80}} />
      </View>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={[styles.txtTitle, {color: Colors.blue}]}>{props.item.brand}</Text>
        <Text style={styles.txtTitle}>{props.item.title}</Text>
        <Text style={styles.txtTitle}>{props.item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  dashboardItem: {
    width: itemWidth,
    height: itemWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 40
  },
  viDashboard: {
    width: itemWidth-10,
    height: itemWidth-10,
    borderRadius: 8,
    backgroundColor: Colors.greyish,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10
  },
})

export default IndividualProduct;
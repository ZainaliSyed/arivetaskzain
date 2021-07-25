import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../theme/Colors';

const ProductCategory = (props: any) => {
  return (
    <TouchableOpacity 
        onPress={props.setSelectedCat}
        style={[
          styles.prodCatContainer, 
          props.item.id == props.selectedCat 
          ? {backgroundColor: Colors.blue} 
          : {backgroundColor: Colors.greyish}
        ]}
      >
        <Text style={[
          styles.prodCatText,
          props.item.id == props.selectedCat 
          ? {color: Colors.white} 
          : {color: Colors.black}
          ]}
        >{props.item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  prodCatContainer: {
    height: 50, 
    margin: 10,     
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 8
  },
  prodCatText: {
    fontSize: 16
  }
})

export default ProductCategory;
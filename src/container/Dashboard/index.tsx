import React, {useState} from 'react'
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native'
import {IndividualProduct, ProductCategory, Banner} from '../../components';
import {dashboardData, productCategories} from '../../constants';
import Colors from '../../theme/Colors';

const Dashboard = (props: any) => {
  const [selectedCat, setSelectedCat] = useState('all');

  const onPressDashboardItem = (item: any) => {    
    props.navigation.navigate(
      'Detail', 
      {product: dashboardData.filter((elem) => elem.id == item.id)[0]}
    )    
  }

  const renderCategories = (props: any) => {
    return (
      <View>
        <FlatList 
          data={productCategories}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => 
            <ProductCategory 
              item={item}
              setSelectedCat={() => setSelectedCat(item.id)}
              selectedCat={selectedCat}
            />
          }
          showsHorizontalScrollIndicator={false}
        /> 
      </View>
    )
  }

  const renderProducts = (props: any) => {
    return (
      <FlatList 
        data={selectedCat == 'all' 
          ? dashboardData 
          : dashboardData.filter((elem) => elem.cat_id == selectedCat)
        }
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => 
          <IndividualProduct 
            item={item}
            onPressDashboardItem={() => onPressDashboardItem(item)}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      {renderCategories()}
      {renderProducts()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginHorizontal: 10
  }
})

export default Dashboard;
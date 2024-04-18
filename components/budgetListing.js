import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

const BudgetListing = () => {
  const tasks = useSelector(state => state.tasks);

  const data = [
    {
      id: 1,
      name: 'Sports',
      PlannedAmount: 200,
      ActualAmount: 100,
    },
    {
      id: 2,
      name: 'Education',
      PlannedAmount: 2200,
      ActualAmount: 900,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.items}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.PlannedAmount}</Text>
        <Text style={styles.item}>{item.ActualAmount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.items}>
        <Text style={styles.heading}>Name of Item</Text>
        <Text style={styles.heading}>Planned Amt</Text>
        <Text style={styles.heading}>Actual Amt</Text>
      </View>
      {tasks ? <FlatList data={tasks} renderItem={renderItem} /> : null}
      {/* <ScrollView >

        </ScrollView > */}
    </View>
  );
};

export default BudgetListing;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013220',
  },
  items: {
    padding: 5,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
  item: {
    fontSize: 15,
    margin: 35,
    color: 'white',
  },
  heading: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
    margin: 10,
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/taskslice';

const AddingBudget = props => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [PlannedAmount, setPlannedamt] = useState('');
  const [ActualAmount, setActualamt] = useState('');

  const OnSubmit = () => {
    if (!name) {
      Alert.alert('Name is required');
      return;
    }
    if (!PlannedAmount) {
      Alert.alert('Planned amt is required');
      return;
    }
    if (!ActualAmount) {
      Alert.alert('Actual amt is required');
      return;
    }

    dispatch(
      addTask({
        tasks: {
          name: name,
          PlannedAmount: PlannedAmount,
          ActualAmount: ActualAmount,
        },
      }),
    );
    setActualamt('');
    setName('');
    setPlannedamt('');
  };

  return (
    <View style={styles.main}>
      <StatusBar hidden />
      <View>
        <View>
          <TextInput
            style={styles.textinput}
            placeholder="Name of item"
            placeholderTextColor="#D3D3D3"
            onChangeText={text => setName(text)}
            value={name}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Planned Amount"
            placeholderTextColor="#D3D3D3"
            onChangeText={text => setPlannedamt(text)}
            value={PlannedAmount}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Actual Amount"
            placeholderTextColor="#D3D3D3"
            onChangeText={text => setActualamt(text)}
            value={ActualAmount}
          />

          <TouchableOpacity style={styles.button} onPress={OnSubmit}>
            <Text style={{color: 'white'}}>Save</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.show}
          onPress={() => {
            props.navigation.navigate('BudgetListing');
          }}>
          <Text style={{color: 'white'}}>Show Items</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddingBudget;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#013220',
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  textinput: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  show: {
    backgroundColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
});

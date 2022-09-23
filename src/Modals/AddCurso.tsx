import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {createClass} from './mutation';
import {useMutation} from '@apollo/client';

interface IMod {
  modal: boolean;
  OpenModal: modType;
}

type modType = (a: boolean) => void;

const AddMateriaMod = ({modal, OpenModal}: IMod) => {
  const [input, setinput] = useState<string>('');
  const [onCreateClass, {data, loading, error}] = useMutation(createClass);
  const creatingClass = async () => {
    try {
      const response = await onCreateClass({variables: {input: {name: input}}});
    } catch (e: any) {
      Alert.alert('Error uploading', e.message);
    }
  };
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{'no se pudo crear la clase'}</Text>;
  }
  return (
    <Modal animationType="slide" transparent={true} visible={modal}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image
            style={styles.img}
            source={require('../../assets/images/courses.png')}
          />
          <Text style={styles.Score}>Nombre de la Clase:</Text>
          <TextInput
            style={styles.input}
            placeholder="       ejm:8vo B"
            onChangeText={setinput}
          />

          <TouchableOpacity
            style={[
              styles.close,
              {marginVertical: 10, backgroundColor: '#f08713'},
            ]}
            onPress={() => [creatingClass()]}>
            <Text style={styles.closeTxt}>Crear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.close}
            onPress={() => [OpenModal(true)]}>
            <Text style={styles.closeTxt}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddMateriaMod;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    margin: 20,
    height: 300,
    width: '80%',
    borderWidth: 1.5,
    elevation: 18,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  img: {
    height: 70,
    width: 70,
  },
  Score: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    padding: 10,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#8635F5',
    width: 95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeTxt: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

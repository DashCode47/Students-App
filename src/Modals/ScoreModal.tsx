import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PostQuizProp} from '../Navigators/types';

interface IMod {
  modal: boolean;
  OpenModal: modType;
  score: number;
}

type modType = (a: boolean) => void;

const AddMateriaMod = ({modal, OpenModal, score}: IMod) => {
  const navigation = useNavigation<PostQuizProp>();
  return (
    <Modal animationType="slide" transparent={true} visible={modal}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image
            style={styles.img}
            source={require('../../assets/images/victory.png')}
          />
          <Text style={styles.Score}>Your Score:</Text>
          <Text style={[styles.Score, {color: '#8635F5'}]}>{score}</Text>
          <TouchableOpacity
            style={styles.close}
            onPress={() => [
              OpenModal(true),
              navigation.navigate('SubjectScreen'),
            ]}>
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
    height: 250,
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
    paddingTop: 0,
    marginBottom: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 13,
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

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {ReactNode} from 'react';

interface IProfile {
  modal: boolean;
  modalSwitch: GreetFunction;
}
type GreetFunction = (a: boolean) => void;

const ProfileScreen = ({modalSwitch, modal}: IProfile) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modal}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.avatar}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/profile.jpg')}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.change}>change Photo</Text>
          </TouchableOpacity>
          <View style={styles.input}>
            <Text style={styles.header}>Nombres:</Text>
            <TextInput style={styles.tbx} placeholder="frist names" />
          </View>
          <View style={styles.input}>
            <Text style={styles.header}>Apellidos:</Text>
            <TextInput style={styles.tbx} placeholder="Last name" />
          </View>
          <TouchableOpacity
            style={styles.close}
            onPress={() => modalSwitch(true)}>
            <Text style={styles.closeTxt}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    aspectRatio: 1 / 1,
    borderWidth: 3,
    borderRadius: 75,
    marginBottom: 15,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  change: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#feb845',
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 75,
  },
  input: {
    borderRadius: 15,
    backgroundColor: '#d4d4d4',
    width: '90%',
    marginBottom: 20,
    paddingLeft: 15,
    paddingTop: 5,
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tbx: {
    paddingBottom: 5,
    paddingTop: 0,
  },
  modalView: {
    margin: 20,
    height: 450,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 0.35,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  close: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#8635F5',
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeTxt: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

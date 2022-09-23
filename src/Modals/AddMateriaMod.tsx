import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Formik} from 'formik';
import {useMutation, useQuery} from '@apollo/client';
import {createSubject} from './mutation';
import {SubjectContext} from '../Navigators/HomeNav';

interface IMod {
  modal: boolean;
  OpenModal: modType;
  materiaInfo: subjectFunctType;
}
interface Imateria {
  profesor: string;
  materia: string;
  key?: string;
  values?: string[];
  currentData?: string[];
}

type modType = (a: boolean) => void;
type subjectFunctType = (values: Imateria) => void;

const AddMateriaMod = ({modal, OpenModal, materiaInfo}: IMod) => {
  const {classSelected} = useContext(SubjectContext);
  const [onCreateSubject, {data, loading, error}] = useMutation(createSubject);
  const creatingSubject = async (materia: string, teacher: string) => {
    try {
      const response = await onCreateSubject({
        variables: {
          input: {classID: classSelected, nam: materia, teacher: teacher},
        },
      });
    } catch (e: any) {
      Alert.alert('Error creating', e.message);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modal}>
      <View style={styles.container1}>
        <View>
          <Formik
            initialValues={{profesor: '', materia: ''}}
            onSubmit={values => {
              creatingSubject(values.materia, values.profesor);
            }}>
            {props => (
              <View style={styles.container2}>
                <View style={styles.inputContainer}>
                  <Text style={styles.txtProfesor}>Profesor:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="name"
                    onChangeText={props.handleChange('profesor')}
                    value={props.values.profesor}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.txtProfesor}>Materia:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="nombre materia"
                    onChangeText={props.handleChange('materia')}
                    value={props.values.materia}
                  />
                </View>
                <TouchableOpacity
                  style={styles.close}
                  onPress={props.handleSubmit}
                  onPressOut={() => OpenModal(true)}>
                  <Text style={styles.closeTxt}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.close}
                  onPress={() => OpenModal(true)}>
                  <Text style={styles.closeTxt}>Close</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
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
    height: 290,
    width: '80%',
    borderWidth: 1.5,
    elevation: 18,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  inputContainer: {
    height: 55,
    width: 155,
    backgroundColor: '#d4d4d4',
    borderRadius: 15,
    paddingLeft: 12,
    paddingTop: 5,
    marginBottom: 15,
  },
  txtProfesor: {
    fontSize: 16,
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
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  closeTxt: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

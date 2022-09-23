import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import AddCurso from '../../Modals/AddCurso';
import Accordeon from '../../Components/Accordeon/Accordeon';
import {useNavigation} from '@react-navigation/native';
import {GoToMain} from '../../Navigators/types';
import {useMutation, useQuery} from '@apollo/client';
import {getStudent, updateStudent} from './queries';
import {AuthContext} from '../../Context/Context';

const IntroScreen = () => {
  const navigation = useNavigation<GoToMain>();
  const {userId} = useContext(AuthContext);
  const [Open, setOpen] = useState<boolean>(false);
  const switcher = (val: boolean) => {
    setOpen(!val);
  };
  const [className, setclasseName] = useState<string>();
  const [classId, setclasseID] = useState<string>();

  const classTitle = (name: string, id: string) => {
    setclasseName(name);
    setclasseID(id);
  };
  ///////// OBTENER DATOS ESTUDIANTE CON QUERY////////
  const {loading, error, data} = useQuery(getStudent, {
    variables: {id: userId},
  });
  const version = data?.getStudent._version;
  const name = data?.getStudent.name;
  /////////////////UPDATEAR ESTUDIANTE ,GUARDAR SU AULA////////////////////////////////////
  const [FuncUpdStud, {data: dt, loading: ld, error: err}] =
    useMutation(updateStudent);

  const doUpdateStud = async () => {
    const response = await FuncUpdStud({
      variables: {
        input: {
          id: userId,
          classID: classId,
          _version: data?.getStudent._version,
        },
      },
    });
  };
  if (ld) {
    <ActivityIndicator />;
  }
  if (err || error) {
    <Text>{err?.message || error?.message}</Text>;
  }
  /* ////////////////////////////////////////////////RETURN  /////////////////////// */
  return (
    <View style={[styles.container, {paddingTop: 100}]}>
      <Text style={styles.NombreClase}>{className}</Text>

      {className && (
        <TouchableOpacity
          style={[styles.btn, {width: 110}]}
          onPress={() => [
            doUpdateStud(),
            navigation.navigate('Main', {classSelected: classId}),
          ]}>
          <Image
            style={styles.imgArrow}
            source={require('../../../assets/images/right-arrow.png')}
          />
        </TouchableOpacity>
      )}

      <View style={[styles.container, {paddingBottom: 160}]}>
        <AddCurso OpenModal={switcher} modal={Open} />

        <Text style={styles.txt}>Escoja su clase</Text>

        <View style={styles.box}>
          <Accordeon classTitle={classTitle} />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => switcher(false)}>
          <Text style={styles.txt}>O Crear clase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    width: 300,
    backgroundColor: '#e9ede7',
    borderRadius: 25,
    marginTop: 15,
    marginBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#b0f4b4',
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NombreClase: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imgArrow: {
    height: 50,
    width: 50,
  },
});

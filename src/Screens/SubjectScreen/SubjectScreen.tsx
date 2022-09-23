import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import SubjectBox from '../../Components/SubjectBox/SubjectBox';
import AddMateriaMod from '../../Modals/AddMateriaMod';
import LastTemasBox from '../../Components/LastTemasBox/LastTemasBox';
import LinearGradient from 'react-native-linear-gradient';
import QuizBox from '../../Components/QuizBox/QuizBox';
import physics from '../../../assets/images/einstein.png';
import chemistry from '../../../assets/images/flask.png';
import english from '../../../assets/images/united-kingdom.png';
import maths from '../../../assets/images/math.png';
import {SubjectContext} from '../../Navigators/HomeNav';
import {useQuery} from '@apollo/client';
import {getClass} from './Queries';

interface Imateria {
  profesor: string;
  materia: string;
  key?: string;
  val?: string[];
  currentData?: string[];
}

const SubjectScreen = () => {
  const {classSelected} = useContext(SubjectContext);
  const [modal, setmodal] = useState<boolean>(false);
  const [subject, setSubject] = useState<Imateria[]>([]);
  useEffect(() => {
    onRetry();
  }, [modal]);
  /*///////////////////////////////////////////////////////////////////// QUERIES ///////////////////////////*/
  const {data, loading, error, refetch} = useQuery(getClass, {
    variables: {id: classSelected},
  });
  const onRetry = () => {
    refetch();
  };
  /* ////////////////////////////////////////////////////////// */
  const materiaInfo = (val: Imateria) => {
    val.key = Math.random().toString();
    setSubject(subject => {
      return [...subject, val];
    });
    setmodal(!val);
  };

  const OpenModal = (val: boolean) => {
    setmodal(!val);
  };
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        style={{paddingHorizontal: 20, paddingTop: 35, paddingBottom: 100}}
        colors={['#EFF4F6', '#E1DB7F']}>
        <Text style={styles.titulo}>Ultimos Temas</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <LastTemasBox />
          <LastTemasBox />
          <LastTemasBox />
          <LastTemasBox />
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingTop: 15,
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          <Text style={styles.titulo}>Mis Materias</Text>
          <TouchableOpacity onPress={() => setmodal(true)}>
            <Text style={styles.btnAdd}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <AddMateriaMod
          modal={modal}
          OpenModal={OpenModal}
          materiaInfo={materiaInfo}
        />

        <FlatList
          data={data?.getClass?.Subjects.items}
          renderItem={({item}) => <SubjectBox data={item} />}
          horizontal
        />

        <Text style={styles.titulo}>Take a Challengue!</Text>
        <ScrollView horizontal={true}>
          <QuizBox materia={'Fisica'} img={physics} />
          <QuizBox materia={'Quimica'} img={chemistry} />
          <QuizBox materia={'Ingles'} img={english} />
          <QuizBox materia={'Matematicas'} img={maths} />
        </ScrollView>
      </LinearGradient>
    </ScrollView>
  );
};

export default SubjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',

    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  btnAdd: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#feb845',
    marginLeft: 120,
  },
});

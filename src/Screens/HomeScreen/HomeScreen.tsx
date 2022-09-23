import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import ClssMatesBox from '../../Components/ClassMatesBox/ClssMatesBox';
import {Auth} from 'aws-amplify';
import {useQuery} from '@apollo/client';
import {getStudent, getClass} from './queries';
import {AuthContext} from '../../Context/Context';
import {SubjectContext} from '../../Navigators/HomeNav';

const HomeScreen = () => {
  const {userId} = useContext(AuthContext);
  const {classSelected} = useContext(SubjectContext);
  const [modal, setmodal] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  ///////////////////////GET STUDENT DATA/////////////////////
  const {loading, error, data, refetch} = useQuery(getStudent, {
    variables: {id: userId},
  });
  /* /////////////////////GET CLASS DATA//////////////// */
  const {
    loading: loadingclass,
    error: classError,
    data: dataClass,
  } = useQuery(getClass, {
    variables: {id: classSelected},
  });

  if (loadingclass) {
    <ActivityIndicator />;
  }
  if (classError) {
    return Alert.alert(classError?.message);
  }

  const onRetry = () => {
    refetch();
  };
  /* //////////////////////////////////////////////////////// */
  const modalSwitch = (val: boolean) => {
    setmodal(!val);
  };
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.errorTxt}>{error.message}</Text>
        <TouchableOpacity onPress={() => onRetry()}>
          <Image
            style={styles.retryImg}
            source={require('../../../assets/images/refresh.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        },
      ]}>
      <ProfileScreen modal={modal} modalSwitch={modalSwitch} />
      <TouchableOpacity style={styles.btnOut} onPress={() => Auth.signOut()}>
        <Image
          style={styles.signout}
          source={require('../../../assets/images/log-out.png')}
        />
      </TouchableOpacity>

      <View style={styles.avatar}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/profile.jpg')}
        />
      </View>
      <Text
        style={[
          styles.name,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Hi {data.getStudent.name}
        {'\n'}
        {dataClass?.getClass.name}
      </Text>
      <Text style={styles.subtitle}>You have 3 tasks pending</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setmodal(true)}>
        <Text
          style={[
            styles.editbtn,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          Edit Profile
        </Text>
      </TouchableOpacity>
      <View style={styles.boxesContainer}>
        <View style={[styles.box, {backgroundColor: '#18CC2B'}]}>
          <Text style={styles.title}>Highest Score</Text>
          <Text style={styles.score}>10</Text>
          <Text style={styles.subtitle}>Fisica</Text>
        </View>
        <View style={[styles.box, {backgroundColor: '#DC3C2F'}]}>
          <Text style={styles.title}>Lowest Score</Text>
          <Text style={styles.score}>7.5</Text>
          <Text style={styles.subtitle}>Quimica</Text>
        </View>
      </View>
      <View style={styles.boxPorcent}>
        <Text style={styles.txtClssMates}>Your ClassMates</Text>
        <FlatList
          data={dataClass?.getClass.Students.items}
          renderItem={({item}) => <ClssMatesBox data={item} />}
          horizontal={true}
        />
        {/*  <ScrollView
          horizontal={true}
          fadingEdgeLength={20}
          showsHorizontalScrollIndicator={false}>
          <ClssMatesBox />
          <ClssMatesBox />
          <ClssMatesBox />
          <ClssMatesBox />
          <ClssMatesBox />
        </ScrollView> */}
      </View>
      <LinearGradient colors={['#EFF4F6', '#E1DB7F']} style={styles.bg2} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderRadius: 75,
    marginBottom: 15,
    borderColor: 'maroon',
  },
  editbtn: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderRadius: 75,
  },
  signout: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
  },
  btnOut: {
    position: 'absolute',
    right: 12,
    top: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 15,
  },
  score: {
    marginTop: 2,
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  boxesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '78%',
    justifyContent: 'space-around',
  },
  box: {
    width: 135,
    aspectRatio: 1 / 1,
    backgroundColor: '#EFECF3',
    borderRadius: 20,
    paddingHorizontal: 10,
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderWidth: 1,
    elevation: 15,
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#3391f3',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 15,
  },
  bg2: {
    flex: 1,
    backgroundColor: '#8635F5',
    height: '55%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    borderTopWidth: 1,
    borderColor: '#CD9F19',
    alignItems: 'center',
    paddingBottom: 20,
  },
  boxPorcent: {
    width: '90%',
    aspectRatio: 1 / 0.59,
    backgroundColor: '#feb845',
    marginTop: 20,
    borderRadius: 10,
    elevation: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1.9,
    borderWidth: 0.5,
  },
  txtClssMates: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 7,
  },
  errorTxt: {
    color: 'black',
    fontSize: 18,
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  retryImg: {
    height: 20,
    width: 20,
  },
});

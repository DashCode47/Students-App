import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {UserProfileNavigationProp} from '../../Navigators/types';

const SubjectBox = ({data}: any) => {
  const navigation = useNavigation<UserProfileNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Details', {
          nameTeacher: data.teacher,
          nameSubject: data.nam,
        })
      }>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarIMG}
          source={require('../../../assets/images/profile.jpg')}
        />
      </View>
      <View>
        <Text style={styles.title}>{data.nam}</Text>
        <Text style={styles.hora}>Every monday</Text>
        <Text style={styles.teacher}>{data.teacher}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubjectBox;

const styles = StyleSheet.create({
  container: {
    width: undefined,
    height: 125,
    backgroundColor: '#feb845',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 18,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 20,
  },
  avatarIMG: {
    borderRadius: 45,
    height: '95%',
    aspectRatio: 1 / 1,
  },
  avatar: {
    height: '70%',
    aspectRatio: 1 / 1,
    backgroundColor: 'white',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  hora: {
    fontSize: 11,
  },
  teacher: {
    fontSize: 14,
    color: 'black',
  },
});

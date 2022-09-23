import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import dummy from '../../../assets/dummy';
import ScoreModal from '../../Modals/ScoreModal';

interface Ioption {
  id: string;
  option: string;
  true?: boolean | undefined;
}

const Question = () => {
  const [win, setwin] = useState<boolean>();
  const [Question, setQuestion] = useState(1);
  const [modal, setmodal] = useState<boolean>(false);
  const [score, setscore] = useState<number>(10);
  const navigation = useNavigation();
  const dummyFiltered = dummy.filter(item => item.id == Question);
  const truefly = (opt: Ioption) => {
    if (opt.true == true) {
      setwin(true);
      setscore(score + 10);
    } else {
      setwin(false);
      Alert.alert('Try Again', 'wrong aswer');
    }
  };

  const OpenModal = (value: boolean) => {
    setmodal(!value);
  };
  return (
    <View style={styles.container}>
      <ScoreModal modal={modal} OpenModal={OpenModal} score={score} />
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.arrowImg}
          source={require('../../../assets/images/arrow-left.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.img}
        source={require('../../../assets/images/question.png')}
      />
      <Text style={styles.pregunta}>
        {dummyFiltered.map(option => option.pregunta)}
      </Text>
      {dummyFiltered.map(option =>
        option.options.map(opt => (
          <TouchableOpacity
            style={[
              styles.respuestaContainer,
              {
                backgroundColor:
                  opt.true == true && win == true ? 'green' : 'white',
              },
            ]}
            key={opt.id}
            onPress={() => truefly(opt)}>
            <Text style={styles.multiple} key={opt.id}>
              {opt.option}
            </Text>
          </TouchableOpacity>
        )),
      )}
      <TouchableOpacity
        disabled={win == true ? false : true}
        style={[
          styles.btnContainer,
          {backgroundColor: win == true ? 'green' : '#D3D3D3'},
        ]}
        onPress={() =>
          Question < 6
            ? (setQuestion(Question + 1), setwin(false))
            : OpenModal(false)
        }>
        <Text style={styles.btn}>GO NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3391f3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  pregunta: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  arrowImg: {
    width: 55,
    height: 55,
  },
  img: {
    width: 115,
    height: 115,
    marginBottom: 20,
  },
  btnContainer: {
    height: 60,
    borderRadius: 15,
    width: 190,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation: 18,
    borderWidth: 0.8,
    borderBottomWidth: 2,
  },
  respuestaContainer: {
    height: 60,
    borderRadius: 15,
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingLeft: 15,
    elevation: 15,
    borderWidth: 1,
    borderBottomWidth: 3,
  },
  btn: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  multiple: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    alignSelf: 'baseline',
  },
});

import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {listClasses} from './querries';
import {useQuery} from '@apollo/client';

const SECTIONS = [
  {
    title: 'Cursos',
    content: ['Conten1'],
  },
];
interface Iclass {
  classTitle: ClaseFunct;
}
type ClaseFunct = (a: string, b: string) => void;

const AccordionView = ({classTitle}: Iclass) => {
  const [activeSections, setState] = useState([]);
  const {data, loading, error, refetch} = useQuery(listClasses);
  const mydata = data?.listClasses.items;

  const onRetry = () => {
    refetch();
  };
  const _renderHeader = (section: any) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <TouchableOpacity onPress={() => onRetry()}>
          <Image
            style={styles.retryImg}
            source={require('../../../assets/images/refresh.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const _renderContent = (section: any) => {
    return (
      <View style={styles.content}>
        <ScrollView style={styles.scroll}>
          {mydata.map((classes: any) => (
            <TouchableOpacity
              style={styles.containerContent}
              key={classes.id}
              onPress={() => classTitle(classes.name, classes.id)}>
              <Text style={styles.txtContent}>{classes.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const _updateSections = (activeSections: any) => {
    setState(activeSections);
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
    <Accordion
      sections={SECTIONS}
      activeSections={activeSections}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e9ede7',
    padding: 10,
    width: 300,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    maxHeight: 200,
  },
  content: {
    backgroundColor: '#fff',
    width: 300,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  containerContent: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  txtContent: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 60,
  },
  txt: {
    height: 100,
    width: 200,
    backgroundColor: 'red',
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
export default AccordionView;

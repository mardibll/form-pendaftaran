import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Appbar, Floating, ListItem} from '../components';
import {dataSchool} from '../utils/data';

type Props = {
  navigation: any;
};

const List = (props: Props) => {
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <ListItem key={index} item={item} />;
  };

  const handleShowAdd = () => {
    props.navigation.navigate('Form');
  };

  return (
    <View style={styles.container}>
      <Appbar title="Home" />
      <FlatList data={dataSchool} renderItem={renderItem} />
      <Floating onFloat={handleShowAdd} />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

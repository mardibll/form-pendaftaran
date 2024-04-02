import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Appbar, Floating, ListItem, Nodata} from '../components';
import {getList} from '../utils/services';

type Props = {
  navigation: any;
};

const List = (props: Props) => {
  const [Items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setisLoading(true);
    getList()
      .then(res => {
        setisLoading(false);
        setItems(res);
      })
      .catch(() => setisLoading(false));
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <ListItem key={index} item={item} />;
  };

  const handleShowAdd = () => {
    props.navigation.navigate('Form');
  };

  return (
    <View style={styles.container}>
      <Appbar title="Home" />
      <FlatList
        data={Items}
        renderItem={renderItem}
        ListEmptyComponent={() => <Nodata loading={isLoading} />}
      />
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

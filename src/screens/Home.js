import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Loader from '../components/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../redux/slices/userPostSlice';

const Home = () => {
  const {posts, loading} = useSelector(state => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <Header title="Redux Toolkit Demo App" />

      {loading ? (
        <Loader />
      ) : (
        <FlatList data={posts} renderItem={({item}) => <Card data={item} />} />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;

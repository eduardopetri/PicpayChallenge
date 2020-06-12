import React, {useEffect, useState, ChangeEvent} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,Image, TouchableOpacity, } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';


const BackPageButton = () => {
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <View>
    <TouchableOpacity>
      <Icon name="angle-left" style={styles.iconBack} size={30} onPress={handleNavigateBack}/>
    </TouchableOpacity>
  </View>
  );
}
const styles = StyleSheet.create({
  iconBack:{
    color: '#11C76F',
    paddingTop: 18,
    paddingLeft: 12,
  }
});
export default BackPageButton;
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "../components/ui/Button";
import ModalButton from "../components/ui/ModalButton";
import MovieDescriptionModal from "../components/MovieDetails/DescriptionModal";

function MovieDetailsScreen({route, navigation}){
  const { film } = route.params;
  const [isVisable, setIsVisable] = useState(false)

  // navigation.setOptions({ title: film.title })

  function closePressHandler(){
    navigation.goBack();
  }

  function onShowModal(){
    setIsVisable(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {/* <Button style={styles.button} buttonColor={styles.buttonColor} onPress={closePressHandler}>close</Button> */}
        <Text style={styles.title}>{film.title}</Text>
      </View>
      <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w300${film.poster}`}} />
      <Text style={styles.subTitle}>Synopsis</Text>
      <Text>{film.overview.substr(0, 30)}... <ModalButton onPress={onShowModal} >read more</ModalButton></Text>
        <MovieDescriptionModal 
          film={film} 
          setIsVisable={setIsVisable}
          isVisable={isVisable}
          />
      <View style={styles.addRemoveContainer}>
        <Button style={styles.addRemove} buttonColor={styles.buttonColor}>remove</Button>
        <Button style={styles.addRemove} >add</Button>
      </View>
    </View>
  )
}

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    marginTop: 40
  },
  image:{
    width: 300,
    minHeight: '60%',
    marginTop: 20,
    elevation: 5,
    marginBottom: 10,
    elevation: 4
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  buttonContainer:{
    alignItems: 'center',
  },
  button: {
    width: 300,
    marginBottom: 10
  },
  buttonColor: {
    backgroundColor: 'red'
  },
  addRemove: {
    width: 150
  },
  addRemoveContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 15,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    padding: 20
  }

})
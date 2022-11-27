import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import {TouchableOpacity } from "react-native-gesture-handler";


function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData(){
    fetch('http://192.168.100.5:3000/brandlist')
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  return (
    <View style={{flex:1}}>
      <View style={{marginTop: 10, marginBottom: 10, paddingVertical: 10, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#000000', fontSize: '20', marginHorizontal: '25%'}}>Select Your Brand</Text>
        <TouchableOpacity onPress={() => navigation.navigate('About App', {msg: null}) } style={{
            backgroundColor: '#212121',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
            elevation: 2}}>
        <FontAwesomeIcon style={{color: 'white'}}icon={faAtom}/>
      </TouchableOpacity>
      </View>
      
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('BRAND', {msg: item}) } style={{
            backgroundColor: '#212121',
            paddingVertical: 20,
            marginBottom: 10,
            borderRadius: 10,
            elevation: 2,
            marginHorizontal: 10
           }}>
            <Text  numberOfLines={1}  style={{color: '#FFFFFF', textAlign: "center", fontSize: 30, width: '100%', marginTop: 5, textTransform: 'uppercase'}}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      
      </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#344E41",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: "center",
    paddingBottom: 10
  },
  headerImage: {
    height: 120,
    width: 100
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold"
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10
  },
  oddItemListContainer: {
    height: 100,
    backgroundColor: "#588157",
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  evenItemListContainer: {
    height: 100,
    backgroundColor: "#A3B18A",
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  itemListContent: {
    marginLeft: 10
  },
  odditemListLine: {
    backgroundColor: "#A3B18A",
    width: 5,
    height: "80%"
  },
  evenitemListLine: {
    backgroundColor: "#588157",
    width: 5,
    height: "80%"
  },
  itemListText: {
    color: "#06283D",
    marginVertical: 2,
    fontWeight: "bold",
    fontSize: 17
  }
});

export default HomeScreen;

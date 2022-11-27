import React from "react";
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


function News({navigation}) {
  const [data, setData] = useState([]);
  const [newsdata, setnewsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData(){
    fetch('https://newsapi.org/v2/everything?q=skincare&apiKey=67336fdb0cd140dda4686bae12351fe5')
    .then(response => response.json())
    .then(json => {
      setData(json.articles)
    })
    .catch(error => {
      console.error(error);
    });
  }


  return (
    <View style={{flex:1}}>
      <View style={{marginTop: 10, marginBottom: 10, paddingVertical: 5}}>
        <Text style={{color: '#000000', textAlign: "center", fontSize: '20'}}>Berita Terkini</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity  style={{
            backgroundColor: '#212121',
            paddingBottom: 10,
            borderRadius: 10,
            elevation: 2,
            marginHorizontal: 10,
            marginBottom: 10
           }}>
            <Image source={{uri: item.urlToImage}} style={{ height: 100, width: '100%', display: 'flex', borderTopLeftRadius: 10, borderTopRightRadius: 10}}/>
            <Text  numberOfLines={1}  style={{color: '#FFFFFF', textAlign: "center",  width: '100%', marginTop: 5}}>{item.title}</Text>
            <Text  numberOfLines={1}  style={{color: '#FFFFFF', textAlign: "center", width: '100%', marginTop: 5}}>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
      
      </View>
  );
};

export default News;
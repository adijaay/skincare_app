import { useEffect, useState } from "react";
import { Image, View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



const Details = ({route, navigation}) => {
    const [data, setData] = useState([]);
    const [dataPrest, setPrestData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData(){
    fetch('https://skincare-api.herokuapp.com/product?q='+route.params.msg)
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
    .catch(error => {
      console.error(error);
    });
  }
    return(
        <View>
        <Text style={{padding: 20, fontSize: 30, textAlign: 'center'}}>What's At?</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
                    <View  style={{
                    marginBottom: 10,
                    backgroundColor: "#464343",
                    borderRadius: 4,
                    marginHorizontal: '3%',
                    paddingBottom: 0,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'row'}}>
                        <Text numberOfLines={1}  style={{color: '#FFFFFF', fontSize: 20, width: '70%', marginTop: 5, textTransform: 'capitalize', marginRight: '8%'}}>{item.name}</Text>
                     
                    <TouchableOpacity style={{
                    marginBottom: 10,
                    backgroundColor: "#9acd32",
                    borderRadius: 4,
                    padding: 4,
                    marginTop: 5}} onPress={() => navigation.navigate('INGREDIENTS', {msg: item.name}) }>
                        <Text style={{textAlign:'center'}}>Lihat Bahan</Text>
                    </TouchableOpacity>
                    </View>

                )}
        />
        </View>
    )
};

export default Details;

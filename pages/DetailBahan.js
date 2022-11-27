
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

function DetailNews({route}) {
  const [databahan, setDatabahan] = useState([]);
  const id = route.params.msg;

  useEffect (() => {
    getDatabahan();
})

function getDatabahan(){
    fetch('https://skincare-api.herokuapp.com/product?q='+id)
	.then((response) => response.json())
    .then((json) => {
        setDatabahan(json)
    })
	.catch(err => console.error(err));
}
  
  return (
    <View style={{flex:1}}>
        <Text style={{textAlign: 'center', textTransform: 'uppercase', fontSize: 20, padding: 10}}>
            {id}
        </Text>
      <FlatList
        data={databahan}
        renderItem={({ item }) => (
          <View  >
            <FlatList data={item.ingredient_list}
            renderItem={({item}) => (
                <View style={{
                    marginBottom: 10,
                    backgroundColor: "#464343",
                    borderRadius: 4,
                    marginHorizontal: '3%',
                    padding: 4,
                   }}>
                    <Text style={{color: 'white', textAlign: "center", marginHorizontal: 10, fontSize: 20}}>{item}</Text>
                </View>
            )}
            >
            </FlatList>
            
          </View>
        )}
      />
      </View>
  );
};

export default DetailNews;
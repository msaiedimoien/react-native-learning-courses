import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomCard from "../components/shared/CustomCard";

const courses = [
    {
        id: 1,
        title: "دوره جامع NodeJs",
        price: "300000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../assets/courses/NodeJs.jpg"),
    },
    {
        id: 2,
        title: "دوره جامع ReactJs",
        price: "200000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../assets/courses/ReactJs.jpg"),
    },
    {
        id: 3,
        title: "دوره جامع ElectronJs",
        price: "200000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../assets/courses/Electron.jpg"),
    },
    {
        id: 4,
        title: "دوره جامع React Native",
        price: "200000",
        teacher: "یونس قربانی",
        time: "15:00:00",
        image: require("../assets/courses/ReactNative.jpg"),
    }
];

const CoursesScreen = ({ navigation }) => {
    return (
    <FlexScreen style={styles.container}>
      <FlatList
          data={courses}
          keyExtractor={c => c.id.toString()}
          renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('CourseDetails', {course: item})}>
                  <CustomCard item={item} />
              </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
      />
    </FlexScreen>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 15
    }
});

export default CoursesScreen;
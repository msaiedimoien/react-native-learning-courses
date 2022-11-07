import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomCard from "../components/shared/CustomCard";
import axios from "axios";

const CoursesScreen = ({ navigation }) => {
    const [loading, setLoading] = useState();
    const [getCourses, setCourses] = useState();

    useEffect(() => {
        setLoading(true);
        axios.get("https://rnapi.ghorbany.dev/api/courses", {
            headers: {
                "Content-Type": "application/json",
            },
        }).then(({data}) => {
            setCourses(data.courses);
            setLoading(false);
        }).catch((err) => {
            console.log(err)
            setLoading(false);
        });
    }, []);

    return (
        <FlexScreen style={styles.container}>
            { loading
                ? <ActivityIndicator animating={loading} size="large" />
                :null}
            <FlatList
                data={getCourses}
                keyExtractor={c => c._id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('CourseDetails', {course: item})}>
                        <CustomCard item={item} showInfo={false}/>
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
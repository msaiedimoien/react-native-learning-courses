import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomCard from "../components/shared/CustomCard";
import {useSelector} from "react-redux";

const NewCoursesScreen = () => {
    const courses = useSelector(state => state.courses);

    return (
        <FlexScreen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={c => c._id.toString()}
                renderItem={({item}) => (
                    <CustomCard item={item} />
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

export default NewCoursesScreen;
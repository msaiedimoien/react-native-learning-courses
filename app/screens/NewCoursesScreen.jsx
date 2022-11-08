import React, {useContext} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomCard from "../components/shared/CustomCard";
import CoursesContext from "../contexts/CoursesContext";

const NewCoursesScreen = () => {
    const context = useContext(CoursesContext);

    return (
        <FlexScreen style={styles.container}>
            <FlatList
                data={context.courses}
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
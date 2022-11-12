import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomText from "../components/shared/CustomText";
import CustomSeparator from "../components/shared/CustomSeparator";
import {Swipeable} from "react-native-gesture-handler";
import CustomIcon from "../components/shared/CustomIcon";

const confirmationAlert = (course, onPress) => {
    return Alert.alert(
        course.title,
        `مطمئنی می خوای  ${course.title} رو از لیست دوره هات پاک کنی`,
        [
            {
                text: "انصراف",
                onPress: () => {},
                style: "cancel",
            },
            {
                text: "آره ، پاک کن",
                onPress: onPress,
            },
        ],
        { cancelable: false }
    );
};

const deleteAction = (course, onPress) => {
    return (
        <View style={{
            backgroundColor: 'tomato',
            width: 50,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CustomIcon
                name='trash-can-outline'
                size={40}
                color='white'
                onPress={() => confirmationAlert(course, onPress)}
            />
        </View>
    )
};

const MyCoursesScreen = () => {
    const [getMyCourses, setMyCourse] = useState([
        {id: 1, title: "دوره جامع NodeJs", master: "مصطفی سعیدی"},
        {id: 2, title: "دوره جامع React Native", master: "مصطفی سعیدی"},
        {id: 3, title: "دوره جامع ReactJs", master: "مصطفی سعیدی"},
        {id: 4, title: "دوره جامع ElectronJs", master: "مصطفی سعیدی"},
        {id: 5, title: "دوره جامع جاوااسکریپت", master: "مصطفی سعیدی"},
    ]);

    const handleDelete = (course) => {
        setMyCourse(getMyCourses.filter(c => c.id !== course.id));
    };

    return (
        <FlexScreen>
            <CustomText fontFamily='byekan' size={2.5} styles={styles.topTitle}>
                لیست دوره های من
            </CustomText>
            <CustomSeparator height={3}/>
            <FlatList
                data={getMyCourses}
                keyExtractor={c => c.id.toString()}
                renderItem={({item}) => (
                    <View style={{marginVertical: 5}}>
                        <Swipeable renderRightActions={() => deleteAction(item, () => handleDelete(item))}>
                            <View style={styles.item}>
                                <View style={styles.details}>
                                    <CustomText fontFamily='byekan' size={2.2} styles={styles.title}>
                                        {item.title}
                                    </CustomText>
                                    <CustomText fontFamily='ih' size={1.5} styles={{textAlign: 'center'}}>
                                        {`مدرس دوره: ${item.master}`}
                                    </CustomText>
                                </View>
                            </View>
                            <CustomSeparator height={3} />
                        </Swipeable>
                    </View>
                )}
            />
        </FlexScreen>
    );
};

const styles = StyleSheet.create({
    topTitle: {
        width: '90%',
        textAlign: "center",
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: 'tomato',
        borderRadius: 20,
        padding: 10,
        color: '#f0f0f0'
    },
    item: {
      padding: 15,
        backgroundColor: 'dodgerblue'
    },
    details: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'whitesmoke'
    },
    title: {
        textAlign: 'center',
    }
});

export default MyCoursesScreen;

import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {numberWithCommas} from "../../utils/price";
import CustomText from "./CustomText";

const CustomCard = ({item, showInfo}) => {
    return (
        <View style={styles.card}>
            <Image
                source={{
                    uri: `https://rnapi.ghorbany.dev/${item.imageUrl}`,
                }}
                style={styles.image}
            />
            <View style={{padding: 20}}>
                <CustomText fontFamily='byekan' size={2} styles={styles.title}>{item.title}</CustomText>
                <View style={styles.details}>
                    <CustomText fontFamily='byekan' size={1.7}>
                        قیمت:
                        {item.price === 0 ? 'رایگان' : `${numberWithCommas(item.price)} تومان`}
                    </CustomText>
                    <CustomText fontFamily='byekan' size={1.7}>زمان: 15:00:00</CustomText>
                </View>
                <CustomText fontFamily='ih' size={2} styles={styles.teacher}>مدرس دوره: مصطفی سعیدی معین</CustomText>
            </View>
            {item.info && showInfo ? (
                <View style={{flex: 1, padding: 20, paddingTop:0}}>
                    <CustomText fontFamily='byekan' size={2.2}>توضیحات دوره:</CustomText>
                    <ScrollView>
                        <CustomText fontFamily='ih' size={1.6} styles={styles.courseInfo}>{item.info}</CustomText>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 270
    },
    title: {
        color: 'tomato',
        textAlign: "center"
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    teacher: {
        textAlign: "center"
    },
    courseInfo: {
        textAlign: "justify",
        lineHeight: 20,
    }
});

export default CustomCard;
import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {numberWithCommas} from "../../utils/price";
import CustomText from "./CustomText";

const CustomCard = ({item, courseInfo=null}) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
        <View style={{padding:20}}>
            <CustomText fontFamily='byekan' size={2.4} styles={styles.title}>{item.title}</CustomText>
            <View style={styles.details}>
                <CustomText fontFamily='byekan' size={1.7}>{`قیمت: ${numberWithCommas(item.price)} تومان`}</CustomText>
                <CustomText fontFamily='byekan' size={1.7}>زمان: {item.time}</CustomText>
            </View>
            <CustomText fontFamily='ih' size={2} styles={styles.teacher}>مدرس دوره: {item.teacher}</CustomText>
            {courseInfo ? (
                <View>
                    <CustomText fontFamily='byekan' size={2.2} styles={{marginTop: 20}}>توضیحات دوره:</CustomText>
                    <ScrollView>
                        <CustomText fontFamily='ih' size={1.6} styles={styles.courseInfo}>{courseInfo}</CustomText>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        overflow: "hidden",
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
        lineHeight: 20
    }
});

export default CustomCard;
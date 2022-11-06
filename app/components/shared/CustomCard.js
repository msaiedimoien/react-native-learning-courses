import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {numberWithCommas} from "../../utils/price";

const CustomCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
        <View style={{padding:20}}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.details}>
                <Text style={styles.priceTime}>{`قیمت: ${numberWithCommas(item.price)} تومان`}</Text>
                <Text style={styles.priceTime}>زمان: {item.time}</Text>
            </View>
            <Text style={styles.teacher}>مدرس دوره: {item.teacher}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 270
    },
    title: {
        fontFamily: 'byekan',
        fontSize: 18,
        textAlign: "center"
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    priceTime: {
        fontFamily: 'byekan',
        fontSize: 14
    },
    teacher: {
        fontFamily: 'byekan',
        fontSize: 16,
        textAlign: "center"
    }
});

export default CustomCard;

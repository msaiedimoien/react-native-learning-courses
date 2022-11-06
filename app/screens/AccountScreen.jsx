import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomIcon from "../components/shared/CustomIcon";
import CustomSeparator from "../components/shared/CustomSeparator";

const AccountScreen = () => {
  return (
    <FlexScreen style={styles.screen}>
      <View style={styles.details}>
          <Image style={styles.image} source={require('../assets/msPhoto.jpg')} />
          <View>
              <Text style={styles.title}>مصطفی سعیدی معین</Text>
              <Text style={styles.subTitle}>msaiedimoien@yahoo.com</Text>
              <CustomIcon name='cog-outline' size={40} color='tomato' />
          </View>
      </View>
        <CustomSeparator height={2} />
        <TouchableOpacity style={[styles.details, {margin: 15}]}>
            <CustomIcon name='logout' size={40} color='tomato' />
            <Text style={styles.title}> خروج از حساب کاربری</Text>
        </TouchableOpacity>
    </FlexScreen>
  );
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: 60,
        paddingHorizontal: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 50,
        marginHorizontal: 10
    },
    title: {
        fontFamily: 'byekan',
        fontSize: 18,
        color: 'black'
    },
    subTitle: {
        fontSize: 14,
        color: 'darkgray',
        marginVertical: 5
    },
});

export default AccountScreen;

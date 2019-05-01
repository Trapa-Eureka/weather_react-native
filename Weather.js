import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00c6fb", "#005bea"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ["#fef253", "#ff7300"],
        title: "Sunny",
        subtitle: "It's good for Laundry",
        icon: 'weather-sunny' 
    },
    Thunderstorm: {
        colors: ["#00ecbc", "#007adf"],
        title: "Thunderstorm",
        subtitle: "Actually, outside of the chaos",
        icon: 'weather-lightning' 
    },
    Clouds: {
        colors: ["#d7d2cc", "#304352"],
        title: "Clouds",
        subtitle: "We know, it's glommy day",
        icon: 'weather-cloudy' 
    },
    Snow: {
        colors: ["#7de2fc", "#b9b6e5"],
        title: "Cold as ball",
        subtitle: "Do you want build a snowman?",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ["#89f7fe", "#66a6ff"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay",
        icon: 'weather-hail'
    },
    Haze: {
        colors: ["#f2ba69", "#702e59"],
        title: "Haze",
        subtitle: "foggy outside",
        icon: 'weather-fog'
    },
    Mist: {
        colors: ["#d7d2cc", "#304352"],
        title: "Mist",
        subtitle: "It's like you don't have to eye glasses",
        icon: "weather-fog"
    }
}

// export default class Weather extends Component {
//     render() {
//         return ( 
//             <LinearGradient colors={["#00c6fb", "#005bea"]} style={styles.container}>
//             <StatusBar hidden={true} />
//             <View style={styles.uppper}>
//                 <Ionicons color="#fff" size={144} name="ios-rainy" />
//                 <Text style={styles.temp}>35º</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}>Raining like a MF</Text>
//                 <Text style={styles.subtitle}>For more info look outside</Text>
//             </View>
//             </LinearGradient>
//         );
//     }
// }

function Weather({ weatherName, temp }) {
    // console.log(weatherName);
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.upper}>
                <MaterialCommunityIcons color="#fff" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}
export default Weather;

// 위치, 날씨 데이터를 얻었으니 리펙토링.
// 리펙토링 : 코드의 구조를 변경
// 날씨 컴포넌트를 stateless 컴포넌트로 치환.
// 의미 : 컴포넌트에 state가 없고 클래스에서 만들지 않겠다는 것.

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        color: "#fff",
        marginTop: 7,
        backgroundColor: "transparent"
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 30
    },
    title: {
        fontSize: 38,
        color: "#fff",
        marginBottom: 2,
        fontWeight: "300",
        backgroundColor: "transparent"
    },
    subtitle: {
        fontSize: 24,
        color: "#fff",
        marginBottom: 50,
        backgroundColor: "transparent"
    }
})
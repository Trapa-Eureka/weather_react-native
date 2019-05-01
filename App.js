import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather";

const API_KEY = "8c194040a06d9a847bb9c5589246be57";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  // location
  componentDidMount() {
    navigator.geolocation.getCurrentPosition (
      position => {
        // this.setState({
          // isLoaded: true
        // });
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    );
  }
  // location

  // get weather info
  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded: true
      });
    });
  }
  // get weather info
  // Math floor : 소수점 이하 버림
  // Math ceil : 소수점 버리는 대신 반올림 해버림

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
            <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)} /> 
          ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather info</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}
// 위치정보 에러시 텍스트 출력, 에러 없으면 null.
// 모든 value는 string이어야 함.
// view, text, flexbox
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 30
  },
  loadingText: {
    fontSize: 46,
    marginBottom: 50
  }
});

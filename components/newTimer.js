import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

const NewTimer = ({ totalDuration, setTotalDuration }) => {
  // Calculate the initial totalDuration when rendering the component
  const calculateInitialDuration = () => {
    const date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    const expirydate = '2020-12-23 04:00:45';
    const diffr = moment.duration(moment(expirydate).diff(moment(date)));
    const hours = parseInt(diffr.asHours());
    const minutes = parseInt(diffr.minutes());
    const seconds = parseInt(diffr.seconds());
    const d = hours * 60 * 60 + minutes * 60 + seconds;
    setTotalDuration(d);
  };

  // Call the function to set the initial totalDuration
  calculateInitialDuration();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>This is CountDown!</Text>
        <CountDown
          until={totalDuration}
          timetoShow={['H', 'M', 'S']}
          onFinish={() => alert('finished')}
          onPress={() => alert('hello')}
          size={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});

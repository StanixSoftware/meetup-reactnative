import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fetchMeetups } from './utils/api';

export default class App extends React.Component {
  static defaultProps = {
    fetchMeetups
  }
  
  state = { 
    loading: false,
    meetups: [] 
  }

  async componentDidMount()  {
    this.setState({ loading: true });
    const data = await this.props.fetchMeetups();

    this.setState({
      loading: false,
      meetups: data.meetups
    });
  }

  render() {
    const { meetups, loading } = this.state;
    return (
      <View style={styles.container}>
        { 
          meetups.map((meetup, i) => (
            <View key={i} style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text>{meetup.title}</Text>
              <Text>{meetup.description}</Text>
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

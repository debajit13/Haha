import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

const App: React.FC<{}> = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Haha</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

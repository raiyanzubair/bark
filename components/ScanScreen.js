import { getTagId, readTag, writeTag } from 'nfc-react-native'

import React, { Component } from 'react';
import {
	View,
	Text,
	Button,
	Platform,
	TouchableOpacity,
	Linking,
	TextInput,
	ScrollView,
} from 'react-native';
import NfcManager, {NdefParser} from 'react-native-nfc-manager';

class ScanScreen extends Component {
	readTagId() {
    getTagId()
  }

  readTagData() {
    readTag([
      { sector: 1, blocks: [1,2], clave: 'FFFFFFFFFFFF', keyType: 'A' },
      { sector: 2, blocks: [0,1,2], clave: 'FFFFFFFFFFFF', keyType: 'A' },
      { sector: 3, blocks: [0], clave: 'FFFFFFFFFFFF', keyType: 'A' }
    ])
  }

  writeTagData() {
    writeTag([{ sector: 1, blocks: [ 
    { index: 1, data: [15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,15,15] },
    { index: 2, data: [15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,15,15] } ],
      clave: 'FFFFFFFFFFFF', keyType: 'A' },
      { sector: 2, blocks: [ 
    { index: 0, data: [15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,15,15] },
    { index: 1, data: [15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,15,15] },
    { index: 2, data: [15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,15,15] } ],
      clave: 'FFFFFFFFFFFF', keyType: 'A' },
    { sector: 3, blocks: [ 
    { index: 0, data: [15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,15,15] } ],
      clave: 'FFFFFFFFFFFF', keyType: 'A' },
      ], 1148002313)
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('onTagError', function (e) {
        console.log('error', e)
        Alert.alert(JSON.stringify(e))
    })

    DeviceEventEmitter.addListener('onTagDetected', function (e) {
        Alert.alert(JSON.stringify(e))
    })

    DeviceEventEmitter.addListener('onTagRead', (e) => {
        console.log('reading', e)
        Alert.alert(JSON.stringify(e))
    })

    DeviceEventEmitter.addListener('onTagWrite', (e) => {
        console.log('writing', e)
        Alert.alert(JSON.stringify(e))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.readTagId}
          title="Get id of Tag"
        />
        <Button
          onPress={this.readTagData}
          title="Get sectors of a Tag"
        />
        <Button
          onPress={this.writeTagData}
          title="Write sectors of a Tag"
        />
      </View>
    );
  }
}
}

export default ScanScreen;
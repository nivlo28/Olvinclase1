import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <CustomInput type={'number'} 
      placeholder={''} 
      value={''}
       onChange={function (text: string): void {} } />
      <CustomButton 
      title={"App"}
       onPress={()=>{
        console.log('Press desde boton App');
      }}
      /> 
       <CustomButton 
      title={"Secondary Button"}
       onPress={()=>{
        console.log('Press desde boton Secundario');
      }}
      variant="secondary"
      />
      <CustomButton 
      title={"Tertiary Button"}
       onPress={()=>{
        console.log('Press desde boton Secundario');
      }}
      variant="tertiary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { MyComponent, MyNativeBaseComponent } from "atomiq-shared";
import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider, Text, VStack } from "native-base";
import { StyleSheet } from 'react-native';
export default function App() {
  return (
    <NativeBaseProvider>
      <VStack style={styles.container}>
        <Text>Expo + NativeBase</Text>
        <StatusBar style="auto" />
        <Center mt={4}>
          <Text>Shared Component</Text>
          <Text><MyComponent /></Text>
          <Text><MyNativeBaseComponent /></Text>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

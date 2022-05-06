// const { MyComponent, MyNativeBaseComponent } = require("atomiq-shared");
import { Center, Text, VStack } from "native-base";
import React from "react";

// Start editing here, save and see your changes.
export default function App() {
  return (
    <Center flex={1}>
      <VStack alignItems="center" space="md">
        <Text>NextJS + NativeBase</Text>
        <VStack>
          <Text>Shared Component</Text>
          {/* <MyComponent />
          <MyNativeBaseComponent /> */}
        </VStack>
      </VStack>
    </Center>
  );
}

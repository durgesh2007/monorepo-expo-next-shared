import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

export interface IMyNativeBaseComponent { }

export const MyNativeBaseComponent = () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Text>Hello From Shared: NativeBase Component!</Text>
      </Center>
    </NativeBaseProvider>
  )
}
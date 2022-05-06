# monorepo-expo-next-shared

--> shared
> npx create tsdx shared
> Choose a template - React (Default, React, Storybook)
> yarn build
> npm pack
> npm link
> nativebase installation
> yarn add react-native-web native-base react-native-svg react-native-safe-area-context

--> mobile
> expo init mobile
> blank typescript
> added dependancy in package.json ("atomiq-shared": "file:../shared/atomiq-shared-0.1.1.tgz")
> npm i
> nativebase installation

--> web
> yarn create next-app -e https://github.com/GeekyAnts/nativebase-templates/tree/master/nextjs-with-native-base-typescript
-- First try this:
> npm link atomiq-shared
- added dependancy in package.json ("atomiq-shared": "file:../shared")

-- second try this:
> added dependancy in package.json ("atomiq-shared": "file:../shared/atomiq-shared-0.1.1.tgz")
> npm i
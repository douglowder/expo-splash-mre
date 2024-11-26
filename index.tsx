import { Text, View } from "react-native";
import { SymbolImage } from "./src/image/image";
import * as Splash from "expo-splash-screen";
import { useEffect } from "react";
import { registerRootComponent } from "expo";

Splash.preventAutoHideAsync();

function Index() {
  useEffect(() => {
    setTimeout(Splash.hideAsync, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        When reference to symbol-image.options.ts is added black splash screen
        appears
      </Text>
      <SymbolImage code="AAPL" />
      <Text>
        If SymbolImage component is removed (symbol-image.options.ts is no
        longer imported anywhere in the project) black screen no longer appears
      </Text>
    </View>
  );
}

registerRootComponent(Index);

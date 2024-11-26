import { memo } from "react";
import { ImageRequireSource, View } from "react-native";
import { Image } from "expo-image";

import { symbolOptions } from "./symbol-image.options";

const ImageBase = memo(({ img }: { img: ImageRequireSource }) => {
  return (
    <View style={{ width: 32, height: 32, backgroundColor: "red" }}>
      <Image
        source={img}
        defaultSource={img as ImageRequireSource}
        contentFit={"cover"}
        style={{ width: 32, height: 32 }}
      />
    </View>
  );
});

export const SymbolImage = memo(
  ({ code }: { code: keyof typeof symbolOptions }) => (
    <ImageBase img={symbolOptions[code as keyof typeof symbolOptions]} />
  )
);

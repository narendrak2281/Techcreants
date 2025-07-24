const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Ensure defaultConfig is properly declared
const defaultConfig = getDefaultConfig(__dirname);

const { assetExts, sourceExts } = defaultConfig.resolver;

const customAssetExts = ['bin', 'txt', 'jpg', 'png', 'json', 'mp4', 'ttf','gif']

const config = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer/react-native"),
  },
  resolver: {
    assetExts: customAssetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
});

// Wrap the config using withNativeWind for NativeWind support
module.exports = withNativeWind(config, { input: "./global.css" });
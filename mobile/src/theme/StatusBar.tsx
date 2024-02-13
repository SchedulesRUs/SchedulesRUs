import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppColor } from "./Colors";

export const AppStatusBar = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            width: "100%",
            height: insets.top,
            backgroundColor: AppColor
        }}>
            <StatusBar
                barStyle="light-content"
            />
        </View>
    );
}
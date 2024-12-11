import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RegisterScreen } from "@/screens/register";
import { RegisterScreen2 } from "@/screens/register2";
import { RegisterScreen3 } from "@/screens/register3";
import { FinishScreen } from "@/screens/Finish";

const { Navigator, Screen } = createNativeStackNavigator();

export function AccountRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="register" component={RegisterScreen} />
            <Screen name="register2" component={RegisterScreen2} />
            <Screen name="register3" component={RegisterScreen3} />
            <Screen name="finish" component={FinishScreen} />
        </Navigator>
    )
}
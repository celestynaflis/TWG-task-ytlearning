import {Image, View} from "react-native";
import {Link} from "expo-router";
import {welcomePageStyles} from "@/components/WelcomePage/WelcomePageStyles";
import { Text } from '@/components/Themed';


export const WelcomePage = () => {
    return (
        <View style={welcomePageStyles.container} >
            <Image />
            <Text style={welcomePageStyles.title}>HELLO</Text>
            <View style={welcomePageStyles.separator}/>
            <Link href="/one">Go to page</Link>
        </View>
    )
}
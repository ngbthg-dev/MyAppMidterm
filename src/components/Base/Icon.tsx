import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { GlobalStyleVar } from "../../constants";
import { View } from "react-native";

interface IconProps
{
	style?: any
}

function Icon(props: IconProps)
{
	return <View style={[{
		padding: 12,
		borderWidth: 1,
		borderColor: GlobalStyleVar.colorB,
		borderRadius: 10
	}, props.style]}>
		<FontAwesomeIcon color={"white"} size={20} icon={faBell}/>
	</View>
}

export {Icon}

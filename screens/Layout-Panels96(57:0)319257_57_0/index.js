import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_57_1} />
      <View style={styles.View_57_8}>
        <Text style={styles.Text_57_8}>secondary nav</Text>
      </View>
      <View style={styles.View_57_9} />
      <View style={styles.View_57_34}>
        <View style={styles.View_57_35}>
          <View style={styles.View_57_36} />
          <View style={styles.View_57_37}>
            <Text style={styles.Text_57_37}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_57_38}>
          <View style={styles.View_57_39} />
          <View style={styles.View_57_40} />
          <View style={styles.View_57_41}>
            <Text style={styles.Text_57_41}>Design</Text>
          </View>
        </View>
        <View style={styles.View_57_42}>
          <View style={styles.View_57_43} />
          <View style={styles.View_57_44}>
            <Text style={styles.Text_57_44}>Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_45}>
        <View style={styles.View_57_46} />
      </View>
      <View style={styles.View_57_47}>
        <View style={styles.View_57_48} />
        <View style={styles.View_57_49} />
        <View style={styles.View_57_50} />
        <View style={styles.View_57_51} />
        <View style={styles.View_57_52} />
        <View style={styles.View_57_53} />
        <View style={styles.View_57_54} />
        <View style={styles.View_57_55} />
        <View style={styles.View_57_56}>
          <Text style={styles.Text_57_56}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_57_2837}>
        <View style={styles.View_57_2838}>
          <View style={styles.View_57_2839}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_57_2840}
            />
            <View style={styles.View_58_2}>
              <Text style={styles.Text_58_2}>Switch to content builder</Text>
            </View>
            <View style={styles.View_57_2841}>
              <Text style={styles.Text_57_2841}>Project name</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_57_2842}>
        <View style={styles.View_57_2843} />
        <View style={styles.View_57_2844}>
          <View style={styles.View_57_2845} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5346/a9f9/4e6b08a6e1e1638e2722d13fa41e4cb6"
            }}
            style={styles.ImageBackground_57_2847}
          />
          <View style={styles.View_57_2848}>
            <Text style={styles.Text_57_2848}>Content builder</Text>
          </View>
        </View>
        <View style={styles.View_57_2849}>
          <View style={styles.View_57_2850} />
          <View style={styles.View_57_2855} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6fd/4a12/bf2e518080ef9bafa48b7e07fc6ba645"
            }}
            style={styles.ImageBackground_57_2851}
          />
          <View style={styles.View_57_2852}>
            <Text style={styles.Text_57_2852}>Data library</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_2853}>
        <View style={styles.View_57_2854} />
      </View>
      <View style={styles.View_57_3015}>
        <View style={styles.View_57_3016} />
        <View style={styles.View_57_3017}>
          <View style={styles.View_57_3018}>
            <Text style={styles.Text_57_3018}>Created by: User</Text>
          </View>
        </View>
        <View style={styles.View_57_3023}>
          <Text style={styles.Text_57_3023}>Request library 1</Text>
        </View>
        <View style={styles.View_57_3024}>
          <View style={styles.View_57_3025} />
          <View style={styles.View_57_3026}>
            <Text style={styles.Text_57_3026}>Duplicate</Text>
          </View>
        </View>
        <View style={styles.View_57_3027}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476a/7b57/e28b1eecdb6a7340ae79dee2ea4c3713"
            }}
            style={styles.ImageBackground_57_3028}
          />
          <View style={styles.View_57_3029}>
            <View style={styles.View_57_3030}>
              <View style={styles.View_57_3031}>
                <Text style={styles.Text_57_3031}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_57_3032} />
      </View>
      <View style={styles.View_57_2924}>
        <View style={styles.View_57_2925} />
        <View style={styles.View_57_2926}>
          <View style={styles.View_57_2927}>
            <Text style={styles.Text_57_2927}>Created by: Me</Text>
          </View>
        </View>
        <View style={styles.View_57_2932}>
          <Text style={styles.Text_57_2932}>Request library 2</Text>
        </View>
        <View style={styles.View_57_2933}>
          <View style={styles.View_57_2934} />
          <View style={styles.View_57_2935}>
            <Text style={styles.Text_57_2935}>Duplicate</Text>
          </View>
        </View>
        <View style={styles.View_57_2936}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476a/7b57/e28b1eecdb6a7340ae79dee2ea4c3713"
            }}
            style={styles.ImageBackground_57_2937}
          />
          <View style={styles.View_57_2938}>
            <View style={styles.View_57_2939}>
              <View style={styles.View_57_2940}>
                <Text style={styles.Text_57_2940}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_57_2946} />
      </View>
      <View style={styles.View_57_2947}>
        <View style={styles.View_57_2948} />
        <View style={styles.View_57_2949}>
          <View style={styles.View_57_2950}>
            <Text style={styles.Text_57_2950}>Created by: User</Text>
          </View>
        </View>
        <View style={styles.View_57_2955}>
          <Text style={styles.Text_57_2955}>Request library 3</Text>
        </View>
        <View style={styles.View_57_2956}>
          <View style={styles.View_57_2957} />
          <View style={styles.View_57_2958}>
            <Text style={styles.Text_57_2958}>Duplicate</Text>
          </View>
        </View>
        <View style={styles.View_57_2959}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476a/7b57/e28b1eecdb6a7340ae79dee2ea4c3713"
            }}
            style={styles.ImageBackground_57_2960}
          />
          <View style={styles.View_57_2961}>
            <View style={styles.View_57_2962}>
              <View style={styles.View_57_2963}>
                <Text style={styles.Text_57_2963}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_57_2964} />
      </View>
      <View style={styles.View_57_2965}>
        <View style={styles.View_57_2966} />
        <View style={styles.View_57_2967}>
          <View style={styles.View_57_2968}>
            <Text style={styles.Text_57_2968}>Created by: User</Text>
          </View>
        </View>
        <View style={styles.View_57_2973}>
          <Text style={styles.Text_57_2973}>Request library 4</Text>
        </View>
        <View style={styles.View_57_2974}>
          <View style={styles.View_57_2975} />
          <View style={styles.View_57_2976}>
            <Text style={styles.Text_57_2976}>Duplicate</Text>
          </View>
        </View>
        <View style={styles.View_57_2977}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476a/7b57/e28b1eecdb6a7340ae79dee2ea4c3713"
            }}
            style={styles.ImageBackground_57_2978}
          />
          <View style={styles.View_57_2979}>
            <View style={styles.View_57_2980}>
              <View style={styles.View_57_2981}>
                <Text style={styles.Text_57_2981}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_57_2982} />
      </View>
      <View style={styles.View_57_3069}>
        <View style={styles.View_57_3070} />
        <View style={styles.View_57_3071}>
          <View style={styles.View_57_3072}>
            <Text style={styles.Text_57_3072}>Created by: User</Text>
          </View>
        </View>
        <View style={styles.View_57_3077}>
          <Text style={styles.Text_57_3077}>Request library 5</Text>
        </View>
        <View style={styles.View_57_3078}>
          <View style={styles.View_57_3079} />
          <View style={styles.View_57_3080}>
            <Text style={styles.Text_57_3080}>Duplicate</Text>
          </View>
        </View>
        <View style={styles.View_57_3081}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476a/7b57/e28b1eecdb6a7340ae79dee2ea4c3713"
            }}
            style={styles.ImageBackground_57_3082}
          />
          <View style={styles.View_57_3083}>
            <View style={styles.View_57_3084}>
              <View style={styles.View_57_3085}>
                <Text style={styles.Text_57_3085}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_57_3086} />
      </View>
      <View style={styles.View_57_3087}>
        <View style={styles.View_57_3088} />
        <View style={styles.View_57_3089}>
          <View style={styles.View_57_3090}>
            <Text style={styles.Text_57_3090}>Created by: User</Text>
          </View>
        </View>
        <View style={styles.View_57_3095}>
          <Text style={styles.Text_57_3095}>Request library 6</Text>
        </View>
        <View style={styles.View_57_3096}>
          <View style={styles.View_57_3097} />
          <View style={styles.View_57_3098}>
            <Text style={styles.Text_57_3098}>Duplicate</Text>
          </View>
        </View>
        <View style={styles.View_57_3099}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476a/7b57/e28b1eecdb6a7340ae79dee2ea4c3713"
            }}
            style={styles.ImageBackground_57_3100}
          />
          <View style={styles.View_57_3101}>
            <View style={styles.View_57_3102}>
              <View style={styles.View_57_3103}>
                <Text style={styles.Text_57_3103}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_57_3104} />
      </View>
      <View style={styles.View_57_3105}>
        <View style={styles.View_57_3106} />
        <View style={styles.View_57_3107}>
          <View style={styles.View_57_3108}>
            <Text style={styles.Text_57_3108}>Created by: User</Text>
          </View>
        </View>
        <View style={styles.View_57_3113}>
          <Text style={styles.Text_57_3113}>Request library 7</Text>
        </View>
        <View style={styles.View_57_3114}>
          <View style={styles.View_57_3115} />
          <View style={styles.View_57_3116}>
            <Text style={styles.Text_57_3116}>Duplicate</Text>
          </View>
        </View>
        <View style={styles.View_57_3117}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476a/7b57/e28b1eecdb6a7340ae79dee2ea4c3713"
            }}
            style={styles.ImageBackground_57_3118}
          />
          <View style={styles.View_57_3119}>
            <View style={styles.View_57_3120}>
              <View style={styles.View_57_3121}>
                <Text style={styles.Text_57_3121}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_57_3122} />
      </View>
      <View style={styles.View_57_2983}>
        <View style={styles.View_57_2984} />
        <View style={styles.View_57_2990}>
          <Text style={styles.Text_57_2990}>Active in my project</Text>
        </View>
        <View style={styles.View_57_2985} />
      </View>
      <View style={styles.View_57_2987}>
        <View style={styles.View_57_2988} />
        <View style={styles.View_57_2989} />
        <View style={styles.View_57_2986}>
          <Text style={styles.Text_57_2986}>All libraries</Text>
        </View>
      </View>
      <View style={styles.View_57_2991}>
        <View style={styles.View_57_2992} />
        <View style={styles.View_57_2993}>
          <View style={styles.View_57_2994}>
            <View style={styles.View_57_2995} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a2e/7eb9/b480298ce6c66441b5f56544afa51ebb"
              }}
              style={styles.ImageBackground_57_2996}
            />
            <View style={styles.View_57_2997}>
              <Text style={styles.Text_57_2997}>Filter Value</Text>
            </View>
          </View>
          <View style={styles.View_57_2999}>
            <View style={styles.View_57_3000} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a2e/7eb9/b480298ce6c66441b5f56544afa51ebb"
              }}
              style={styles.ImageBackground_57_3001}
            />
            <View style={styles.View_57_3002}>
              <Text style={styles.Text_57_3002}>
                Filter Value, Filter Value
              </Text>
            </View>
            <View style={styles.View_57_3003}>
              <Text style={styles.Text_57_3003}>Category</Text>
            </View>
          </View>
          <View style={styles.View_57_3004}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f9c/df55/45444855a0af1d08d9e05d6000173c02"
              }}
              style={styles.ImageBackground_57_3005}
            />
            <View style={styles.View_57_3006}>
              <Text style={styles.Text_57_3006}>Filter results by</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_57_3123}>
          <View style={styles.View_57_3124}>
            <View style={styles.View_57_3125} />
            <View style={styles.View_57_3126}>
              <Text style={styles.Text_57_3126}>new library</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_57_3007}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476a/7b57/e28b1eecdb6a7340ae79dee2ea4c3713"
            }}
            style={styles.ImageBackground_57_3008}
          />
          <View style={styles.View_57_3009}>
            <View style={styles.View_57_3010}>
              <View style={styles.View_57_3011}>
                <Text style={styles.Text_57_3011}>Clear filters</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_57_3012} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/358c/65d3/c2879c45afe1204b01b0112702d208c5"
          }}
          style={styles.ImageBackground_57_3013}
        />
        <View style={styles.View_57_3014}>
          <Text style={styles.Text_57_3014}>Search in libraries</Text>
        </View>
      </View>
      <View style={styles.View_137_0}>
        <View style={styles.View_137_1}>
          <View style={styles.View_137_2} />
          <View style={styles.View_137_3} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_137_4}
          />
          <View style={styles.View_137_5}>
            <View style={styles.View_137_6} />
            <View style={styles.View_137_7}>
              <Text style={styles.Text_137_7}>save</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_137_8}>
          <View style={styles.View_137_9}>
            <View style={styles.View_137_10} />
            <View style={styles.View_137_11}>
              <Text style={styles.Text_137_11}>Cancel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_137_12}>
          <View style={styles.View_137_13} />
          <View style={styles.View_137_14}>
            <Text style={styles.Text_137_14}>properties</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_57_1: {
    width: wp("36.857638888888886%"),
    minWidth: wp("36.857638888888886%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.40625%"),
    top: hp("8.19672131147541%")
  },
  View_57_8: {
    width: wp("2.08333412806193%"),
    minWidth: wp("2.08333412806193%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777778%"),
    top: hp("63.934426229508205%"),
    justifyContent: "center"
  },
  Text_57_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_9: {
    width: wp("97.43055555555556%"),
    minWidth: wp("97.43055555555556%"),
    height: hp("147.81420765027323%"),
    minHeight: hp("147.81420765027323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444444%"),
    top: hp("-0.273224043715847%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  View_57_34: {
    width: wp("26.31945080227322%"),
    minWidth: wp("26.31945080227322%"),
    height: hp("5.737720030904468%"),
    minHeight: hp("5.737720030904468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("9.426229508196721%")
  },
  View_57_35: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464482437717458%"),
    minHeight: hp("5.464482437717458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.638895246717667%"),
    top: hp("0%")
  },
  View_57_36: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_37: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_57_37: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_38: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.737706481433306%"),
    minHeight: hp("5.737706481433306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.819444444444443%"),
    top: hp("0.000016676272199589448%")
  },
  View_57_39: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.737705960299799%"),
    minHeight: hp("5.737705960299799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_40: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("0.2732246951327298%"),
    minHeight: hp("0.2732246951327298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_57_41: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_57_41: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_42: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000016676272199589448%")
  },
  View_57_43: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_44: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.180555555555555%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_57_44: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_45: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    minHeight: hp("140.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.06944444444444445%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_46: {
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_57_47: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830618811435387%"),
    minHeight: hp("6.830618811435387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000008338136099726777%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_48: {
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_57_49: {
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562924911415642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70517815483942%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_50: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.179808722602%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_51: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.99999576144748%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_52: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158838060167101%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_53: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9790250990125868%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_54: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.518463982476128%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_55: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338651021321614%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_56: {
    width: wp("6.2873538335164385%"),
    top: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    justifyContent: "flex-start"
  },
  Text_57_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_2837: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("15.163926088093408%")
  },
  View_57_2838: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2839: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_57_2840: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_58_2: {
    width: wp("11.805555555555555%"),
    minWidth: wp("11.805555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.47222222222223%"),
    top: hp("1.5027405785732562%"),
    justifyContent: "center"
  },
  Text_58_2: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2841: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    top: hp("1.639352600431181%"),
    justifyContent: "center"
  },
  Text_57_2841: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2842: {
    width: wp("17.29180230034722%"),
    minWidth: wp("17.29180230034722%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("20.76502732240437%")
  },
  View_57_2843: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_2844: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754095%")
  },
  View_57_2845: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_57_2847: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.459016393442628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%")
  },
  View_57_2848: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.5956286758672995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638634575737853%"),
    top: hp("2.1857923497267784%"),
    justifyContent: "center"
  },
  Text_57_2848: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2849: {
    width: wp("17.29180230034722%"),
    minWidth: wp("17.29180230034722%"),
    height: hp("6.8306031774302%"),
    minHeight: hp("6.8306031774302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2850: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_2855: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    minHeight: hp("6.8306031774302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00013563368055535818%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_57_2851: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%")
  },
  View_57_2852: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638634575737853%"),
    top: hp("1.5027322404371581%"),
    justifyContent: "center"
  },
  Text_57_2852: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2853: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.76388888888889%"),
    top: hp("20.76502732240437%")
  },
  View_57_2854: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_3015: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.763893127441406%"),
    top: hp("47.6775956284153%")
  },
  View_57_3016: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3017: {
    width: wp("24.791666666666668%"),
    minWidth: wp("24.791666666666668%"),
    height: hp("2.5956325843685963%"),
    minHeight: hp("2.5956325843685963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2222179836697045%"),
    top: hp("7.923497267759565%")
  },
  View_57_3018: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3018: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3023: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_57_3023: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3024: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("5.464480874316941%")
  },
  View_57_3025: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_3026: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_57_3026: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3027: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.69443596733942%"),
    top: hp("5.464480874316941%")
  },
  ImageBackground_57_3028: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3029: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.5464647637038951%")
  },
  View_57_3030: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3031: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3031: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3032: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_57_2924: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.76388888888889%"),
    top: hp("62.158469945355186%")
  },
  View_57_2925: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_2926: {
    width: wp("24.791666666666668%"),
    minWidth: wp("24.791666666666668%"),
    height: hp("2.5956325843685963%"),
    minHeight: hp("2.5956325843685963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222217983669701%"),
    top: hp("7.923497267759565%")
  },
  View_57_2927: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_2927: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2932: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("3.278688524590173%"),
    justifyContent: "center"
  },
  Text_57_2932: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2933: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.0138888888889%"),
    top: hp("5.464480874316941%")
  },
  View_57_2934: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_2935: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_57_2935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2936: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.69443596733942%"),
    top: hp("5.464480874316941%")
  },
  ImageBackground_57_2937: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2938: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.5464647637038951%")
  },
  View_57_2939: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2940: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_2940: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2946: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_57_2947: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.76388888888889%"),
    top: hp("76.63934426229508%")
  },
  View_57_2948: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_2949: {
    width: wp("24.791666666666668%"),
    minWidth: wp("24.791666666666668%"),
    height: hp("2.5956325843685963%"),
    minHeight: hp("2.5956325843685963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222217983669701%"),
    top: hp("7.923497267759558%")
  },
  View_57_2950: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_2950: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2955: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_57_2955: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2956: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.0138888888889%"),
    top: hp("5.4644808743169335%")
  },
  View_57_2957: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_2958: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_57_2958: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2959: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.69443596733942%"),
    top: hp("5.4644808743169335%")
  },
  ImageBackground_57_2960: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2961: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.5464647637039093%")
  },
  View_57_2962: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2963: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_2963: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2964: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_57_2965: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.763893127441406%"),
    top: hp("91.12021857923497%")
  },
  View_57_2966: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_2967: {
    width: wp("24.791666666666668%"),
    minWidth: wp("24.791666666666668%"),
    height: hp("2.5956325843685963%"),
    minHeight: hp("2.5956325843685963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2222179836697045%"),
    top: hp("7.923497267759572%")
  },
  View_57_2968: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_2968: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2973: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_57_2973: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2974: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("5.464480874316948%")
  },
  View_57_2975: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_2976: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_57_2976: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2977: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.69443596733942%"),
    top: hp("5.464480874316948%")
  },
  ImageBackground_57_2978: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2979: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.5464647637038809%")
  },
  View_57_2980: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2981: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_2981: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2982: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_57_3069: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.763893127441406%"),
    top: hp("105.32786885245902%")
  },
  View_57_3070: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3071: {
    width: wp("24.791666666666668%"),
    minWidth: wp("24.791666666666668%"),
    height: hp("2.5956325843685963%"),
    minHeight: hp("2.5956325843685963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2222179836697045%"),
    top: hp("7.923497267759558%")
  },
  View_57_3072: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3072: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3077: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_57_3077: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3078: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("5.464480874316948%")
  },
  View_57_3079: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_3080: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_57_3080: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3081: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.69443596733942%"),
    top: hp("5.464480874316948%")
  },
  ImageBackground_57_3082: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3083: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.5464647637038809%")
  },
  View_57_3084: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3085: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3085: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3086: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_57_3087: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.763893127441406%"),
    top: hp("119.53551912568305%")
  },
  View_57_3088: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3089: {
    width: wp("24.791666666666668%"),
    minWidth: wp("24.791666666666668%"),
    height: hp("2.5956325843685963%"),
    minHeight: hp("2.5956325843685963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2222179836697045%"),
    top: hp("7.923497267759558%")
  },
  View_57_3090: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3090: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3095: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_57_3095: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3096: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("5.464480874316948%")
  },
  View_57_3097: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_3098: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_57_3098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3099: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.69443596733942%"),
    top: hp("5.464480874316948%")
  },
  ImageBackground_57_3100: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3101: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.5464647637039093%")
  },
  View_57_3102: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3103: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3103: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3104: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_57_3105: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.763893127441406%"),
    top: hp("133.74316939890713%")
  },
  View_57_3106: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3107: {
    width: wp("24.791666666666668%"),
    minWidth: wp("24.791666666666668%"),
    height: hp("2.5956325843685963%"),
    minHeight: hp("2.5956325843685963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2222179836697045%"),
    top: hp("7.923497267759558%")
  },
  View_57_3108: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3108: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3113: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "center"
  },
  Text_57_3113: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3114: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("5.464480874316905%")
  },
  View_57_3115: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_3116: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "flex-start"
  },
  Text_57_3116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3117: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.69443596733942%"),
    top: hp("5.464480874316905%")
  },
  ImageBackground_57_3118: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3119: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.5464647637039093%")
  },
  View_57_3120: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3121: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3121: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3122: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.732240437158424%"),
    backgroundColor: "rgba(233, 236, 239, 1)"
  },
  View_57_2983: {
    width: wp("66.66666666666666%"),
    minWidth: wp("66.66666666666666%"),
    height: hp("5.327880317396153%"),
    minHeight: hp("5.327880317396153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("42.21310641596226%")
  },
  View_57_2984: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    height: hp("5.327870936993041%"),
    minHeight: hp("5.327870936993041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000008338136105123795%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_2990: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("2.5956286758672995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875000000000007%"),
    top: hp("1.5027405785732597%"),
    justifyContent: "center"
  },
  Text_57_2990: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2985: {
    width: wp("53.61111111111111%"),
    minWidth: wp("53.61111111111111%"),
    height: hp("5.327873021527067%"),
    minHeight: hp("5.327873021527067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.055555290646026%"),
    top: hp("0.000008338136105123795%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_2987: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.46448347998447%"),
    minHeight: hp("5.46448347998447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.76388888888889%"),
    top: hp("42.21311475409836%")
  },
  View_57_2988: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.464482437717458%"),
    minHeight: hp("5.464482437717458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_2989: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("0.2732256396872098%"),
    minHeight: hp("0.2732256396872098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_57_2986: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    minHeight: hp("3.8251376542888704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: hp("0.8196721311475343%"),
    justifyContent: "center"
  },
  Text_57_2986: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2991: {
    width: wp("76.38888888888889%"),
    minWidth: wp("76.38888888888889%"),
    height: hp("15.027321362104573%"),
    minHeight: hp("15.027321362104573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.22222222222222%"),
    top: hp("23.497267759562842%")
  },
  View_57_2992: {
    width: wp("76.38888888888889%"),
    minWidth: wp("76.38888888888889%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_2993: {
    width: wp("49.583333333333336%"),
    minWidth: wp("49.583333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.347222222222225%"),
    top: hp("9.562841530054644%")
  },
  View_57_2994: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555554%"),
    top: hp("0%")
  },
  View_57_2995: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_57_2996: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.263888888888893%"),
    top: hp("2.4590163934426243%")
  },
  View_57_2997: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "center"
  },
  Text_57_2997: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2999: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.611111111111104%"),
    top: hp("0%")
  },
  View_57_3000: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.69444444444445%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_57_3001: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.02777777777778%"),
    top: hp("2.4590163934426243%")
  },
  View_57_3002: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333343%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_57_3002: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3003: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_57_3003: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3004: {
    width: wp("13.721903695000542%"),
    minWidth: wp("13.721903695000542%"),
    height: hp("2.5163726077053714%"),
    minHeight: hp("2.5163726077053714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792334%")
  },
  ImageBackground_57_3005: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_3006: {
    width: wp("11.916348139444986%"),
    minWidth: wp("11.916348139444986%"),
    minHeight: hp("2.5163726077053714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8055555555555536%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3006: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3123: {
    width: wp("12.152777777777777%"),
    minWidth: wp("12.152777777777777%"),
    height: hp("3.825138957122636%"),
    minHeight: hp("3.825138957122636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.23611111111111%"),
    top: hp("10.382513661202186%")
  },
  View_57_3124: {
    width: wp("12.152777777777777%"),
    minWidth: wp("12.152777777777777%"),
    height: hp("3.825138957122636%"),
    minHeight: hp("3.825138957122636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3125: {
    width: wp("12.152777777777777%"),
    minWidth: wp("12.152777777777777%"),
    height: hp("3.8251371331553643%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(114, 124, 245, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_3126: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_3007: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.18055555555555%"),
    top: hp("10.519125683060107%")
  },
  ImageBackground_57_3008: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3009: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48611323038737453%"),
    top: hp("0.5464647637038951%")
  },
  View_57_3010: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3011: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3011: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3012: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 236, 239, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5
  },
  ImageBackground_57_3013: {
    width: wp("1.5971410274505615%"),
    height: hp("3.142113503211183%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_57_3014: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069448682996963%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_57_3014: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_137_0: {
    width: wp("31.944444444444443%"),
    minWidth: wp("31.944444444444443%"),
    height: hp("3.961750718413806%"),
    minHeight: hp("3.961750718413806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.15277777777777%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_137_1: {
    flexGrow: 1,
    width: wp("8.333335452609592%"),
    height: hp("4.09836274027173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222229%"),
    top: hp("0.6830601092896185%")
  },
  View_137_2: {
    width: wp("2.083333333333333%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_137_3: {
    width: wp("0.06944444444444445%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.180555555555557%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  ImageBackground_137_4: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888886%")
  },
  View_137_5: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    height: hp("4.098361176871211%"),
    minHeight: hp("4.098361176871211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_137_6: {
    width: wp("6.180555555555555%"),
    height: hp("4.098361176871211%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(174, 174, 246, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_137_7: {
    width: wp("2.013888888888889%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777857%"),
    justifyContent: "center"
  },
  Text_137_7: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_137_8: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.125000000000014%"),
    top: hp("0.6830601092896185%")
  },
  View_137_9: {
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_137_10: {
    width: wp("8.333333863152397%"),
    height: hp("4.0983609163044585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(174, 174, 246, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_137_11: {
    width: wp("3.194444444444444%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    justifyContent: "center"
  },
  Text_137_11: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_137_12: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: hp("0.6830601092896185%")
  },
  View_137_13: {
    width: wp("8.333333333333332%"),
    height: hp("4.0983609163044585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_137_14: {
    width: wp("4.930555555555555%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111285%"),
    justifyContent: "center"
  },
  Text_137_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

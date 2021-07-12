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
      <View style={styles.View_57_3991} />
      <View style={styles.View_57_3998}>
        <Text style={styles.Text_57_3998}>secondary nav</Text>
      </View>
      <View style={styles.View_57_3999} />
      <View style={styles.View_57_4014}>
        <View style={styles.View_57_4015}>
          <View style={styles.View_57_4016} />
          <View style={styles.View_57_4017}>
            <Text style={styles.Text_57_4017}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_57_4018}>
          <View style={styles.View_57_4019} />
          <View style={styles.View_57_4020} />
          <View style={styles.View_57_4021}>
            <Text style={styles.Text_57_4021}>Design</Text>
          </View>
        </View>
        <View style={styles.View_57_4022}>
          <View style={styles.View_57_4023} />
          <View style={styles.View_57_4024}>
            <Text style={styles.Text_57_4024}>Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4025}>
        <View style={styles.View_57_4026} />
      </View>
      <View style={styles.View_57_4027}>
        <View style={styles.View_57_4028} />
        <View style={styles.View_57_4029} />
        <View style={styles.View_57_4030} />
        <View style={styles.View_57_4031} />
        <View style={styles.View_57_4032} />
        <View style={styles.View_57_4033} />
        <View style={styles.View_57_4034} />
        <View style={styles.View_57_4035} />
        <View style={styles.View_57_4036}>
          <Text style={styles.Text_57_4036}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_57_4037}>
        <View style={styles.View_57_4038}>
          <View style={styles.View_57_4039}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_57_4040}
            />
            <View style={styles.View_58_3}>
              <Text style={styles.Text_58_3}>Switch to content builder</Text>
            </View>
            <View style={styles.View_57_4041}>
              <Text style={styles.Text_57_4041}>Project name</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9202/5b95/a4d00171e4694b40e99168d3762f0db6"
              }}
              style={styles.ImageBackground_57_4042}
            />
            <View style={styles.View_57_4043}>
              <Text style={styles.Text_57_4043}>Request library 1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4044}>
        <View style={styles.View_57_4045} />
        <View style={styles.View_57_4046}>
          <View style={styles.View_57_4047} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5346/a9f9/4e6b08a6e1e1638e2722d13fa41e4cb6"
            }}
            style={styles.ImageBackground_57_4048}
          />
          <View style={styles.View_57_4049}>
            <Text style={styles.Text_57_4049}>Content builder</Text>
          </View>
        </View>
        <View style={styles.View_57_4050}>
          <View style={styles.View_57_4051} />
          <View style={styles.View_57_4052} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6fd/4a12/bf2e518080ef9bafa48b7e07fc6ba645"
            }}
            style={styles.ImageBackground_57_4053}
          />
          <View style={styles.View_57_4054}>
            <Text style={styles.Text_57_4054}>Data library</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4055}>
        <View style={styles.View_57_4056}>
          <View style={styles.View_57_4057} />
        </View>
        <View style={styles.View_57_4090}>
          <View style={styles.View_57_4148}>
            <View style={styles.View_57_4106} />
            <View style={styles.View_57_4107}>
              <View style={styles.View_57_4108}>
                <View style={styles.View_57_4109}>
                  <Text style={styles.Text_57_4109}>Add request</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f91/0f58/f84c79bab5e4949185d308671e8d165d"
                  }}
                  style={styles.ImageBackground_57_4110}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_57_4116}>
            <View style={styles.View_57_4117}>
              <View style={styles.View_57_4118}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d288/69ba/10a4b185abc8de64b70b5fe7950c7ae0"
                  }}
                  style={styles.ImageBackground_57_4119}
                />
                <View style={styles.View_57_4120}>
                  <View style={styles.View_57_4121}>
                    <View style={styles.View_57_4122}>
                      <Text style={styles.Text_57_4122}>Cancel</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_57_4123}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff9/a559/80374e750d3f297ee7ec6667fa8bf01e"
                  }}
                  style={styles.ImageBackground_57_4124}
                />
                <View style={styles.View_57_4125}>
                  <View style={styles.View_57_4126}>
                    <View style={styles.View_57_4127}>
                      <Text style={styles.Text_57_4127}>save</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_57_4143}>
            <View style={styles.View_57_4144}>
              <View style={styles.View_57_4145} />
              <View style={styles.View_57_4782} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77b1/e049/3688eb28e51485b5246f0ed10bd5a26c"
                }}
                style={styles.ImageBackground_57_4784}
              />
              <View style={styles.View_57_4787}>
                <Text style={styles.Text_57_4787}>Library settings</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6998/65bb/a3c900a553b6682b79d6dd7977d1ef87"
                }}
                style={styles.ImageBackground_57_4147}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4157}>
        <View style={styles.View_57_4158}>
          <View style={styles.View_57_4159} />
          <View style={styles.View_57_4160}>
            <Text style={styles.Text_57_4160}>Request library 1</Text>
          </View>
        </View>
        <View style={styles.View_57_4161}>
          <Text style={styles.Text_57_4161}>Library name</Text>
        </View>
      </View>
      <View style={styles.View_137_30}>
        <View style={styles.View_I137_30_137_1}>
          <View style={styles.View_I137_30_137_2} />
          <View style={styles.View_I137_30_137_3} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_I137_30_137_4}
          />
          <View style={styles.View_I137_30_137_5}>
            <View style={styles.View_I137_30_137_6} />
            <View style={styles.View_I137_30_137_7}>
              <Text style={styles.Text_I137_30_137_7}>save</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_30_137_8}>
          <View style={styles.View_I137_30_137_9}>
            <View style={styles.View_I137_30_137_10} />
            <View style={styles.View_I137_30_137_11}>
              <Text style={styles.Text_I137_30_137_11}>Cancel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_30_137_12}>
          <View style={styles.View_I137_30_137_13} />
          <View style={styles.View_I137_30_137_14}>
            <Text style={styles.Text_I137_30_137_14}>properties</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_57_3991: {
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
  View_57_3998: {
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
  Text_57_3998: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_3999: {
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
  View_57_4014: {
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
  View_57_4015: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464482437717458%"),
    minHeight: hp("5.464482437717458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.638897365993927%"),
    top: hp("0%")
  },
  View_57_4016: {
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
  View_57_4017: {
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
  Text_57_4017: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4018: {
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
  View_57_4019: {
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
  View_57_4020: {
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
  View_57_4021: {
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
  Text_57_4021: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4022: {
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
  View_57_4023: {
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
  View_57_4024: {
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
  Text_57_4024: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4025: {
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
  View_57_4026: {
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_57_4027: {
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
  View_57_4028: {
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_57_4029: {
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562924911415642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70518663194444%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4030: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.17979600694444%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4031: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.99998304578993%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4032: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158838060167101%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4033: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9790250990125868%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4034: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.518463982476128%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4035: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338651021321614%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4036: {
    width: wp("6.2873538335164385%"),
    top: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    justifyContent: "flex-start"
  },
  Text_57_4036: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4037: {
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
  View_57_4038: {
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
  View_57_4039: {
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
  ImageBackground_57_4040: {
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
  View_58_3: {
    width: wp("11.805555555555555%"),
    minWidth: wp("11.805555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.47222222222223%"),
    top: hp("1.366128556715335%"),
    justifyContent: "center"
  },
  Text_58_3: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4041: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    top: hp("1.639352600431181%"),
    justifyContent: "center"
  },
  Text_57_4041: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4042: {
    width: wp("0.4166666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.888888888888888%")
  },
  View_57_4043: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.416666666666668%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_57_4043: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4044: {
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
  View_57_4045: {
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
  View_57_4046: {
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
  View_57_4047: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_57_4048: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.459016393442628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%")
  },
  View_57_4049: {
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
  Text_57_4049: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4050: {
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
  View_57_4051: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4052: {
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
  ImageBackground_57_4053: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%")
  },
  View_57_4054: {
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
  Text_57_4054: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4055: {
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
  View_57_4056: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("119.53551912568305%"),
    minHeight: hp("119.53551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%")
  },
  View_57_4057: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("119.53551912568305%"),
    minHeight: hp("119.53551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_4090: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("31.557345781169953%"),
    minHeight: hp("31.557345781169953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4148: {
    width: wp("76.45833333333333%"),
    minWidth: wp("76.45833333333333%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("18.579234972677597%")
  },
  View_57_4106: {
    width: wp("76.45833333333333%"),
    minWidth: wp("76.45833333333333%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(194, 205, 215, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_4107: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.732240437158474%")
  },
  View_57_4108: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4109: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_4109: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4110: {
    width: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4116: {
    width: wp("76.31944444444444%"),
    minWidth: wp("76.31944444444444%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("28.14204315018784%")
  },
  View_57_4117: {
    width: wp("76.31944444444444%"),
    minWidth: wp("76.31944444444444%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4118: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_57_4119: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4120: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888928%"),
    top: hp("0.546448087431699%")
  },
  View_57_4121: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4122: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_4122: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4123: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.56944444444446%"),
    top: hp("0%")
  },
  ImageBackground_57_4124: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4125: {
    width: wp("2.0357790258195667%"),
    minWidth: wp("2.0357790258195667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4148491753472143%"),
    top: hp("0.546448087431699%")
  },
  View_57_4126: {
    width: wp("2.0357790258195667%"),
    minWidth: wp("2.0357790258195667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4127: {
    width: wp("2.0357790258195667%"),
    minWidth: wp("2.0357790258195667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_4127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4143: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4144: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4145: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_4782: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_57_4784: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("7.240450707941107%"),
    minHeight: hp("7.240450707941107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4787: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "center"
  },
  Text_57_4787: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4147: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.08333333333333%"),
    top: hp("3.2786885245901622%")
  },
  View_57_4157: {
    width: wp("76.38888888888889%"),
    minWidth: wp("76.38888888888889%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.22222222222222%"),
    top: hp("30.46448087431694%")
  },
  View_57_4158: {
    width: wp("62.43055555555556%"),
    minWidth: wp("62.43055555555556%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.958333333333336%"),
    top: hp("0%")
  },
  View_57_4159: {
    width: wp("62.43055555555556%"),
    minWidth: wp("62.43055555555556%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_4160: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "center"
  },
  Text_57_4160: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4161: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "center"
  },
  Text_57_4161: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_137_30: {
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
  View_I137_30_137_1: {
    flexGrow: 1,
    width: wp("8.333335452609592%"),
    height: hp("4.09836274027173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222229%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_30_137_2: {
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
  View_I137_30_137_3: {
    width: wp("0.06944444444444445%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.180555555555557%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  ImageBackground_I137_30_137_4: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888886%")
  },
  View_I137_30_137_5: {
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
  View_I137_30_137_6: {
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
  View_I137_30_137_7: {
    width: wp("2.013888888888889%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777857%"),
    justifyContent: "center"
  },
  Text_I137_30_137_7: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_30_137_8: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.125000000000014%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_30_137_9: {
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I137_30_137_10: {
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
  View_I137_30_137_11: {
    width: wp("3.194444444444444%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    justifyContent: "center"
  },
  Text_I137_30_137_11: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_30_137_12: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_30_137_13: {
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
  View_I137_30_137_14: {
    width: wp("4.930555555555555%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111285%"),
    justifyContent: "center"
  },
  Text_I137_30_137_14: {
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

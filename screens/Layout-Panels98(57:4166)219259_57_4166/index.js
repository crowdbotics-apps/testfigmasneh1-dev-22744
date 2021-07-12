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
      <View style={styles.View_57_4167} />
      <View style={styles.View_57_4174}>
        <Text style={styles.Text_57_4174}>secondary nav</Text>
      </View>
      <View style={styles.View_57_4175} />
      <View style={styles.View_57_4190}>
        <View style={styles.View_57_4191}>
          <View style={styles.View_57_4192} />
          <View style={styles.View_57_4193}>
            <Text style={styles.Text_57_4193}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_57_4194}>
          <View style={styles.View_57_4195} />
          <View style={styles.View_57_4196} />
          <View style={styles.View_57_4197}>
            <Text style={styles.Text_57_4197}>Design</Text>
          </View>
        </View>
        <View style={styles.View_57_4198}>
          <View style={styles.View_57_4199} />
          <View style={styles.View_57_4200}>
            <Text style={styles.Text_57_4200}>Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4201}>
        <View style={styles.View_57_4202} />
      </View>
      <View style={styles.View_57_4203}>
        <View style={styles.View_57_4204} />
        <View style={styles.View_57_4205} />
        <View style={styles.View_57_4206} />
        <View style={styles.View_57_4207} />
        <View style={styles.View_57_4208} />
        <View style={styles.View_57_4209} />
        <View style={styles.View_57_4210} />
        <View style={styles.View_57_4211} />
        <View style={styles.View_57_4212}>
          <Text style={styles.Text_57_4212}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_57_4213}>
        <View style={styles.View_57_4214}>
          <View style={styles.View_57_4215}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_57_4216}
            />
            <View style={styles.View_58_5}>
              <Text style={styles.Text_58_5}>Switch to content builder</Text>
            </View>
            <View style={styles.View_57_4217}>
              <Text style={styles.Text_57_4217}>Project name</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9202/5b95/a4d00171e4694b40e99168d3762f0db6"
              }}
              style={styles.ImageBackground_57_4218}
            />
            <View style={styles.View_57_4219}>
              <Text style={styles.Text_57_4219}>Request library 1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4220}>
        <View style={styles.View_57_4221} />
        <View style={styles.View_57_4222}>
          <View style={styles.View_57_4223} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5346/a9f9/4e6b08a6e1e1638e2722d13fa41e4cb6"
            }}
            style={styles.ImageBackground_57_4224}
          />
          <View style={styles.View_57_4225}>
            <Text style={styles.Text_57_4225}>Content builder</Text>
          </View>
        </View>
        <View style={styles.View_57_4226}>
          <View style={styles.View_57_4227} />
          <View style={styles.View_57_4228} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6fd/4a12/bf2e518080ef9bafa48b7e07fc6ba645"
            }}
            style={styles.ImageBackground_57_4229}
          />
          <View style={styles.View_57_4230}>
            <Text style={styles.Text_57_4230}>Data library</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4231}>
        <View style={styles.View_57_4232}>
          <View style={styles.View_57_4233} />
          <View style={styles.View_57_4323} />
        </View>
        <View style={styles.View_57_4270}>
          <View style={styles.View_57_4284}>
            <View style={styles.View_57_4285} />
            <View style={styles.View_57_4286} />
            <View style={styles.View_57_4287}>
              <View style={styles.View_57_4288}>
                <View style={styles.View_57_4289}>
                  <Text style={styles.Text_57_4289}>Add request</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f91/0f58/f84c79bab5e4949185d308671e8d165d"
                  }}
                  style={styles.ImageBackground_57_4290}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
              }}
              style={styles.ImageBackground_57_4291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4191/262e/115e47b0adf245472734771c5a8edebf"
              }}
              style={styles.ImageBackground_57_4292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac1/2fe0/b379998c396a3873df9375ee1e0ebc43"
              }}
              style={styles.ImageBackground_57_4293}
            />
            <View style={styles.View_57_4294}>
              <Text style={styles.Text_57_4294}>My Request 2</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4191/262e/115e47b0adf245472734771c5a8edebf"
              }}
              style={styles.ImageBackground_57_4295}
            />
          </View>
          <View style={styles.View_57_4296}>
            <View style={styles.View_57_4297}>
              <View style={styles.View_57_4298}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d288/69ba/10a4b185abc8de64b70b5fe7950c7ae0"
                  }}
                  style={styles.ImageBackground_57_4299}
                />
                <View style={styles.View_57_4300}>
                  <View style={styles.View_57_4301}>
                    <View style={styles.View_57_4302}>
                      <Text style={styles.Text_57_4302}>Cancel</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_57_4303}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff9/a559/80374e750d3f297ee7ec6667fa8bf01e"
                  }}
                  style={styles.ImageBackground_57_4304}
                />
                <View style={styles.View_57_4305}>
                  <View style={styles.View_57_4306}>
                    <View style={styles.View_57_4307}>
                      <Text style={styles.Text_57_4307}>save</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_57_4313}>
            <View style={styles.View_57_4314}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
                }}
                style={styles.ImageBackground_57_4315}
              />
              <View style={styles.View_57_4316}>
                <Text style={styles.Text_57_4316}>My Request 1</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac1/2fe0/b379998c396a3873df9375ee1e0ebc43"
                }}
                style={styles.ImageBackground_57_4317}
              />
            </View>
          </View>
          <View style={styles.View_57_4318}>
            <View style={styles.View_57_4319}>
              <View style={styles.View_57_4320} />
              <View style={styles.View_57_4321}>
                <Text style={styles.Text_57_4321}>Library settings</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac1/2fe0/b379998c396a3873df9375ee1e0ebc43"
                }}
                style={styles.ImageBackground_57_4322}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_137_45}>
        <View style={styles.View_I137_45_137_1}>
          <View style={styles.View_I137_45_137_2} />
          <View style={styles.View_I137_45_137_3} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_I137_45_137_4}
          />
          <View style={styles.View_I137_45_137_5}>
            <View style={styles.View_I137_45_137_6} />
            <View style={styles.View_I137_45_137_7}>
              <Text style={styles.Text_I137_45_137_7}>save</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_45_137_8}>
          <View style={styles.View_I137_45_137_9}>
            <View style={styles.View_I137_45_137_10} />
            <View style={styles.View_I137_45_137_11}>
              <Text style={styles.Text_I137_45_137_11}>Cancel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_45_137_12}>
          <View style={styles.View_I137_45_137_13} />
          <View style={styles.View_I137_45_137_14}>
            <Text style={styles.Text_I137_45_137_14}>properties</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_57_4167: {
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
  View_57_4174: {
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
  Text_57_4174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4175: {
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
  View_57_4190: {
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
  View_57_4191: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464482437717458%"),
    minHeight: hp("5.464482437717458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.63888888888889%"),
    top: hp("0%")
  },
  View_57_4192: {
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
  View_57_4193: {
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
  Text_57_4193: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4194: {
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
  View_57_4195: {
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
  View_57_4196: {
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
  View_57_4197: {
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
  Text_57_4197: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4198: {
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
  View_57_4199: {
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
  View_57_4200: {
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
  Text_57_4200: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4201: {
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
  View_57_4202: {
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_57_4203: {
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
  View_57_4204: {
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_57_4205: {
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562924911415642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70518663194444%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4206: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.17979600694444%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4207: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.99998304578993%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4208: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158833821614583%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4209: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9790208604600694%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4210: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.51845974392361%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4211: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338646782769096%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4212: {
    width: wp("6.2873538335164385%"),
    top: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    justifyContent: "flex-start"
  },
  Text_57_4212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4213: {
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
  View_57_4214: {
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
  View_57_4215: {
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
  ImageBackground_57_4216: {
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
  View_58_5: {
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
  Text_58_5: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4217: {
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
  Text_57_4217: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4218: {
    width: wp("0.4166666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.888888888888888%")
  },
  View_57_4219: {
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
  Text_57_4219: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4220: {
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
  View_57_4221: {
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
  View_57_4222: {
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
  View_57_4223: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_57_4224: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.459016393442628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%")
  },
  View_57_4225: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.5956286758672995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638549804687504%"),
    top: hp("2.1857923497267784%"),
    justifyContent: "center"
  },
  Text_57_4225: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4226: {
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
  View_57_4227: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4228: {
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
  ImageBackground_57_4229: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%")
  },
  View_57_4230: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638549804687504%"),
    top: hp("1.5027322404371581%"),
    justifyContent: "center"
  },
  Text_57_4230: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4231: {
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
  View_57_4232: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("119.39890710382515%"),
    minHeight: hp("119.39890710382515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327866%")
  },
  View_57_4233: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("119.39890710382515%"),
    minHeight: hp("119.39890710382515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_4323: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4270: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("37.43166063652664%"),
    minHeight: hp("37.43166063652664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4284: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655739%")
  },
  View_57_4285: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4286: {
    width: wp("76.45833333333333%"),
    minWidth: wp("76.45833333333333%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("9.699453551912569%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(194, 205, 215, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_4287: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("12.431693989071036%")
  },
  View_57_4288: {
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
  View_57_4289: {
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
  Text_57_4289: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4290: {
    width: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4291: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93055555555556%")
  },
  ImageBackground_57_4292: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("0.00001362696706853003%"),
    minHeight: hp("0.00001362696706853003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754102%")
  },
  ImageBackground_57_4293: {
    width: wp("0.33531635999679565%"),
    minWidth: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    minHeight: hp("1.046003995697355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.36111111111111%"),
    top: hp("2.9488985655737707%")
  },
  View_57_4294: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "center"
  },
  Text_57_4294: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4295: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("0.00001362696706853003%"),
    minHeight: hp("0.00001362696706853003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4296: {
    width: wp("76.31944444444444%"),
    minWidth: wp("76.31944444444444%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("34.01636009007855%")
  },
  View_57_4297: {
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
  View_57_4298: {
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
  ImageBackground_57_4299: {
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
  View_57_4300: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888928%"),
    top: hp("0.5464480874316919%")
  },
  View_57_4301: {
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
  View_57_4302: {
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
  Text_57_4302: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4303: {
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
  ImageBackground_57_4304: {
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
  View_57_4305: {
    width: wp("2.0357790258195667%"),
    minWidth: wp("2.0357790258195667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4148491753472143%"),
    top: hp("0.5464480874316919%")
  },
  View_57_4306: {
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
  View_57_4307: {
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
  Text_57_4307: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4313: {
    width: wp("76.12796359592014%"),
    minWidth: wp("76.12796359592014%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("9.836065573770494%")
  },
  View_57_4314: {
    width: wp("76.12796359592014%"),
    minWidth: wp("76.12796359592014%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_57_4315: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.54166666666666%")
  },
  View_57_4316: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584597%"),
    justifyContent: "center"
  },
  Text_57_4316: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4317: {
    width: wp("0.33531635999679565%"),
    minWidth: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    minHeight: hp("1.046003995697355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.79264322916666%"),
    top: hp("0.6264941939890676%")
  },
  View_57_4318: {
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
  View_57_4319: {
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
  View_57_4320: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4321: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("2.7322404371584703%"),
    justifyContent: "center"
  },
  Text_57_4321: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4322: {
    width: wp("0.33531635999679565%"),
    minWidth: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    minHeight: hp("1.046003995697355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.18153211805556%"),
    top: hp("3.085510587431692%")
  },
  View_137_45: {
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
  View_I137_45_137_1: {
    flexGrow: 1,
    width: wp("8.333335452609592%"),
    height: hp("4.09836274027173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222229%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_45_137_2: {
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
  View_I137_45_137_3: {
    width: wp("0.06944444444444445%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.180555555555557%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  ImageBackground_I137_45_137_4: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888886%")
  },
  View_I137_45_137_5: {
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
  View_I137_45_137_6: {
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
  View_I137_45_137_7: {
    width: wp("2.013888888888889%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777857%"),
    justifyContent: "center"
  },
  Text_I137_45_137_7: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_45_137_8: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.125000000000014%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_45_137_9: {
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I137_45_137_10: {
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
  View_I137_45_137_11: {
    width: wp("3.194444444444444%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    justifyContent: "center"
  },
  Text_I137_45_137_11: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_45_137_12: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_45_137_13: {
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
  View_I137_45_137_14: {
    width: wp("4.930555555555555%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111285%"),
    justifyContent: "center"
  },
  Text_I137_45_137_14: {
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

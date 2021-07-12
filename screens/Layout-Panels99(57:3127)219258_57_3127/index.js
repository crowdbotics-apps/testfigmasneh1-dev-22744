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
      <View style={styles.View_57_3128} />
      <View style={styles.View_57_3135}>
        <Text style={styles.Text_57_3135}>secondary nav</Text>
      </View>
      <View style={styles.View_57_3136} />
      <View style={styles.View_57_3151}>
        <View style={styles.View_57_3152}>
          <View style={styles.View_57_3153} />
          <View style={styles.View_57_3154}>
            <Text style={styles.Text_57_3154}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_57_3155}>
          <View style={styles.View_57_3156} />
          <View style={styles.View_57_3157} />
          <View style={styles.View_57_3158}>
            <Text style={styles.Text_57_3158}>Design</Text>
          </View>
        </View>
        <View style={styles.View_57_3159}>
          <View style={styles.View_57_3160} />
          <View style={styles.View_57_3161}>
            <Text style={styles.Text_57_3161}>Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_3162}>
        <View style={styles.View_57_3163} />
      </View>
      <View style={styles.View_57_3164}>
        <View style={styles.View_57_3165} />
        <View style={styles.View_57_3166} />
        <View style={styles.View_57_3167} />
        <View style={styles.View_57_3168} />
        <View style={styles.View_57_3169} />
        <View style={styles.View_57_3170} />
        <View style={styles.View_57_3171} />
        <View style={styles.View_57_3172} />
        <View style={styles.View_57_3173}>
          <Text style={styles.Text_57_3173}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_57_3174}>
        <View style={styles.View_57_3175}>
          <View style={styles.View_57_3176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_57_3177}
            />
            <View style={styles.View_57_3178}>
              <Text style={styles.Text_57_3178}>Project name</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9202/5b95/a4d00171e4694b40e99168d3762f0db6"
              }}
              style={styles.ImageBackground_57_3374}
            />
            <View style={styles.View_57_3371}>
              <Text style={styles.Text_57_3371}>Request library 1</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_58_9}>
          <Text style={styles.Text_58_9}>Switch to content builder</Text>
        </View>
      </View>
      <View style={styles.View_57_3179}>
        <View style={styles.View_57_3180} />
        <View style={styles.View_57_3181}>
          <View style={styles.View_57_3182} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5346/a9f9/4e6b08a6e1e1638e2722d13fa41e4cb6"
            }}
            style={styles.ImageBackground_57_3183}
          />
          <View style={styles.View_57_3184}>
            <Text style={styles.Text_57_3184}>Content builder</Text>
          </View>
        </View>
        <View style={styles.View_57_3185}>
          <View style={styles.View_57_3186} />
          <View style={styles.View_57_3187} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6fd/4a12/bf2e518080ef9bafa48b7e07fc6ba645"
            }}
            style={styles.ImageBackground_57_3188}
          />
          <View style={styles.View_57_3189}>
            <Text style={styles.Text_57_3189}>Data library</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_3983}>
        <View style={styles.View_57_3190}>
          <View style={styles.View_57_3191} />
          <View style={styles.View_57_4777} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77b1/e049/3688eb28e51485b5246f0ed10bd5a26c"
            }}
            style={styles.ImageBackground_57_4779}
          />
          <View style={styles.View_57_3947}>
            <View style={styles.View_57_3414}>
              <View style={styles.View_57_3415}>
                <View style={styles.View_57_3945} />
                <View style={styles.View_57_3932}>
                  <View style={styles.View_57_3933} />
                  <View style={styles.View_57_3934}>
                    <Text style={styles.Text_57_3934}>Parameters</Text>
                  </View>
                  <View style={styles.View_57_3940} />
                  <View style={styles.View_57_3941}>
                    <Text style={styles.Text_57_3941}>Body</Text>
                  </View>
                </View>
                <View style={styles.View_57_3936}>
                  <View style={styles.View_57_3937} />
                  <View style={styles.View_57_3938} />
                  <View style={styles.View_57_3939}>
                    <Text style={styles.Text_57_3939}>Headers</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_57_3946}>
              <View style={styles.View_57_3943} />
              <View style={styles.View_57_3975} />
              <View style={styles.View_57_3976}>
                <Text style={styles.Text_57_3976}>6rqhFgbbKwnb9MLmUQDhG6</Text>
              </View>
              <View style={styles.View_57_3944}>
                <Text style={styles.Text_57_3944}>6rqhFgbbKwnb9MLmUQDhG6</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_57_3948}>
            <View style={styles.View_57_3949}>
              <View style={styles.View_57_3950}>
                <View style={styles.View_57_3951} />
                <View style={styles.View_57_3952}>
                  <View style={styles.View_57_3953} />
                  <View style={styles.View_57_3954}>
                    <Text style={styles.Text_57_3954}>Selected data</Text>
                  </View>
                </View>
                <View style={styles.View_57_3957}>
                  <View style={styles.View_57_3958} />
                  <View style={styles.View_57_3959} />
                  <View style={styles.View_57_3960}>
                    <Text style={styles.Text_57_3960}>Received data</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_57_3961}>
              <View style={styles.View_57_3963} />
              <View style={styles.View_57_3964}>
                <Text style={styles.Text_57_3964}>6rqhFgbbKwnb9MLmUQDhG6</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_57_4162}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89c5/5eef/54ec7d3b53f90243e5d4290e26b06864"
              }}
              style={styles.ImageBackground_57_4163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e005/9530/35d86357390625b0f296afea5a905a71"
              }}
              style={styles.ImageBackground_57_4164}
            />
            <View style={styles.View_57_4165}>
              <Text style={styles.Text_57_4165}>Send</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_57_3493}>
          <View style={styles.View_57_3914}>
            <View style={styles.View_57_3390}>
              <View style={styles.View_57_3391} />
              <View style={styles.View_57_3917}>
                <View style={styles.View_57_3918} />
                <View style={styles.View_57_3919}>
                  <Text style={styles.Text_57_3919}>GET</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe5c/1c34/bd39092a9edd13b56f853552692eb293"
                }}
                style={styles.ImageBackground_57_4324}
              />
            </View>
            <View style={styles.View_57_3395}>
              <Text style={styles.Text_57_3395}>Type of request</Text>
            </View>
          </View>
          <View style={styles.View_57_3966}>
            <View style={styles.View_57_3967}>
              <View style={styles.View_57_3968} />
              <View style={styles.View_57_3974}>
                <Text style={styles.Text_57_3974}>My request 1</Text>
              </View>
            </View>
            <View style={styles.View_57_3973}>
              <Text style={styles.Text_57_3973}>Request name</Text>
            </View>
          </View>
          <View style={styles.View_57_3396}>
            <View style={styles.View_57_3397} />
            <View style={styles.View_57_3978} />
            <View style={styles.View_57_3979}>
              <View style={styles.View_57_3980}>
                <View style={styles.View_57_3981}>
                  <Text style={styles.Text_57_3981}>Add request</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f91/0f58/f84c79bab5e4949185d308671e8d165d"
                  }}
                  style={styles.ImageBackground_57_3982}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
              }}
              style={styles.ImageBackground_57_3977}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac1/2fe0/b379998c396a3873df9375ee1e0ebc43"
              }}
              style={styles.ImageBackground_57_3399}
            />
            <View style={styles.View_57_3400}>
              <Text style={styles.Text_57_3400}>My Request 2</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f53e/7546/00a65006552c81e6496bbf50346ebde1"
              }}
              style={styles.ImageBackground_57_4778}
            />
          </View>
          <View style={styles.View_57_3498}>
            <View style={styles.View_57_3403}>
              <View style={styles.View_57_3404}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d288/69ba/10a4b185abc8de64b70b5fe7950c7ae0"
                  }}
                  style={styles.ImageBackground_57_3405}
                />
                <View style={styles.View_57_3406}>
                  <View style={styles.View_57_3407}>
                    <View style={styles.View_57_3408}>
                      <Text style={styles.Text_57_3408}>Cancel</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_57_3409}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff9/a559/80374e750d3f297ee7ec6667fa8bf01e"
                  }}
                  style={styles.ImageBackground_57_3410}
                />
                <View style={styles.View_57_3411}>
                  <View style={styles.View_57_3412}>
                    <View style={styles.View_57_3413}>
                      <Text style={styles.Text_57_3413}>save</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_57_3455}>
            <View style={styles.View_57_3456}>
              <View style={styles.View_57_3459} />
              <View style={styles.View_57_3460}>
                <Text style={styles.Text_57_3460}>example.com</Text>
              </View>
              <View style={styles.View_57_3461}>
                <Text style={styles.Text_57_3461}>URL</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_57_3487}>
            <View style={styles.View_57_3488}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
                }}
                style={styles.ImageBackground_57_3965}
              />
              <View style={styles.View_57_3490}>
                <Text style={styles.Text_57_3490}>My Request 1</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a2e/7eb9/b480298ce6c66441b5f56544afa51ebb"
                }}
                style={styles.ImageBackground_57_3491}
              />
            </View>
          </View>
          <View style={styles.View_57_3984}>
            <View style={styles.View_57_3985}>
              <View style={styles.View_57_3986} />
              <View style={styles.View_57_3988}>
                <Text style={styles.Text_57_3988}>Library settings</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac1/2fe0/b379998c396a3873df9375ee1e0ebc43"
                }}
                style={styles.ImageBackground_57_3989}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_137_60}>
        <View style={styles.View_I137_60_137_1}>
          <View style={styles.View_I137_60_137_2} />
          <View style={styles.View_I137_60_137_3} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_I137_60_137_4}
          />
          <View style={styles.View_I137_60_137_5}>
            <View style={styles.View_I137_60_137_6} />
            <View style={styles.View_I137_60_137_7}>
              <Text style={styles.Text_I137_60_137_7}>save</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_60_137_8}>
          <View style={styles.View_I137_60_137_9}>
            <View style={styles.View_I137_60_137_10} />
            <View style={styles.View_I137_60_137_11}>
              <Text style={styles.Text_I137_60_137_11}>Cancel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_60_137_12}>
          <View style={styles.View_I137_60_137_13} />
          <View style={styles.View_I137_60_137_14}>
            <Text style={styles.Text_I137_60_137_14}>properties</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_57_3128: {
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
  View_57_3135: {
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
  Text_57_3135: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_3136: {
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
  View_57_3151: {
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
  View_57_3152: {
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
  View_57_3153: {
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
  View_57_3154: {
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
  Text_57_3154: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3155: {
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
  View_57_3156: {
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
  View_57_3157: {
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
  View_57_3158: {
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
  Text_57_3158: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3159: {
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
  View_57_3160: {
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
  View_57_3161: {
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
  Text_57_3161: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3162: {
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
  View_57_3163: {
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_57_3164: {
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
  View_57_3165: {
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_57_3166: {
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562924911415642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70518663194444%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3167: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.17982991536459%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3168: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3169: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158833821614583%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3170: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9790208604600694%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3171: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.51845974392361%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3172: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338646782769096%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3173: {
    width: wp("6.2873538335164385%"),
    top: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    justifyContent: "flex-start"
  },
  Text_57_3173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_3174: {
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
  View_57_3175: {
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
  View_57_3176: {
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
  ImageBackground_57_3177: {
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
  View_57_3178: {
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
  Text_57_3178: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_3374: {
    width: wp("0.4166666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.888888888888888%")
  },
  View_57_3371: {
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
  Text_57_3371: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_9: {
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
  Text_58_9: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3179: {
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
  View_57_3180: {
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
  View_57_3181: {
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
  View_57_3182: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_57_3183: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.459016393442628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%")
  },
  View_57_3184: {
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
  Text_57_3184: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3185: {
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
  View_57_3186: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_3187: {
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
  ImageBackground_57_3188: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%")
  },
  View_57_3189: {
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
  Text_57_3189: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3983: {
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
  View_57_3190: {
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
  View_57_3191: {
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
  View_57_4777: {
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
  ImageBackground_57_4779: {
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
  View_57_3947: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("17.0764996054394%"),
    minHeight: hp("17.0764996054394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.347222222222218%"),
    top: hp("36.74863387978142%")
  },
  View_57_3414: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("17.0764996054394%"),
    minHeight: hp("17.0764996054394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3415: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("17.0764996054394%"),
    minHeight: hp("17.0764996054394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3945: {
    width: wp("63.125%"),
    minWidth: wp("63.125%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444997%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_3932: {
    width: wp("25.48611111111111%"),
    minWidth: wp("25.48611111111111%"),
    height: hp("5.327873542660573%"),
    minHeight: hp("5.327873542660573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56944444444445%"),
    top: hp("0.000008338136098018367%")
  },
  View_57_3933: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    height: hp("5.327870936993041%"),
    minHeight: hp("5.327870936993041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000008338136098018367%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_3934: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("2.5956286758672995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.680555555555557%"),
    top: hp("1.3661118804431425%"),
    justifyContent: "center"
  },
  Text_57_3934: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3940: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    height: hp("5.327870936993041%"),
    minHeight: hp("5.327870936993041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777779%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_3941: {
    width: wp("2.361111111111111%"),
    minWidth: wp("2.361111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.916666666666657%"),
    top: hp("1.3661118804431425%"),
    justifyContent: "center"
  },
  Text_57_3941: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3936: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.46448347998447%"),
    minHeight: hp("5.46448347998447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000008338136098018367%")
  },
  View_57_3937: {
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
  View_57_3938: {
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
  View_57_3939: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    minHeight: hp("3.8251376542888704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%"),
    top: hp("0.8196637930114434%"),
    justifyContent: "center"
  },
  Text_57_3939: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3946: {
    width: wp("60.34722222222222%"),
    minWidth: wp("60.34722222222222%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("8.196721311475414%")
  },
  View_57_3943: {
    width: wp("29.236111111111114%"),
    minWidth: wp("29.236111111111114%"),
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
  View_57_3975: {
    width: wp("29.236111111111114%"),
    minWidth: wp("29.236111111111114%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.111111111111114%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_3976: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.15277777777777%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "center"
  },
  Text_57_3976: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3944: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666714%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "center"
  },
  Text_57_3944: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3948: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("17.0764996054394%"),
    minHeight: hp("17.0764996054394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.347222222222218%"),
    top: hp("56.4207650273224%")
  },
  View_57_3949: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("17.0764996054394%"),
    minHeight: hp("17.0764996054394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3950: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("17.0764996054394%"),
    minHeight: hp("17.0764996054394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3951: {
    width: wp("63.125%"),
    minWidth: wp("63.125%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444997%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_3952: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    height: hp("5.327870936993041%"),
    minHeight: hp("5.327870936993041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56944444444445%"),
    top: hp("0%")
  },
  View_57_3953: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    height: hp("5.327870936993041%"),
    minHeight: hp("5.327870936993041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_3954: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("2.5956286758672995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.263888888888893%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "center"
  },
  Text_57_3954: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3957: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.46448347998447%"),
    minHeight: hp("5.46448347998447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3958: {
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
  View_57_3959: {
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
  View_57_3960: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    minHeight: hp("3.8251376542888704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%"),
    top: hp("0.8196554548753454%"),
    justifyContent: "center"
  },
  Text_57_3960: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3961: {
    width: wp("60.83333333333333%"),
    minWidth: wp("60.83333333333333%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("8.196721311475414%")
  },
  View_57_3963: {
    width: wp("60.83333333333333%"),
    minWidth: wp("60.83333333333333%"),
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
  View_57_3964: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "center"
  },
  Text_57_3964: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4162: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.18055555555556%"),
    top: hp("76.22950819672133%")
  },
  ImageBackground_57_4163: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    height: hp("3.4153015887151%"),
    minHeight: hp("3.4153015887151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_57_4164: {
    width: wp("0.9027777777777777%"),
    minWidth: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48611111111111427%"),
    top: hp("0.8196721311475272%")
  },
  View_57_4165: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555557%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_57_4165: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_3493: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("112.43166063652663%"),
    minHeight: hp("112.43166063652663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3914: {
    width: wp("77.15277777777779%"),
    minWidth: wp("77.15277777777779%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("26.36612021857924%")
  },
  View_57_3390: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.958333333333329%"),
    top: hp("0%")
  },
  View_57_3391: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
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
  View_57_3917: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.142077023865747%"),
    minHeight: hp("3.142077023865747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("1.5027322404371546%")
  },
  View_57_3918: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(54, 182, 33, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_57_3919: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("0.5464480874316919%"),
    justifyContent: "center"
  },
  Text_57_3919: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_57_4324: {
    width: wp("0.6011631753709581%"),
    minWidth: wp("0.6011631753709581%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.180555555555564%"),
    top: hp("2.7322404371584668%")
  },
  View_57_3395: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "center"
  },
  Text_57_3395: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3966: {
    width: wp("77.15277777777779%"),
    minWidth: wp("77.15277777777779%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("17.486338797814206%")
  },
  View_57_3967: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.958333333333329%"),
    top: hp("0%")
  },
  View_57_3968: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
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
  View_57_3974: {
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
  Text_57_3974: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3973: {
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
  Text_57_3973: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3396: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89.75409836065575%")
  },
  View_57_3397: {
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
  View_57_3978: {
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
  View_57_3979: {
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
  View_57_3980: {
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
  View_57_3981: {
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
  Text_57_3981: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_3982: {
    width: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_3977: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93055555555556%")
  },
  ImageBackground_57_3399: {
    width: wp("0.33531635999679565%"),
    minWidth: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    minHeight: hp("1.046003995697355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.36111111111111%"),
    top: hp("2.9488985655737565%")
  },
  View_57_3400: {
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
  Text_57_3400: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4778: {
    width: wp("79.23611111111111%"),
    minWidth: wp("79.23611111111111%"),
    height: hp("6.967226664225261%"),
    minHeight: hp("6.967226664225261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3498: {
    width: wp("76.31944444444444%"),
    minWidth: wp("76.31944444444444%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("109.01636009007856%")
  },
  View_57_3403: {
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
  View_57_3404: {
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
  ImageBackground_57_3405: {
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
  View_57_3406: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888928%"),
    top: hp("0.5464480874316848%")
  },
  View_57_3407: {
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
  View_57_3408: {
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
  Text_57_3408: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_3409: {
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
  ImageBackground_57_3410: {
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
  View_57_3411: {
    width: wp("2.0357790258195667%"),
    minWidth: wp("2.0357790258195667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4148491753472143%"),
    top: hp("0.5464480874316848%")
  },
  View_57_3412: {
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
  View_57_3413: {
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
  Text_57_3413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_3455: {
    width: wp("76.94444444444444%"),
    minWidth: wp("76.94444444444444%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("35.24590163934426%")
  },
  View_57_3456: {
    width: wp("76.94444444444444%"),
    minWidth: wp("76.94444444444444%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3459: {
    width: wp("63.19444444444444%"),
    minWidth: wp("63.19444444444444%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.749999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_3460: {
    width: wp("20.76388888888889%"),
    minWidth: wp("20.76388888888889%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.48611111111111%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "center"
  },
  Text_57_3460: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3461: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "center"
  },
  Text_57_3461: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_3487: {
    width: wp("76.22616238064236%"),
    minWidth: wp("76.22616238064236%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    top: hp("9.836065573770494%")
  },
  View_57_3488: {
    width: wp("76.22616238064236%"),
    minWidth: wp("76.22616238064236%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_57_3965: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.54166666666666%")
  },
  View_57_3490: {
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
  Text_57_3490: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_3491: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.69444444444443%"),
    top: hp("0.8196721311475414%")
  },
  View_57_3984: {
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
  View_57_3985: {
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
  View_57_3986: {
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
  View_57_3988: {
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
  Text_57_3988: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_3989: {
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
  View_137_60: {
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
  View_I137_60_137_1: {
    flexGrow: 1,
    width: wp("8.333335452609592%"),
    height: hp("4.09836274027173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222229%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_60_137_2: {
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
  View_I137_60_137_3: {
    width: wp("0.06944444444444445%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.180555555555557%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  ImageBackground_I137_60_137_4: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888886%")
  },
  View_I137_60_137_5: {
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
  View_I137_60_137_6: {
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
  View_I137_60_137_7: {
    width: wp("2.013888888888889%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777857%"),
    justifyContent: "center"
  },
  Text_I137_60_137_7: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_60_137_8: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.125000000000014%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_60_137_9: {
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I137_60_137_10: {
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
  View_I137_60_137_11: {
    width: wp("3.194444444444444%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    justifyContent: "center"
  },
  Text_I137_60_137_11: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_60_137_12: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_60_137_13: {
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
  View_I137_60_137_14: {
    width: wp("4.930555555555555%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111285%"),
    justifyContent: "center"
  },
  Text_I137_60_137_14: {
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

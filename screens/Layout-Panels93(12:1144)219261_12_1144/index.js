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
      <View style={styles.View_12_1145} />
      <View style={styles.View_12_1152}>
        <Text style={styles.Text_12_1152}>secondary nav</Text>
      </View>
      <View style={styles.View_12_1153} />
      <View style={styles.View_12_1154}>
        <View style={styles.View_12_1155}>
          <View style={styles.View_12_1156}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_12_1157}
            />
            <View style={styles.View_58_16}>
              <Text style={styles.Text_58_16}>Switch to library builder</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22c2/eb44/e90c4c22ff6e88717b0895665077086b"
              }}
              style={styles.ImageBackground_57_2861}
            />
            <View style={styles.View_12_1158}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
                }}
                style={styles.ImageBackground_12_1159}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_12_1160}
              />
            </View>
            <View style={styles.View_12_1161}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_12_1162}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
                }}
                style={styles.ImageBackground_12_1163}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_57_5593}>
        <View style={styles.View_57_2860}>
          <Text style={styles.Text_57_2860}>Main page</Text>
        </View>
        <View style={styles.View_57_2856}>
          <View style={styles.View_57_2857}>
            <View style={styles.View_57_2858}>
              <View style={styles.View_57_3501}>
                <Text style={styles.Text_57_3501}>Content builder</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9202/5b95/a4d00171e4694b40e99168d3762f0db6"
                }}
                style={styles.ImageBackground_57_3502}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_12_1177}>
        <View style={styles.View_12_1178}>
          <View style={styles.View_12_1179} />
          <View style={styles.View_12_1180}>
            <Text style={styles.Text_12_1180}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_12_1181}>
          <View style={styles.View_12_1182} />
          <View style={styles.View_12_1183} />
          <View style={styles.View_12_1184}>
            <Text style={styles.Text_12_1184}>Design</Text>
          </View>
        </View>
        <View style={styles.View_12_1185}>
          <View style={styles.View_12_1186} />
          <View style={styles.View_12_1187}>
            <Text style={styles.Text_12_1187}>Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_12_1188}>
        <View style={styles.View_12_1189} />
      </View>
      <View style={styles.View_12_1190}>
        <View style={styles.View_12_1191} />
        <View style={styles.View_12_1192} />
        <View style={styles.View_12_1193} />
        <View style={styles.View_12_1194} />
        <View style={styles.View_12_1195} />
        <View style={styles.View_12_1196} />
        <View style={styles.View_12_1197} />
        <View style={styles.View_12_1198} />
        <View style={styles.View_12_1199}>
          <Text style={styles.Text_12_1199}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_12_1200}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9aa/c79d/493066fb0a853502ba7526963b8908b1"
          }}
          style={styles.ImageBackground_12_1201}
        />
        <View style={styles.View_12_1202}>
          <View style={styles.View_12_1203}>
            <View style={styles.View_12_1204} />
            <View style={styles.View_12_1205} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2daf/8f46/2ccb4d85f893ee1a2d032062a6ea7260"
              }}
              style={styles.ImageBackground_12_1206}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1522/4224/756f70c48c8c557f29f228db9546401a"
              }}
              style={styles.ImageBackground_12_1207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/1272/6c1d39ecc9a339fa37e698bb2e0fd6c6"
              }}
              style={styles.ImageBackground_12_1208}
            />
            <View style={styles.View_12_1209}>
              <View style={styles.View_12_1210}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e9/0bda/ad10637ccb2842e4ebd64fdf776ce05a"
                  }}
                  style={styles.ImageBackground_12_1211}
                />
                <View style={styles.View_12_1212} />
                <View style={styles.View_12_1213} />
              </View>
            </View>
            <View style={styles.View_12_1214} />
            <View style={styles.View_12_1215}>
              <View style={styles.View_12_1216} />
              <View style={styles.View_12_1217} />
              <View style={styles.View_12_1218}>
                <View style={styles.View_12_1219} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
                  }}
                  style={styles.ImageBackground_12_1220}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                  }}
                  style={styles.ImageBackground_12_1222}
                />
                <View style={styles.View_12_1226}>
                  <Text style={styles.Text_12_1226}>Take Vitals</Text>
                </View>
              </View>
              <View style={styles.View_12_1227}>
                <View style={styles.View_12_1228}>
                  <View style={styles.View_12_1229} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                    }}
                    style={styles.ImageBackground_12_1230}
                  />
                  <View style={styles.View_12_1234}>
                    <Text style={styles.Text_12_1234}>James Sawyer</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_12_1235}>
                <View style={styles.View_12_1236} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
                  }}
                  style={styles.ImageBackground_12_1237}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                  }}
                  style={styles.ImageBackground_12_1239}
                />
                <View style={styles.View_12_1243}>
                  <Text style={styles.Text_12_1243}>Medication</Text>
                </View>
              </View>
              <View style={styles.View_12_1244}>
                <Text style={styles.Text_12_1244}>9:00 AM</Text>
              </View>
              <View style={styles.View_57_6723}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bd/1499/9e9893472ee7f7a7a570c828ed226e3d"
                  }}
                  style={styles.ImageBackground_57_6724}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bd/1499/9e9893472ee7f7a7a570c828ed226e3d"
                  }}
                  style={styles.ImageBackground_57_6725}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec1/f7d4/b91b68e9300bf34299b2c46f711164f5"
                  }}
                  style={styles.ImageBackground_57_6726}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec1/f7d4/b91b68e9300bf34299b2c46f711164f5"
                  }}
                  style={styles.ImageBackground_57_6727}
                />
                <View style={styles.View_57_6728} />
                <View style={styles.View_57_6729} />
                <View style={styles.View_57_6730} />
                <View style={styles.View_57_6731} />
              </View>
              <View style={styles.View_12_1245}>
                <Text style={styles.Text_12_1245}>10:00 AM</Text>
              </View>
              <View style={styles.View_12_1246}>
                <Text style={styles.Text_12_1246}>11:00 AM</Text>
              </View>
              <View style={styles.View_12_1247} />
              <View style={styles.View_12_1248} />
              <View style={styles.View_12_1249} />
              <View style={styles.View_12_1250} />
              <View style={styles.View_12_1251} />
            </View>
            <View style={styles.View_12_1252}>
              <Text style={styles.Text_12_1252}>All Services</Text>
            </View>
            <View style={styles.View_12_1253}>
              <Text style={styles.Text_12_1253}>Today’s Progress</Text>
            </View>
            <View style={styles.View_12_1254}>
              <View style={styles.View_12_1255}>
                <View style={styles.View_12_1256} />
                <View style={styles.View_12_1257} />
                <View style={styles.View_12_1258} />
              </View>
            </View>
          </View>
          <View style={styles.View_12_1259}>
            <View style={styles.View_12_1260} />
            <View style={styles.View_12_1261}>
              <Text style={styles.Text_12_1261}>98</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/197e/6076/ad76023f05c13b6c561f252fad066002"
              }}
              style={styles.ImageBackground_12_1262}
            />
            <View style={styles.View_12_1263}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a99d/b18e/462151bcd1e566d18e63e0d4a82221bb"
                }}
                style={styles.ImageBackground_12_1264}
              />
              <View style={styles.View_12_1273}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4836/bfbc/97fee081151da251bda49bdf187e0362"
                  }}
                  style={styles.ImageBackground_12_1274}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d41/9dc1/7470dcb031acbc3c932ba21125b71c52"
                  }}
                  style={styles.ImageBackground_12_1275}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4289/b189/723b51b97e5549f3c7db350a3131519e"
                  }}
                  style={styles.ImageBackground_12_1276}
                />
                <View style={styles.View_12_1277}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d06/9d92/92cc0c91d13bb793db3785c3fe4cec94"
                    }}
                    style={styles.ImageBackground_12_1278}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2932/5dd4/7ce21c2be9cf8edc2c860b2e4354ffc8"
                    }}
                    style={styles.ImageBackground_12_1283}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5341/e82f/c91b371f1fafca1bb177c790756ed259"
                    }}
                    style={styles.ImageBackground_12_1284}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ad/30e6/80430256a628655fb636a9b5b0339b21"
                  }}
                  style={styles.ImageBackground_12_1285}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e39c/ef3f/b09fb6d4be1ee0cb20e1ca224d544faa"
                  }}
                  style={styles.ImageBackground_12_1286}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b9f/f733/c68bffd72bdd151c1a724b246765d6da"
                  }}
                  style={styles.ImageBackground_12_1287}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9a/2df3/977f988073885a3f8ea3735bcd2d3482"
                  }}
                  style={styles.ImageBackground_12_1288}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1381/56ee/1121b45866454425cb80ad4877c7bea9"
                  }}
                  style={styles.ImageBackground_12_1289}
                />
              </View>
            </View>
            <View style={styles.View_12_1290}>
              <Text style={styles.Text_12_1290}>Oxygen level</Text>
            </View>
            <View style={styles.View_12_1291}>
              <View style={styles.View_12_1292} />
              <View style={styles.View_12_1293} />
              <View style={styles.View_12_1294} />
              <View style={styles.View_12_1295} />
              <View style={styles.View_12_1296} />
              <View style={styles.View_12_1297} />
            </View>
          </View>
          <View style={styles.View_12_1298}>
            <Text style={styles.Text_12_1298}>Your daily plan</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
            }}
            style={styles.ImageBackground_12_1299}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
            }}
            style={styles.ImageBackground_12_1301}
          />
          <View style={styles.View_12_1303}>
            <View style={styles.View_12_1304} />
            <View style={styles.View_12_1305}>
              <Text style={styles.Text_12_1305}>Contact provider</Text>
            </View>
          </View>
          <View style={styles.View_12_1306}>
            <View style={styles.View_12_1307} />
            <View style={styles.View_12_1308}>
              <Text style={styles.Text_12_1308}>Daily plan</Text>
            </View>
          </View>
          <View style={styles.View_12_1309}>
            <View style={styles.View_12_1310} />
            <View style={styles.View_12_1311}>
              <Text style={styles.Text_12_1311}>Messages</Text>
            </View>
          </View>
          <View style={styles.View_12_1312}>
            <View style={styles.View_12_1313} />
            <View style={styles.View_12_1314}>
              <Text style={styles.Text_12_1314}>Emergency</Text>
            </View>
          </View>
          <View style={styles.View_12_1315}>
            <View style={styles.View_12_1316} />
            <View style={styles.View_12_1317}>
              <Text style={styles.Text_12_1317}>Add a vital</Text>
            </View>
          </View>
          <View style={styles.View_12_1318}>
            <View style={styles.View_12_1319}>
              <Text style={styles.Text_12_1319}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5bb/75ba/76b9f1c21957193ce99e5488e3485f6e"
              }}
              style={styles.ImageBackground_12_1320}
            />
          </View>
          <View style={styles.View_12_1321}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d6/881f/8f42ef39f8a5acb50205802452acf77c"
              }}
              style={styles.ImageBackground_12_1322}
            />
            <View style={styles.View_12_1323}>
              <Text style={styles.Text_12_1323}>Progress</Text>
            </View>
          </View>
          <View style={styles.View_12_1324}>
            <View style={styles.View_12_1325}>
              <Text style={styles.Text_12_1325}>Messages</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aed/042a/fe1851f0f493290797b3346d7b6b5bf4"
              }}
              style={styles.ImageBackground_12_1326}
            />
          </View>
          <View style={styles.View_12_1327}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/58a2/ecc020eb6ddae17ce595147ff2867c16"
              }}
              style={styles.ImageBackground_12_1328}
            />
            <View style={styles.View_12_1329}>
              <Text style={styles.Text_12_1329}>Appointments</Text>
            </View>
          </View>
          <View style={styles.View_12_1330}>
            <View style={styles.View_12_1331}>
              <View style={styles.View_12_1332}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c04/e470/748a0e6abd8db00ed7034c133b395edc"
                  }}
                  style={styles.ImageBackground_12_1333}
                />
                <View style={styles.View_12_1334} />
                <View style={styles.View_12_1335} />
              </View>
            </View>
            <View style={styles.View_12_1336}>
              <Text style={styles.Text_12_1336}>More</Text>
            </View>
          </View>
          <View style={styles.View_12_1337}>
            <View style={styles.View_12_1338} />
            <View style={styles.View_12_1339}>
              <View style={styles.View_12_1340}>
                <View style={styles.View_12_1341}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46b1/a8e3/c229c85f9aae1d7442eed83e856b89ad"
                    }}
                    style={styles.ImageBackground_12_1342}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc0/f15b/34d5b4b7eb2678cb7dee19e8985556c2"
                    }}
                    style={styles.ImageBackground_12_1343}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/436b/b098/064b4be42bfce1b85cb36375746ddb32"
                    }}
                    style={styles.ImageBackground_12_1344}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a754/28ad/ee43f390f34aebcedf725fc7b53d6606"
                    }}
                    style={styles.ImageBackground_12_1345}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2080/d370/71fa45b6a73a8cdf1fe8aa6aa458964d"
                    }}
                    style={styles.ImageBackground_12_1346}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b27/76a9/45ad2fac42cfb8e39e8979cd60323a66"
                    }}
                    style={styles.ImageBackground_12_1347}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb3c/49a7/e926de31da9a102fbcceede46f8bd848"
                    }}
                    style={styles.ImageBackground_12_1348}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a65/a0dc/7892c890ce624b9a0a6b433f2d6154c9"
                    }}
                    style={styles.ImageBackground_12_1349}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/69ab/646000ebd11f6fc4be7d79aab090672d"
                    }}
                    style={styles.ImageBackground_12_1350}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad9/bbb6/06ed3a602348ed79307b44cb1f2f2f7f"
                    }}
                    style={styles.ImageBackground_12_1354}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be32/c25b/165c3805d2b4f80505c4f2e92798f636"
                    }}
                    style={styles.ImageBackground_12_1355}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7804/4b7b/72967f753880194c65b2cb37b73ac8e0"
                    }}
                    style={styles.ImageBackground_12_1356}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8816/e0b7/55b9ba3640bfd9a94c9e7943ef529bd2"
                    }}
                    style={styles.ImageBackground_12_1359}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/699d/7c8f/cec119f27842d69c2ad969abde2a94ca"
                    }}
                    style={styles.ImageBackground_12_1360}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f681/b45a/effbe58bc422d799d9bcb61ecec020c0"
                  }}
                  style={styles.ImageBackground_12_1361}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4c/a301/8eabb73b440e4573a2a0cc6d921c6658"
                  }}
                  style={styles.ImageBackground_12_1362}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30fb/5e59/0e6dfbb04b3820510cfc696c1ae4f3c0"
                  }}
                  style={styles.ImageBackground_12_1363}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4e9/d1fa/b87b349a98dedb315abef776bec38350"
                  }}
                  style={styles.ImageBackground_12_1364}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/661a/b17d/ea79670e9c43cf0e188a5ec843321141"
                  }}
                  style={styles.ImageBackground_12_1365}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fdc/5781/5758245a396e5656834f172d5e8fb5e1"
                  }}
                  style={styles.ImageBackground_12_1366}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca4d/bd36/cd6ac68652ae274b31e373936e323ed5"
                  }}
                  style={styles.ImageBackground_12_1367}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db88/c292/72aec0da58a0efda1b2456284f1da614"
                  }}
                  style={styles.ImageBackground_12_1368}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ddd/0371/8465cccb2e3cbaa18c9f8f2c98549288"
                  }}
                  style={styles.ImageBackground_12_1369}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f4/b4df/bf2ec4e07439fb667429a7fc2136e037"
                  }}
                  style={styles.ImageBackground_12_1370}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/880e/578c/149822bd6ecd0375cbb0cbd6e445a957"
                  }}
                  style={styles.ImageBackground_12_1371}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c600/f22c/24e5ccef0c9c93c69a8c01b2f7489432"
                  }}
                  style={styles.ImageBackground_12_1372}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2a/e4af/c67279820c6e5f2f797c80cccbd8dbf2"
                  }}
                  style={styles.ImageBackground_12_1373}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c423/483d/39700a9a12c357541b7a4558db4533e0"
                  }}
                  style={styles.ImageBackground_12_1374}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f19/5f4c/f1b2420e56eaca79977c4e047d0e5866"
                  }}
                  style={styles.ImageBackground_12_1375}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f30/a9e3/97b5484b991085952a7ace58aad72f51"
                  }}
                  style={styles.ImageBackground_12_1376}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d45/7723/231baf92b32dddfc17e2e1741cb38d02"
                  }}
                  style={styles.ImageBackground_12_1377}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b43/c028/923961bc1f099a648ba761dd9c25bbf4"
                  }}
                  style={styles.ImageBackground_12_1378}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10c3/33b4/7802d56399feefd3adffa70cf40854b4"
                  }}
                  style={styles.ImageBackground_12_1379}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ece5/a4fd/650d16476d20c1e6064595c3fe8654d8"
                  }}
                  style={styles.ImageBackground_12_1380}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6294/e945/0b66c0c3959f2e34a143eff89a46c8af"
                  }}
                  style={styles.ImageBackground_12_1381}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a26a/fff6/76906147a3c5e6641a1bbf65ea269979"
                  }}
                  style={styles.ImageBackground_12_1382}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea6e/8084/570ef649836a5b8797d5665f7885f60d"
                  }}
                  style={styles.ImageBackground_12_1383}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03a7/b63e/6d44fac853c478543067f6eab1fd8f39"
                  }}
                  style={styles.ImageBackground_12_1384}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9bd/ff5d/ff75c731893f9778dd57e7dcfbc70ab8"
                  }}
                  style={styles.ImageBackground_12_1385}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d26b/b663/a3120c2d967b7aad58214bf4af2f42a4"
                  }}
                  style={styles.ImageBackground_12_1386}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/985b/01f5/8bd23c05abb284f1226e46e8e6f934a2"
                  }}
                  style={styles.ImageBackground_12_1387}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d115/f07d/2f2e5306565c25882973ba875eca172a"
                  }}
                  style={styles.ImageBackground_12_1388}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0771/bcb6/f58e1d037cf23e584706c56fc2706f02"
                  }}
                  style={styles.ImageBackground_12_1389}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0618/1623/1e5c01b1f6c01c7c93f168e64673a92d"
                }}
                style={styles.ImageBackground_12_1390}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b84/8734/91689175c8a50bb2194dc599816f8c58"
                }}
                style={styles.ImageBackground_12_1391}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/896a/a5ac/4b594f2b41cda953fe4e1b3a394f9df1"
                }}
                style={styles.ImageBackground_12_1392}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b2/e9df/d6042d6da72345cea2b771100ae1b912"
                }}
                style={styles.ImageBackground_12_1393}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a03c/b768/3673636de366f9665561fa20f6df8e41"
                }}
                style={styles.ImageBackground_12_1394}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/859a/f2ed/52bac41d56422cfaa69d4ed9b2a39d0e"
                }}
                style={styles.ImageBackground_12_1395}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f454/aa12/f65ba9b07fb45e77d85f9724031ea617"
                }}
                style={styles.ImageBackground_12_1396}
              />
            </View>
            <View style={styles.View_12_1397}>
              <Text style={styles.Text_12_1397}>Heart rate</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e41b/4ceb/7af8db0037bf0c970dd030bc61e09ff8"
              }}
              style={styles.ImageBackground_12_1398}
            />
            <View style={styles.View_12_1399}>
              <Text style={styles.Text_12_1399}>102</Text>
            </View>
            <View style={styles.View_12_1400}>
              <View style={styles.View_12_1401} />
              <View style={styles.View_12_1402} />
              <View style={styles.View_12_1403} />
              <View style={styles.View_12_1404} />
              <View style={styles.View_12_1405} />
              <View style={styles.View_12_1406} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_12_1407}>
        <View style={styles.View_12_1408} />
        <View style={styles.View_57_6611}>
          <View style={styles.View_57_6612} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
            }}
            style={styles.ImageBackground_57_6613}
          />
          <View style={styles.View_57_6614}>
            <Text style={styles.Text_57_6614}>new category </Text>
          </View>
          <View style={styles.View_57_6615}>
            <View style={styles.View_57_6616}>
              <View style={styles.View_57_6617}>
                <Text style={styles.Text_57_6617}>Add</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f91/0f58/f84c79bab5e4949185d308671e8d165d"
                }}
                style={styles.ImageBackground_57_6618}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_12_1409}>
          <View style={styles.View_12_1410} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c2/c16c/395f44eb19f6c680b7f6b085aa8a6c24"
            }}
            style={styles.ImageBackground_12_1411}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
            }}
            style={styles.ImageBackground_12_1412}
          />
          <View style={styles.View_12_1414}>
            <Text style={styles.Text_12_1414}>Data library</Text>
          </View>
        </View>
        <View style={styles.View_12_1538}>
          <View style={styles.View_12_1539} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c2/c16c/395f44eb19f6c680b7f6b085aa8a6c24"
            }}
            style={styles.ImageBackground_12_1540}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
            }}
            style={styles.ImageBackground_12_1541}
          />
          <View style={styles.View_12_1542}>
            <Text style={styles.Text_12_1542}>Trigger</Text>
          </View>
        </View>
        <View style={styles.View_12_1543}>
          <View style={styles.View_12_1544} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c2/c16c/395f44eb19f6c680b7f6b085aa8a6c24"
            }}
            style={styles.ImageBackground_12_1545}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
            }}
            style={styles.ImageBackground_12_1546}
          />
          <View style={styles.View_12_1547}>
            <Text style={styles.Text_12_1547}>Transform</Text>
          </View>
        </View>
        <View style={styles.View_57_6117}>
          <View style={styles.View_57_6118} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c2/c16c/395f44eb19f6c680b7f6b085aa8a6c24"
            }}
            style={styles.ImageBackground_57_6119}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
            }}
            style={styles.ImageBackground_57_6120}
          />
          <View style={styles.View_57_6121}>
            <Text style={styles.Text_57_6121}>Actions tags</Text>
          </View>
        </View>
        <View style={styles.View_57_6132}>
          <View style={styles.View_57_6133} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c2/c16c/395f44eb19f6c680b7f6b085aa8a6c24"
            }}
            style={styles.ImageBackground_57_6134}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c504/1ebc/a1250ea4e3eed64eee256d9ce62fa46a"
            }}
            style={styles.ImageBackground_57_6135}
          />
          <View style={styles.View_57_6136}>
            <Text style={styles.Text_57_6136}>Conditions</Text>
          </View>
        </View>
        <View style={styles.View_12_2145}>
          <View style={styles.View_12_1516}>
            <View style={styles.View_12_1517}>
              <Text style={styles.Text_12_1517}>Set status as</Text>
            </View>
            <View style={styles.View_12_1518}>
              <View style={styles.View_12_1519} />
              <View style={styles.View_12_1520}>
                <Text style={styles.Text_12_1520}>Active element</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_12_1521}
              />
            </View>
          </View>
          <View style={styles.View_12_1415}>
            <View style={styles.View_12_1416} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22c2/eb44/e90c4c22ff6e88717b0895665077086b"
              }}
              style={styles.ImageBackground_12_1417}
            />
            <View style={styles.View_12_1418}>
              <Text style={styles.Text_12_1418}>Status</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_57_6654}>
          <View style={styles.View_57_6655}>
            <View style={styles.View_57_6656}>
              <View style={styles.View_57_6657} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22c2/eb44/e90c4c22ff6e88717b0895665077086b"
                }}
                style={styles.ImageBackground_57_6658}
              />
              <View style={styles.View_57_6659}>
                <Text style={styles.Text_57_6659}>Content</Text>
              </View>
            </View>
            <View style={styles.View_57_6660}>
              <View style={styles.View_57_6661}>
                <Text style={styles.Text_57_6661}>Content type</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_57_6662}>
            <View style={styles.View_57_6663}>
              <View style={styles.View_57_6664} />
              <View style={styles.View_57_6665}>
                <Text style={styles.Text_57_6665}>9:00</Text>
              </View>
            </View>
            <View style={styles.View_57_6666}>
              <View style={styles.View_57_6667} />
              <View style={styles.View_57_6668}>
                <Text style={styles.Text_57_6668}>Text field</Text>
              </View>
            </View>
            <View style={styles.View_57_6669}>
              <View style={styles.View_57_6670} />
              <View style={styles.View_57_6671}>
                <Text style={styles.Text_57_6671}>Interactive element</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_57_6672}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_12_1437}>
        <View style={styles.View_12_1438} />
        <View style={styles.View_12_1439} />
        <View style={styles.View_57_5643}>
          <View style={styles.View_57_5644} />
          <View style={styles.View_57_5645} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
            }}
            style={styles.ImageBackground_57_5646}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa90/733c/9d86836c4af1466060dcdc9d20a978b6"
            }}
            style={styles.ImageBackground_57_5647}
          />
          <View style={styles.View_57_5648}>
            <Text style={styles.Text_57_5648}>Content tree</Text>
          </View>
        </View>
        <View style={styles.View_12_1442}>
          <View style={styles.View_12_1443} />
          <View style={styles.View_12_1444}>
            <View style={styles.View_12_1445}>
              <Text style={styles.Text_12_1445}>
                Group 77 Group 76 Group 75 Appointment
              </Text>
            </View>
            <View style={styles.View_12_1446}>
              <View style={styles.View_12_1447}>
                <Text style={styles.Text_12_1447}>Today’s progress</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1448}
              />
            </View>
            <View style={styles.View_12_1449}>
              <View style={styles.View_12_1450}>
                <Text style={styles.Text_12_1450}>Heart rate</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1451}
              />
            </View>
            <View style={styles.View_12_1452}>
              <View style={styles.View_12_1453}>
                <Text style={styles.Text_12_1453}>Oxygen Level</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1454}
              />
            </View>
            <View style={styles.View_12_1455}>
              <View style={styles.View_12_1456}>
                <Text style={styles.Text_12_1456}>Contact provider</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1457}
              />
            </View>
            <View style={styles.View_12_1458}>
              <View style={styles.View_12_1459}>
                <Text style={styles.Text_12_1459}>Daily plan</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1460}
              />
            </View>
            <View style={styles.View_12_1461}>
              <View style={styles.View_12_1462}>
                <Text style={styles.Text_12_1462}>Messages</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1463}
              />
            </View>
            <View style={styles.View_12_1464}>
              <View style={styles.View_12_1465}>
                <Text style={styles.Text_12_1465}>Add a vital</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1466}
              />
            </View>
            <View style={styles.View_12_1467}>
              <View style={styles.View_12_1468}>
                <Text style={styles.Text_12_1468}>Emergency</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1469}
              />
            </View>
            <View style={styles.View_12_1470}>
              <View style={styles.View_12_1471}>
                <Text style={styles.Text_12_1471}>Bottom menu</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_12_1472}
              />
            </View>
            <View style={styles.View_12_1473}>
              <Text style={styles.Text_12_1473}>Daily plan</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
              }}
              style={styles.ImageBackground_12_1474}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
              }}
              style={styles.ImageBackground_12_1475}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
              }}
              style={styles.ImageBackground_12_1476}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
              }}
              style={styles.ImageBackground_12_1477}
            />
            <View style={styles.View_12_1478}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                }}
                style={styles.ImageBackground_12_1479}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                }}
                style={styles.ImageBackground_12_1480}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0958/90b6/56bd20cfbe5d2cf4df09d70e88054a4a"
              }}
              style={styles.ImageBackground_12_1481}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
              }}
              style={styles.ImageBackground_12_1482}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
              }}
              style={styles.ImageBackground_12_1483}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
              }}
              style={styles.ImageBackground_12_1484}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0958/90b6/56bd20cfbe5d2cf4df09d70e88054a4a"
              }}
              style={styles.ImageBackground_12_1485}
            />
            <View style={styles.View_12_1486}>
              <View style={styles.View_12_1487}>
                <Text style={styles.Text_12_1487}>9:00 AM</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                }}
                style={styles.ImageBackground_12_1488}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                }}
                style={styles.ImageBackground_12_1489}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3162/441e/42d616aae88df8d2a97967f7f8a9eba8"
                }}
                style={styles.ImageBackground_12_1490}
              />
            </View>
            <View style={styles.View_12_1491}>
              <View style={styles.View_12_1492}>
                <Text style={styles.Text_12_1492}>Take vitals</Text>
              </View>
              <View style={styles.View_12_1493}>
                <Text style={styles.Text_12_1493}>Checkbox</Text>
              </View>
              <View style={styles.View_12_1494}>
                <Text style={styles.Text_12_1494}>Menu</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                }}
                style={styles.ImageBackground_12_1495}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                }}
                style={styles.ImageBackground_12_1496}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3162/441e/42d616aae88df8d2a97967f7f8a9eba8"
                }}
                style={styles.ImageBackground_12_1497}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c9a/a839/9e2beb4894bc23157be3724b3db106f1"
              }}
              style={styles.ImageBackground_12_1498}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd65/daf4/fb34b1eddac1e628311fb50ae08b606b"
              }}
              style={styles.ImageBackground_12_1499}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_12_2102}>
        <View style={styles.View_12_1426} />
        <View style={styles.View_12_2046}>
          <View style={styles.View_12_2047} />
          <View style={styles.View_12_2048}>
            <Text style={styles.Text_12_2048}>Request name</Text>
          </View>
        </View>
        <View style={styles.View_12_2050}>
          <View style={styles.View_12_2051} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe5c/1c34/bd39092a9edd13b56f853552692eb293"
            }}
            style={styles.ImageBackground_12_2100}
          />
          <View style={styles.View_12_2076}>
            <Text style={styles.Text_12_2076}>Request library 1</Text>
          </View>
        </View>
        <View style={styles.View_57_5199}>
          <View style={styles.View_57_5200} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe5c/1c34/bd39092a9edd13b56f853552692eb293"
            }}
            style={styles.ImageBackground_57_5201}
          />
          <View style={styles.View_57_5202}>
            <Text style={styles.Text_57_5202}>Request</Text>
          </View>
          <View style={styles.View_57_5203}>
            <View style={styles.View_57_5204} />
            <View style={styles.View_57_5205}>
              <Text style={styles.Text_57_5205}>GET</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_12_2067}>
          <View style={styles.View_12_2068} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe5c/1c34/bd39092a9edd13b56f853552692eb293"
            }}
            style={styles.ImageBackground_12_2101}
          />
          <View style={styles.View_12_2077}>
            <Text style={styles.Text_12_2077}>Data source</Text>
          </View>
          <View style={styles.View_12_2073}>
            <View style={styles.View_12_2074} />
            <View style={styles.View_12_2075}>
              <Text style={styles.Text_12_2075}>CALENDAR</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_57_4340}>
          <View style={styles.View_57_4341} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
            }}
            style={styles.ImageBackground_57_4342}
          />
          <View style={styles.View_57_4343}>
            <Text style={styles.Text_57_4343}>new request</Text>
          </View>
          <View style={styles.View_57_4344}>
            <View style={styles.View_57_4345}>
              <View style={styles.View_57_4346}>
                <Text style={styles.Text_57_4346}>Add</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f91/0f58/f84c79bab5e4949185d308671e8d165d"
                }}
                style={styles.ImageBackground_57_4347}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_137_150}>
        <View style={styles.View_I137_150_137_1}>
          <View style={styles.View_I137_150_137_2} />
          <View style={styles.View_I137_150_137_3} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_I137_150_137_4}
          />
          <View style={styles.View_I137_150_137_5}>
            <View style={styles.View_I137_150_137_6} />
            <View style={styles.View_I137_150_137_7}>
              <Text style={styles.Text_I137_150_137_7}>save</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_150_137_8}>
          <View style={styles.View_I137_150_137_9}>
            <View style={styles.View_I137_150_137_10} />
            <View style={styles.View_I137_150_137_11}>
              <Text style={styles.Text_I137_150_137_11}>Cancel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_150_137_12}>
          <View style={styles.View_I137_150_137_13} />
          <View style={styles.View_I137_150_137_14}>
            <Text style={styles.Text_I137_150_137_14}>properties</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_12_1145: {
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
  View_12_1152: {
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
  Text_12_1152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_12_1153: {
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
  View_12_1154: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("15.16390107368511%")
  },
  View_12_1155: {
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
  View_12_1156: {
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
  ImageBackground_12_1157: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000016676272199589448%")
  },
  View_58_16: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.59722222222223%"),
    top: hp("1.3661535711236326%"),
    justifyContent: "center"
  },
  Text_58_16: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_2861: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.597222222222225%"),
    top: hp("2.45904974598702%")
  },
  View_12_1158: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.23611111111111%"),
    top: hp("1.775956284153004%")
  },
  ImageBackground_12_1159: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_1160: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.8196721311475414%")
  },
  View_12_1161: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.61505126953125%"),
    top: hp("1.775956284153004%")
  },
  ImageBackground_12_1162: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333428%"),
    top: hp("0.6830601092896167%")
  },
  ImageBackground_12_1163: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_5593: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("16.80327868852459%")
  },
  View_57_2860: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.583333333333332%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_2860: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_2856: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2857: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_2858: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_3501: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_3501: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_3502: {
    width: wp("0.4166666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333336%")
  },
  View_12_1177: {
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
  View_12_1178: {
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
  View_12_1179: {
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
  View_12_1180: {
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
  Text_12_1180: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1181: {
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
  View_12_1182: {
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
  View_12_1183: {
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
  View_12_1184: {
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
  Text_12_1184: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1185: {
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
  View_12_1186: {
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
  View_12_1187: {
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
  Text_12_1187: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1188: {
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
  View_12_1189: {
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_12_1190: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830618811435387%"),
    minHeight: hp("6.830618811435387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000016676272199453553%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_12_1191: {
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_12_1192: {
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    top: hp("0.956300829277664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70518663194444%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_1193: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.17982991536459%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_1194: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_1195: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158833821614583%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_1196: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.979037814670139%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_1197: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.51845974392361%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_1198: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338663736979166%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_1199: {
    width: wp("6.2873538335164385%"),
    top: hp("0.000016676272199453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    justifyContent: "flex-start"
  },
  Text_12_1199: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_12_1200: {
    width: wp("31.52777777777778%"),
    minWidth: wp("31.52777777777778%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("20.76502732240437%")
  },
  ImageBackground_12_1201: {
    width: wp("31.52777777777778%"),
    minWidth: wp("31.52777777777778%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_1202: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    top: hp("2.185792349726775%")
  },
  View_12_1203: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_1204: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(233, 224, 248, 1)",
    borderWidth: 1
  },
  View_12_1205: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_12_1206: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.930555555555557%"),
    top: hp("7.923497267759565%"),
    resizeMode: "cover"
  },
  ImageBackground_12_1207: {
    width: wp("4.166666931576199%"),
    minWidth: wp("4.166666931576199%"),
    height: hp("8.196721832608917%"),
    minHeight: hp("8.196721832608917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%"),
    top: hp("4.918032786885245%")
  },
  ImageBackground_12_1208: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("4.918032786885245%")
  },
  View_12_1209: {
    width: wp("1.6617090172237818%"),
    minWidth: wp("1.6617090172237818%"),
    height: hp("2.5783356421632195%"),
    minHeight: hp("2.5783356421632195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222223%"),
    top: hp("7.78688524590164%")
  },
  View_12_1210: {
    width: wp("1.6617090172237818%"),
    minWidth: wp("1.6617090172237818%"),
    height: hp("2.5783356421632195%"),
    minHeight: hp("2.5783356421632195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_12_1211: {
    width: wp("0.8022044102350872%"),
    minWidth: wp("0.8022044102350872%"),
    height: hp("0.5778781703261078%"),
    minHeight: hp("0.5778781703261078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_1212: {
    width: wp("1.6617090172237818%"),
    minWidth: wp("1.6617090172237818%"),
    height: hp("0.5493410298081696%"),
    minHeight: hp("0.5493410298081696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0287592319842886%"),
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1213: {
    width: wp("1.0314056608412001%"),
    minWidth: wp("1.0314056608412001%"),
    height: hp("0.5493410298081696%"),
    minHeight: hp("0.5493410298081696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0290020385075103%"),
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1214: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819676%"),
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_12_1215: {
    width: wp("27.291666666666664%"),
    minWidth: wp("27.291666666666664%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444446%"),
    top: hp("27.049180327868854%")
  },
  View_12_1216: {
    width: wp("27.291666666666664%"),
    minWidth: wp("27.291666666666664%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1217: {
    width: wp("0.06944565309418572%"),
    minWidth: wp("0.06944565309418572%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(198, 211, 222, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_12_1218: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("4.2349726775956285%")
  },
  View_12_1219: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 242, 244, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_12_1220: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333334%")
  },
  ImageBackground_12_1222: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.59722222222222%"),
    top: hp("2.322404371584696%")
  },
  View_12_1226: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888875%"),
    top: hp("1.229508196721305%"),
    justifyContent: "flex-start"
  },
  Text_12_1226: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1227: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("20.628415300546436%")
  },
  View_12_1228: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_1229: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 242, 244, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_12_1230: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.59722222222222%"),
    top: hp("2.3224043715847102%")
  },
  View_12_1234: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888875%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_12_1234: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1235: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("12.295081967213115%")
  },
  View_12_1236: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 242, 244, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_12_1237: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.63934426229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333334%")
  },
  ImageBackground_12_1239: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.59722222222222%"),
    top: hp("2.4590163934426315%")
  },
  View_12_1243: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888875%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_12_1243: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1244: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888884%"),
    top: hp("4.918032786885249%"),
    justifyContent: "flex-start"
  },
  Text_12_1244: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6723: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    height: hp("5.874264826540087%"),
    minHeight: hp("5.874264826540087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4305555555555554%"),
    top: hp("4.098360655737707%")
  },
  ImageBackground_57_6724: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333304%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_57_6725: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333304%"),
    top: hp("5.4644808743169335%")
  },
  ImageBackground_57_6726: {
    width: wp("0.0000028109886645526986%"),
    minWidth: wp("0.0000028109886645526986%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888884%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_57_6727: {
    width: wp("0.0000028109886645526986%"),
    minWidth: wp("0.0000028109886645526986%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333304%"),
    top: hp("0.546448087431699%")
  },
  View_57_6728: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 127, 9, 1)",
    borderWidth: 1
  },
  View_57_6729: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.9189666581284115%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 127, 9, 1)",
    borderWidth: 1
  },
  View_57_6730: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555562%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 127, 9, 1)",
    borderWidth: 1
  },
  View_57_6731: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555562%"),
    top: hp("4.918032786885242%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 127, 9, 1)",
    borderWidth: 1
  },
  View_12_1245: {
    width: wp("2.361111111111111%"),
    minWidth: wp("2.361111111111111%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888884%"),
    top: hp("12.978142076502728%"),
    justifyContent: "flex-start"
  },
  Text_12_1245: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1246: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888884%"),
    top: hp("21.311475409836063%"),
    justifyContent: "flex-start"
  },
  Text_12_1246: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1247: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555554%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(249, 131, 112, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_12_1248: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555554%"),
    top: hp("14.071038251366119%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 157, 194, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_12_1249: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555554%"),
    top: hp("22.267759562841533%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(81, 195, 153, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_12_1250: {
    width: wp("0.7638888888888888%"),
    minWidth: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444438%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(198, 211, 222, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_12_1251: {
    width: wp("0.7638888888888888%"),
    minWidth: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444438%"),
    top: hp("18.169398907103826%"),
    backgroundColor: "rgba(43, 46, 53, 1)",
    borderColor: "rgba(234, 238, 241, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_12_1252: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("82.10382513661202%"),
    justifyContent: "flex-start"
  },
  Text_12_1252: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1253: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("59.8360655737705%"),
    justifyContent: "flex-start"
  },
  Text_12_1253: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1254: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.63888888888889%"),
    top: hp("61.06557377049181%")
  },
  View_12_1255: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_1256: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1257: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666679%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1258: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1259: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.51388888888889%"),
    top: hp("65.57377049180327%")
  },
  View_12_1260: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1261: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("5.737704918032804%"),
    justifyContent: "flex-start"
  },
  Text_12_1261: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1262: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555554%")
  },
  View_12_1263: {
    width: wp("3.1250299347771535%"),
    height: hp("8.468817101150263%"),
    top: hp("2.596262113644144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.16659884982639%")
  },
  ImageBackground_12_1264: {
    width: wp("1.8352100584242077%"),
    height: hp("4.997118965524142%"),
    top: hp("1.8776148394808558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2898084852430536%")
  },
  View_12_1273: {
    width: wp("2.1636974811553955%"),
    height: hp("8.468817101150263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_1274: {
    width: wp("1.7783817980024548%"),
    height: hp("2.5126358198989287%"),
    top: hp("5.956197436390013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_1275: {
    width: wp("1.6726848814222546%"),
    height: hp("2.102045674141639%"),
    top: hp("6.366767257940552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00037299262152856727%")
  },
  ImageBackground_12_1276: {
    width: wp("0.9361974398295084%"),
    height: hp("2.0669668750033354%"),
    top: hp("2.4685885736850963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4642062717013893%")
  },
  View_12_1277: {
    width: wp("0.9472752941979303%"),
    height: hp("3.8111767482236436%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2164306640625%")
  },
  ImageBackground_12_1278: {
    width: wp("0.9472752941979303%"),
    height: hp("3.678354930356552%"),
    top: hp("0.13280983179643613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_1283: {
    width: wp("0.23453275362650552%"),
    height: hp("0.26710254898488195%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.306396484375%")
  },
  ImageBackground_12_1284: {
    width: wp("0.1628383000691732%"),
    height: hp("0.18597378756830601%"),
    top: hp("0.040189816000676615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34206814236111427%")
  },
  ImageBackground_12_1285: {
    width: wp("1.7175732718573675%"),
    height: hp("4.203533735431609%"),
    top: hp("2.585622651980856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05896674262152857%")
  },
  ImageBackground_12_1286: {
    width: wp("1.7171977625952826%"),
    height: hp("1.226672709313898%"),
    top: hp("5.629642674180317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0597127278645857%")
  },
  ImageBackground_12_1287: {
    width: wp("1.7175572448306613%"),
    height: hp("1.2269212899963713%"),
    top: hp("5.562303887038922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05896674262152857%")
  },
  ImageBackground_12_1288: {
    width: wp("0.9869529141320122%"),
    height: hp("3.992848318131244%"),
    top: hp("2.5219526447233562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.059339735243057135%")
  },
  ImageBackground_12_1289: {
    width: wp("0.684210459391276%"),
    height: hp("1.5634367374774538%"),
    top: hp("2.559874487704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8830091688368071%")
  },
  View_12_1290: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_12_1290: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1291: {
    width: wp("2.0884146955278187%"),
    minWidth: wp("2.0884146955278187%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333332%"),
    top: hp("7.6502732240437155%")
  },
  View_12_1292: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1293: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7588026258680571%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1294: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37940131293402857%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1295: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1382039388020857%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1296: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5243869357638893%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1297: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8800862630208357%"),
    top: hp("0%"),
    backgroundColor: "rgba(54, 182, 33, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1298: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("21.311475409836063%"),
    justifyContent: "flex-start"
  },
  Text_12_1298: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1299: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.930555555555557%")
  },
  ImageBackground_12_1301: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("59.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.930555555555557%")
  },
  View_12_1303: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444446%"),
    top: hp("87.70491803278689%")
  },
  View_12_1304: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1305: {
    width: wp("9.930555555555555%"),
    minWidth: wp("9.930555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7708333333333321%"),
    top: hp("2.1174863387978036%"),
    justifyContent: "flex-start"
  },
  Text_12_1305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_12_1306: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.51388888888889%"),
    top: hp("87.70491803278689%")
  },
  View_12_1307: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1308: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7847222222222214%"),
    top: hp("2.1174863387978036%"),
    justifyContent: "flex-start"
  },
  Text_12_1308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_12_1309: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444446%"),
    top: hp("95.21857923497268%")
  },
  View_12_1310: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1311: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9930555555555545%"),
    top: hp("2.1174863387978036%"),
    justifyContent: "flex-start"
  },
  Text_12_1311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_12_1312: {
    width: wp("27.291666666666664%"),
    minWidth: wp("27.291666666666664%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444446%"),
    top: hp("102.73224043715848%")
  },
  View_12_1313: {
    width: wp("27.291666666666664%"),
    minWidth: wp("27.291666666666664%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1314: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.48611111111111%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_12_1314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_12_1315: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.51388888888889%"),
    top: hp("95.21857923497268%")
  },
  View_12_1316: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1317: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7152777777777786%"),
    top: hp("2.1174863387978036%"),
    justifyContent: "flex-start"
  },
  Text_12_1317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_12_1318: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777786%"),
    top: hp("112.97814207650272%")
  },
  View_12_1319: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737736%"),
    justifyContent: "flex-start"
  },
  Text_12_1319: {
    color: "rgba(47, 43, 102, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1320: {
    width: wp("1.8055555555555554%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34722222222222054%")
  },
  View_12_1321: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041666666666667%"),
    top: hp("112.84153005464482%")
  },
  ImageBackground_12_1322: {
    width: wp("1.6666666666666667%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.041666666666666%")
  },
  View_12_1323: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_12_1323: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1324: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25%"),
    top: hp("112.84153005464482%")
  },
  View_12_1325: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_12_1325: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1326: {
    width: wp("1.6666666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_12_1327: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.805555555555557%"),
    top: hp("112.84153005464482%")
  },
  ImageBackground_12_1328: {
    width: wp("1.3888888888888888%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%")
  },
  View_12_1329: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_12_1329: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1330: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.305555555555557%"),
    top: hp("113.25136612021858%")
  },
  View_12_1331: {
    width: wp("1.4856212668948703%"),
    minWidth: wp("1.4856212668948703%"),
    height: hp("2.3051142041149038%"),
    minHeight: hp("2.3051142041149038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34722222222222143%"),
    top: hp("0%")
  },
  View_12_1332: {
    width: wp("1.4856212668948703%"),
    minWidth: wp("1.4856212668948703%"),
    height: hp("2.3051142041149038%"),
    minHeight: hp("2.3051142041149038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_12_1333: {
    width: wp("0.717195471127828%"),
    minWidth: wp("0.717195471127828%"),
    height: hp("0.5166409119882219%"),
    minHeight: hp("0.5166409119882219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_1334: {
    width: wp("1.4856191476186116%"),
    minWidth: wp("1.4856191476186116%"),
    height: hp("0.49112781149442075%"),
    minHeight: hp("0.49112781149442075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9197297643442823%"),
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1335: {
    width: wp("0.9221084912618002%"),
    minWidth: wp("0.9221084912618002%"),
    height: hp("0.49112781149442075%"),
    minHeight: hp("0.49112781149442075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.8139781847677625%"),
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1336: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    justifyContent: "flex-start"
  },
  Text_12_1336: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1337: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444446%"),
    top: hp("65.57377049180327%")
  },
  View_12_1338: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_12_1339: {
    width: wp("2.4998977449205184%"),
    height: hp("8.059899272814475%"),
    top: hp("2.595661767844959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6527099609375%")
  },
  View_12_1340: {
    width: wp("2.499897215101454%"),
    height: hp("8.058754342501281%"),
    top: hp("0.0011339865095578716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1341: {
    width: wp("2.499897215101454%"),
    height: hp("8.058754342501281%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_1342: {
    width: wp("1.8068108293745253%"),
    height: hp("3.6995642823599724%"),
    top: hp("2.132228163422127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02098931206597321%")
  },
  ImageBackground_12_1343: {
    width: wp("2.2950281037224665%"),
    height: hp("4.878204116404382%"),
    top: hp("3.1805653389685773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_1344: {
    width: wp("1.7342678705851235%"),
    height: hp("4.17598948452642%"),
    top: hp("2.572081518954917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7396104600694464%")
  },
  ImageBackground_12_1345: {
    width: wp("2.2880199220445423%"),
    height: hp("5.152199437709454%"),
    top: hp("2.6922840889685773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.058932834201389284%")
  },
  ImageBackground_12_1346: {
    width: wp("1.9748886426289876%"),
    height: hp("4.946949442879099%"),
    top: hp("2.786471674351091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3292507595486107%")
  },
  ImageBackground_12_1347: {
    width: wp("1.2878566318088107%"),
    height: hp("1.873540096595639%"),
    top: hp("3.877466754183743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9930419921874982%")
  },
  ImageBackground_12_1348: {
    width: wp("1.383334928088718%"),
    height: hp("1.4454419495629482%"),
    top: hp("2.419860506318301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7496134440104179%")
  },
  ImageBackground_12_1349: {
    width: wp("0.7382205459806654%"),
    height: hp("2.035731435473499%"),
    top: hp("0.7015040663422099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35993787977430536%")
  },
  ImageBackground_12_1350: {
    width: wp("0.7383581002553304%"),
    height: hp("2.0328589475871435%"),
    top: hp("0.7028715206625691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35919189453125%")
  },
  ImageBackground_12_1354: {
    width: wp("0.9964127010769314%"),
    height: hp("2.007264517695526%"),
    top: hp("1.7510419334870164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.503499348958334%")
  },
  ImageBackground_12_1355: {
    width: wp("1.444758309258355%"),
    height: hp("2.943643976430424%"),
    top: hp("0.40446630592553845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7985772026909732%")
  },
  ImageBackground_12_1356: {
    width: wp("1.4440745777553983%"),
    height: hp("2.8724321250707074%"),
    top: hp("0.4752737576844197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7989501953125018%")
  },
  ImageBackground_12_1359: {
    width: wp("0.34014105796813965%"),
    height: hp("0.6859972177307463%"),
    top: hp("0.4156727608435773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1568874782986125%")
  },
  ImageBackground_12_1360: {
    width: wp("0.30229104889763725%"),
    height: hp("0.6459819814546512%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5847778320312518%")
  },
  ImageBackground_12_1361: {
    width: wp("0.9967872831556532%"),
    height: hp("2.0385252322004144%"),
    top: hp("4.786456999231561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.356913248697916%")
  },
  ImageBackground_12_1362: {
    width: wp("0.5915264288584392%"),
    height: hp("0.6859054982336492%"),
    top: hp("5.187921576161202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4964124891493054%")
  },
  ImageBackground_12_1363: {
    width: wp("0.11578427420722115%"),
    height: hp("1.048059411387626%"),
    top: hp("5.699716369962431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0729234483506946%")
  },
  ImageBackground_12_1364: {
    width: wp("0.21706687079535592%"),
    height: hp("0.94642534933455%"),
    top: hp("6.65046400059768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4046563042534732%")
  },
  ImageBackground_12_1365: {
    width: wp("0.3482888804541694%"),
    height: hp("2.226585638327677%"),
    top: hp("3.1840673561304698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32514784071180713%")
  },
  ImageBackground_12_1366: {
    width: wp("0.07173336214489408%"),
    height: hp("0.7864040103766435%"),
    top: hp("4.566597026553964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33186170789930713%")
  },
  ImageBackground_12_1367: {
    width: wp("0.6395055188073052%"),
    height: hp("0.8256956527793343%"),
    top: hp("3.4270072895320993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5085584852430554%")
  },
  ImageBackground_12_1368: {
    width: wp("0.32671941651238334%"),
    height: hp("0.48798915466975645%"),
    top: hp("3.809027333077182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14102511935763928%")
  },
  ImageBackground_12_1369: {
    width: wp("0.2333586745791965%"),
    height: hp("0.4807810965782958%"),
    top: hp("3.772973232581961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7309909396701375%")
  },
  ImageBackground_12_1370: {
    width: wp("0.2059210671318902%"),
    height: hp("0.25012167425103526%"),
    top: hp("3.272018015710387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1826917860243054%")
  },
  ImageBackground_12_1371: {
    width: wp("0.3053780396779378%"),
    height: hp("0.47645620961006874%"),
    top: hp("3.0874783875512293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7549370659722232%")
  },
  ImageBackground_12_1372: {
    width: wp("0.04839354091220432%"),
    height: hp("0.24651725435517524%"),
    top: hp("3.225891446806685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8982340494791661%")
  },
  ImageBackground_12_1373: {
    width: wp("0.047174294789632164%"),
    height: hp("0.2775121907718846%"),
    top: hp("3.4067956476263674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2931315104166696%")
  },
  ImageBackground_12_1374: {
    width: wp("0.2398611439598931%"),
    height: hp("0.7424351947555125%"),
    top: hp("2.5021745858948066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19805908203125%")
  },
  ImageBackground_12_1375: {
    width: wp("0.06867289543151855%"),
    height: hp("0.3157154458468077%"),
    top: hp("2.6960862790300553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29381646050347143%")
  },
  ImageBackground_12_1376: {
    width: wp("0.19451618194580078%"),
    height: hp("1.9714183494692943%"),
    top: hp("3.4882759135929007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9452582465277803%")
  },
  ImageBackground_12_1377: {
    width: wp("0.14284663730197483%"),
    height: hp("0.3395028453055627%"),
    top: hp("4.604085286458329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9491916232638875%")
  },
  ImageBackground_12_1378: {
    width: wp("0.35661737124125165%"),
    height: hp("1.3399877183424318%"),
    top: hp("3.196341092469268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3091701931423625%")
  },
  ImageBackground_12_1379: {
    width: wp("0.052280955844455294%"),
    height: hp("0.37121798822788593%"),
    top: hp("4.305646719176906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3871934678819446%")
  },
  ImageBackground_12_1380: {
    width: wp("0.2847268184026082%"),
    height: hp("1.73427133612294%"),
    top: hp("2.967109054815566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6869167751736107%")
  },
  ImageBackground_12_1381: {
    width: wp("0.10996414555443658%"),
    height: hp("0.7193685229358777%"),
    top: hp("4.218429815573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6527370876736107%")
  },
  ImageBackground_12_1382: {
    width: wp("0.09819984436035156%"),
    height: hp("0.7900089514060099%"),
    top: hp("3.369340740266381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8317735460069446%")
  },
  ImageBackground_12_1383: {
    width: wp("0.12251319156752694%"),
    height: hp("1.1554603368206753%"),
    top: hp("3.5459091103141986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18680148654513928%")
  },
  ImageBackground_12_1384: {
    width: wp("0.11014739672342937%"),
    height: hp("0.48943087051474987%"),
    top: hp("2.5605748911372928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5677286783854161%")
  },
  ImageBackground_12_1385: {
    width: wp("0.29281920856899685%"),
    height: hp("1.0329225675655844%"),
    top: hp("3.5725911458333286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.871982150607641%")
  },
  ImageBackground_12_1386: {
    width: wp("0.29462258021036786%"),
    height: hp("1.2751146743857795%"),
    top: hp("3.549544537653688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4020453559027803%")
  },
  ImageBackground_12_1387: {
    width: wp("0.20475904146830243%"),
    height: hp("0.1165348323967939%"),
    top: hp("3.820433903261602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.014838324652777%")
  },
  ImageBackground_12_1388: {
    width: wp("0.1880277527703179%"),
    height: hp("0.431045157010438%"),
    top: hp("3.326782893613384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9561767578125018%")
  },
  ImageBackground_12_1389: {
    width: wp("0.19655386606852215%"),
    height: hp("0.15064979511531976%"),
    top: hp("3.907050461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.302083333333334%")
  },
  ImageBackground_12_1390: {
    width: wp("0.767764515346951%"),
    height: hp("1.808515923922179%"),
    top: hp("1.7991696550546408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6986083984375018%")
  },
  ImageBackground_12_1391: {
    width: wp("0.4015166229671902%"),
    height: hp("0.39322669388817966%"),
    top: hp("0.7026714053961598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6966484917534714%")
  },
  ImageBackground_12_1392: {
    width: wp("0.30101696650187176%"),
    height: hp("0.2943795235430608%"),
    top: hp("0.7518664083845579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7468668619791679%")
  },
  ImageBackground_12_1393: {
    width: wp("0.25121861033969456%"),
    height: hp("0.36990375466685477%"),
    top: hp("0.4061339331454832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1529541015625018%")
  },
  ImageBackground_12_1394: {
    width: wp("0.16779224077860513%"),
    height: hp("0.24714502480512107%"),
    top: hp("0.4674692622950829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.194559733072916%")
  },
  ImageBackground_12_1395: {
    width: wp("0.2812725967831082%"),
    height: hp("0.24014631581436738%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.584370930989584%")
  },
  ImageBackground_12_1396: {
    width: wp("0.1908678478664822%"),
    height: hp("0.16300694538595897%"),
    top: hp("0.03878900913592531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6296386718750018%")
  },
  View_12_1397: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_12_1397: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1398: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888888%")
  },
  View_12_1399: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("5.737704918032804%"),
    justifyContent: "flex-start"
  },
  Text_12_1399: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1400: {
    width: wp("2.0884146955278187%"),
    minWidth: wp("2.0884146955278187%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.624999999999999%"),
    top: hp("7.6502732240437155%")
  },
  View_12_1401: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1402: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7588026258680571%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1403: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37940131293402857%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1404: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.138203938802084%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1405: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5243869357638893%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1406: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.880086263020834%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 61, 80, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1407: {
    width: wp("23.81951226128472%"),
    minWidth: wp("23.81951226128472%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("20.76502732240437%")
  },
  View_12_1408: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_6611: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("93.5792349726776%")
  },
  View_57_6612: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
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
  ImageBackground_57_6613: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666671%"),
    top: hp("3.4153005464481083%")
  },
  View_57_6614: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3472222222222285%"),
    top: hp("2.732240437158481%"),
    justifyContent: "center"
  },
  Text_57_6614: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6615: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.732240437158481%")
  },
  View_57_6616: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_6617: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222285%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_6617: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_6618: {
    width: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1409: {
    width: wp("23.819444444444443%"),
    minWidth: wp("23.819444444444443%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027856727%"),
    top: hp("63.661202185792355%")
  },
  View_12_1410: {
    width: wp("23.819444444444443%"),
    minWidth: wp("23.819444444444443%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  ImageBackground_12_1411: {
    width: wp("0.9722222222222222%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.72222222222222%")
  },
  ImageBackground_12_1412: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.458333333333336%")
  },
  View_12_1414: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.5956284153005384%"),
    justifyContent: "center"
  },
  Text_12_1414: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1538: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.69398907103825%")
  },
  View_12_1539: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_12_1540: {
    width: wp("0.9722222222222222%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.722222222222214%")
  },
  ImageBackground_12_1541: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.45833333333333%")
  },
  View_12_1542: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.5956284153005384%"),
    justifyContent: "center"
  },
  Text_12_1542: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1543: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027856727%"),
    top: hp("70.62841530054644%")
  },
  View_12_1544: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_12_1545: {
    width: wp("0.9722222222222222%"),
    height: hp("2.185792349726776%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.72222222222222%")
  },
  ImageBackground_12_1546: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.458333333333336%")
  },
  View_12_1547: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "center"
  },
  Text_12_1547: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6117: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027856727%"),
    top: hp("77.3224043715847%")
  },
  View_57_6118: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_57_6119: {
    width: wp("0.9722222222222222%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.72222222222222%")
  },
  ImageBackground_57_6120: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.458333333333336%")
  },
  View_57_6121: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "center"
  },
  Text_57_6121: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6132: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84.01639344262296%")
  },
  View_57_6133: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_57_6134: {
    width: wp("0.9722222222222222%"),
    height: hp("2.185792349726776%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.652845594618057%")
  },
  ImageBackground_57_6135: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.38895670572917%")
  },
  View_57_6136: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3195122612847143%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "center"
  },
  Text_57_6136: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_2145: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_1516: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("9.562841530054644%")
  },
  View_12_1517: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1517: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1518: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021854%")
  },
  View_12_1519: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_1520: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("1.5027322404371617%"),
    justifyContent: "center"
  },
  Text_12_1520: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1521: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.72222222222223%"),
    top: hp("2.4590163934426315%")
  },
  View_12_1415: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_1416: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_12_1417: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%"),
    top: hp("3.1420765027322375%")
  },
  View_12_1418: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("1.9125683060109289%"),
    justifyContent: "center"
  },
  Text_12_1418: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6654: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("32.37704918032787%"),
    minHeight: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.584699453551913%")
  },
  View_57_6655: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_6656: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_6657: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_57_6658: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%"),
    top: hp("3.1420765027322375%")
  },
  View_57_6659: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "center"
  },
  Text_57_6659: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6660: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("9.562841530054648%")
  },
  View_57_6661: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_6661: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6662: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("13.251366120218577%")
  },
  View_57_6663: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.661202185792362%")
  },
  View_57_6664: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_6665: {
    width: wp("1.8055555555555554%"),
    minWidth: wp("1.8055555555555554%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_57_6665: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6666: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896174%")
  },
  View_57_6667: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_57_6668: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "center"
  },
  Text_57_6668: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6669: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_6670: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_6671: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_57_6671: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_6672: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.02777777777777%"),
    top: hp("2.4590163934426243%")
  },
  View_12_1437: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("20.76502732240437%")
  },
  View_12_1438: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_12_1439: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_5643: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    minHeight: hp("6.8306031774302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_5644: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_5645: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    minHeight: hp("6.8306031774302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_57_5646: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.347222222222221%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_57_5647: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  View_57_5648: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.26385498046875%"),
    top: hp("1.5027322404371581%"),
    justifyContent: "center"
  },
  Text_57_5648: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1442: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("83.06010928961749%"),
    minHeight: hp("83.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475407%")
  },
  View_12_1443: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("4.508199848112513%"),
    minHeight: hp("4.508199848112513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240437%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_12_1444: {
    width: wp("15.208333333333332%"),
    minWidth: wp("15.208333333333332%"),
    height: hp("83.06010928961749%"),
    minHeight: hp("83.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("0%")
  },
  View_12_1445: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666714%"),
    top: hp("4.508196721311478%"),
    justifyContent: "center"
  },
  Text_12_1445: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1446: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.66120218579235%")
  },
  View_12_1447: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1447: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1448: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1449: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.5792349726776%")
  },
  View_12_1450: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1450: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1451: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1452: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.63387978142076%")
  },
  View_12_1453: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1453: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1454: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1455: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.68852459016394%")
  },
  View_12_1456: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1456: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1457: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1458: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.7431693989071%")
  },
  View_12_1459: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1459: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1460: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1461: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.797814207650276%")
  },
  View_12_1462: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1462: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1463: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1464: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%")
  },
  View_12_1465: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1465: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1466: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1467: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.90710382513663%")
  },
  View_12_1468: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1468: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1469: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967212838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1470: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78.96174863387978%")
  },
  View_12_1471: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1471: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1472: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1473: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1473: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1474: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666671%"),
    top: hp("38.797814207650276%")
  },
  ImageBackground_12_1475: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("39.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%")
  },
  ImageBackground_12_1476: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666671%"),
    top: hp("34.42622950819673%")
  },
  ImageBackground_12_1477: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%")
  },
  View_12_1478: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666671%"),
    top: hp("42.759562841530055%")
  },
  ImageBackground_12_1479: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_12_1480: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777146%")
  },
  ImageBackground_12_1481: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_1482: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("6.01092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  ImageBackground_12_1483: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("9.972677595628419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  ImageBackground_12_1484: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("14.207650273224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  ImageBackground_12_1485: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("18.169398907103833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  View_12_1486: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%"),
    top: hp("20.9016393442623%")
  },
  View_12_1487: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1487: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1488: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_12_1489: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.902777777777771%")
  },
  ImageBackground_12_1490: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1491: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%"),
    top: hp("25%")
  },
  View_12_1492: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_12_1492: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1493: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_12_1493: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1494: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("8.333333333333336%"),
    justifyContent: "center"
  },
  Text_12_1494: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_1495: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.625%"),
    top: hp("1.092896174863391%")
  },
  ImageBackground_12_1496: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.902777777777771%")
  },
  ImageBackground_12_1497: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_1498: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("34.56284153005465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%")
  },
  ImageBackground_12_1499: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("30.464480874316948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%")
  },
  View_12_2102: {
    width: wp("23.75%"),
    minWidth: wp("23.75%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.25%"),
    top: hp("20.76502732240437%")
  },
  View_12_1426: {
    width: wp("23.75%"),
    minWidth: wp("23.75%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_12_2046: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("1.3661202185792334%")
  },
  View_12_2047: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_12_2048: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888999%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "center"
  },
  Text_12_2048: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_2050: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("9.562841530054644%")
  },
  View_12_2051: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_12_2100: {
    width: wp("0.6011631753709581%"),
    minWidth: wp("0.6011631753709581%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.97222222222223%"),
    top: hp("3.2786885245901622%")
  },
  View_12_2076: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888999%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "center"
  },
  Text_12_2076: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_5199: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("17.759562841530055%")
  },
  View_57_5200: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_57_5201: {
    width: wp("0.6011631753709581%"),
    minWidth: wp("0.6011631753709581%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.97222222222223%"),
    top: hp("3.278688524590166%")
  },
  View_57_5202: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888999%"),
    top: hp("2.322404371584703%"),
    justifyContent: "center"
  },
  Text_57_5202: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_5203: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.142077023865747%"),
    minHeight: hp("3.142077023865747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.736111111111114%"),
    top: hp("1.775956284153004%")
  },
  View_57_5204: {
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
  View_57_5205: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222143%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_57_5205: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_12_2067: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("26.09289617486339%")
  },
  View_12_2068: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_12_2101: {
    width: wp("0.6011631753709581%"),
    minWidth: wp("0.6011631753709581%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.97222222222223%"),
    top: hp("3.2786885245901587%")
  },
  View_12_2077: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888999%"),
    top: hp("2.322404371584696%"),
    justifyContent: "center"
  },
  Text_12_2077: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_2073: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("3.142077544999253%"),
    minHeight: hp("3.142077544999253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333329%"),
    top: hp("1.775956284153004%")
  },
  View_12_2074: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_12_2075: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("0.5464480874316919%"),
    justifyContent: "center"
  },
  Text_12_2075: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4340: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("34.2896174863388%")
  },
  View_57_4341: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderColor: "rgba(194, 205, 215, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_57_4342: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25%"),
    top: hp("3.415300546448087%")
  },
  View_57_4343: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3472222222222285%"),
    top: hp("2.732240437158474%"),
    justifyContent: "center"
  },
  Text_57_4343: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4344: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.732240437158474%")
  },
  View_57_4345: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4346: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222285%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_4346: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4347: {
    width: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_137_150: {
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
  View_I137_150_137_1: {
    flexGrow: 1,
    width: wp("8.333335452609592%"),
    height: hp("4.09836274027173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222229%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_150_137_2: {
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
  View_I137_150_137_3: {
    width: wp("0.06944444444444445%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.180555555555557%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  ImageBackground_I137_150_137_4: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888886%")
  },
  View_I137_150_137_5: {
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
  View_I137_150_137_6: {
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
  View_I137_150_137_7: {
    width: wp("2.013888888888889%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777857%"),
    justifyContent: "center"
  },
  Text_I137_150_137_7: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_150_137_8: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.125000000000014%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_150_137_9: {
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I137_150_137_10: {
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
  View_I137_150_137_11: {
    width: wp("3.194444444444444%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    justifyContent: "center"
  },
  Text_I137_150_137_11: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_150_137_12: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_150_137_13: {
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
  View_I137_150_137_14: {
    width: wp("4.930555555555555%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111285%"),
    justifyContent: "center"
  },
  Text_I137_150_137_14: {
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

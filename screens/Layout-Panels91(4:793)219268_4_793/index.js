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
      <View style={styles.View_4_794} />
      <View style={styles.View_4_801}>
        <Text style={styles.Text_4_801}>secondary nav</Text>
      </View>
      <View style={styles.View_4_802} />
      <View style={styles.View_4_803}>
        <View style={styles.View_4_804}>
          <View style={styles.View_4_805}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_4_806}
            />
            <View style={styles.View_4_807}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
                }}
                style={styles.ImageBackground_4_808}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_4_809}
              />
            </View>
            <View style={styles.View_4_810}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_4_811}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
                }}
                style={styles.ImageBackground_4_812}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_4_813}>
        <View style={styles.View_4_814}>
          <View style={styles.View_4_815} />
          <View style={styles.View_4_816}>
            <Text style={styles.Text_4_816}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_817}>
        <View style={styles.View_4_818}>
          <View style={styles.View_4_819} />
          <View style={styles.View_4_820} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_12_2150}
          />
          <View style={styles.View_4_821}>
            <Text style={styles.Text_4_821}>save</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_822}>
        <View style={styles.View_4_823}>
          <View style={styles.View_4_824} />
          <View style={styles.View_4_825}>
            <Text style={styles.Text_4_825}>properties</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_826}>
        <View style={styles.View_4_827}>
          <View style={styles.View_4_828} />
          <View style={styles.View_4_829}>
            <Text style={styles.Text_4_829}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_4_830}>
          <View style={styles.View_4_831} />
          <View style={styles.View_4_832} />
          <View style={styles.View_4_833}>
            <Text style={styles.Text_4_833}>Design</Text>
          </View>
        </View>
        <View style={styles.View_4_834}>
          <View style={styles.View_4_835} />
          <View style={styles.View_4_836}>
            <Text style={styles.Text_4_836}>Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_837}>
        <View style={styles.View_4_838} />
      </View>
      <View style={styles.View_4_839}>
        <View style={styles.View_4_840} />
        <View style={styles.View_4_841} />
        <View style={styles.View_4_842} />
        <View style={styles.View_4_843} />
        <View style={styles.View_4_844} />
        <View style={styles.View_4_845} />
        <View style={styles.View_4_846} />
        <View style={styles.View_4_847} />
        <View style={styles.View_4_848}>
          <Text style={styles.Text_4_848}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_4_849}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29f1/26e6/22e2c3740b23bb7606346537a03d3302"
          }}
          style={styles.ImageBackground_4_850}
        />
        <View style={styles.View_4_851}>
          <View style={styles.View_4_852} />
          <View style={styles.View_4_853}>
            <View style={styles.View_4_854} />
            <View style={styles.View_4_855}>
              <View style={styles.View_4_856}>
                <Text style={styles.Text_4_856}>Static</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
              }}
              style={styles.ImageBackground_4_857}
            />
            <View style={styles.View_4_858}>
              <Text style={styles.Text_4_858}>Action</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_859}>
          <View style={styles.View_4_860} />
          <View style={styles.View_4_861} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa90/733c/9d86836c4af1466060dcdc9d20a978b6"
            }}
            style={styles.ImageBackground_4_862}
          />
          <View style={styles.View_4_863}>
            <Text style={styles.Text_4_863}>Element tree</Text>
          </View>
          <View style={styles.View_4_864}>
            <View style={styles.View_4_865} />
            <View style={styles.View_4_866}>
              <View style={styles.View_4_867}>
                <Text style={styles.Text_4_867}>
                  Group 77 Group 76 Group 75 Appointment
                </Text>
              </View>
              <View style={styles.View_4_868}>
                <View style={styles.View_4_869}>
                  <Text style={styles.Text_4_869}>Today’s progress</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_870}
                />
              </View>
              <View style={styles.View_4_871}>
                <View style={styles.View_4_872}>
                  <Text style={styles.Text_4_872}>Heart rate</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_873}
                />
              </View>
              <View style={styles.View_4_874}>
                <View style={styles.View_4_875}>
                  <Text style={styles.Text_4_875}>Oxygen Level</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_876}
                />
              </View>
              <View style={styles.View_4_877}>
                <View style={styles.View_4_878}>
                  <Text style={styles.Text_4_878}>Contact provider</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_879}
                />
              </View>
              <View style={styles.View_4_880}>
                <View style={styles.View_4_881}>
                  <Text style={styles.Text_4_881}>Daily plan</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_882}
                />
              </View>
              <View style={styles.View_4_883}>
                <View style={styles.View_4_884}>
                  <Text style={styles.Text_4_884}>Messages</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_885}
                />
              </View>
              <View style={styles.View_4_886}>
                <View style={styles.View_4_887}>
                  <Text style={styles.Text_4_887}>Add a vital</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_888}
                />
              </View>
              <View style={styles.View_4_889}>
                <View style={styles.View_4_890}>
                  <Text style={styles.Text_4_890}>Emergency</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_891}
                />
              </View>
              <View style={styles.View_4_892}>
                <View style={styles.View_4_893}>
                  <Text style={styles.Text_4_893}>Bottom menu</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                  }}
                  style={styles.ImageBackground_4_894}
                />
              </View>
              <View style={styles.View_4_895}>
                <Text style={styles.Text_4_895}>Daily plan</Text>
              </View>
              <View style={styles.View_4_896}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                  }}
                  style={styles.ImageBackground_4_897}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                  }}
                  style={styles.ImageBackground_4_898}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                }}
                style={styles.ImageBackground_4_899}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                }}
                style={styles.ImageBackground_4_900}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                }}
                style={styles.ImageBackground_4_901}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                }}
                style={styles.ImageBackground_4_902}
              />
              <View style={styles.View_4_903}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                  }}
                  style={styles.ImageBackground_4_904}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                  }}
                  style={styles.ImageBackground_4_905}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0958/90b6/56bd20cfbe5d2cf4df09d70e88054a4a"
                }}
                style={styles.ImageBackground_4_906}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_4_907}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_4_908}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_4_909}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0958/90b6/56bd20cfbe5d2cf4df09d70e88054a4a"
                }}
                style={styles.ImageBackground_4_910}
              />
              <View style={styles.View_4_911}>
                <View style={styles.View_4_912}>
                  <Text style={styles.Text_4_912}>9:00 AM</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                  }}
                  style={styles.ImageBackground_4_913}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                  }}
                  style={styles.ImageBackground_4_914}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3162/441e/42d616aae88df8d2a97967f7f8a9eba8"
                  }}
                  style={styles.ImageBackground_4_915}
                />
              </View>
              <View style={styles.View_4_916}>
                <View style={styles.View_4_917}>
                  <Text style={styles.Text_4_917}>Take vitals</Text>
                </View>
                <View style={styles.View_4_918}>
                  <Text style={styles.Text_4_918}>Checkbox</Text>
                </View>
                <View style={styles.View_4_919}>
                  <Text style={styles.Text_4_919}>Menu</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                  }}
                  style={styles.ImageBackground_4_920}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                  }}
                  style={styles.ImageBackground_4_921}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3162/441e/42d616aae88df8d2a97967f7f8a9eba8"
                  }}
                  style={styles.ImageBackground_4_922}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c9a/a839/9e2beb4894bc23157be3724b3db106f1"
                }}
                style={styles.ImageBackground_4_923}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd65/daf4/fb34b1eddac1e628311fb50ae08b606b"
                }}
                style={styles.ImageBackground_4_924}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_4_925}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9aa/c79d/493066fb0a853502ba7526963b8908b1"
          }}
          style={styles.ImageBackground_4_926}
        />
        <View style={styles.View_4_927}>
          <View style={styles.View_4_928}>
            <View style={styles.View_4_929} />
            <View style={styles.View_4_930} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2daf/8f46/2ccb4d85f893ee1a2d032062a6ea7260"
              }}
              style={styles.ImageBackground_4_931}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1522/4224/756f70c48c8c557f29f228db9546401a"
              }}
              style={styles.ImageBackground_4_932}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/1272/6c1d39ecc9a339fa37e698bb2e0fd6c6"
              }}
              style={styles.ImageBackground_4_933}
            />
            <View style={styles.View_4_934}>
              <View style={styles.View_4_935}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e9/0bda/ad10637ccb2842e4ebd64fdf776ce05a"
                  }}
                  style={styles.ImageBackground_4_936}
                />
                <View style={styles.View_4_937} />
                <View style={styles.View_4_938} />
              </View>
            </View>
            <View style={styles.View_4_939} />
            <View style={styles.View_4_940}>
              <View style={styles.View_4_941} />
              <View style={styles.View_4_942} />
              <View style={styles.View_4_943}>
                <View style={styles.View_4_944} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
                  }}
                  style={styles.ImageBackground_4_945}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                  }}
                  style={styles.ImageBackground_4_947}
                />
                <View style={styles.View_4_951}>
                  <Text style={styles.Text_4_951}>Take Vitals</Text>
                </View>
              </View>
              <View style={styles.View_4_952}>
                <View style={styles.View_4_953}>
                  <View style={styles.View_4_954} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                    }}
                    style={styles.ImageBackground_4_955}
                  />
                  <View style={styles.View_4_959}>
                    <Text style={styles.Text_4_959}>James Sawyer</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_4_960}>
                <View style={styles.View_4_961} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
                  }}
                  style={styles.ImageBackground_4_962}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                  }}
                  style={styles.ImageBackground_4_964}
                />
                <View style={styles.View_4_968}>
                  <Text style={styles.Text_4_968}>Medication</Text>
                </View>
              </View>
              <View style={styles.View_4_969}>
                <Text style={styles.Text_4_969}>9:00 AM</Text>
              </View>
              <View style={styles.View_4_970}>
                <Text style={styles.Text_4_970}>10:00 AM</Text>
              </View>
              <View style={styles.View_4_971}>
                <Text style={styles.Text_4_971}>11:00 AM</Text>
              </View>
              <View style={styles.View_4_972} />
              <View style={styles.View_4_973} />
              <View style={styles.View_4_974} />
              <View style={styles.View_4_975} />
              <View style={styles.View_4_976} />
            </View>
            <View style={styles.View_4_977}>
              <Text style={styles.Text_4_977}>All Services</Text>
            </View>
            <View style={styles.View_4_978}>
              <Text style={styles.Text_4_978}>Today’s Progress</Text>
            </View>
            <View style={styles.View_4_979}>
              <View style={styles.View_4_980}>
                <View style={styles.View_4_981} />
                <View style={styles.View_4_982} />
                <View style={styles.View_4_983} />
              </View>
            </View>
          </View>
          <View style={styles.View_4_984}>
            <View style={styles.View_4_985} />
            <View style={styles.View_4_986}>
              <Text style={styles.Text_4_986}>98</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/197e/6076/ad76023f05c13b6c561f252fad066002"
              }}
              style={styles.ImageBackground_4_987}
            />
            <View style={styles.View_4_988}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7410/0793/0cef7579bf480fdfe55cde52fc885645"
                }}
                style={styles.ImageBackground_4_989}
              />
              <View style={styles.View_4_998}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4836/bfbc/97fee081151da251bda49bdf187e0362"
                  }}
                  style={styles.ImageBackground_4_999}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8a5/37dd/5894da93134402405530aafa64efc8bd"
                  }}
                  style={styles.ImageBackground_4_1000}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4289/b189/723b51b97e5549f3c7db350a3131519e"
                  }}
                  style={styles.ImageBackground_4_1001}
                />
                <View style={styles.View_4_1002}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d06/9d92/92cc0c91d13bb793db3785c3fe4cec94"
                    }}
                    style={styles.ImageBackground_4_1003}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2932/5dd4/7ce21c2be9cf8edc2c860b2e4354ffc8"
                    }}
                    style={styles.ImageBackground_4_1008}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5341/e82f/c91b371f1fafca1bb177c790756ed259"
                    }}
                    style={styles.ImageBackground_4_1009}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ad/30e6/80430256a628655fb636a9b5b0339b21"
                  }}
                  style={styles.ImageBackground_4_1010}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e39c/ef3f/b09fb6d4be1ee0cb20e1ca224d544faa"
                  }}
                  style={styles.ImageBackground_4_1011}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b9f/f733/c68bffd72bdd151c1a724b246765d6da"
                  }}
                  style={styles.ImageBackground_4_1012}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9a/2df3/977f988073885a3f8ea3735bcd2d3482"
                  }}
                  style={styles.ImageBackground_4_1013}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1381/56ee/1121b45866454425cb80ad4877c7bea9"
                  }}
                  style={styles.ImageBackground_4_1014}
                />
              </View>
            </View>
            <View style={styles.View_4_1015}>
              <Text style={styles.Text_4_1015}>Oxygen level</Text>
            </View>
            <View style={styles.View_4_1016}>
              <View style={styles.View_4_1017} />
              <View style={styles.View_4_1018} />
              <View style={styles.View_4_1019} />
              <View style={styles.View_4_1020} />
              <View style={styles.View_4_1021} />
              <View style={styles.View_4_1022} />
            </View>
          </View>
          <View style={styles.View_4_1023}>
            <Text style={styles.Text_4_1023}>Your daily plan</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
            }}
            style={styles.ImageBackground_4_1024}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
            }}
            style={styles.ImageBackground_4_1026}
          />
          <View style={styles.View_4_1028}>
            <View style={styles.View_4_1029} />
            <View style={styles.View_4_1030}>
              <Text style={styles.Text_4_1030}>Contact provider</Text>
            </View>
          </View>
          <View style={styles.View_4_1031}>
            <View style={styles.View_4_1032} />
            <View style={styles.View_4_1033}>
              <Text style={styles.Text_4_1033}>Daily plan</Text>
            </View>
          </View>
          <View style={styles.View_4_1034}>
            <View style={styles.View_4_1035} />
            <View style={styles.View_4_1036}>
              <Text style={styles.Text_4_1036}>Messages</Text>
            </View>
          </View>
          <View style={styles.View_4_1037}>
            <View style={styles.View_4_1038} />
            <View style={styles.View_4_1039}>
              <Text style={styles.Text_4_1039}>Emergency</Text>
            </View>
          </View>
          <View style={styles.View_4_1040}>
            <View style={styles.View_4_1041} />
            <View style={styles.View_4_1042}>
              <Text style={styles.Text_4_1042}>Add a vital</Text>
            </View>
          </View>
          <View style={styles.View_4_1043}>
            <View style={styles.View_4_1044}>
              <Text style={styles.Text_4_1044}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5bb/75ba/76b9f1c21957193ce99e5488e3485f6e"
              }}
              style={styles.ImageBackground_4_1045}
            />
          </View>
          <View style={styles.View_4_1046}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d6/881f/8f42ef39f8a5acb50205802452acf77c"
              }}
              style={styles.ImageBackground_4_1047}
            />
            <View style={styles.View_4_1048}>
              <Text style={styles.Text_4_1048}>Progress</Text>
            </View>
          </View>
          <View style={styles.View_4_1049}>
            <View style={styles.View_4_1050}>
              <Text style={styles.Text_4_1050}>Messages</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aed/042a/fe1851f0f493290797b3346d7b6b5bf4"
              }}
              style={styles.ImageBackground_4_1051}
            />
          </View>
          <View style={styles.View_4_1052}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/58a2/ecc020eb6ddae17ce595147ff2867c16"
              }}
              style={styles.ImageBackground_4_1053}
            />
            <View style={styles.View_4_1054}>
              <Text style={styles.Text_4_1054}>Appointments</Text>
            </View>
          </View>
          <View style={styles.View_4_1055}>
            <View style={styles.View_4_1056}>
              <View style={styles.View_4_1057}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c04/e470/748a0e6abd8db00ed7034c133b395edc"
                  }}
                  style={styles.ImageBackground_4_1058}
                />
                <View style={styles.View_4_1059} />
                <View style={styles.View_4_1060} />
              </View>
            </View>
            <View style={styles.View_4_1061}>
              <Text style={styles.Text_4_1061}>More</Text>
            </View>
          </View>
          <View style={styles.View_4_1062}>
            <View style={styles.View_4_1063} />
            <View style={styles.View_4_1064}>
              <View style={styles.View_4_1065}>
                <View style={styles.View_4_1066}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46b1/a8e3/c229c85f9aae1d7442eed83e856b89ad"
                    }}
                    style={styles.ImageBackground_4_1067}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc0/f15b/34d5b4b7eb2678cb7dee19e8985556c2"
                    }}
                    style={styles.ImageBackground_4_1068}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/436b/b098/064b4be42bfce1b85cb36375746ddb32"
                    }}
                    style={styles.ImageBackground_4_1069}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a754/28ad/ee43f390f34aebcedf725fc7b53d6606"
                    }}
                    style={styles.ImageBackground_4_1070}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2080/d370/71fa45b6a73a8cdf1fe8aa6aa458964d"
                    }}
                    style={styles.ImageBackground_4_1071}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b27/76a9/45ad2fac42cfb8e39e8979cd60323a66"
                    }}
                    style={styles.ImageBackground_4_1072}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb3c/49a7/e926de31da9a102fbcceede46f8bd848"
                    }}
                    style={styles.ImageBackground_4_1073}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a65/a0dc/7892c890ce624b9a0a6b433f2d6154c9"
                    }}
                    style={styles.ImageBackground_4_1074}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/69ab/646000ebd11f6fc4be7d79aab090672d"
                    }}
                    style={styles.ImageBackground_4_1075}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad9/bbb6/06ed3a602348ed79307b44cb1f2f2f7f"
                    }}
                    style={styles.ImageBackground_4_1079}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be32/c25b/165c3805d2b4f80505c4f2e92798f636"
                    }}
                    style={styles.ImageBackground_4_1080}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7804/4b7b/72967f753880194c65b2cb37b73ac8e0"
                    }}
                    style={styles.ImageBackground_4_1081}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8816/e0b7/55b9ba3640bfd9a94c9e7943ef529bd2"
                    }}
                    style={styles.ImageBackground_4_1084}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/699d/7c8f/cec119f27842d69c2ad969abde2a94ca"
                    }}
                    style={styles.ImageBackground_4_1085}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f681/b45a/effbe58bc422d799d9bcb61ecec020c0"
                  }}
                  style={styles.ImageBackground_4_1086}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4c/a301/8eabb73b440e4573a2a0cc6d921c6658"
                  }}
                  style={styles.ImageBackground_4_1087}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30fb/5e59/0e6dfbb04b3820510cfc696c1ae4f3c0"
                  }}
                  style={styles.ImageBackground_4_1088}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4e9/d1fa/b87b349a98dedb315abef776bec38350"
                  }}
                  style={styles.ImageBackground_4_1089}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/661a/b17d/ea79670e9c43cf0e188a5ec843321141"
                  }}
                  style={styles.ImageBackground_4_1090}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fdc/5781/5758245a396e5656834f172d5e8fb5e1"
                  }}
                  style={styles.ImageBackground_4_1091}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca4d/bd36/cd6ac68652ae274b31e373936e323ed5"
                  }}
                  style={styles.ImageBackground_4_1092}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db88/c292/72aec0da58a0efda1b2456284f1da614"
                  }}
                  style={styles.ImageBackground_4_1093}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ddd/0371/8465cccb2e3cbaa18c9f8f2c98549288"
                  }}
                  style={styles.ImageBackground_4_1094}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f4/b4df/bf2ec4e07439fb667429a7fc2136e037"
                  }}
                  style={styles.ImageBackground_4_1095}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/880e/578c/149822bd6ecd0375cbb0cbd6e445a957"
                  }}
                  style={styles.ImageBackground_4_1096}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c600/f22c/24e5ccef0c9c93c69a8c01b2f7489432"
                  }}
                  style={styles.ImageBackground_4_1097}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2a/e4af/c67279820c6e5f2f797c80cccbd8dbf2"
                  }}
                  style={styles.ImageBackground_4_1098}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c423/483d/39700a9a12c357541b7a4558db4533e0"
                  }}
                  style={styles.ImageBackground_4_1099}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f19/5f4c/f1b2420e56eaca79977c4e047d0e5866"
                  }}
                  style={styles.ImageBackground_4_1100}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f30/a9e3/97b5484b991085952a7ace58aad72f51"
                  }}
                  style={styles.ImageBackground_4_1101}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d45/7723/231baf92b32dddfc17e2e1741cb38d02"
                  }}
                  style={styles.ImageBackground_4_1102}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b43/c028/923961bc1f099a648ba761dd9c25bbf4"
                  }}
                  style={styles.ImageBackground_4_1103}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10c3/33b4/7802d56399feefd3adffa70cf40854b4"
                  }}
                  style={styles.ImageBackground_4_1104}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ece5/a4fd/650d16476d20c1e6064595c3fe8654d8"
                  }}
                  style={styles.ImageBackground_4_1105}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6294/e945/0b66c0c3959f2e34a143eff89a46c8af"
                  }}
                  style={styles.ImageBackground_4_1106}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a26a/fff6/76906147a3c5e6641a1bbf65ea269979"
                  }}
                  style={styles.ImageBackground_4_1107}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea6e/8084/570ef649836a5b8797d5665f7885f60d"
                  }}
                  style={styles.ImageBackground_4_1108}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03a7/b63e/6d44fac853c478543067f6eab1fd8f39"
                  }}
                  style={styles.ImageBackground_4_1109}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9bd/ff5d/ff75c731893f9778dd57e7dcfbc70ab8"
                  }}
                  style={styles.ImageBackground_4_1110}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d26b/b663/a3120c2d967b7aad58214bf4af2f42a4"
                  }}
                  style={styles.ImageBackground_4_1111}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/985b/01f5/8bd23c05abb284f1226e46e8e6f934a2"
                  }}
                  style={styles.ImageBackground_4_1112}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d115/f07d/2f2e5306565c25882973ba875eca172a"
                  }}
                  style={styles.ImageBackground_4_1113}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0771/bcb6/f58e1d037cf23e584706c56fc2706f02"
                  }}
                  style={styles.ImageBackground_4_1114}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0618/1623/1e5c01b1f6c01c7c93f168e64673a92d"
                }}
                style={styles.ImageBackground_4_1115}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b84/8734/91689175c8a50bb2194dc599816f8c58"
                }}
                style={styles.ImageBackground_4_1116}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/896a/a5ac/4b594f2b41cda953fe4e1b3a394f9df1"
                }}
                style={styles.ImageBackground_4_1117}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b2/e9df/d6042d6da72345cea2b771100ae1b912"
                }}
                style={styles.ImageBackground_4_1118}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a03c/b768/3673636de366f9665561fa20f6df8e41"
                }}
                style={styles.ImageBackground_4_1119}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/859a/f2ed/52bac41d56422cfaa69d4ed9b2a39d0e"
                }}
                style={styles.ImageBackground_4_1120}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f454/aa12/f65ba9b07fb45e77d85f9724031ea617"
                }}
                style={styles.ImageBackground_4_1121}
              />
            </View>
            <View style={styles.View_4_1122}>
              <Text style={styles.Text_4_1122}>Heart rate</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e41b/4ceb/7af8db0037bf0c970dd030bc61e09ff8"
              }}
              style={styles.ImageBackground_4_1123}
            />
            <View style={styles.View_4_1124}>
              <Text style={styles.Text_4_1124}>102</Text>
            </View>
            <View style={styles.View_4_1125}>
              <View style={styles.View_4_1126} />
              <View style={styles.View_4_1127} />
              <View style={styles.View_4_1128} />
              <View style={styles.View_4_1129} />
              <View style={styles.View_4_1130} />
              <View style={styles.View_4_1131} />
            </View>
          </View>
        </View>
        <View style={styles.View_4_1132}>
          <View style={styles.View_4_1133}>
            <View style={styles.View_4_1134}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e416/5a29/020a1a41790b015351b0d5fa16f82cf7"
                }}
                style={styles.ImageBackground_4_1135}
              />
              <View style={styles.View_4_1136} />
              <View style={styles.View_4_1137}>
                <Text style={styles.Text_4_1137}>Appointment</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e416/5a29/020a1a41790b015351b0d5fa16f82cf7"
                }}
                style={styles.ImageBackground_4_1138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48ba/1403/d629f6a6b4f0d6b5cdfdb354b0e4a9f0"
                }}
                style={styles.ImageBackground_4_1139}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48ba/1403/d629f6a6b4f0d6b5cdfdb354b0e4a9f0"
                }}
                style={styles.ImageBackground_4_1140}
              />
              <View style={styles.View_4_1141} />
              <View style={styles.View_4_1142} />
              <View style={styles.View_4_1143} />
              <View style={styles.View_4_1144} />
              <View style={styles.View_4_1145} />
              <View style={styles.View_4_1146} />
              <View style={styles.View_4_1147} />
              <View style={styles.View_4_1148} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_4_794: {
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
  View_4_801: {
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
  Text_4_801: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_802: {
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
  View_4_803: {
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
  View_4_804: {
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
  View_4_805: {
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
  ImageBackground_4_806: {
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
  View_4_807: {
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
  ImageBackground_4_808: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_809: {
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
  View_4_810: {
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
  ImageBackground_4_811: {
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
  ImageBackground_4_812: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_813: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.625%"),
    top: hp("9.153005464480875%")
  },
  View_4_814: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_815: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251371331553643%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)",
    borderColor: "rgba(204, 211, 225, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_816: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_816: {
    color: "rgba(132, 133, 154, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_817: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.25%"),
    top: hp("9.153005464480875%")
  },
  View_4_818: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_819: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251371331553643%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(170, 167, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_820: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.736111111111114%"),
    top: hp("0%"),
    backgroundColor: "rgba(114, 124, 245, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_12_2150: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.430555555555557%"),
    top: hp("1.6393442622950811%")
  },
  View_4_821: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_822: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.875%"),
    top: hp("9.153005464480875%")
  },
  View_4_823: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_824: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
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
  View_4_825: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_825: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_826: {
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
  View_4_827: {
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
  View_4_828: {
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
  View_4_829: {
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
  Text_4_829: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_830: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.737706481433306%"),
    minHeight: hp("5.737706481433306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.819444444444443%"),
    top: hp("0%")
  },
  View_4_831: {
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
  View_4_832: {
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
  View_4_833: {
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
  Text_4_833: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_834: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_835: {
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
  View_4_836: {
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
  Text_4_836: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_837: {
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
  View_4_838: {
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_4_839: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830618811435387%"),
    minHeight: hp("6.830618811435387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_840: {
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_4_841: {
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70517815483942%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_842: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.179808722602%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_843: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.99999576144748%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_844: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158838060167101%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_845: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9790250990125868%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_846: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.518463982476128%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_847: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338651021321614%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_848: {
    width: wp("6.2873538335164385%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    justifyContent: "flex-start"
  },
  Text_4_848: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_849: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("20.76502732240437%")
  },
  ImageBackground_4_850: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_851: {
    width: wp("37.916666666666664%"),
    minWidth: wp("37.916666666666664%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.694444444444446%"),
    top: hp("2.7322404371584703%")
  },
  View_4_852: {
    width: wp("37.916666666666664%"),
    minWidth: wp("37.916666666666664%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  View_4_853: {
    width: wp("35.208333333333336%"),
    minWidth: wp("35.208333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.7322404371584703%")
  },
  View_4_854: {
    width: wp("28.819444444444443%"),
    minWidth: wp("28.819444444444443%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888893%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_855: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.1857928708602823%"),
    minHeight: hp("2.1857928708602823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.430555555555557%"),
    top: hp("1.6393442622950793%")
  },
  View_4_856: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_856: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_857: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.958333333333336%"),
    top: hp("2.459016393442621%")
  },
  View_4_858: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_4_858: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_859: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("94.67213114754098%"),
    minHeight: hp("94.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    top: hp("2.7322404371584703%")
  },
  View_4_860: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("94.67213114754098%"),
    minHeight: hp("94.67213114754098%"),
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
  View_4_861: {
    width: wp("22.916666666666664%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_4_862: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%")
  },
  View_4_863: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1249745686848955%"),
    top: hp("1.5027322404371581%"),
    justifyContent: "center"
  },
  Text_4_863: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_864: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("83.06010928961749%"),
    minHeight: hp("83.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475411%")
  },
  View_4_865: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("4.508199848112513%"),
    minHeight: hp("4.508199848112513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666664%"),
    backgroundColor: "rgba(232, 232, 232, 1)"
  },
  View_4_866: {
    width: wp("20.138884650336372%"),
    minWidth: wp("20.138884650336372%"),
    height: hp("83.06010928961749%"),
    minHeight: hp("83.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888931274414062%"),
    top: hp("0%")
  },
  View_4_867: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166581895616313%"),
    top: hp("4.508196721311478%"),
    justifyContent: "center"
  },
  Text_4_867: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_868: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000004238552516966365%"),
    top: hp("38.66120218579234%")
  },
  View_4_869: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111116%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_869: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_870: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_871: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000004238552516966365%"),
    top: hp("43.57923497267759%")
  },
  View_4_872: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111116%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_872: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_873: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_874: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.63387978142077%")
  },
  View_4_875: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111107%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_875: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_876: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_877: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000004238552516966365%"),
    top: hp("53.68852459016393%")
  },
  View_4_878: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111116%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_878: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_879: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_880: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000004238552516966365%"),
    top: hp("58.743169398907106%")
  },
  View_4_881: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111116%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_881: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_882: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_883: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.79781420765027%")
  },
  View_4_884: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111107%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_884: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_885: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_886: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639345%")
  },
  View_4_887: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111107%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_887: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_888: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_889: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.9071038251366%")
  },
  View_4_890: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111107%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_890: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_891: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_892: {
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
  View_4_893: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111107%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_893: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_894: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_895: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111107%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_895: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_896: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.097217983669704%"),
    top: hp("17.896174863387976%")
  },
  ImageBackground_4_897: {
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
  ImageBackground_4_898: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_4_899: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.097217983669704%"),
    top: hp("38.79781420765027%")
  },
  ImageBackground_4_900: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("39.20765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.374995761447483%")
  },
  ImageBackground_4_901: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.097217983669704%"),
    top: hp("34.42622950819672%")
  },
  ImageBackground_4_902: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.374995761447483%")
  },
  View_4_903: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.097217983669704%"),
    top: hp("42.75956284153005%")
  },
  ImageBackground_4_904: {
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
  ImageBackground_4_905: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_4_906: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_907: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%")
  },
  ImageBackground_4_908: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("9.972677595628419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%")
  },
  ImageBackground_4_909: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("14.20765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888846503363714%")
  },
  ImageBackground_4_910: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%")
  },
  View_4_911: {
    width: wp("16.59722222222222%"),
    minWidth: wp("16.59722222222222%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.54166242811415%"),
    top: hp("21.721311475409834%")
  },
  View_4_912: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_912: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_913: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555554%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_4_914: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%")
  },
  ImageBackground_4_915: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.40983606557377783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_916: {
    width: wp("16.59722222222222%"),
    minWidth: wp("16.59722222222222%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.54166242811415%"),
    top: hp("25.81967213114754%")
  },
  View_4_917: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_917: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_918: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_4_918: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_919: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("8.333333333333321%"),
    justifyContent: "center"
  },
  Text_4_919: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_920: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555554%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_4_921: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%")
  },
  ImageBackground_4_922: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.4098360655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_923: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("34.56284153005465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.54166242811415%")
  },
  ImageBackground_4_924: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("30.464480874316934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.54166242811415%")
  },
  View_4_925: {
    width: wp("31.52777777777778%"),
    minWidth: wp("31.52777777777778%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.47222222222223%"),
    top: hp("20.76502732240437%")
  },
  ImageBackground_4_926: {
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
  View_4_927: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.185792349726775%")
  },
  View_4_928: {
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
  View_4_929: {
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
  View_4_930: {
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
  ImageBackground_4_931: {
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
  ImageBackground_4_932: {
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
  ImageBackground_4_933: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333286%"),
    top: hp("4.918032786885245%")
  },
  View_4_934: {
    width: wp("1.6617090172237818%"),
    minWidth: wp("1.6617090172237818%"),
    height: hp("2.5783356421632195%"),
    minHeight: hp("2.5783356421632195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222143%"),
    top: hp("7.78688524590164%")
  },
  View_4_935: {
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
  ImageBackground_4_936: {
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
  View_4_937: {
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
  View_4_938: {
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
  View_4_939: {
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
  View_4_940: {
    width: wp("27.291666666666664%"),
    minWidth: wp("27.291666666666664%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("27.049180327868854%")
  },
  View_4_941: {
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
  View_4_942: {
    width: wp("0.06944565309418572%"),
    minWidth: wp("0.06944565309418572%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666572%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(198, 211, 222, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_4_943: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    top: hp("4.2349726775956285%")
  },
  View_4_944: {
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
  ImageBackground_4_945: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333329%")
  },
  ImageBackground_4_947: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.597222222222214%"),
    top: hp("2.322404371584696%")
  },
  View_4_951: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("1.229508196721305%"),
    justifyContent: "flex-start"
  },
  Text_4_951: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_952: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    top: hp("20.628415300546436%")
  },
  View_4_953: {
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
  View_4_954: {
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
  ImageBackground_4_955: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.597222222222214%"),
    top: hp("2.3224043715847102%")
  },
  View_4_959: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_4_959: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_960: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    top: hp("12.295081967213115%")
  },
  View_4_961: {
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
  ImageBackground_4_962: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.63934426229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333329%")
  },
  ImageBackground_4_964: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.597222222222214%"),
    top: hp("2.4590163934426315%")
  },
  View_4_968: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_4_968: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_969: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: hp("4.918032786885249%"),
    justifyContent: "flex-start"
  },
  Text_4_969: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_970: {
    width: wp("2.361111111111111%"),
    minWidth: wp("2.361111111111111%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: hp("12.978142076502728%"),
    justifyContent: "flex-start"
  },
  Text_4_970: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_971: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: hp("21.311475409836063%"),
    justifyContent: "flex-start"
  },
  Text_4_971: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_972: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(249, 131, 112, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_4_973: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    top: hp("14.071038251366119%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 157, 194, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_4_974: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    top: hp("22.267759562841533%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(81, 195, 153, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_4_975: {
    width: wp("0.7638888888888888%"),
    minWidth: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(198, 211, 222, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_4_976: {
    width: wp("0.7638888888888888%"),
    minWidth: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("18.169398907103826%"),
    backgroundColor: "rgba(43, 46, 53, 1)",
    borderColor: "rgba(234, 238, 241, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_4_977: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333286%"),
    top: hp("82.10382513661202%"),
    justifyContent: "flex-start"
  },
  Text_4_977: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_978: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333286%"),
    top: hp("59.8360655737705%"),
    justifyContent: "flex-start"
  },
  Text_4_978: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_979: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.638888888888886%"),
    top: hp("61.06557377049181%")
  },
  View_4_980: {
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
  View_4_981: {
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
  View_4_982: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666714%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_983: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333286%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_984: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.513888888888886%"),
    top: hp("65.57377049180327%")
  },
  View_4_985: {
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
  View_4_986: {
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
  Text_4_986: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_987: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555557%")
  },
  View_4_988: {
    width: wp("3.1250299347771535%"),
    height: hp("8.468817101150263%"),
    top: hp("2.5962954661885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166611565483933%")
  },
  ImageBackground_4_989: {
    width: wp("1.8352100584242077%"),
    height: hp("4.997118965524142%"),
    top: hp("1.87761483948087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2898212009006187%")
  },
  View_4_998: {
    width: wp("2.1636974811553955%"),
    height: hp("8.468817101150263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_999: {
    width: wp("1.7783817980024548%"),
    height: hp("2.5126358198989287%"),
    top: hp("5.956164083845621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1000: {
    width: wp("1.6726848814222546%"),
    height: hp("2.102045674141639%"),
    top: hp("6.366800610484958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0003687540690151536%")
  },
  ImageBackground_4_1001: {
    width: wp("0.9361974398295084%"),
    height: hp("2.0669668750033354%"),
    top: hp("2.4685552211407042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4642232259114678%")
  },
  View_4_1002: {
    width: wp("0.9472752941979303%"),
    height: hp("3.8111767482236436%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2164221869574732%")
  },
  ImageBackground_4_1003: {
    width: wp("0.9472752941979303%"),
    height: hp("3.678354930356552%"),
    top: hp("0.13280983179645034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1008: {
    width: wp("0.23453275362650552%"),
    height: hp("0.26710254898488195%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3064049614800268%")
  },
  ImageBackground_4_1009: {
    width: wp("0.1628383000691732%"),
    height: hp("0.18597378756830601%"),
    top: hp("0.0402231685450829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34206814236111427%")
  },
  ImageBackground_4_1010: {
    width: wp("1.7175732718573675%"),
    height: hp("4.203533735431609%"),
    top: hp("2.58562265198087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.058958265516508845%")
  },
  ImageBackground_4_1011: {
    width: wp("1.7171977625952826%"),
    height: hp("1.226672709313898%"),
    top: hp("5.629642674180317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05970001220703125%")
  },
  ImageBackground_4_1012: {
    width: wp("1.7175572448306613%"),
    height: hp("1.2269212899963713%"),
    top: hp("5.56227053449453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05897521972657671%")
  },
  ImageBackground_4_1013: {
    width: wp("0.9869529141320122%"),
    height: hp("3.992848318131244%"),
    top: hp("2.5219859972677625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05932701958550979%")
  },
  ImageBackground_4_1014: {
    width: wp("0.684210459391276%"),
    height: hp("1.5634367374774538%"),
    top: hp("2.559874487704917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8830006917317803%")
  },
  View_4_1015: {
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
  Text_4_1015: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1016: {
    width: wp("2.0884146955278187%"),
    minWidth: wp("2.0884146955278187%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333329%"),
    top: hp("7.6502732240437155%")
  },
  View_4_1017: {
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
  View_4_1018: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7588068644205777%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1019: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3794055514865562%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1020: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1382124159071196%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1021: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5243911743164062%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1022: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8800820244683223%"),
    top: hp("0%"),
    backgroundColor: "rgba(54, 182, 33, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1023: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333286%"),
    top: hp("21.311475409836063%"),
    justifyContent: "flex-start"
  },
  Text_4_1023: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1024: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.930555555555543%")
  },
  ImageBackground_4_1026: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("59.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.930555555555543%")
  },
  View_4_1028: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("87.70491803278689%")
  },
  View_4_1029: {
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
  View_4_1030: {
    width: wp("9.930555555555555%"),
    minWidth: wp("9.930555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7708333333333286%"),
    top: hp("2.1174863387978036%"),
    justifyContent: "flex-start"
  },
  Text_4_1030: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_1031: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.513888888888886%"),
    top: hp("87.70491803278689%")
  },
  View_4_1032: {
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
  View_4_1033: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7847222222222285%"),
    top: hp("2.1174863387978036%"),
    justifyContent: "flex-start"
  },
  Text_4_1033: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_1034: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("95.21857923497268%")
  },
  View_4_1035: {
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
  View_4_1036: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.993055555555557%"),
    top: hp("2.1174863387978036%"),
    justifyContent: "flex-start"
  },
  Text_4_1036: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_1037: {
    width: wp("27.291666666666664%"),
    minWidth: wp("27.291666666666664%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("102.73224043715848%")
  },
  View_4_1038: {
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
  View_4_1039: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.486111111111114%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_4_1039: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_1040: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.513888888888886%"),
    top: hp("95.21857923497268%")
  },
  View_4_1041: {
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
  View_4_1042: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7152777777777857%"),
    top: hp("2.1174863387978036%"),
    justifyContent: "flex-start"
  },
  Text_4_1042: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_4_1043: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777715%"),
    top: hp("112.97814207650272%")
  },
  View_4_1044: {
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
  Text_4_1044: {
    color: "rgba(47, 43, 102, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1045: {
    width: wp("1.8055555555555554%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34722222222222854%")
  },
  View_4_1046: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041666666666657%"),
    top: hp("112.84153005464482%")
  },
  ImageBackground_4_1047: {
    width: wp("1.6666666666666667%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666714%")
  },
  View_4_1048: {
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
  Text_4_1048: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1049: {
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
  View_4_1050: {
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
  Text_4_1050: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1051: {
    width: wp("1.6666666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_4_1052: {
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
  ImageBackground_4_1053: {
    width: wp("1.3888888888888888%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111%")
  },
  View_4_1054: {
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
  Text_4_1054: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1055: {
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
  View_4_1056: {
    width: wp("1.4856212668948703%"),
    minWidth: wp("1.4856212668948703%"),
    height: hp("2.3051142041149038%"),
    minHeight: hp("2.3051142041149038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472222222222143%"),
    top: hp("0%")
  },
  View_4_1057: {
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
  ImageBackground_4_1058: {
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
  View_4_1059: {
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
  View_4_1060: {
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
  View_4_1061: {
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
  Text_4_1061: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1062: {
    width: wp("13.472222222222221%"),
    minWidth: wp("13.472222222222221%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("65.57377049180327%")
  },
  View_4_1063: {
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
  View_4_1064: {
    width: wp("2.4998977449205184%"),
    height: hp("8.059899272814475%"),
    top: hp("2.595695120389351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.652724795871308%")
  },
  View_4_1065: {
    width: wp("2.499897215101454%"),
    height: hp("8.058754342501281%"),
    top: hp("0.0011339865095720825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_1066: {
    width: wp("2.499897215101454%"),
    height: hp("8.058754342501281%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1067: {
    width: wp("1.8068108293745253%"),
    height: hp("3.6995642823599724%"),
    top: hp("2.1322281634221127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02097447713215672%")
  },
  ImageBackground_4_1068: {
    width: wp("2.2950281037224665%"),
    height: hp("4.878204116404382%"),
    top: hp("3.1805653389685773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1069: {
    width: wp("1.7342678705851235%"),
    height: hp("4.17598948452642%"),
    top: hp("2.572081518954917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7396231757270044%")
  },
  ImageBackground_4_1070: {
    width: wp("2.2880199220445423%"),
    height: hp("5.152199437709454%"),
    top: hp("2.6922840889685773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05893707275390625%")
  },
  ImageBackground_4_1071: {
    width: wp("1.9748886426289876%"),
    height: hp("4.946949442879099%"),
    top: hp("2.786471674351077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32923592461480666%")
  },
  ImageBackground_4_1072: {
    width: wp("1.2878566318088107%"),
    height: hp("1.873540096595639%"),
    top: hp("3.877500106728135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9930504692925268%")
  },
  ImageBackground_4_1073: {
    width: wp("1.383334928088718%"),
    height: hp("1.4454419495629482%"),
    top: hp("2.419860506318301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7496007283528598%")
  },
  ImageBackground_4_1074: {
    width: wp("0.7382205459806654%"),
    height: hp("2.035731435473499%"),
    top: hp("0.7015374188866019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3599505954318545%")
  },
  ImageBackground_4_1075: {
    width: wp("0.7383581002553304%"),
    height: hp("2.0328589475871435%"),
    top: hp("0.7028715206625549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3592024909125513%")
  },
  ImageBackground_4_1079: {
    width: wp("0.9964127010769314%"),
    height: hp("2.007264517695526%"),
    top: hp("1.7510085809426101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.503484514024521%")
  },
  ImageBackground_4_1080: {
    width: wp("1.444758309258355%"),
    height: hp("2.943643976430424%"),
    top: hp("0.4044996584699305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7985772026909785%")
  },
  ImageBackground_4_1081: {
    width: wp("1.4440745777553983%"),
    height: hp("2.8724321250707074%"),
    top: hp("0.4752737576844197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7989501953125%")
  },
  ImageBackground_4_1084: {
    width: wp("0.34014105796813965%"),
    height: hp("0.6859972177307463%"),
    top: hp("0.415639408299171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1569023132324219%")
  },
  ImageBackground_4_1085: {
    width: wp("0.30229104889763725%"),
    height: hp("0.6459819814546512%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5847905476888116%")
  },
  ImageBackground_4_1086: {
    width: wp("0.9967872831556532%"),
    height: hp("2.0385252322004144%"),
    top: hp("4.786423646687155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3569090101454009%")
  },
  ImageBackground_4_1087: {
    width: wp("0.5915264288584392%"),
    height: hp("0.6859054982336492%"),
    top: hp("5.187921576161202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4963976542154995%")
  },
  ImageBackground_4_1088: {
    width: wp("0.11578427420722115%"),
    height: hp("1.048059411387626%"),
    top: hp("5.699683017418025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0729276869032134%")
  },
  ImageBackground_4_1089: {
    width: wp("0.21706687079535592%"),
    height: hp("0.94642534933455%"),
    top: hp("6.650430648053273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4046478271484375%")
  },
  ImageBackground_4_1090: {
    width: wp("0.3482888804541694%"),
    height: hp("2.226585638327677%"),
    top: hp("3.184100708674862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.325164794921875%")
  },
  ImageBackground_4_1091: {
    width: wp("0.07173336214489408%"),
    height: hp("0.7864040103766435%"),
    top: hp("4.566563674009558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33187654283311474%")
  },
  ImageBackground_4_1092: {
    width: wp("0.6395055188073052%"),
    height: hp("0.8256956527793343%"),
    top: hp("3.426973936987693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5085415310329893%")
  },
  ImageBackground_4_1093: {
    width: wp("0.32671941651238334%"),
    height: hp("0.48798915466975645%"),
    top: hp("3.808993980532776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14103571573893703%")
  },
  ImageBackground_4_1094: {
    width: wp("0.2333586745791965%"),
    height: hp("0.4807810965782958%"),
    top: hp("3.772973232581961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7309951782226562%")
  },
  ImageBackground_4_1095: {
    width: wp("0.2059210671318902%"),
    height: hp("0.25012167425103526%"),
    top: hp("3.2720180157103727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1826896667480469%")
  },
  ImageBackground_4_1096: {
    width: wp("0.3053780396779378%"),
    height: hp("0.47645620961006874%"),
    top: hp("3.0875117400956213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7549391852484746%")
  },
  ImageBackground_4_1097: {
    width: wp("0.04839354091220432%"),
    height: hp("0.24651725435517524%"),
    top: hp("3.2258580942622785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8982510036892393%")
  },
  ImageBackground_4_1098: {
    width: wp("0.047174294789632164%"),
    height: hp("0.2775121907718846%"),
    top: hp("3.4068290001707595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2931315104166714%")
  },
  ImageBackground_4_1099: {
    width: wp("0.2398611439598931%"),
    height: hp("0.7424351947555125%"),
    top: hp("2.5021745858947924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19805484347872948%")
  },
  ImageBackground_4_1100: {
    width: wp("0.06867289543151855%"),
    height: hp("0.3157154458468077%"),
    top: hp("2.696086279030041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.293803744845917%")
  },
  ImageBackground_4_1101: {
    width: wp("0.19451618194580078%"),
    height: hp("1.9714183494692943%"),
    top: hp("3.4882759135928865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.945251888699005%")
  },
  ImageBackground_4_1102: {
    width: wp("0.14284663730197483%"),
    height: hp("0.3395028453055627%"),
    top: hp("4.604051933913922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9491810268825986%")
  },
  ImageBackground_4_1103: {
    width: wp("0.35661737124125165%"),
    height: hp("1.3399877183424318%"),
    top: hp("3.196307739924862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.309168073866104%")
  },
  ImageBackground_4_1104: {
    width: wp("0.052280955844455294%"),
    height: hp("0.37121798822788593%"),
    top: hp("4.305680071721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3871786329481353%")
  },
  ImageBackground_4_1105: {
    width: wp("0.2847268184026082%"),
    height: hp("1.73427133612294%"),
    top: hp("2.967109054815566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6869061787923272%")
  },
  ImageBackground_4_1106: {
    width: wp("0.10996414555443658%"),
    height: hp("0.7193685229358777%"),
    top: hp("4.2184298155737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6527455647786411%")
  },
  ImageBackground_4_1107: {
    width: wp("0.09819984436035156%"),
    height: hp("0.7900089514060099%"),
    top: hp("3.369340740266381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.831756591796875%")
  },
  ImageBackground_4_1108: {
    width: wp("0.12251319156752694%"),
    height: hp("1.1554603368206753%"),
    top: hp("3.5459091103141986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1868078443739165%")
  },
  ImageBackground_4_1109: {
    width: wp("0.11014739672342937%"),
    height: hp("0.48943087051474987%"),
    top: hp("2.560608243681685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5677307976616817%")
  },
  ImageBackground_4_1110: {
    width: wp("0.29281920856899685%"),
    height: hp("1.0329225675655844%"),
    top: hp("3.5725911458333144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8719779120551152%")
  },
  ImageBackground_4_1111: {
    width: wp("0.29462258021036786%"),
    height: hp("1.2751146743857795%"),
    top: hp("3.5495111851092815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4020601908365933%")
  },
  ImageBackground_4_1112: {
    width: wp("0.20475904146830243%"),
    height: hp("0.1165348323967939%"),
    top: hp("3.820467255805994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.014823489718964%")
  },
  ImageBackground_4_1113: {
    width: wp("0.1880277527703179%"),
    height: hp("0.431045157010438%"),
    top: hp("3.326782893613384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9561619228786924%")
  },
  ImageBackground_4_1114: {
    width: wp("0.19655386606852215%"),
    height: hp("0.15064979511531976%"),
    top: hp("3.907050461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333428%")
  },
  ImageBackground_4_1115: {
    width: wp("0.767764515346951%"),
    height: hp("1.808515923922179%"),
    top: hp("1.799169655054655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6986147562662808%")
  },
  ImageBackground_4_1116: {
    width: wp("0.4015166229671902%"),
    height: hp("0.39322669388817966%"),
    top: hp("0.702671405396174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6966527303059848%")
  },
  ImageBackground_4_1117: {
    width: wp("0.30101696650187176%"),
    height: hp("0.2943795235430608%"),
    top: hp("0.7518997609289642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7468605041503906%")
  },
  ImageBackground_4_1118: {
    width: wp("0.25121861033969456%"),
    height: hp("0.36990375466685477%"),
    top: hp("0.4061005806010911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1529498630099937%")
  },
  ImageBackground_4_1119: {
    width: wp("0.16779224077860513%"),
    height: hp("0.24714502480512107%"),
    top: hp("0.4674692622950829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1945597330729214%")
  },
  ImageBackground_4_1120: {
    width: wp("0.2812725967831082%"),
    height: hp("0.24014631581436738%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5843624538845518%")
  },
  ImageBackground_4_1121: {
    width: wp("0.1908678478664822%"),
    height: hp("0.16300694538595897%"),
    top: hp("0.038822361680331596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.629638671875%")
  },
  View_4_1122: {
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
  Text_4_1122: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1123: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888886%")
  },
  View_4_1124: {
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
  Text_4_1124: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1125: {
    width: wp("2.0884146955278187%"),
    minWidth: wp("2.0884146955278187%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.625%"),
    top: hp("7.6502732240437155%")
  },
  View_4_1126: {
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
  View_4_1127: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7588089836968237%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1128: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3794034322102817%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1129: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1382124159071196%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1130: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5243911743164062%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1131: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8800820244683223%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 61, 80, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_4_1132: {
    width: wp("25.277256435818142%"),
    minWidth: wp("25.277256435818142%"),
    height: hp("9.561855545460853%"),
    minHeight: hp("9.561855545460853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("29.91803278688524%")
  },
  View_4_1133: {
    width: wp("25.277256435818142%"),
    minWidth: wp("25.277256435818142%"),
    height: hp("9.561855545460853%"),
    minHeight: hp("9.561855545460853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_1134: {
    width: wp("25.277256435818142%"),
    minWidth: wp("25.277256435818142%"),
    height: hp("9.561855545460853%"),
    minHeight: hp("9.561855545460853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_1135: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("3.5519125683060153%")
  },
  View_4_1136: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_4_1137: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6249999999999858%"),
    top: hp("0.545881094176913%"),
    justifyContent: "center"
  },
  Text_4_1137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1138: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("9.153005464480877%")
  },
  ImageBackground_4_1139: {
    width: wp("0.000003707103941350296%"),
    minWidth: wp("0.000003707103941350296%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.999487135145387%"),
    top: hp("3.415300546448094%")
  },
  ImageBackground_4_1140: {
    width: wp("0.000003707103941350296%"),
    minWidth: wp("0.000003707103941350296%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20832909478080808%"),
    top: hp("3.415300546448094%")
  },
  View_4_1141: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.068914625379762%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1
  },
  View_4_1142: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.068914625379762%"),
    top: hp("8.606557377049185%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1
  },
  View_4_1143: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1
  },
  View_4_1144: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049185%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1
  },
  View_4_1145: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.79114532470703%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1
  },
  View_4_1146: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.79114532470703%"),
    top: hp("8.606557377049185%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1
  },
  View_4_1147: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1
  },
  View_4_1148: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("0.9552982986950483%"),
    minHeight: hp("0.9552982986950483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.79114532470703%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

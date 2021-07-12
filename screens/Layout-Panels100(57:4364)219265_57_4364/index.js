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
      <View style={styles.View_57_4365} />
      <View style={styles.View_57_4372}>
        <Text style={styles.Text_57_4372}>secondary nav</Text>
      </View>
      <View style={styles.View_57_4373} />
      <View style={styles.View_57_4374}>
        <View style={styles.View_57_4375}>
          <View style={styles.View_57_4376}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_57_4377}
            />
            <View style={styles.View_58_12}>
              <Text style={styles.Text_58_12}>Switch to library builder</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22c2/eb44/e90c4c22ff6e88717b0895665077086b"
              }}
              style={styles.ImageBackground_57_4378}
            />
            <View style={styles.View_57_4379}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
                }}
                style={styles.ImageBackground_57_4380}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_57_4381}
              />
            </View>
            <View style={styles.View_57_4382}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_57_4383}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
                }}
                style={styles.ImageBackground_57_4384}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4385}>
        <View style={styles.View_57_4386}>
          <View style={styles.View_57_4387}>
            <View style={styles.View_57_4388}>
              <Text style={styles.Text_57_4388}>Main page</Text>
            </View>
            <View style={styles.View_57_4389}>
              <Text style={styles.Text_57_4389}>Content builder</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9202/5b95/a4d00171e4694b40e99168d3762f0db6"
              }}
              style={styles.ImageBackground_57_4390}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_57_4405}>
        <View style={styles.View_57_4406}>
          <View style={styles.View_57_4407} />
          <View style={styles.View_57_4408}>
            <Text style={styles.Text_57_4408}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_57_4409}>
          <View style={styles.View_57_4410} />
          <View style={styles.View_57_4411} />
          <View style={styles.View_57_4412}>
            <Text style={styles.Text_57_4412}>Design</Text>
          </View>
        </View>
        <View style={styles.View_57_4413}>
          <View style={styles.View_57_4414} />
          <View style={styles.View_57_4415}>
            <Text style={styles.Text_57_4415}>Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4416}>
        <View style={styles.View_57_4417} />
      </View>
      <View style={styles.View_57_4418}>
        <View style={styles.View_57_4419} />
        <View style={styles.View_57_4420} />
        <View style={styles.View_57_4421} />
        <View style={styles.View_57_4422} />
        <View style={styles.View_57_4423} />
        <View style={styles.View_57_4424} />
        <View style={styles.View_57_4425} />
        <View style={styles.View_57_4426} />
        <View style={styles.View_57_4427}>
          <Text style={styles.Text_57_4427}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_57_4428}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9aa/c79d/493066fb0a853502ba7526963b8908b1"
          }}
          style={styles.ImageBackground_57_4429}
        />
        <View style={styles.View_57_4430}>
          <View style={styles.View_57_4431}>
            <View style={styles.View_57_4432} />
            <View style={styles.View_57_4433} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2daf/8f46/2ccb4d85f893ee1a2d032062a6ea7260"
              }}
              style={styles.ImageBackground_57_4434}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1522/4224/756f70c48c8c557f29f228db9546401a"
              }}
              style={styles.ImageBackground_57_4435}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/1272/6c1d39ecc9a339fa37e698bb2e0fd6c6"
              }}
              style={styles.ImageBackground_57_4436}
            />
            <View style={styles.View_57_4437}>
              <View style={styles.View_57_4438}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e9/0bda/ad10637ccb2842e4ebd64fdf776ce05a"
                  }}
                  style={styles.ImageBackground_57_4439}
                />
                <View style={styles.View_57_4440} />
                <View style={styles.View_57_4441} />
              </View>
            </View>
            <View style={styles.View_57_4442} />
            <View style={styles.View_57_4443}>
              <View style={styles.View_57_4444} />
              <View style={styles.View_57_4445} />
              <View style={styles.View_57_4446}>
                <View style={styles.View_57_4447} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
                  }}
                  style={styles.ImageBackground_57_4448}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                  }}
                  style={styles.ImageBackground_57_4450}
                />
                <View style={styles.View_57_4454}>
                  <Text style={styles.Text_57_4454}>Take Vitals</Text>
                </View>
              </View>
              <View style={styles.View_57_4455}>
                <View style={styles.View_57_4456}>
                  <View style={styles.View_57_4457} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                    }}
                    style={styles.ImageBackground_57_4458}
                  />
                  <View style={styles.View_57_4462}>
                    <Text style={styles.Text_57_4462}>James Sawyer</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_57_4463}>
                <View style={styles.View_57_4464} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
                  }}
                  style={styles.ImageBackground_57_4465}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                  }}
                  style={styles.ImageBackground_57_4467}
                />
                <View style={styles.View_57_4471}>
                  <Text style={styles.Text_57_4471}>Medication</Text>
                </View>
              </View>
              <View style={styles.View_57_4472}>
                <Text style={styles.Text_57_4472}>9:00 AM</Text>
              </View>
              <View style={styles.View_57_6750}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bd/1499/9e9893472ee7f7a7a570c828ed226e3d"
                  }}
                  style={styles.ImageBackground_57_6751}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bd/1499/9e9893472ee7f7a7a570c828ed226e3d"
                  }}
                  style={styles.ImageBackground_57_6752}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec1/f7d4/b91b68e9300bf34299b2c46f711164f5"
                  }}
                  style={styles.ImageBackground_57_6753}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec1/f7d4/b91b68e9300bf34299b2c46f711164f5"
                  }}
                  style={styles.ImageBackground_57_6754}
                />
                <View style={styles.View_57_6755} />
                <View style={styles.View_57_6756} />
                <View style={styles.View_57_6757} />
                <View style={styles.View_57_6758} />
              </View>
              <View style={styles.View_57_4473}>
                <Text style={styles.Text_57_4473}>10:00 AM</Text>
              </View>
              <View style={styles.View_57_4474}>
                <Text style={styles.Text_57_4474}>11:00 AM</Text>
              </View>
              <View style={styles.View_57_4475} />
              <View style={styles.View_57_4476} />
              <View style={styles.View_57_4477} />
              <View style={styles.View_57_4478} />
              <View style={styles.View_57_4479} />
            </View>
            <View style={styles.View_57_4480}>
              <Text style={styles.Text_57_4480}>All Services</Text>
            </View>
            <View style={styles.View_57_4481}>
              <Text style={styles.Text_57_4481}>Today’s Progress</Text>
            </View>
            <View style={styles.View_57_4482}>
              <View style={styles.View_57_4483}>
                <View style={styles.View_57_4484} />
                <View style={styles.View_57_4485} />
                <View style={styles.View_57_4486} />
              </View>
            </View>
          </View>
          <View style={styles.View_57_4487}>
            <View style={styles.View_57_4488} />
            <View style={styles.View_57_4489}>
              <Text style={styles.Text_57_4489}>98</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/197e/6076/ad76023f05c13b6c561f252fad066002"
              }}
              style={styles.ImageBackground_57_4490}
            />
            <View style={styles.View_57_4491}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a99d/b18e/462151bcd1e566d18e63e0d4a82221bb"
                }}
                style={styles.ImageBackground_57_4492}
              />
              <View style={styles.View_57_4501}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4836/bfbc/97fee081151da251bda49bdf187e0362"
                  }}
                  style={styles.ImageBackground_57_4502}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d41/9dc1/7470dcb031acbc3c932ba21125b71c52"
                  }}
                  style={styles.ImageBackground_57_4503}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4289/b189/723b51b97e5549f3c7db350a3131519e"
                  }}
                  style={styles.ImageBackground_57_4504}
                />
                <View style={styles.View_57_4505}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d06/9d92/92cc0c91d13bb793db3785c3fe4cec94"
                    }}
                    style={styles.ImageBackground_57_4506}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2932/5dd4/7ce21c2be9cf8edc2c860b2e4354ffc8"
                    }}
                    style={styles.ImageBackground_57_4511}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5341/e82f/c91b371f1fafca1bb177c790756ed259"
                    }}
                    style={styles.ImageBackground_57_4512}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ad/30e6/80430256a628655fb636a9b5b0339b21"
                  }}
                  style={styles.ImageBackground_57_4513}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e39c/ef3f/b09fb6d4be1ee0cb20e1ca224d544faa"
                  }}
                  style={styles.ImageBackground_57_4514}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b9f/f733/c68bffd72bdd151c1a724b246765d6da"
                  }}
                  style={styles.ImageBackground_57_4515}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9a/2df3/977f988073885a3f8ea3735bcd2d3482"
                  }}
                  style={styles.ImageBackground_57_4516}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1381/56ee/1121b45866454425cb80ad4877c7bea9"
                  }}
                  style={styles.ImageBackground_57_4517}
                />
              </View>
            </View>
            <View style={styles.View_57_4518}>
              <Text style={styles.Text_57_4518}>Oxygen level</Text>
            </View>
            <View style={styles.View_57_4519}>
              <View style={styles.View_57_4520} />
              <View style={styles.View_57_4521} />
              <View style={styles.View_57_4522} />
              <View style={styles.View_57_4523} />
              <View style={styles.View_57_4524} />
              <View style={styles.View_57_4525} />
            </View>
          </View>
          <View style={styles.View_57_4526}>
            <Text style={styles.Text_57_4526}>Your daily plan</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
            }}
            style={styles.ImageBackground_57_4527}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
            }}
            style={styles.ImageBackground_57_4529}
          />
          <View style={styles.View_57_4531}>
            <View style={styles.View_57_4532} />
            <View style={styles.View_57_4533}>
              <Text style={styles.Text_57_4533}>Contact provider</Text>
            </View>
          </View>
          <View style={styles.View_57_4534}>
            <View style={styles.View_57_4535} />
            <View style={styles.View_57_4536}>
              <Text style={styles.Text_57_4536}>Daily plan</Text>
            </View>
          </View>
          <View style={styles.View_57_4537}>
            <View style={styles.View_57_4538} />
            <View style={styles.View_57_4539}>
              <Text style={styles.Text_57_4539}>Messages</Text>
            </View>
          </View>
          <View style={styles.View_57_4540}>
            <View style={styles.View_57_4541} />
            <View style={styles.View_57_4542}>
              <Text style={styles.Text_57_4542}>Emergency</Text>
            </View>
          </View>
          <View style={styles.View_57_4543}>
            <View style={styles.View_57_4544} />
            <View style={styles.View_57_4545}>
              <Text style={styles.Text_57_4545}>Add a vital</Text>
            </View>
          </View>
          <View style={styles.View_57_4546}>
            <View style={styles.View_57_4547}>
              <Text style={styles.Text_57_4547}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5bb/75ba/76b9f1c21957193ce99e5488e3485f6e"
              }}
              style={styles.ImageBackground_57_4548}
            />
          </View>
          <View style={styles.View_57_4549}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d6/881f/8f42ef39f8a5acb50205802452acf77c"
              }}
              style={styles.ImageBackground_57_4550}
            />
            <View style={styles.View_57_4551}>
              <Text style={styles.Text_57_4551}>Progress</Text>
            </View>
          </View>
          <View style={styles.View_57_4552}>
            <View style={styles.View_57_4553}>
              <Text style={styles.Text_57_4553}>Messages</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aed/042a/fe1851f0f493290797b3346d7b6b5bf4"
              }}
              style={styles.ImageBackground_57_4554}
            />
          </View>
          <View style={styles.View_57_4555}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/58a2/ecc020eb6ddae17ce595147ff2867c16"
              }}
              style={styles.ImageBackground_57_4556}
            />
            <View style={styles.View_57_4557}>
              <Text style={styles.Text_57_4557}>Appointments</Text>
            </View>
          </View>
          <View style={styles.View_57_4558}>
            <View style={styles.View_57_4559}>
              <View style={styles.View_57_4560}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c04/e470/748a0e6abd8db00ed7034c133b395edc"
                  }}
                  style={styles.ImageBackground_57_4561}
                />
                <View style={styles.View_57_4562} />
                <View style={styles.View_57_4563} />
              </View>
            </View>
            <View style={styles.View_57_4564}>
              <Text style={styles.Text_57_4564}>More</Text>
            </View>
          </View>
          <View style={styles.View_57_4565}>
            <View style={styles.View_57_4566} />
            <View style={styles.View_57_4567}>
              <View style={styles.View_57_4568}>
                <View style={styles.View_57_4569}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46b1/a8e3/c229c85f9aae1d7442eed83e856b89ad"
                    }}
                    style={styles.ImageBackground_57_4570}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc0/f15b/34d5b4b7eb2678cb7dee19e8985556c2"
                    }}
                    style={styles.ImageBackground_57_4571}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/436b/b098/064b4be42bfce1b85cb36375746ddb32"
                    }}
                    style={styles.ImageBackground_57_4572}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a754/28ad/ee43f390f34aebcedf725fc7b53d6606"
                    }}
                    style={styles.ImageBackground_57_4573}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2080/d370/71fa45b6a73a8cdf1fe8aa6aa458964d"
                    }}
                    style={styles.ImageBackground_57_4574}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b27/76a9/45ad2fac42cfb8e39e8979cd60323a66"
                    }}
                    style={styles.ImageBackground_57_4575}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb3c/49a7/e926de31da9a102fbcceede46f8bd848"
                    }}
                    style={styles.ImageBackground_57_4576}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a65/a0dc/7892c890ce624b9a0a6b433f2d6154c9"
                    }}
                    style={styles.ImageBackground_57_4577}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/69ab/646000ebd11f6fc4be7d79aab090672d"
                    }}
                    style={styles.ImageBackground_57_4578}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad9/bbb6/06ed3a602348ed79307b44cb1f2f2f7f"
                    }}
                    style={styles.ImageBackground_57_4582}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be32/c25b/165c3805d2b4f80505c4f2e92798f636"
                    }}
                    style={styles.ImageBackground_57_4583}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7804/4b7b/72967f753880194c65b2cb37b73ac8e0"
                    }}
                    style={styles.ImageBackground_57_4584}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8816/e0b7/55b9ba3640bfd9a94c9e7943ef529bd2"
                    }}
                    style={styles.ImageBackground_57_4587}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/699d/7c8f/cec119f27842d69c2ad969abde2a94ca"
                    }}
                    style={styles.ImageBackground_57_4588}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f681/b45a/effbe58bc422d799d9bcb61ecec020c0"
                  }}
                  style={styles.ImageBackground_57_4589}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4c/a301/8eabb73b440e4573a2a0cc6d921c6658"
                  }}
                  style={styles.ImageBackground_57_4590}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30fb/5e59/0e6dfbb04b3820510cfc696c1ae4f3c0"
                  }}
                  style={styles.ImageBackground_57_4591}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4e9/d1fa/b87b349a98dedb315abef776bec38350"
                  }}
                  style={styles.ImageBackground_57_4592}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/661a/b17d/ea79670e9c43cf0e188a5ec843321141"
                  }}
                  style={styles.ImageBackground_57_4593}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fdc/5781/5758245a396e5656834f172d5e8fb5e1"
                  }}
                  style={styles.ImageBackground_57_4594}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca4d/bd36/cd6ac68652ae274b31e373936e323ed5"
                  }}
                  style={styles.ImageBackground_57_4595}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db88/c292/72aec0da58a0efda1b2456284f1da614"
                  }}
                  style={styles.ImageBackground_57_4596}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ddd/0371/8465cccb2e3cbaa18c9f8f2c98549288"
                  }}
                  style={styles.ImageBackground_57_4597}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f4/b4df/bf2ec4e07439fb667429a7fc2136e037"
                  }}
                  style={styles.ImageBackground_57_4598}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/880e/578c/149822bd6ecd0375cbb0cbd6e445a957"
                  }}
                  style={styles.ImageBackground_57_4599}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c600/f22c/24e5ccef0c9c93c69a8c01b2f7489432"
                  }}
                  style={styles.ImageBackground_57_4600}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2a/e4af/c67279820c6e5f2f797c80cccbd8dbf2"
                  }}
                  style={styles.ImageBackground_57_4601}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c423/483d/39700a9a12c357541b7a4558db4533e0"
                  }}
                  style={styles.ImageBackground_57_4602}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f19/5f4c/f1b2420e56eaca79977c4e047d0e5866"
                  }}
                  style={styles.ImageBackground_57_4603}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f30/a9e3/97b5484b991085952a7ace58aad72f51"
                  }}
                  style={styles.ImageBackground_57_4604}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d45/7723/231baf92b32dddfc17e2e1741cb38d02"
                  }}
                  style={styles.ImageBackground_57_4605}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b43/c028/923961bc1f099a648ba761dd9c25bbf4"
                  }}
                  style={styles.ImageBackground_57_4606}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10c3/33b4/7802d56399feefd3adffa70cf40854b4"
                  }}
                  style={styles.ImageBackground_57_4607}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ece5/a4fd/650d16476d20c1e6064595c3fe8654d8"
                  }}
                  style={styles.ImageBackground_57_4608}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6294/e945/0b66c0c3959f2e34a143eff89a46c8af"
                  }}
                  style={styles.ImageBackground_57_4609}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a26a/fff6/76906147a3c5e6641a1bbf65ea269979"
                  }}
                  style={styles.ImageBackground_57_4610}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea6e/8084/570ef649836a5b8797d5665f7885f60d"
                  }}
                  style={styles.ImageBackground_57_4611}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03a7/b63e/6d44fac853c478543067f6eab1fd8f39"
                  }}
                  style={styles.ImageBackground_57_4612}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9bd/ff5d/ff75c731893f9778dd57e7dcfbc70ab8"
                  }}
                  style={styles.ImageBackground_57_4613}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d26b/b663/a3120c2d967b7aad58214bf4af2f42a4"
                  }}
                  style={styles.ImageBackground_57_4614}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/985b/01f5/8bd23c05abb284f1226e46e8e6f934a2"
                  }}
                  style={styles.ImageBackground_57_4615}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d115/f07d/2f2e5306565c25882973ba875eca172a"
                  }}
                  style={styles.ImageBackground_57_4616}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0771/bcb6/f58e1d037cf23e584706c56fc2706f02"
                  }}
                  style={styles.ImageBackground_57_4617}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0618/1623/1e5c01b1f6c01c7c93f168e64673a92d"
                }}
                style={styles.ImageBackground_57_4618}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b84/8734/91689175c8a50bb2194dc599816f8c58"
                }}
                style={styles.ImageBackground_57_4619}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/896a/a5ac/4b594f2b41cda953fe4e1b3a394f9df1"
                }}
                style={styles.ImageBackground_57_4620}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b2/e9df/d6042d6da72345cea2b771100ae1b912"
                }}
                style={styles.ImageBackground_57_4621}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a03c/b768/3673636de366f9665561fa20f6df8e41"
                }}
                style={styles.ImageBackground_57_4622}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/859a/f2ed/52bac41d56422cfaa69d4ed9b2a39d0e"
                }}
                style={styles.ImageBackground_57_4623}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f454/aa12/f65ba9b07fb45e77d85f9724031ea617"
                }}
                style={styles.ImageBackground_57_4624}
              />
            </View>
            <View style={styles.View_57_4625}>
              <Text style={styles.Text_57_4625}>Heart rate</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e41b/4ceb/7af8db0037bf0c970dd030bc61e09ff8"
              }}
              style={styles.ImageBackground_57_4626}
            />
            <View style={styles.View_57_4627}>
              <Text style={styles.Text_57_4627}>102</Text>
            </View>
            <View style={styles.View_57_4628}>
              <View style={styles.View_57_4629} />
              <View style={styles.View_57_4630} />
              <View style={styles.View_57_4631} />
              <View style={styles.View_57_4632} />
              <View style={styles.View_57_4633} />
              <View style={styles.View_57_4634} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4635}>
        <View style={styles.View_57_4636} />
        <View style={styles.View_57_4776} />
        <View style={styles.View_57_4660}>
          <View style={styles.View_57_4661}>
            <View style={styles.View_57_4662}>
              <Text style={styles.Text_57_4662}>Set status as</Text>
            </View>
            <View style={styles.View_57_4663}>
              <View style={styles.View_57_4664} />
              <View style={styles.View_57_4665}>
                <Text style={styles.Text_57_4665}>Visible</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_57_4666}
              />
            </View>
          </View>
          <View style={styles.View_57_4667}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22c2/eb44/e90c4c22ff6e88717b0895665077086b"
              }}
              style={styles.ImageBackground_57_4669}
            />
            <View style={styles.View_57_4670}>
              <Text style={styles.Text_57_4670}>Status</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_57_5208}>
          <View style={styles.View_57_5209}>
            <View style={styles.View_57_5210} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22c2/eb44/e90c4c22ff6e88717b0895665077086b"
              }}
              style={styles.ImageBackground_57_5211}
            />
            <View style={styles.View_57_5212}>
              <Text style={styles.Text_57_5212}>Content</Text>
            </View>
          </View>
          <View style={styles.View_57_5213}>
            <View style={styles.View_57_5214}>
              <View style={styles.View_57_5215} />
              <View style={styles.View_57_5216}>
                <Text style={styles.Text_57_5216}>9:00</Text>
              </View>
            </View>
            <View style={styles.View_57_5217}>
              <View style={styles.View_57_5218} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_57_5653}
              />
              <View style={styles.View_57_5219}>
                <Text style={styles.Text_57_5219}>Text field</Text>
              </View>
            </View>
            <View style={styles.View_57_5649}>
              <View style={styles.View_57_5650} />
              <View style={styles.View_57_5651}>
                <Text style={styles.Text_57_5651}>Static element</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_57_5652}
              />
            </View>
            <View style={styles.View_57_5220}>
              <Text style={styles.Text_57_5220}>Content type</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_57_4685}>
        <View style={styles.View_57_4686} />
        <View style={styles.View_57_5616}>
          <View style={styles.View_57_4687} />
          <View style={styles.View_57_5612} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
            }}
            style={styles.ImageBackground_57_5615}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa90/733c/9d86836c4af1466060dcdc9d20a978b6"
            }}
            style={styles.ImageBackground_57_4688}
          />
          <View style={styles.View_57_4689}>
            <Text style={styles.Text_57_4689}>Content tree</Text>
          </View>
        </View>
        <View style={styles.View_57_4690}>
          <View style={styles.View_57_4691} />
          <View style={styles.View_57_4692}>
            <View style={styles.View_57_4693}>
              <Text style={styles.Text_57_4693}>
                Group 77 Group 76 Group 75 Appointment
              </Text>
            </View>
            <View style={styles.View_57_4694}>
              <View style={styles.View_57_4695}>
                <Text style={styles.Text_57_4695}>Today’s progress</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4696}
              />
            </View>
            <View style={styles.View_57_4697}>
              <View style={styles.View_57_4698}>
                <Text style={styles.Text_57_4698}>Heart rate</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4699}
              />
            </View>
            <View style={styles.View_57_4700}>
              <View style={styles.View_57_4701}>
                <Text style={styles.Text_57_4701}>Oxygen Level</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4702}
              />
            </View>
            <View style={styles.View_57_4703}>
              <View style={styles.View_57_4704}>
                <Text style={styles.Text_57_4704}>Contact provider</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4705}
              />
            </View>
            <View style={styles.View_57_4706}>
              <View style={styles.View_57_4707}>
                <Text style={styles.Text_57_4707}>Daily plan</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4708}
              />
            </View>
            <View style={styles.View_57_4709}>
              <View style={styles.View_57_4710}>
                <Text style={styles.Text_57_4710}>Messages</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4711}
              />
            </View>
            <View style={styles.View_57_4712}>
              <View style={styles.View_57_4713}>
                <Text style={styles.Text_57_4713}>Add a vital</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4714}
              />
            </View>
            <View style={styles.View_57_4715}>
              <View style={styles.View_57_4716}>
                <Text style={styles.Text_57_4716}>Emergency</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4717}
              />
            </View>
            <View style={styles.View_57_4718}>
              <View style={styles.View_57_4719}>
                <Text style={styles.Text_57_4719}>Bottom menu</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
                }}
                style={styles.ImageBackground_57_4720}
              />
            </View>
            <View style={styles.View_57_4721}>
              <Text style={styles.Text_57_4721}>Daily plan</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
              }}
              style={styles.ImageBackground_57_4722}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
              }}
              style={styles.ImageBackground_57_4723}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
              }}
              style={styles.ImageBackground_57_4724}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
              }}
              style={styles.ImageBackground_57_4725}
            />
            <View style={styles.View_57_4726}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                }}
                style={styles.ImageBackground_57_4727}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                }}
                style={styles.ImageBackground_57_4728}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0958/90b6/56bd20cfbe5d2cf4df09d70e88054a4a"
              }}
              style={styles.ImageBackground_57_4729}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
              }}
              style={styles.ImageBackground_57_4730}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
              }}
              style={styles.ImageBackground_57_4731}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/fa47/c8b89d5fbf7d0c54c3991f7a15a64db4"
              }}
              style={styles.ImageBackground_57_4732}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0958/90b6/56bd20cfbe5d2cf4df09d70e88054a4a"
              }}
              style={styles.ImageBackground_57_4733}
            />
            <View style={styles.View_57_4734}>
              <View style={styles.View_57_4735}>
                <Text style={styles.Text_57_4735}>9:00 AM</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3162/441e/42d616aae88df8d2a97967f7f8a9eba8"
                }}
                style={styles.ImageBackground_57_4738}
              />
            </View>
            <View style={styles.View_57_4739}>
              <View style={styles.View_57_4740}>
                <Text style={styles.Text_57_4740}>Take vitals</Text>
              </View>
              <View style={styles.View_57_4741}>
                <Text style={styles.Text_57_4741}>Checkbox</Text>
              </View>
              <View style={styles.View_57_4742}>
                <Text style={styles.Text_57_4742}>Menu</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ea/e702/fbeddfbf2bc70f8fff96b8a9427b839c"
                }}
                style={styles.ImageBackground_57_4743}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ed/3483/0b5c478ad58fe9c1992d3e5a07f4ae2b"
                }}
                style={styles.ImageBackground_57_4744}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3162/441e/42d616aae88df8d2a97967f7f8a9eba8"
                }}
                style={styles.ImageBackground_57_4745}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c9a/a839/9e2beb4894bc23157be3724b3db106f1"
              }}
              style={styles.ImageBackground_57_4746}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd65/daf4/fb34b1eddac1e628311fb50ae08b606b"
              }}
              style={styles.ImageBackground_57_4747}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_137_105}>
        <View style={styles.View_I137_105_137_1}>
          <View style={styles.View_I137_105_137_2} />
          <View style={styles.View_I137_105_137_3} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_I137_105_137_4}
          />
          <View style={styles.View_I137_105_137_5}>
            <View style={styles.View_I137_105_137_6} />
            <View style={styles.View_I137_105_137_7}>
              <Text style={styles.Text_I137_105_137_7}>save</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_105_137_8}>
          <View style={styles.View_I137_105_137_9}>
            <View style={styles.View_I137_105_137_10} />
            <View style={styles.View_I137_105_137_11}>
              <Text style={styles.Text_I137_105_137_11}>Cancel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I137_105_137_12}>
          <View style={styles.View_I137_105_137_13} />
          <View style={styles.View_I137_105_137_14}>
            <Text style={styles.Text_I137_105_137_14}>properties</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_57_4365: {
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
  View_57_4372: {
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
  Text_57_4372: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4373: {
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
  View_57_4374: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("15.163934426229508%")
  },
  View_57_4375: {
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
  View_57_4376: {
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
  ImageBackground_57_4377: {
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
  View_58_12: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.59722222222223%"),
    top: hp("1.3661368948514347%"),
    justifyContent: "center"
  },
  Text_58_12: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4378: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.597222222222225%"),
    top: hp("2.4590163934426226%")
  },
  View_57_4379: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.23611111111111%"),
    top: hp("1.7759396078808063%")
  },
  ImageBackground_57_4380: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4381: {
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
  View_57_4382: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.61505126953125%"),
    top: hp("1.7759396078808063%")
  },
  ImageBackground_57_4383: {
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
  ImageBackground_57_4384: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4385: {
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
  View_57_4386: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4387: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_4388: {
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
  Text_57_4388: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4389: {
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
  Text_57_4389: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4390: {
    width: wp("0.4166666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333336%")
  },
  View_57_4405: {
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
  View_57_4406: {
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
  View_57_4407: {
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
  View_57_4408: {
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
  Text_57_4408: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4409: {
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
  View_57_4410: {
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
  View_57_4411: {
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
  View_57_4412: {
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
  Text_57_4412: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4413: {
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
  View_57_4414: {
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
  View_57_4415: {
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
  Text_57_4415: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4416: {
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
  View_57_4417: {
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_57_4418: {
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
  View_57_4419: {
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_57_4420: {
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    top: hp("0.956300829277664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70518663194444%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4421: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.17979600694444%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4422: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.99998304578993%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4423: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158833821614583%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4424: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9790208604600694%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4425: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.51845974392361%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4426: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393609385672814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338646782769096%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_4427: {
    width: wp("6.2873538335164385%"),
    top: hp("0.000016676272199453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    justifyContent: "flex-start"
  },
  Text_57_4427: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4428: {
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
  ImageBackground_57_4429: {
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
  View_57_4430: {
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
  View_57_4431: {
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
  View_57_4432: {
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
  View_57_4433: {
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
  ImageBackground_57_4434: {
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
  ImageBackground_57_4435: {
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
  ImageBackground_57_4436: {
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
  View_57_4437: {
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
  View_57_4438: {
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
  ImageBackground_57_4439: {
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
  View_57_4440: {
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
  View_57_4441: {
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
  View_57_4442: {
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
  View_57_4443: {
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
  View_57_4444: {
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
  View_57_4445: {
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
  View_57_4446: {
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
  View_57_4447: {
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
  ImageBackground_57_4448: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333334%")
  },
  ImageBackground_57_4450: {
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
  View_57_4454: {
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
  Text_57_4454: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4455: {
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
  View_57_4456: {
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
  View_57_4457: {
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
  ImageBackground_57_4458: {
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
  View_57_4462: {
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
  Text_57_4462: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4463: {
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
  View_57_4464: {
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
  ImageBackground_57_4465: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.63934426229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333334%")
  },
  ImageBackground_57_4467: {
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
  View_57_4471: {
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
  Text_57_4471: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4472: {
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
  Text_57_4472: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_6750: {
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
  ImageBackground_57_6751: {
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
  ImageBackground_57_6752: {
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
  ImageBackground_57_6753: {
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
  ImageBackground_57_6754: {
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
  View_57_6755: {
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
  View_57_6756: {
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
  View_57_6757: {
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
  View_57_6758: {
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
  View_57_4473: {
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
  Text_57_4473: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4474: {
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
  Text_57_4474: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4475: {
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
  View_57_4476: {
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
  View_57_4477: {
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
  View_57_4478: {
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
  View_57_4479: {
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
  View_57_4480: {
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
  Text_57_4480: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4481: {
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
  Text_57_4481: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4482: {
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
  View_57_4483: {
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
  View_57_4484: {
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
  View_57_4485: {
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
  View_57_4486: {
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
  View_57_4487: {
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
  View_57_4488: {
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
  View_57_4489: {
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
  Text_57_4489: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4490: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555554%")
  },
  View_57_4491: {
    width: wp("3.1250299347771535%"),
    height: hp("8.468817101150263%"),
    top: hp("2.596262113644144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166615804036457%")
  },
  ImageBackground_57_4492: {
    width: wp("1.8352100584242077%"),
    height: hp("4.997118965524142%"),
    top: hp("1.8776148394808558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.289825439453125%")
  },
  View_57_4501: {
    width: wp("2.1636974811553955%"),
    height: hp("8.468817101150263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4502: {
    width: wp("1.7783817980024548%"),
    height: hp("2.5126358198989287%"),
    top: hp("5.956197436390013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4503: {
    width: wp("1.6726848814222546%"),
    height: hp("2.102045674141639%"),
    top: hp("6.366767257940552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00037299262152856727%")
  },
  ImageBackground_57_4504: {
    width: wp("0.9361974398295084%"),
    height: hp("2.0669668750033354%"),
    top: hp("2.4685885736850963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4642232259114607%")
  },
  View_57_4505: {
    width: wp("0.9472752941979303%"),
    height: hp("3.8111767482236436%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2164306640625036%")
  },
  ImageBackground_57_4506: {
    width: wp("0.9472752941979303%"),
    height: hp("3.678354930356552%"),
    top: hp("0.13280983179643613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4511: {
    width: wp("0.23453275362650552%"),
    height: hp("0.26710254898488195%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30639648437499645%")
  },
  ImageBackground_57_4512: {
    width: wp("0.1628383000691732%"),
    height: hp("0.18597378756830601%"),
    top: hp("0.040189816000676615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3420681423611107%")
  },
  ImageBackground_57_4513: {
    width: wp("1.7175732718573675%"),
    height: hp("4.203533735431609%"),
    top: hp("2.585622651980856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05896674262153212%")
  },
  ImageBackground_57_4514: {
    width: wp("1.7171977625952826%"),
    height: hp("1.226672709313898%"),
    top: hp("5.629642674180317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.059695773654517836%")
  },
  ImageBackground_57_4515: {
    width: wp("1.7175572448306613%"),
    height: hp("1.2269212899963713%"),
    top: hp("5.562303887038922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05896674262153212%")
  },
  ImageBackground_57_4516: {
    width: wp("0.9869529141320122%"),
    height: hp("3.992848318131244%"),
    top: hp("2.5219526447233562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05932278103298927%")
  },
  ImageBackground_57_4517: {
    width: wp("0.684210459391276%"),
    height: hp("1.5634367374774538%"),
    top: hp("2.559874487704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8829922146267393%")
  },
  View_57_4518: {
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
  Text_57_4518: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4519: {
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
  View_57_4520: {
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
  View_57_4521: {
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
  View_57_4522: {
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
  View_57_4523: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1382208930121536%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_4524: {
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
  View_57_4525: {
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
  View_57_4526: {
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
  Text_57_4526: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4527: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.930555555555557%")
  },
  ImageBackground_57_4529: {
    width: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    top: hp("59.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.930555555555557%")
  },
  View_57_4531: {
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
  View_57_4532: {
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
  View_57_4533: {
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
  Text_57_4533: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4534: {
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
  View_57_4535: {
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
  View_57_4536: {
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
  Text_57_4536: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4537: {
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
  View_57_4538: {
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
  View_57_4539: {
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
  Text_57_4539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4540: {
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
  View_57_4541: {
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
  View_57_4542: {
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
  Text_57_4542: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4543: {
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
  View_57_4544: {
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
  View_57_4545: {
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
  Text_57_4545: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_57_4546: {
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
  View_57_4547: {
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
  Text_57_4547: {
    color: "rgba(47, 43, 102, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4548: {
    width: wp("1.8055555555555554%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34722222222222054%")
  },
  View_57_4549: {
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
  ImageBackground_57_4550: {
    width: wp("1.6666666666666667%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.041666666666666%")
  },
  View_57_4551: {
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
  Text_57_4551: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4552: {
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
  View_57_4553: {
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
  Text_57_4553: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4554: {
    width: wp("1.6666666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_57_4555: {
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
  ImageBackground_57_4556: {
    width: wp("1.3888888888888888%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%")
  },
  View_57_4557: {
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
  Text_57_4557: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4558: {
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
  View_57_4559: {
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
  View_57_4560: {
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
  ImageBackground_57_4561: {
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
  View_57_4562: {
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
  View_57_4563: {
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
  View_57_4564: {
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
  Text_57_4564: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4565: {
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
  View_57_4566: {
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
  View_57_4567: {
    width: wp("2.4998977449205184%"),
    height: hp("8.059899272814475%"),
    top: hp("2.595661767844959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.652726915147568%")
  },
  View_57_4568: {
    width: wp("2.499897215101454%"),
    height: hp("8.058754342501281%"),
    top: hp("0.0011339865095578716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4569: {
    width: wp("2.499897215101454%"),
    height: hp("8.058754342501281%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4570: {
    width: wp("1.8068108293745253%"),
    height: hp("3.6995642823599724%"),
    top: hp("2.132228163422127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.020972357855903567%")
  },
  ImageBackground_57_4571: {
    width: wp("2.2950281037224665%"),
    height: hp("4.878204116404382%"),
    top: hp("3.1805653389685773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4572: {
    width: wp("1.7342678705851235%"),
    height: hp("4.17598948452642%"),
    top: hp("2.572081518954917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7396274142795143%")
  },
  ImageBackground_57_4573: {
    width: wp("2.2880199220445423%"),
    height: hp("5.152199437709454%"),
    top: hp("2.6922840889685773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.058932834201389284%")
  },
  ImageBackground_57_4574: {
    width: wp("1.9748886426289876%"),
    height: hp("4.946949442879099%"),
    top: hp("2.786471674351091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3292338053385411%")
  },
  ImageBackground_57_4575: {
    width: wp("1.2878566318088107%"),
    height: hp("1.873540096595639%"),
    top: hp("3.877466754183743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9930419921875%")
  },
  ImageBackground_57_4576: {
    width: wp("1.383334928088718%"),
    height: hp("1.4454419495629482%"),
    top: hp("2.419860506318301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7495964898003482%")
  },
  ImageBackground_57_4577: {
    width: wp("0.7382205459806654%"),
    height: hp("2.035731435473499%"),
    top: hp("0.7015040663422099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.359954833984375%")
  },
  ImageBackground_57_4578: {
    width: wp("0.7383581002553304%"),
    height: hp("2.0328589475871435%"),
    top: hp("0.7028715206625691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35920884874131964%")
  },
  ImageBackground_57_4582: {
    width: wp("0.9964127010769314%"),
    height: hp("2.007264517695526%"),
    top: hp("1.7510419334870164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5034823947482643%")
  },
  ImageBackground_57_4583: {
    width: wp("1.444758309258355%"),
    height: hp("2.943643976430424%"),
    top: hp("0.40446630592553845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7985772026909732%")
  },
  ImageBackground_57_4584: {
    width: wp("1.4440745777553983%"),
    height: hp("2.8724321250707074%"),
    top: hp("0.4752737576844197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7989501953125%")
  },
  ImageBackground_57_4587: {
    width: wp("0.34014105796813965%"),
    height: hp("0.6859972177307463%"),
    top: hp("0.4156727608435773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1569044325086821%")
  },
  ImageBackground_57_4588: {
    width: wp("0.30229104889763725%"),
    height: hp("0.6459819814546512%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5847947862413214%")
  },
  ImageBackground_57_4589: {
    width: wp("0.9967872831556532%"),
    height: hp("2.0385252322004144%"),
    top: hp("4.786456999231561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3569132486979179%")
  },
  ImageBackground_57_4590: {
    width: wp("0.5915264288584392%"),
    height: hp("0.6859054982336492%"),
    top: hp("5.187921576161202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4963955349392357%")
  },
  ImageBackground_57_4591: {
    width: wp("0.11578427420722115%"),
    height: hp("1.048059411387626%"),
    top: hp("5.699716369962431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.072923448350693%")
  },
  ImageBackground_57_4592: {
    width: wp("0.21706687079535592%"),
    height: hp("0.94642534933455%"),
    top: hp("6.65046400059768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4046563042534714%")
  },
  ImageBackground_57_4593: {
    width: wp("0.3482888804541694%"),
    height: hp("2.226585638327677%"),
    top: hp("3.1840673561304698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.325164794921875%")
  },
  ImageBackground_57_4594: {
    width: wp("0.07173336214489408%"),
    height: hp("0.7864040103766435%"),
    top: hp("4.566597026553964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.331878662109375%")
  },
  ImageBackground_57_4595: {
    width: wp("0.6395055188073052%"),
    height: hp("0.8256956527793343%"),
    top: hp("3.4270072895320993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5085415310329857%")
  },
  ImageBackground_57_4596: {
    width: wp("0.32671941651238334%"),
    height: hp("0.48798915466975645%"),
    top: hp("3.809027333077182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14104207356770715%")
  },
  ImageBackground_57_4597: {
    width: wp("0.2333586745791965%"),
    height: hp("0.4807810965782958%"),
    top: hp("3.772973232581961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7309909396701393%")
  },
  ImageBackground_57_4598: {
    width: wp("0.2059210671318902%"),
    height: hp("0.25012167425103526%"),
    top: hp("3.272018015710387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1826917860243071%")
  },
  ImageBackground_57_4599: {
    width: wp("0.3053780396779378%"),
    height: hp("0.47645620961006874%"),
    top: hp("3.0874783875512293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7549370659722232%")
  },
  ImageBackground_57_4600: {
    width: wp("0.04839354091220432%"),
    height: hp("0.24651725435517524%"),
    top: hp("3.225891446806685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8982510036892357%")
  },
  ImageBackground_57_4601: {
    width: wp("0.047174294789632164%"),
    height: hp("0.2775121907718846%"),
    top: hp("3.4067956476263674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2931315104166679%")
  },
  ImageBackground_57_4602: {
    width: wp("0.2398611439598931%"),
    height: hp("0.7424351947555125%"),
    top: hp("2.5021745858948066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19805908203125%")
  },
  ImageBackground_57_4603: {
    width: wp("0.06867289543151855%"),
    height: hp("0.3157154458468077%"),
    top: hp("2.6960862790300553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2937995062934018%")
  },
  ImageBackground_57_4604: {
    width: wp("0.19451618194580078%"),
    height: hp("1.9714183494692943%"),
    top: hp("3.4882759135929007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9452582465277786%")
  },
  ImageBackground_57_4605: {
    width: wp("0.14284663730197483%"),
    height: hp("0.3395028453055627%"),
    top: hp("4.604085286458329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9491746690538179%")
  },
  ImageBackground_57_4606: {
    width: wp("0.35661737124125165%"),
    height: hp("1.3399877183424318%"),
    top: hp("3.196341092469268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3091701931423607%")
  },
  ImageBackground_57_4607: {
    width: wp("0.052280955844455294%"),
    height: hp("0.37121798822788593%"),
    top: hp("4.305646719176906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.387176513671875%")
  },
  ImageBackground_57_4608: {
    width: wp("0.2847268184026082%"),
    height: hp("1.73427133612294%"),
    top: hp("2.967109054815566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6868998209635411%")
  },
  ImageBackground_57_4609: {
    width: wp("0.10996414555443658%"),
    height: hp("0.7193685229358777%"),
    top: hp("4.218429815573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6527540418836804%")
  },
  ImageBackground_57_4610: {
    width: wp("0.09819984436035156%"),
    height: hp("0.7900089514060099%"),
    top: hp("3.369340740266381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.831756591796875%")
  },
  ImageBackground_57_4611: {
    width: wp("0.12251319156752694%"),
    height: hp("1.1554603368206753%"),
    top: hp("3.5459091103141986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1868014865451375%")
  },
  ImageBackground_57_4612: {
    width: wp("0.11014739672342937%"),
    height: hp("0.48943087051474987%"),
    top: hp("2.5605748911372928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5677286783854179%")
  },
  ImageBackground_57_4613: {
    width: wp("0.29281920856899685%"),
    height: hp("1.0329225675655844%"),
    top: hp("3.5725911458333286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8719821506076393%")
  },
  ImageBackground_57_4614: {
    width: wp("0.29462258021036786%"),
    height: hp("1.2751146743857795%"),
    top: hp("3.549544537653688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4020623101128464%")
  },
  ImageBackground_57_4615: {
    width: wp("0.20475904146830243%"),
    height: hp("0.1165348323967939%"),
    top: hp("3.820433903261602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.014821370442707%")
  },
  ImageBackground_57_4616: {
    width: wp("0.1880277527703179%"),
    height: hp("0.431045157010438%"),
    top: hp("3.326782893613384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9561598036024321%")
  },
  ImageBackground_57_4617: {
    width: wp("0.19655386606852215%"),
    height: hp("0.15064979511531976%"),
    top: hp("3.907050461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333357%")
  },
  ImageBackground_57_4618: {
    width: wp("0.767764515346951%"),
    height: hp("1.808515923922179%"),
    top: hp("1.7991696550546408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6986083984375%")
  },
  ImageBackground_57_4619: {
    width: wp("0.4015166229671902%"),
    height: hp("0.39322669388817966%"),
    top: hp("0.7026714053961598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6966484917534714%")
  },
  ImageBackground_57_4620: {
    width: wp("0.30101696650187176%"),
    height: hp("0.2943795235430608%"),
    top: hp("0.7518664083845579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7468668619791679%")
  },
  ImageBackground_57_4621: {
    width: wp("0.25121861033969456%"),
    height: hp("0.36990375466685477%"),
    top: hp("0.4061339331454832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1529541015625%")
  },
  ImageBackground_57_4622: {
    width: wp("0.16779224077860513%"),
    height: hp("0.24714502480512107%"),
    top: hp("0.4674692622950829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1945597330729179%")
  },
  ImageBackground_57_4623: {
    width: wp("0.2812725967831082%"),
    height: hp("0.24014631581436738%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5843709309895857%")
  },
  ImageBackground_57_4624: {
    width: wp("0.1908678478664822%"),
    height: hp("0.16300694538595897%"),
    top: hp("0.03878900913592531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.629638671875%")
  },
  View_57_4625: {
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
  Text_57_4625: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4626: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888888%")
  },
  View_57_4627: {
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
  Text_57_4627: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4628: {
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
  View_57_4629: {
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
  View_57_4630: {
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
  View_57_4631: {
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
  View_57_4632: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1382208930121536%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_57_4633: {
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
  View_57_4634: {
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
  View_57_4635: {
    width: wp("47.56944444444444%"),
    minWidth: wp("47.56944444444444%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.43055555555556%"),
    top: hp("20.76502732240437%")
  },
  View_57_4636: {
    width: wp("47.56944444444444%"),
    minWidth: wp("47.56944444444444%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_4776: {
    width: wp("47.56944444444444%"),
    minWidth: wp("47.56944444444444%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_57_4660: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("1.9125683060109289%")
  },
  View_57_4661: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_57_4662: {
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
  Text_57_4662: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4663: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021854%")
  },
  View_57_4664: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
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
  View_57_4665: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("1.5027322404371617%"),
    justifyContent: "center"
  },
  Text_57_4665: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4666: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.91666666666667%"),
    top: hp("2.4590163934426315%")
  },
  View_57_4667: {
    width: wp("44.76782904730903%"),
    minWidth: wp("44.76782904730903%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: hp("0%")
  },
  ImageBackground_57_4669: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.236111111111114%"),
    top: hp("1.2295081967213086%")
  },
  View_57_4670: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_4670: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_5208: {
    width: wp("47.56944444444444%"),
    minWidth: wp("47.56944444444444%"),
    height: hp("32.37704918032787%"),
    minHeight: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.584699453551913%")
  },
  View_57_5209: {
    width: wp("47.56944444444444%"),
    minWidth: wp("47.56944444444444%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_5210: {
    width: wp("47.56944444444444%"),
    minWidth: wp("47.56944444444444%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_57_5211: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.625%"),
    top: hp("3.1420765027322375%")
  },
  View_57_5212: {
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
  Text_57_5212: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_5213: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    top: hp("9.562841530054648%")
  },
  View_57_5214: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.34972677595629%")
  },
  View_57_5215: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
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
  View_57_5216: {
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
  Text_57_5216: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_5217: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.519125683060103%")
  },
  View_57_5218: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
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
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_57_5653: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.91666666666667%"),
    top: hp("2.4590163934426243%")
  },
  View_57_5219: {
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
  Text_57_5219: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_5649: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639294%")
  },
  View_57_5650: {
    width: wp("44.861111111111114%"),
    minWidth: wp("44.861111111111114%"),
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
  View_57_5651: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_57_5651: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_5652: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.91666666666667%"),
    top: hp("2.4590163934426243%")
  },
  View_57_5220: {
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
  Text_57_5220: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4685: {
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
  View_57_4686: {
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
  View_57_5616: {
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
  View_57_4687: {
    width: wp("17.291666666666668%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_5612: {
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
  ImageBackground_57_5615: {
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
  ImageBackground_57_4688: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  View_57_4689: {
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
  Text_57_4689: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4690: {
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
  View_57_4691: {
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
  View_57_4692: {
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
  View_57_4693: {
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
  Text_57_4693: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4694: {
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
  View_57_4695: {
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
  Text_57_4695: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4696: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4697: {
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
  View_57_4698: {
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
  Text_57_4698: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4699: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4700: {
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
  View_57_4701: {
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
  Text_57_4701: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4702: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4703: {
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
  View_57_4704: {
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
  Text_57_4704: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4705: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4706: {
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
  View_57_4707: {
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
  Text_57_4707: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4708: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4709: {
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
  View_57_4710: {
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
  Text_57_4710: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4711: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4712: {
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
  View_57_4713: {
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
  Text_57_4713: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4714: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4715: {
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
  View_57_4716: {
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
  Text_57_4716: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4717: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967212838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4718: {
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
  View_57_4719: {
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
  Text_57_4719: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4720: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4721: {
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
  Text_57_4721: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4722: {
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
  ImageBackground_57_4723: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("39.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%")
  },
  ImageBackground_57_4724: {
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
  ImageBackground_57_4725: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%")
  },
  View_57_4726: {
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
  ImageBackground_57_4727: {
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
  ImageBackground_57_4728: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777146%")
  },
  ImageBackground_57_4729: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("1.2295081967213157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4730: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("6.01092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  ImageBackground_57_4731: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("9.972677595628419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  ImageBackground_57_4732: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("14.207650273224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  ImageBackground_57_4733: {
    width: wp("0.9722222222222222%"),
    height: hp("1.5027323707205351%"),
    top: hp("18.169398907103833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  View_57_4734: {
    width: wp("5.069445504082574%"),
    minWidth: wp("5.069445504082574%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%"),
    top: hp("20.9016393442623%")
  },
  View_57_4735: {
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
  Text_57_4735: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4738: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_4739: {
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
  View_57_4740: {
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
  Text_57_4740: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4741: {
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
  Text_57_4741: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_4742: {
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
  Text_57_4742: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_4743: {
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
  ImageBackground_57_4744: {
    width: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.902777777777771%")
  },
  ImageBackground_57_4745: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_4746: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("34.56284153005465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%")
  },
  ImageBackground_57_4747: {
    width: wp("0.9027777777777777%"),
    height: hp("1.7759562841530054%"),
    top: hp("30.464480874316948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%")
  },
  View_137_105: {
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
  View_I137_105_137_1: {
    flexGrow: 1,
    width: wp("8.333335452609592%"),
    height: hp("4.09836274027173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222229%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_105_137_2: {
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
  View_I137_105_137_3: {
    width: wp("0.06944444444444445%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.180555555555557%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  ImageBackground_I137_105_137_4: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888886%")
  },
  View_I137_105_137_5: {
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
  View_I137_105_137_6: {
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
  View_I137_105_137_7: {
    width: wp("2.013888888888889%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777857%"),
    justifyContent: "center"
  },
  Text_I137_105_137_7: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_105_137_8: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.125000000000014%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_105_137_9: {
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I137_105_137_10: {
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
  View_I137_105_137_11: {
    width: wp("3.194444444444444%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    justifyContent: "center"
  },
  Text_I137_105_137_11: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I137_105_137_12: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: hp("0.6830601092896185%")
  },
  View_I137_105_137_13: {
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
  View_I137_105_137_14: {
    width: wp("4.930555555555555%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111285%"),
    justifyContent: "center"
  },
  Text_I137_105_137_14: {
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

import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/navigation/types";
import { useRoute } from "@react-navigation/native";
import { Api_User } from "@/apis/Api_User";

type PaymentWebViewRouteProp = RouteProp<RootStackParamList, "PaymentWebView">;

const PaymentWebView: React.FC = () => {
  const route = useRoute<PaymentWebViewRouteProp>();
  const navigation = useNavigation();
  const { paymentUrl, userID, courseID } = route.params;
  const [loading, setLoading] = useState(true);

  const returnUrl = "http://localhost:6002/order/vnpay_return"; // Your configured return URL

  const handleNavigationStateChange = async (navState: WebViewNavigation) => {
    const { url } = navState;

    if (url.startsWith(returnUrl)) {
      const params = new URLSearchParams(url.split("?")[1]);
      const responseCode = params.get("vnp_ResponseCode");

      if (responseCode === "00") {
        // Payment successful
        console.log("Payment Successful");
        const res = await Api_User.enrollCourse(userID, courseID);
        console.log("Enroll Course:", res);
      } else {
        // Payment failed
        console.log("Payment Failed");
        // navigation.navigate("PaymentFailureScreen", {
        //   message: "Payment Failed",
        // });
      }
    }
  };

  const handleError = (syntheticEvent: any) => {
    const { nativeEvent } = syntheticEvent;
    console.warn("WebView error: ", nativeEvent);

    if (nativeEvent.description.includes("net::ERR_CONNECTION_REFUSED")) {
      // Navigate back to home screen on connection error
      navigation.navigate("Home" as never);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <WebView
        source={{ uri: paymentUrl }}
        onNavigationStateChange={handleNavigationStateChange}
        onLoadEnd={() => setLoading(false)}
        onError={handleError}
      />
    </View>
  );
};

export default PaymentWebView;

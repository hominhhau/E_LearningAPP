import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/navigation/types";
import { useRoute } from "@react-navigation/native";

type PaymentWebViewRouteProp = RouteProp<RootStackParamList, "PaymentWebView">;

const PaymentWebView: React.FC = () => {
  const route = useRoute<PaymentWebViewRouteProp>();
  const navigation = useNavigation();
  const { paymentUrl } = route.params;
  const [loading, setLoading] = useState(true);

  const returnUrl = "https://your-return-url.com"; // Your configured return URL

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    const { url } = navState;

    if (url.startsWith(returnUrl)) {
      const params = new URLSearchParams(url.split("?")[1]);
      const responseCode = params.get("vnp_ResponseCode");

      if (responseCode === "00") {
        // Payment successful
        console.log("Payment Successful");
        // navigation.navigate("PaymentSuccessScreen", {
        //   message: "Payment Successful",
        // });
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

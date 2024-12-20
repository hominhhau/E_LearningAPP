import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ArrowBack from "@/components/Button/Arrow-back";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/components/navigation/types";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Api_vnpay } from "@/apis/Api_vnpay";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { Api_Invoice } from "@/apis/Api_Invoice";
import { Api_User } from "@/apis/Api_User";
import moment from "moment";

type CartRouteProp = RouteProp<RootStackParamList, "Cart">;
type CartNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

const Cart: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  const route = useRoute<CartRouteProp>();
  const navigation = useNavigation<CartNavigationProp>();

  const cartItem = route.params?.cartItem
    ? { ...route.params.cartItem, price: Number(route.params.cartItem.price) }
    : null;

  const [cartItems, setCartItems] = useState(
    cartItem ? [{ ...cartItem, price: Number(cartItem.price) }] : []
  );

  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const removeItemFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

  const handleOder = async () => {
    try {
      const amount = totalPrice * 230000;
      //orderId = moment(date).format('DDHHmmss')
      const invoiceID = moment().format("DDHHmmss");
      const userID = user?._id;
      const courseID = cartItems[0].id.toString();
      const status = "pending";
      const price = amount;
      const userId = user?.userID;
      const courseId = cartItems[0].id.toString();
      console.log("User ID:", userID);
      console.log("Course ID:", courseID);
      console.log("Invoice ID:", invoiceID);

      // create invoice
      const res = await Api_Invoice.createInvoice({
        invoiceID,
        userID,
        courseID,
        status,
        price,
      });

      console.log("Invoice created:", res);

      const res1 = await Api_vnpay.createPaymentUrl({ invoiceID, amount });
      // setPaymentUrl(res1.data);
      console.log("Payment URL:", res1.data);

      // Navigate to the PaymentWebView screen with the payment URL, userID, and courseID
      navigation.navigate("PaymentWebView", {
        paymentUrl: res1.data,
        userID,
        courseID,
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ArrowBack onPress={() => navigation.goBack()} />
        <Text style={styles.textHeader}>Your Cart</Text>
      </View>
      <View style={styles.cartSummary}>
        <Text style={styles.countSum}>{totalItems} item(s) in your cart</Text>
      </View>

      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price || 0}</Text>
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
              <Ionicons name="trash-outline" size={32} color="#666" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) =>
          item?.id ? item.id.toString() : index.toString()
        }
      />
      <View style={styles.discountContainer}>
        <TextInput style={styles.discountInput} placeholder="Enter code" />
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => console.log("Apply")}
        >
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentSummary}>
        <Text style={styles.paymentText}>Payment Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Order Total</Text>
          <Text style={styles.summaryValue}>${totalPrice}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Items Discount</Text>
          <Text style={styles.summaryValue}>0</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Coupon Discount</Text>
          <Text style={styles.summaryValue}>0</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${totalPrice}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.placeOrderButton} onPress={handleOder}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 100,
  },
  cartSummary: {
    marginTop: 20,
  },
  countSum: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00bdd6",
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  discountInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#00bdd6",
    borderRadius: 5,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: "#a25ddc",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  applyText: {
    color: "#fff",
    fontWeight: "bold",
  },
  paymentSummary: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 1,
  },
  paymentText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#555",
  },
  summaryValue: {
    fontSize: 16,
    color: "#555",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e60000",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: "#003366",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  placeOrderButton: {
    backgroundColor: "#00bdd6",
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  placeOrderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cart;

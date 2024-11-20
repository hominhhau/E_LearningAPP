import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "gray"
  },
  buttonChatBubble: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  header: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00bdd6",
  },
  subHeaderText: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  chatSection: {
    flex: 1,
    justifyContent: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E0F7FA",
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#D1C4E9",
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: '80%',
  },
  botText: {
    fontSize: 16,
    color: "#00796B",
  },
  userText: {
    fontSize: 16,
    color: "#000000",
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    borderRadius: 20,
    padding: 10,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#007AFF",
    fontSize: 16,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 0.25,
    justifyContent: "space-around",
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84, 
    elevation: 5,
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: '#fafafa',
    borderRadius: 25,
  },
  text: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: 'Lato-Regular',
    
  },
  buttonContainer: {
    width: "100%",
    flexGrow: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  });
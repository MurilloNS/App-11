import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
  },

  textTitle: {
    color: "orange",
    fontSize: 30,
    alignSelf: "center",
  },

  compContainers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  pickerStyle: {
    height: 50,
    width: 160,
    alignSelf: "center",
    marginTop: 2,
    marginLeft: 110,
  },

  pickerStyle2: {
    height: 50,
    width: 230,
    alignSelf: "center",
    marginTop: 2,
  },

  genero: {
    fontSize: 17,
  },

  dados: {
    color: "blue",
    marginTop: "5%",
    fontSize: 23,
  },

  resultDado: {
    display: "flex",
    width: "80%",
  },

  viewResult: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    backgroundColor: "#5dade2",
    height: 40,
    width: "80%",
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },

  textButton: {
    fontSize: 20,
  },
});

export default styles;

import { Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Label from "../../components/Label";

export default function Dados({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.resultDado}>
      <Text style={styles.dados}>Dados informados:</Text>
      <View style={styles.viewResult}>
        <Label text="Nome: " />
        <Label text={route.params?.nome} />
      </View>
      <View style={styles.viewResult}>
        <Label text="Idade: " />
        <Label text={route.params?.idade} />
      </View>
      <View style={styles.viewResult}>
        <Label text="Gênero: " />
        <Label text={route.params?.selectedGenero} />
      </View>
      <View style={styles.viewResult}>
        <Label text="Escolaridade: " />
        <Label text={route.params?.selectedEscolaridade} />
      </View>
      <View style={styles.viewResult}>
        <Label text="Limite: " />
        <Label text={route.params?.limit} />
      </View>
      <View style={styles.viewResult}>
        <Label text="Brasileiro: " />
        <Label text={route.params?.checked ? "True" : "False"} />
      </View>
    </View>
  );
}

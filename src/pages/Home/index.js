import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Label from "../../components/Label";
import Input from "../../components/Input";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { Switch } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [selectedGenero, setSelectedGenero] = useState("");
  const [selectedEscolaridade, setSelectedEscolaridade] = useState("");
  const [limit, setLimit] = useState("");
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const onSubmit = () => {
    setNome(nome);
    setIdade(idade);
    setSelectedGenero(selectedGenero);
    setSelectedEscolaridade(selectedEscolaridade);
    setLimit(limit);
    setChecked(checked);

    navigation.navigate("Dados", {
      nome: nome,
      idade: idade,
      selectedGenero: selectedGenero,
      selectedEscolaridade: selectedEscolaridade,
      limit: limit,
      checked: checked,
    });
  };

  return (
    <View style={styles.safeArea}>
      <Text style={styles.textTitle}>Abertura de Conta</Text>
      <View style={styles.compContainers}>
        <Label text="Nome:" />
        <Input onChangeText={setNome} />
      </View>
      <View style={styles.compContainers}>
        <Label text="Idade:" />
        <Input tipo="numeric" onChangeText={setIdade} />
      </View>
      <View style={styles.compContainers}>
        <Text style={styles.genero}>Gênero: </Text>
        <Picker
          selectedValue={selectedGenero}
          style={styles.pickerStyle}
          onValueChange={(itemValue, itemIndex) => setSelectedGenero(itemValue)}
        >
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
        </Picker>
      </View>
      <View style={styles.compContainers}>
          <Text style={styles.genero}>Escolaridade: </Text>
          <Picker
            selectedValue={selectedEscolaridade}
            style={styles.pickerStyle2}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedEscolaridade(itemValue)
            }
          >
            <Picker.Item label="Ensino Fundamental" value="fundamental" />
            <Picker.Item label="Ensino Médio" value="medio" />
            <Picker.Item label="Ensino Superior" value="superior" />
            <Picker.Item label="Pós-graduação" value="graduação" />
            <Picker.Item label="Mestrado" value="mestrado" />
            <Picker.Item label="Doutorado" value="doutorado" />
          </Picker>
        </View>
      <View style={styles.compContainers}>
        <Text style={styles.genero}>Limite: </Text>
        <Slider
          style={{ width: "70%", height: 40 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#00FFFF"
          maximumTrackTintColor="#000000"
          onValueChange={setLimit}
          step={10}
        />
      </View>
      <View style={styles.compContainers}>
        <Text style={styles.genero}>Brasileiro: </Text>
        <Switch value={checked} onValueChange={toggleSwitch} />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.textButton}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

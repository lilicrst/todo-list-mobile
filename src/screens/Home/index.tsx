import { Image, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.todoLogo}>
          <Image
            source={require('/home/lisandra/GitHub/todo-list-mobile/assets/todoLogo.png')}
          />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />

          <TouchableHighlight style={styles.button}>            
            <Text style={styles.textButon}>
              +
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    </View>
  )
}
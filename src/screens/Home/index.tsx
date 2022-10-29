import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.tasks}>

        <View style={styles.info}>
          <View style={styles.info}>
            <Text style={styles.createdTaskInfo}>Criadas</Text>
            <Text style={styles.couter}>5</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.completeTaskInfo}>Concluídas</Text>
            <Text style={styles.couter}>2</Text>
          </View>
        </View>


        <Text>Tarefa 1</Text>
        <Text>Tarefa 1</Text>

      </View>

    </View>
  )
}
import { Text, View, FlatList } from "react-native";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { styles } from "./styles";
import { ListEmpty } from "../../components/ListEmpty";

export function Home() {

  const tasks = [
    'ListEmptyComponent na aula Lista de participantes',
    'Terminar esse desafio',
    'Começar módulo 2 de React Native',
    'Melhorar meu portfólio',
    'Terminar desafio de React',
    'Aprender coisas novas',
    'Pesquisar nas documentações',
    'Integer urna massa libero auctor neque turpis turpis semper.',
    'Integer urna interdum massa libero auctor neque turpis turpis.',
    'Terminar o desafio'
  ]

  function handleTaskRemove() {

  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.tasksList}>

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
      </View>

      <FlatList
        style={styles.tasksList}
        data={[]}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            text={item}
            onRemove={() => handleTaskRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty />
        )}
      />

    </View>
  )
}
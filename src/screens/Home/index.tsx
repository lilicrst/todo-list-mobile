import { Text, View, FlatList, TextInput, TouchableHighlight } from "react-native";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { styles } from "./styles";
import { ListEmpty } from "../../components/ListEmpty";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [textTask, setTextTask] = useState('')

  function handleTaskAdd() {
    setTasks(prevState => [...prevState, textTask])
    setTextTask('')
  }

  function handleTaskRemove(taskToRemove: string) {
    setTasks(tasks.filter(task => task !== taskToRemove))
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTextTask}
          value={textTask}
        />

        <TouchableHighlight style={styles.button} onPress={handleTaskAdd}>
          <Ionicons name='add-circle-outline' size={18} color='#f2f2f2' />
        </TouchableHighlight>
      </View>

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
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            text={item}
            onRemove={() => handleTaskRemove(item)}
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
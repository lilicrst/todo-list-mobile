import { Text, View, FlatList, TextInput, TouchableHighlight } from "react-native";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { styles } from "./styles";
import { ListEmpty } from "../../components/ListEmpty";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<{text: string, isComplete: boolean}[]>([])
  const [textTask, setTextTask] = useState('')

  function handleTaskAdd() {
    setTasks(prevState => [...prevState, {text: textTask, isComplete: false}])
    setTextTask('')
  }

  function handleTaskRemove(taskToRemove: string) {
    setTasks(tasks.filter(task => task.text !== taskToRemove))
  }

  function handleCheckChange(taskToMark: string) {    
    tasks.map(task => {
      if (task.text == taskToMark) {        
        task.isComplete = !task.isComplete 
        console.log(task.isComplete)       
      }      
    })
    
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
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => (
          <Task
            key={item.text}
            text={item.text}
            onRemove={() => handleTaskRemove(item.text)}
            onCheckChange={() => handleCheckChange(item.text)}
            isComplete={item.isComplete}
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
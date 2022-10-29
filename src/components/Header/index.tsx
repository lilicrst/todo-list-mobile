import { styles } from './styles'
import {View, Text, TextInput, Image, TouchableHighlight} from 'react-native'

export function Header(){
  return (
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
  )
}
import { styles } from './styles'
import {View, Text, TextInput, Image, TouchableHighlight, Button} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export function Header(){
  return (
    <View style={styles.header}>

    <View style={styles.todoLogo}>
      <Image
        source={require('/home/lisandra/GitHub/todo-list-mobile/assets/todoLogo.png')}
      />
    </View>

  </View>
  )
}
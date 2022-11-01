import { Text, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <Ionicons name='clipboard-outline' size={56} color='#333333' />
      <Text style={styles.textStrong}>
        Você ainda não não tarefas cadastradas.
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer.
      </Text>
    </View>
  )
}
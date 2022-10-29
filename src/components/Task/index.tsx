import { Text, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

export function Task() {
  return (
    <View style={styles.container}>
      <Ionicons name='radio-button-off' size={20} color='#4EA8DE' />
      <Text
        style={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <Ionicons name='trash-outline' size={20} color='#808080' />
    </View>
  )
}
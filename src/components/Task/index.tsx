import { Text, View } from 'react-native'
import { styles } from './styles'

export function Task() {
  return (
    <View style={styles.container}>
    <Text
      style={styles.taskText}>
      Integer urna interdum massa libero auctor neque turpis turpis semper.
    </Text>
    </View>
  )
}
import { styles } from './styles'
import { Text, View } from 'react-native'

type Props = {
  tasksNumber: number;
  tasksDoneNumber: number;
}

export function InfoBar({ tasksNumber, tasksDoneNumber }: Props) {
  return (
    <View>
      <View style={styles.info}>
        <View style={styles.info}>
          <Text style={styles.createdTaskInfo}>Criadas</Text>
          <Text style={styles.counter}>{tasksNumber}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.completeTaskInfo}>Concluídas</Text>
          <Text style={styles.counter}>{tasksDoneNumber}</Text>
        </View>
      </View>
    </View>
  )
}
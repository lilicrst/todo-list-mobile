import { Text, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = {
  text: string;
  onRemove: () => void;
  onCheckChange: () => void;
  isComplete: boolean;
}

export function Task({ text, onRemove, onCheckChange, isComplete }: Props) {

  return (
    <View style={styles.container}>
      <Ionicons
        name='radio-button-off'
        size={20}
        color='#4EA8DE'
        onPress={onCheckChange}
      />
      <Text
        style={styles.taskText}>
        {text}
      </Text>
      <Ionicons
        name='trash-outline'
        size={20}
        color='#808080'
        onPress={onRemove}
      />
    </View>
  )
}
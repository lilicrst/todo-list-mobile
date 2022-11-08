import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  createdTaskInfo: {
    color: '#1E6F9F',
    fontWeight: 'bold',
    fontSize: 14
  },
  completeTaskInfo: {
    color: '#5E60CE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  counter: {
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#333333',
    color: '#d9d9d9',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8
  }
})
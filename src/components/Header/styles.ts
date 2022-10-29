import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center'
  },
  todoLogo: {
    width: 110,
    height: 32,
    marginTop: 70,
    flexDirection: "row"
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5E60CE"
  },
  form: {
    flexDirection: 'row',
    width: '100%',    
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 24
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#0d0d0d',
    color: '#fff',
    fontSize: 16,
    padding: 16,
    marginRight: 4
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButon: {
    fontSize: 24,
    color: '#f2f2f2'
  }
})
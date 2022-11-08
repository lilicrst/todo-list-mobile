import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a'
  },
  tasksList: {
    width: '100%',
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 32,
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
  }
})


/*
white: '#FFF',

  --white: #fff;
  --gray-100: #f2f2f2;
  --gray-200: #d9d9d9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1a1a1a;
  --gray-700: #0d0d0d;

  --purple-300: #8284FA;
  --purple-500: #5E60CE;
  --blue-200: #4EA8DE;
  --blue-400: #1E6F9F;

  --red: #E25858;

*/
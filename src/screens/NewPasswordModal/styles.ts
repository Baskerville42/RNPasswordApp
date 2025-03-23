import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems: 'flex-end',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelText: {
    color: '#007AFF',
    fontSize: 17,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  saveText: {
    fontSize: 17,
    color: '#007AFF',
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
  },
  input: {
    padding: 12,
    fontSize: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});

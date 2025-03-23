import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: '5%',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBox: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 36,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
    marginRight: 16,
  },
  micIcon: {
    marginRight: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
  },
  cardIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
  cardCount: {
    fontWeight: '600',
    marginRight: 8,
  },
  spacer: {
    flex: 1,
  },
  sectionHeader: {
    marginTop: 24,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
  groupCard: {
    borderRadius: 12,
    padding: 12,
  },
  groupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  groupIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  groupIconFill: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
  },
  groupText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  groupCount: {
    marginRight: 8,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    marginVertical: 6,
  },
  fab: {
    paddingRight: 20,
    paddingBottom: '5%',
  },
});

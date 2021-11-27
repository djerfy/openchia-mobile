import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useRecoilState } from 'recoil';
import { currencyState } from '../Atoms';
import PressableCard from '../components/PressableCard';

export const currencies = [
  { key: 'usd', USD: '$', title: 'United States Dollar' },
  { key: 'eur', EUR: '€', title: 'Euro' },
  { key: 'cad', CAD: '$', title: 'Canadian Dollar' },
  { key: 'gbp', GBP: '£', title: 'Pound sterling' },
  { key: 'aud', AUD: '$', title: 'Australian Dollar' },
  { key: 'sgd', SGD: '$', title: 'Singapore Dollar' },
  { key: 'jpy', JPY: '¥', title: 'Japanese Yen' },
  { key: 'inr', INR: '₹', title: 'Indian Rupee' },
  { key: 'myr', MYR: 'RM', title: 'Malaysian Ringgit' },
  { key: 'cny', CNY: '¥', title: 'Chinese Yuan' },
  { key: 'chf', CHF: 'Fr', title: 'Swiss Franc' },
  { key: 'hkd', HKD: 'HK$', title: 'Hong Kong Dollar' },
  { key: 'brl', BRL: 'R$', title: 'Brazilian Real' },
  { key: 'dkk', DKK: 'kr.', title: 'Danish Krone' },
  { key: 'nzd', NZD: '$', title: 'New Zealand Dollar' },
  { key: 'try', TRY: '₺', title: 'Turkish Lira' },
  { key: 'thb', THB: '฿', title: 'Thai Baht' },
  { key: 'twd', TWD: 'NT$', title: 'New Taiwan Dollar' },
  { key: 'krw', KRW: '₩', title: 'South Korean Won' },
  { key: 'eth', ETH: 'ETH', title: 'Ethereum' },
  { key: 'btc', BTC: '₿', title: 'Bitcoin' },
];

export const getCurrencyFromKey = (key) =>
  Object.values(currencies.find((currency) => currency.key === key))[1];

export const getCurrencyTitle = (key) =>
  Object.values(currencies.find((currency) => currency.key === key))[2];
// export const getCurrencyIcon = (key) =>
// Object.values(currencies.find((currency) => currency.key === key))[1];

const Item = ({ item, onPress }) => (
  <PressableCard onPress={onPress}>
    <View
      style={{
        padding: 14,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text style={styles.label}>{item.title}</Text>
      <View style={{ flex: 1 }} />
      <Text style={styles.label}>{item[item.key.toUpperCase()]}</Text>
    </View>
  </PressableCard>
);

const CurrencySelectionScreen = ({ navigation }) => {
  const [currency, setCurrency] = useRecoilState(currencyState);

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => {
        if (currency !== item.key) {
          setCurrency(item.key);
          navigation.goBack();
        }
      }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        initialNumToRender={currencies.length - 1}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 6 }}
        ListHeaderComponent={<View style={{ paddingTop: 6 }} />}
        data={currencies.filter((item) => currency !== item.key)}
        renderItem={renderItem}
        keyExtractor={(item) => item.key.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemNotSelected: {
    // backgroundColor: '#dbdbdb',
    // padding: 14,
    // paddingEnd: 20,
    // marginVertical: 8,
    // borderRadius: 8,
    // marginHorizontal: 16,
    // borderColor: '#c9c9c9', // if you need
    // borderWidth: 1,
    // overflow: 'hidden',
    // shadowColor: '#000',
    // shadowRadius: 10,
    // shadowOpacity: 1,
    // elevation: 6,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default CurrencySelectionScreen;

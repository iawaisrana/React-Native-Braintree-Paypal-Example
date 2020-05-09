/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';
import {requestOneTimePayment} from 'react-native-paypal';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const checkout = async () => {
    fetch('http://localhost:3000/getClientToken', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        const {token} = responseJson;
        const {
          nonce,
          payerId,
          email,
          firstName,
          lastName,
          phone,
        } = await requestOneTimePayment(token, {
          amount: '5', // required
          // any PayPal supported currency (see here: https://developer.paypal.com/docs/integration/direct/rest/currency-codes/#paypal-account-payments)
          currency: 'USD',
          // any PayPal supported locale (see here: https://braintree.github.io/braintree_ios/Classes/BTPayPalRequest.html#/c:objc(cs)BTPayPalRequest(py)localeCode)
          localeCode: 'en_US',
          shippingAddressRequired: false,
          userAction: 'commit', // display 'Pay Now' on the PayPal review page
          // one of 'authorize', 'sale', 'order'. defaults to 'authorize'. see details here: https://developer.paypal.com/docs/api/payments/v1/#payment-create-request-body
          intent: 'authorize',
        });
        console.log(nonce, payerId, email, firstName, lastName, phone);
        alert('Transaction Successful');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            title="Checkout"
            onPress={() => {
              checkout();
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;

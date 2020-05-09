# React-Native-Braintree-Paypal-Example

A react-Native project just to demonstrate how to integrate the PayPal for checkout. Current project uses [react-native-paypal](https://github.com/smarkets/react-native-paypal) as a third-party library for PayPal integration.

<p align="center">
<img src="./iosPaypalDemo.gif" width="220" height="400"/>
<img src="./androidPaypalDemo.gif" width="220" height="400"/>
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First of all, you need a [Braintree](https://www.braintreepayments.com/) account to integrate PayPal to the react-native project. After creating an account you will get Merchant ID, Public Key, and Private key. Now link your Braintree account to the PayPal account by following this [link](https://help.paperform.co/en/articles/2072845-how-to-connect-braintree-your-paperform-account-and-paypal)

### Installing

Now you are ready to test the PayPal feature. Just follow these simple steps.

#### step 1

```
git clone https://github.com/awais-fastian/React-Native-Braintree-Paypal-Example.git
```

```
cd React-Native-Braintree-Paypal-Example
```

#### step 2

Browse to the server folder

```
cd server
```

Now run these commands on terminal

```
npm install
```

Open .env file and put Merchant ID, Public Key and Private key there

```
npm run start
```

Now you are ready to test the PayPal feature on iOS as well as on Android

## Deployment

Browse to example folder on a separate terminal

```
cd example
```

### Android Deployment

```
react-native run-android
```

### iOS Deployment

```
react-native run-android
```

## Built With

- [Nodejs](https://nodejs.org/en/) - JavaScript runtime environment that executes JavaScript code outside of a web browser
- [React-native](https://reactnative.dev/) - Mobile application framework
- [Braintree](https://www.braintreepayments.com/) - a platform that delivers PayPal, Venmo (in the US), credit and debit cards, and popular digital wallets like Apple Pay and Google Pay in a single, seamless integration.
- [Paypal](https://rometools.github.io/rome/) - American company operating a worldwide online payment system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments

- [react-native-payapl](https://github.com/smarkets/react-native-paypal)

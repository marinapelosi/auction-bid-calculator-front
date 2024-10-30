# Bid Calculator App

The Bid Calculator App was built using Vue 3 in Vite.

## Behaviour

The App receive data and pass them to the API for calculating fees by their rules and add them to the price. After calculation, the API response is displayed on the screen for the user.

![alt text](image-9.png)

## Setup

```sh
git clone git@github.com:marinapelosi/auction-bid-calculator-front.git
```

```sh
cd auction-bid-calculator-front
```

```sh
npm install
```

### Compile

```sh
npm run dev
```

### Usage

Access the server url [http://localhost:5173/](http://localhost:5173/)

![alt text](image-7.png)

Enter the car price and then select the car type complying with the following rules.

| Field | Rules  |
|---------- |----------|
| Car Price | Number min 1    |
| Car Type  | Common or Luxury |

Then wait for the calculation. It will be displayed below the form.

![alt text](image-8.png)

-------

### Run End-to-End Test with [Cypress](https://www.cypress.io/)

```sh
npx cypress open
```
![alt text](image.png)
![alt text](image-5.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-10.png)
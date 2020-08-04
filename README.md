# nc-react

## 챌린지

## 1.

### 문제

https://nomad-coders-assets.s3.amazonaws.com/media/public/django-summernote/2019-08-23/40f05738-85fc-402e-b05a-074bc56250af.png

### 상세 설명:
Complete the "ObjectUtilities" class with the following functions.

- mergeObjects: Merge two objects. Return an object.
- removePassword: Remove the 'password' key on an object. Return an object.
- freezeObj: Freezes an object. Returns the frozen object.
- getOnlyValues: Returns an array of all the values inside of an object.
- getOnlyProperties: Returns an array of all the properties inside of an object.
- Changing the 'name' of the 'frozenUser' SHOULD throw an error. This is the desired output.

https://nomad-coders-assets.s3.amazonaws.com/media/public/django-summernote/2019-08-23/cb11bd7b-903d-4428-a15f-ff5a811905a4.png

### 조건:
- The output of the program must be EXACTLY like on the image above.
- Place your functions INSIDE of 'ObjectUtilities'
- DO NOT edit ANYTHING OUTSIDE of 'ObjectUtiliies'.
- Don't give up!
- IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌

### 힌트:
- Use arrow functions
- Use spread and rest operators

### 코드

class static 메소드와 Object.keys(), Object.values(), Object.freeze(), spread, rest

- 내 코드: https://codesandbox.io/s/day-one-blueprint-l37w8
- 정답 코드: https://codesandbox.io/s/day-one-solution-qsule

## 2. 

### 문제

https://nomad-coders-assets.s3.amazonaws.com/media/public/django-summernote/2019-08-23/93e03b2a-7b1f-4735-bf9c-16cfb8d211bb.png

### 상세 설명:
상세 설명:
Complete the "ArrayUtilities" class with the following functions:

- addZeros: Add zeros to all the numbers. Return an array of numbers.
- moreThanFifty: Remove the numbers that are not more than 50. Return an array of numbers.
- removeFirst: Remove the first element of the array. Return an array of numbers.
- sumAll: Sum all the elements of the array. Return ONE number.
- divide: Take a number and divide it into an array.
- This is the desired output.

https://nomad-coders-assets.s3.amazonaws.com/media/public/django-summernote/2019-08-23/370a99f9-41c1-458a-a12f-74a65d1a81e7.png

### 조건:
- The output of the program must be EXACTLY like on the image above.
- Place your functions INSIDE of 'ArrayUtilities'
- DO NOT edit ANYTHING OUTSIDE of 'ArrayUtilities'.
- Don't give up!
- IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌

### 힌트:
- Use arrow functions
- Not everything is on the videos, research!

### 코드

- 내 코드: https://codesandbox.io/s/day-two-blueprint-4h6kc
- 정답 코드: https://codesandbox.io/s/day-two-solution-t0g38

## 3. 

### 문제

https://nomad-coders-assets.s3.amazonaws.com/media/public/django-summernote/2019-08-24/477e2af4-f3ea-42b7-bcdf-acc241b5e727.gif

### 조건

- DO NOT create or delete ANY file.
- DO NOT use <a></a>
- IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌

### 코드

- 내 코드 : https://codesandbox.io/s/day-three-blueprint-q28nn
- 정답코드 : https://codesandbox.io/s/day-three-solution-o4vol

## 4.

### 문제

https://nomad-coders-assets.s3.amazonaws.com/media/public/django-summernote/2019-08-24/129ea34b-01d1-4041-82e7-5a8f4a87064b.gif

### 조건:

- Use 'styled-components' , 'styled-reset' and 'createGlobalStyle'
- The header must be location aware and the links should reflect that.
- DO NOT use ANY .css file or 'className' attribute.
- IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌

### 코드:

- 내 코드 : https://codesandbox.io/s/day-four-boilerplate-8rcmj
- 정답 코드 : https://codesandbox.io/s/day-four-solution-3j7gi

## 5. 

### 문제

https://youtu.be/gBCUJuS5-HU

- Extend the Coin Explorer to call the following API endpoints on the following pages:

- (1) / (Homepage) https://api.coinpaprika.com/v1/tickers
- (2) /exchanges https://api.coinpaprika.com/v1/exchanges
- (3) /coins https://api.coinpaprika.com/v1/coins
- Homepage: Show the name of the coin, the symbol and price.
- Exchanges: Show the name of the exchange, description and website link.
- Coins: List the coins and sort them by rank.

### 조건:
- Use Container/Presenter pattern with class components.
- DO NOT use Hooks. I know they are awesome, we will use them later.
- ALL PRESENTERS should use PropTypes.
- Use PropTypes.shape
- Use async/await
- All AJAX requests MUST be made with an AXIOS INSTANCE ('axios.create')
- Containers MUST NEVER call Axios directly, they should call the instance.
- Use a Loader Component.
- IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌

### 코드:

- 내 코드: https://codesandbox.io/s/day-five-blueprint-85p2b
- 정답 코드: https://codesandbox.io/s/day-five-solution-xoocs

## 6. 

### 문제 nested Route

https://youtu.be/A7Zn8o-JL5Q

Extend the Coin Explorer to create a detail view of each coin. You have to make the following URLs on your existing app.

- (1) /coins/{coin_id} https://api.coinpaprika.com/v1/coins/{coin_id}
- (2) /coins/{coin_id}/exchanges https://api.coinpaprika.com/v1/coins/{coin_id}/exchanges
- (3) /coins/{coin_id}/markets https://api.coinpaprika.com/v1/coins/{coin_id}/markets

- Documentation
- Coin Markets & Coin Exchanges: These two ROUTES should be inside of the Coin Detail.

### 조건:
- Use Container/Presenter pattern with class components.
- DO NOT use Hooks. I know they are awesome, we will use them later.
- ALL PRESENTERS should use PropTypes.
- Use PropTypes.shape
- Use async/await
- All AJAX requests MUST be made with an AXIOS INSTANCE ('axios.create')
- Containers MUST NEVER call Axios directly, they should call the instance.
- Use a Loader Component.
- Coin Markets and Coin Exchanges should be ROUTES.
- IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌

### 코드:

- 내 코드 : https://codesandbox.io/s/day-five-solution-xkrx0

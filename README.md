# Description
> Package to validate German tax ID / steuer ID

# Installation
``` 
npm install validate-steuerid
```

# Usage

You can either validate steuerId or generate a valid steuerId
```js
const { validateSteuerId, generateSteuerId } = require('validate-steuerid')

validateSteuerId('65299970480')
// => false

validateSteuerId('65929970489')
// => true

validateSteuerId('26954371827')
// => true

generateSteuerId()
// => random steuerId string
```

# Methods
## validateSteuerId(steuerId)
### Takes `steuerId`:
  - type: `string`
### Returns `boolean`
<br>

## generateSteuerId()
### Returns `string`

<br>

# References
For developing the algorithm, we referenced the European Commission's TIN check modules stated [here](https://ec.europa.eu/taxation_customs/tin/#/check-tin).
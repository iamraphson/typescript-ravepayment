# Rave Payment Implementation for typescript

Easy Implementation of RavePay Payment gateway using typescript

### Demo
![Demo Image](demo1.png?raw=true "Demo Image")

#### Installation
```
npm install iamraphson/typescript-ravepayment --save
```
or 
```
yarn add iamraphson/typescript-ravepayment
```

## Usage
### ES6
```
import RavePayment from 'typescript-ravepayment'

class DemoClass {
    private rave:RavePayment;
    constructor(){
        this.rave = new RavePayment(false) // if production, true else false
    }

    payMe(): void {
        let raveOption: any =  {
            PBFPubKey: 'FLWPUBK-xxxxxxxxxxx-X',
            txref: this.computeReference(),
            amount: 1000,
            customer_email: "FooBar@rave.com",
            callback : (response: object) => this.callback(response),
            onclose: () => this.onclose()
        }
        this.rave.pay(raveOption)
    }

     callback(response: object): void {
        console.log(response)
    }

     onclose(): void {
        console.log("close")
    }

    computeReference () : string {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( let i=0; i < 10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}
```
[Usage](./demo/more_example/src/app.ts)
### ES5 / Common.js imports
```
let RavePayment = require('typescript-ravepayment')

class DemoClass {
    private rave:any;
    constructor(){
        this.rave = RavePayment.Ravepay(true) // if production, true else false
    }

    payMe(): void {
        let raveOption: any =  {
            PBFPubKey: 'FLWPUBK-xxxxxxxxxxx-X',
            txref: this.computeReference(),
            amount: 1000,
            customer_email: "FooBar@rave.com",
            callback : (response: object) => this.callback(response),
            onclose: () => this.onclose()
        }
        this.rave.pay(raveOption)
    }

     callback(response: object): void {
        console.log(response)
    }

     onclose(): void {
        console.log("close")
    }

    computeReference () : string {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( let i=0; i < 10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}
```

## Deployment
WHEN DEPLOYING TO PRODUCTION/LIVE SYSTEM, take note of the following;
1) Pass in `true`  to this function `Ravepay` or constructor`RavePayment`. E.g `RavePayment.Ravepay(true)` or `new RavePayment(true)` 
2) Change RavePay PUBLIC KEY

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/iamraphson)!

Thanks!
Ayeni Olusegun.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

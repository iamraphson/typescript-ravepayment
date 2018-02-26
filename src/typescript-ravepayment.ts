export interface IRaveOptions {
  PBFPubKey: string
  txref: string
  amount: number
  currency?: string
  country?: string
  customer_email: string
  customer_firstname?: string
  customer_lastname?: string
  custom_title?: string
  custom_description?: string
  custom_logo?: string
  meta?: any
  callback: (response: any) => void
  onclose: () => void
}

export default class RavePayment {
  private loadAPI: Promise<any>
  private isProduction: boolean

  constructor(isProduction: boolean = false) {
    this.isProduction = isProduction
    this.loadAPI = new Promise((resolve: any) => {
      this.loadScript(() => {
        resolve()
      })
    })
  }

  public pay(raveOption: IRaveOptions): void {
    this.loadAPI.then(() => {
      ;(window as any).getpaidSetup(raveOption)
    })
  }

  private loadScript(callback: () => void) {
    let script: any = (document as any).createElement('script')
    script.src = !this.isProduction
      ? 'http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/flwpbf-inline.js'
      : 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js'

    if (script.readyState) {
      // IE
      script.onreadystatechange = function() {
        if (
          script.readyState === 'loaded' ||
          script.readyState === 'complete'
        ) {
          script.onreadystatechange = null
          callback()
        }
      }
    } else {
      // Others
      script.onload = function() {
        callback()
      }
    }
    ;(document as any).body.appendChild(script)
  }
}

export function Ravepay(isProduction = false) {
  return new RavePayment(isProduction)
}

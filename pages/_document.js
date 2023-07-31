// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='modal-portal' style={{position: "relative", zIndex: "10000"}} />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
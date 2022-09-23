import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  <div className="box-content mx-auto w-screen px-auto bg-white min-h-screen  font-sans subpixel-antialiased">
  <Component {...pageProps} />
  </div>
  
}

export default MyApp

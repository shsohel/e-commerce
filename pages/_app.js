import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  <div className='box-border md:box-content bg-neutral-200 min-h-screen max-w-[2000] '>
  <Component {...pageProps} />
  </div>
  
}

export default MyApp

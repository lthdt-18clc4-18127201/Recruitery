import '@styles/globals.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import Script from 'next/script'
import Link from 'next/script'
import Head from 'next/head'

export const metadata = {
    title: 'Recruitery Templete',
    description: 'Discover & Use Modern Template'
}

const RootLayout = ({children}) => {
    return (
        <>
            <html lang='en'>
                <body>
                    <div className="container">
                        <Nav />
                        {children}
                        <Footer />
                    </div>
                    <Script src="https://kit.fontawesome.com/5a94919680.js" crossorigin="anonymous"></Script>
                </body>
            </html>
        </>
    )
}

export default RootLayout

import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer'; 
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Mb Infra | Best Builder In Manish Nagar & Beltarodi | Affordable Luxury Flats In Nagpur",
  description: "MB Infra offers premium, RERA-approved flats in prime Nagpur locations including Manish Nagar. Spacious, affordable luxury apartments with modern amenities.",
  keywords: "Best builder in Manish Nagar, Flats in Nagpur, Beltarodi apartments, Premium RERA-approved flats, Spacious flats Nagpur, Affordable luxury flats",
  authors: [{ name: "MB Infra" }],
  metadataBase: new URL('https://mbinfra.co.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MB Infra | Leading Infrastructure & Construction Company",
    description: "Trusted infrastructure and construction company delivering sustainable and innovative projects.",
    url: 'https://mbinfra.co.in',
    siteName: 'MB Infra',
    images: [
      {
        url: 'https://mbinfra.co.in/mbinfra_logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MB Infra | Leading Infrastructure & Construction Company",
    description: "Delivering excellence in infrastructure and construction projects with innovation and trust.",
    images: ['https://mbinfra.co.in/web_assets/project_img/mbinfra_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="https://mbinfra.co.in/mbinfra_logo_ico.ico" />
        
        {/* CSRF Token */}
        <meta name="csrf-token" content="QwTR0v3jlasayvTSOSfjG47AxJHtmNDeTr82uuU2" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N6PTHP43');`
          }}
        />

        {/* Google Analytics & Ads */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17476359264"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17476359264');
            `
          }}
        />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MKPVRVJJJR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MKPVRVJJJR');
            `
          }}
        />

        {/* Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1275837204034462');
              fbq('track', 'PageView');
            `
          }}
        />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MB Infra",
              "image": "https://mbinfra.co.in/mbinfra_logo.png",
              "url": "https://mbinfra.co.in/",
              "logo": "https://mbinfra.co.in/mbinfra_logo.png",
              "description": "MB Infra is a trusted real estate developer in Nagpur, offering premium, RERA-approved 2 & 3 BHK flats in Manish Nagar and Beltarodi with modern amenities.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Manish Nagar",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "postalCode": "440015",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.1458",
                "longitude": "79.0882"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8806600113",
                "contactType": "sales",
                "areaServed": "Nagpur",
                "availableLanguage": ["en", "hi"]
              },
              "sameAs": [
                "https://www.facebook.com/mbinfra",
                "https://www.instagram.com/mbinfra",
                "https://www.linkedin.com/company/mbinfra"
              ]
            })
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6PTHP43"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1275837204034462&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Grid Overlay */}
        <div className="grid-overlay">
          {/* Vertical Lines */}
          <div className="vertical-line v1"></div>
          <div className="vertical-line v2"></div>
          <div className="vertical-line v3"></div>
          
          {/* Horizontal Lines */}
          <div className="horizontal-line h1"></div>
          <div className="horizontal-line h2"></div>
          <div className="horizontal-line h3"></div>
        </div>

        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main>{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
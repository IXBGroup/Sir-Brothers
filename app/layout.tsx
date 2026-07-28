import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ixbgroup.github.io/Sir-Brothers/"),
  title: "Tree Removal Broken Bow NE | S.I.R Brothers LLC",
  description: "Tree removal, stump grinding, cedar clearing, storm cleanup and skid steer work in Broken Bow, Custer County and Central Nebraska. Free estimates: 308-440-3207.",
  keywords: ["tree removal Broken Bow NE","tree service Broken Bow Nebraska","stump removal Broken Bow NE","stump grinding Broken Bow NE","cedar tree removal Nebraska","tree removal Custer County NE","storm cleanup Broken Bow NE","skid steer services Broken Bow NE","tree removal Kearney NE","Central Nebraska tree service"],
  openGraph: { title: "S.I.R Brothers LLC | Tree Removal & Property Cleanup", description: "Hardworking local tree removal and property cleanup across Central Nebraska.", type: "website", images: [{url:"https://ixbgroup.github.io/Sir-Brothers/og.png",width:1200,height:630,alt:"S.I.R Brothers LLC tree removal and property cleanup"}] },
  twitter: { card: "summary_large_image", title: "S.I.R Brothers LLC", description: "Tree removal and property cleanup done right in Central Nebraska.", images: ["https://ixbgroup.github.io/Sir-Brothers/og.png"] },
  icons: { icon: "https://ixbgroup.github.io/Sir-Brothers/favicon.svg", shortcut: "https://ixbgroup.github.io/Sir-Brothers/favicon.svg" },
};

const schema = { "@context":"https://schema.org", "@type":"LocalBusiness", name:"S.I.R Brothers LLC", image:"https://ixbgroup.github.io/Sir-Brothers/og.png", telephone:"+1-308-440-3207", email:"sirbrothersllc@gmail.com", address:{"@type":"PostalAddress",addressLocality:"Broken Bow",addressRegion:"NE",postalCode:"68822",addressCountry:"US"}, areaServed:["Broken Bow","Custer County","Kearney","North Platte","Grand Island","Central Nebraska"], serviceType:["Tree Removal","Stump Removal","Stump Grinding","Cedar Tree Removal","Storm Cleanup","Skid Steer Work","Property Cleanup","Brush Clearing","Hauling","Snow Removal"] };

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>; }

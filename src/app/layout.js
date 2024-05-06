
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
// import AuthProvider from "@/components/provider/AuthProvider";
// import { store } from '@/redux/store'
// import { Provider } from 'react-redux'
import '@/styles/layout.scss';
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ReduxProvider from "@/redux/ReduxProvider";
import SideBar from "@/components/sidebar/SideBar";
// import { useSelector } from 'react-redux'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Use AI",
  description: "thesueai.com, where you will learn how to use AI Tools",
};

export default function RootLayout({ children }) {
  // const currentColor = useSelector(state=>state.theme.color)

  // document.documentElement.classList.toggle(currentColor)
  return (
    // <AuthProvider>
      <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="container">
            <div className="wrapper">
              <Header/>
              <div className="layout">
                <SideBar/>
                <div className="layout_children">{children}</div>
              </div>
              <Footer/>
            </div>
          </div>
        </body>
      </html>
      </ReduxProvider>
    // </AuthProvider>
  );
}

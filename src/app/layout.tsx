import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/navbar';
import { Col, Row } from 'reactstrap';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Irungu - React and C#",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Row>
          <Col md={{
            size: 12
          }} sm={{
            size: 12
          }} lg={{
            size: 8,
            offset: 2
          }}>
            <NavBar />{children}
          </Col>
        </Row>
        <Footer />
      </body>

    </html>
  );
}

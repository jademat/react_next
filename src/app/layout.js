import 'bootstrap/dist/css/bootstrap.min.css';
export default function RootLayout({ children }) {
  return (
      <html lang="ko">
      <body>{children}</body>
      </html>
  );
}
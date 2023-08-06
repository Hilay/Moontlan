import {redirect} from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
alert("entro");
export default function RootPage() {
  redirect('/en');
}
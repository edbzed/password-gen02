// app/routes/index.tsx
import { redirect } from '@remix-run/node';


export const loader = () => {
  return redirect('/password');
};

export default function Index() {
  // This component will not render because of the redirect
  return null;
}

// middleware/password.ts

import { NavigationGuardNext, RouteLocationNormalized, RedirectFunction } from 'vue-router';

export default function ({ route, redirect }: { route: RouteLocationNormalized; redirect: RedirectFunction }) {
  // Check if the route matches the UX research project page
  if (route.path === '/uxresearch/ux-panyavon') {
    // Prompt the user for a password
    const password = prompt("Please enter the password to access this project:");

    // Check if the password matches
    if (password !== 'yourpassword') {
      alert('Incorrect password!');
      redirect('/');  // Redirect to the home page or another route
    }
  }
}

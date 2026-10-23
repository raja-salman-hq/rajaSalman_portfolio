# Google Apps Script contact form setup

The portfolio sends form submissions to a Google Sheet once the app is connected. Until then, the form opens the visitor's email application, so nobody loses a message.

1. Create a new Google Sheet named `Raja Salman Portfolio`.
2. Choose **Extensions → Apps Script**.
3. Replace the starter code with [`public/apps-script/Code.gs`](../public/apps-script/Code.gs).
4. Click **Deploy → New deployment → Web app**.
5. Set **Execute as** to your account and **Who has access** to **Anyone**.
6. Authorize it, deploy, then copy the web-app URL ending in `/exec`.
7. Copy `.env.example` to `.env.local` and paste the URL as `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`.
8. For Vercel, add the same environment variable under **Project Settings → Environment Variables**, then redeploy.

The script creates a `Portfolio Messages` tab with headers on the first message. Keep the Google Sheet private; the public web-app URL only accepts the form payload and does not expose sheet data.

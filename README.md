
* First set up a project on https://console.cloud.google.com/home/dashboard
* Now under API and Serives, create an OAuth consent screen for that project
* Then go to Credentials and create a new OAuth Client ID.
* Set redirect URL to https://developers.google.com/oauthplayground and save the **client ID** and **secret** somewhere


![image](https://user-images.githubusercontent.com/89719149/187015148-57f0dee6-c22b-4107-9fc7-79fedca76fb4.png)


* Now go that redirect URL mentioned above and enter https://mail.google.com on the authorize section.
* Now go to settings on the top right corner and check **Use your own OAuth credentials** and enter the **client ID** and **secret**

<div align="center">
<img alt="Config settings" src=https://user-images.githubusercontent.com/89719149/187015297-52c35cc2-6b0c-4b96-97d2-e622c48e6e69.png>
</div>

* Now authorize the API and exchange the Authorization code for a refresh token.
* Now write **npm init** to install the required modules and then **node app.js** and you are done.

![image](https://user-images.githubusercontent.com/87666139/193126822-ac903071-1f9b-4298-a992-eb04131f73a8.png)

![image](https://user-images.githubusercontent.com/87666139/193127265-71bfb093-d798-40ed-bd93-06102bfc1a2a.png)

![image](https://user-images.githubusercontent.com/87666139/193127313-bc8fead1-cee0-4d90-af65-f31b969cc230.png)

![image](https://user-images.githubusercontent.com/87666139/193127444-6037ee49-4602-495a-be0e-c34c5cec6bb6.png)

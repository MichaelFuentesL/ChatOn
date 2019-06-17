// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {  //conexion con nuestro servicio consumido de firebase.google.com
  apiKey: "AIzaSyBHMzyzFjYCNZBoo9bgz-Em07cv0jyukDs",
  authDomain: "chatons-98f4c.firebaseapp.com",
  databaseURL: "https://chatons-98f4c.firebaseio.com",
  projectId: "chatons-98f4c",
  storageBucket: "chatons-98f4c.appspot.com",
  messagingSenderId: "973942346118",
  appId: "1:973942346118:web:070560c4e160fe5f"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

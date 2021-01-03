import admin from 'firebase-admin'
import serviceAccount from '../config/fbAccountService.json'
// var admin = require("firebase-admin");

// var serviceAccount = require("../config/fbAccountService.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const fs = require('fs');
const path = require('path');
const ACCOUNTS_JSON_PATH = path.join(__dirname, 'json', 'accounts.json');
const USERS_JSON_PATH = path.join(__dirname, 'json', 'users.json');

const accountData = fs.readFileSync(ACCOUNTS_JSON_PATH, 'utf8');
const userData = fs.readFileSync(USERS_JSON_PATH, 'utf8');

const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);

const writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts, null, 4);
  fs.writeFileSync(ACCOUNTS_JSON_PATH, accountsJSON, 'utf8');
};

module.exports = { accounts, users, writeJSON };

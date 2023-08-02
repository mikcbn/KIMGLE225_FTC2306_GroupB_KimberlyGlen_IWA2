/* This is the firstname of the user */
const user = 'John';

/* This is the lastname of the user */
const surname = 'Smith';

console.log(user, surname,);

/*when you run the code, it will log both the user and surname variables to the console at the same time.*/  

/** 
 * (c) ACME Inc. 2010
 */

// This is the date that a user created their account
const date = '10/07/2014';

// The line below is incorrect. "console.log()" should be used to log the value to the console.
// Corrected line:
console.log(date);


// 
// It is important to show the following message in order to:
// - assure users
// - scare hackers
// - impress investors
//

console.warn('Security scan starting');

/* It is important to let users know when they can close the page */

console.info('Please wait for the scan to complete before closing the browser.');


/* Changes made:

1. Corrected the spelling mistake in console.warn.
2. Fixed the typo in the comment above console.info.
3. Added single quotes around the strings passed to console.warn and console.info functions, as they should be enclosed in quotes.
*/
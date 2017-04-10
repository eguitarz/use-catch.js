# use-catch.js (EXPERIMENTAL)
A tiny library to make chainable try/catch.

# Example
```
 use(() => {
   console.log('run');
   throw 'no!!!!';
 }).catch(error => { console.log('error', error); })
   .finally(() => { console.log('finally...') });
```
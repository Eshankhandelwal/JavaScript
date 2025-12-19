// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected to ${name}`);
})('Eshan');
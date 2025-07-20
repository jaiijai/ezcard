// Import custom commands
import './commands';
import './commands/loginCommands';
import './commands/orderCommands';

// Handle JS error from app (not test)
Cypress.on('uncaught:exception', (err, runnable) => {
    // prevent test from failing on JS errors outside test scope
    return false;
});
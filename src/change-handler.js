/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    // needs to be finished
    constructor(options) {
        this.amountDue = options.amountDue;
        this.cashTendered = options.cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "quarter") {
            this.cashTendered += 25;
        }
        if (type === "dime") {
            this.cashTendered += 10;
        }
        if (type === "nickel") {
            this.cashTendered += 5;
        }
        if (type === "penny") {
            this.cashTendered += 1;
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.amountDue <= this.cashTendered) {
            return true;
        } else {
            return false;
        }
    }

    giveChange() {
        // TODO return the correct change in the following format...
        if (amountDue === cashTendered) {

        }

        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}
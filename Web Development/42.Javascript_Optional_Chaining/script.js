
const user = {
    firstName: 'Anurag',
    lastName: 'Singh',
    age: 25,
    address: {
        city: 'Delhi'
    },
    getFullName: function () {
        return user.firstName + ' ' + user.lastName
    }
}

const a = 'city'

//(? ->This operator is optional chaining. we can use && also)

// console.log(user.getFullName?.());

// console.log(user.address && user.address.city)

// console.log(user.address?.city)
// console.log(user.address?.[a])
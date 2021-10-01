/* const person = {
    name: 'Pedro',
    age: 22,
    location: {
        city: 'Salvador',
        temp: 30
    }
};

const { name: firstName = 'Anonymous', age } = person;

const { city, temp: temperature} = person.location;

console.log(`${firstName} is ${age}.`);

console.log(`Its ${temperature} degrees on ${city}`);

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); */

const item = ['Coffee (hot)', '$2.00', '$3.50', '$2.75'];

const [coffee, ,m_size] = item;

console.log(`A medium ${coffee} costs ${m_size}`);
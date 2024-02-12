
const company = 
{
    "Google": 
    {
        people: ["John", "Alice", "Bob"]
    },
    "Apple": 
    {
        people: ["Anna", "James", "Peter"]
    },
    "Vk": 
    {
        people: ["Kostya", "Ivan", "Tolya"]
    }
};

for (const companyName in company) 
{
    console.log(`Сотрудники компании ${companyName}:`);

    for (const peopleName of company[companyName].people) 
    {
        console.log(peopleName);
    }
}
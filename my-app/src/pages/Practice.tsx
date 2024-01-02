import React, { useState } from 'react'

const Practice = () => {

    //list of items 
    const items = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grape',
        'Lemon',
        'Orange',
    ];


    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    const handleSearch = (e: any) => {


        const searchTerm = e.target.value;
        //the term we enter to search
        setQuery(searchTerm);

        const filtered = items.filter((item: any) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );

        //show only those which we searched
        setFilteredItems(filtered);
    };


    const [isConditionMet, setCondition] = useState(false);

    const handleButtonClick = () => {
        if (!isConditionMet) {
            setCondition(true);
        }
    };

    return (<>
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleSearch}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div>
            {isConditionMet ? (
                <p>Condition is met!</p>
            ) : (
                <p>Condition is not met! <button onClick={handleButtonClick}>Set Condition</button></p>
            )}
        </div>
    </>
    )
}

export default Practice
import React, { useState } from 'react';

function CourseSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        console.log('Searching for: ', event.target.value);
    }

    return (
        <div className="search-container">
            <input 
                type="text"
                className="search-input"
                placeholder="Search by course (e.g. CSE 12)"
                value={searchTerm}
                onChange={handleSearch}
            />
            {isLoading && <div>Loading results...</div>} {/* if isLoading is true, show message, if false, do nothing */}
        </div>
    )
}

export default CourseSearch;

import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Berserk']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // categories.push(newCategory);
        setCategories([newCategory, ...categories])
        // setCategories(cat => [...cat, 'Evangelion '])
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    );
};

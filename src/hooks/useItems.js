import { useEffect, useState } from 'react';


const useItems = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('https://assign1233.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return [products, setProducts]
}

export default useItems;
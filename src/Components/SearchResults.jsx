import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { callAPI } from "../utils/CallApi"
import { ProductDetails } from "./"
import { GB_CURRENCY } from "../utils/constants"
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const SearchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI('data/search.json')
    .then((SearchResults) => {
     const categoryResults = SearchResults[category];
     if (SearchTerm) {
      const results = categoryResults.filter(product => product.title.toLowerCase().includes
        (SearchTerm.toLowerCase()));
        setProducts(results);
     }
     else{
      setProducts(categoryResults);
     }
    });
  };

  useEffect(() => {
    getSearchResults();
    }, [searchParams]);
  return (
    <div className='min-w-[1200px] max-w-[1300px] m-auto pt-4'>
      { products && products.map((product,key) => {
        return(
          <Link key={key} to={`/product/${product.id}`}>
          <div className='grid grid-cols-12 gap-4 border-b  hover:bg-gray-50'>
            <div className='col-span-3 flex  items-center justify-center'>
              <img className='max-h-[180px] object-conatin' src={product.image_small} alt="" />
            </div>
            <div className='col=span-9 bg-gray-50 border border-gray-100 hover:bg-gray-100'>
              <div className='font-medium text-black p-2'>
              <ProductDetails product={product} ratings={true}/>
              <div className='text-xl xl:text-2xl pt-1 font-semibold text-gray-800'>{GB_CURRENCY.format(product.price)}</div>
              </div>
            </div>
          </div>
          </Link>
        )
})}
      
    </div>
  );
}
export default SearchResults

import React from 'react';
import SearchBox from './Searchbox/Searchbox'
import Result from './Result/Result'
export default function IngredientFinder() {
    return (
        <div>
            <SearchBox/>
            <div id='result-holder'>
                <Result img="images/ingredients/Apple.png" name="Apple" desc="Lorem ipsum dolor sit amet, Lo Rem Ipsum dolor sit amet."/>
                <Result img="images/ingredients/Apple.png" name="Apple" desc="Lorem ipsum dolor sit amet, Lo Rem Ipsum dolor sit amet."/>
                <Result img="images/ingredients/Apple.png" name="Apple" desc="Lorem ipsum dolor sit amet, Lo Rem Ipsum dolor sit amet."/>
                <Result img="images/ingredients/Apple.png" name="Apple" desc="Lorem ipsum dolor sit amet, Lo Rem Ipsum dolor sit amet."/>
            </div>
        </div>
    )
}
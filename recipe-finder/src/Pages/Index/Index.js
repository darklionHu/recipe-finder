import Card from "../../Blocks/Card/Card"
import IngredientFinder from "../../Blocks/IngredientFinder/IngredientFinder"
import "./Index.css"

export default function Index() {
    return (
        <>
            <div id="card-collector">
                <Card img="images/ingredients/Apple.png" name="Apple" desc="Lorem ipsum dolor sit amet, Lo Rem Ipsum dolor sit amet."/>
                <Card img="images/ingredients/Pineapple.png" name="Pineapple" desc="Lorem ipsum dolor sit amet, Lo Rem Ipsum dolor sit amet."/>
                <Card img="images/ingredients/Pineapple.png" name="Pineapple" desc="Lorem ipsum dolor sit amet, Lo Rem Ipsum dolor sit amet."/>
                <Card img="images/ingredients/Pineapple.png" name="Pineapple" desc="Lorem ipsum dolor sit amet, Lo Rem Ipsum dolor sit amet."/>
            </div>
            <IngredientFinder/>
        </>
    )
}

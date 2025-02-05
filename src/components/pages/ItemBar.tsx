import { ClickableItem, ClickableItemProps } from "./ClickableItem";

type clickableItemsList = ClickableItemProps[];

export function ItemBar({clickableItems}:{clickableItems:clickableItemsList}){
    return (
        <div className="flex flex-row space-x-48">
            {clickableItems.map((itemProp) => 
                <ClickableItem {...itemProp} key={itemProp.labelText}/>
            )}
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";

export type ClickableItemProps = {
    imgSrc:string, 
    labelText:string, 
    imgDimensions: {width:number, height:number}, 
    pageLink:string
}

/**
 * A reusable component that contains an image and label beneath it
 * @param clickableItemProps An object containing an image source, label text and image dimensions 
 * @returns A component with an image and label beneath it
 * Add on click too
 */
export function ClickableItem({imgSrc,labelText, imgDimensions, pageLink}:ClickableItemProps){
    return (
        <div className="flex flex-col justify-center items-center">
            <Link href = {pageLink}>
                <Image src={imgSrc} alt={"Image of a " + labelText + " icon"} height={imgDimensions.height} width={imgDimensions.width}></Image>
            </Link>
            <label style={{fontSize:0.15 * imgDimensions.width}} className="text-center">{labelText}</label>
        </div>
    )
}
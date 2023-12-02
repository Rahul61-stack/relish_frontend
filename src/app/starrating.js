import { StarIcon } from "@heroicons/react/24/solid"

export default function Rating(props){
    let stars = []
    for (let index = 0; index < 5; index=index+1) {
        if(index<props.rating){
            stars.push(
                <StarIcon width={20} height={20} color={index<=5?'white':'gray'}/>
            )
        }
        if(index>props.rating){
            continue
        }
    }
    return(
        <div className="flex">
            {stars.map((star,i)=>{return(
                <div key={i}>
                    {star}
                </div>
            )})}
        </div>
    )
}
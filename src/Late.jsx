import React, {useState} from "react"

function Late(){

    const vader = [
        {id:1, name:'item1', category:'category1'},
        {id:2, name:'item2', category:'category2'},
        {id:3, name:'item3', category:'category1'}
    ]
    
    

    const [items, setItem] = useState(
       vader 
    )

    const filteredItems = items.filter((item) =>{
        return(
             item.category === 'category1'
        )
    })
    console.log(vader)

    return(
        <div>
             {filteredItems.map((fit)=>{
                return (
                    <p key={fit.id}>{fit.name}</p>
                )
             })}
        </div>
    )
}

export default Late
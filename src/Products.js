import { useEffect, useReducer, useRef, useState } from "react";
import {  useQuery,  } from "react-query";
import apiRequests from "./apiRequest";
import userReducer from "./hooks/user.reducer";

function Products(){
    //useState ლოგიკას ჩავანაცვლებთ reducerით, რომელიც გამოიძახებს ჩვენს ფუქნციას და ცარიელ მასივს .setproducst 
    //ჩანაცვლდება dispatch მეთოდით.
    const [products, dispatch] = useReducer(userReducer, [])
    const [value, setValue] = useState('')
    const inputRef = useRef()  

    const {data} = useQuery("products", () => apiRequests('GET', "/products"))

    useEffect(() =>{
        if(data){
            //ყველგან სადაც გამოვიყენებდით  setproducts უნდა ჩავანაცვლოთ dispatchით რომელიც აკითხავს ქეისს.
            //ამ შემთხვევაში ინფორმაციის ჩასატვირად გვაქვს set users. ამიტომ აღვწეროტ ეს ქეისი.პასუხად დაბრუნდება data
            dispatch({type : "set_users", data})
        }
    },[data]) 

    useEffect(() =>{
        inputRef.current.focus();
    }, [])

    function addProduct(e){
        e.preventDefault();
        const newUser = 
            {
                title: value,
                stock: 0
            }
        // დაგვჭირდა დამატების ქეისი ამიტომ მივაკითხეთ  add users და პასუხად დაემატა ახალი ობიექტი
        dispatch({type : "add_users", data:newUser})
        setValue("")

   
    }
    function removeItem(itemId){
    //წაშლის ქეისი განხილულია  remove userში, ამიტომ ვწერთ შესაბამისად
        dispatch({type : "remove_user", payload: itemId})
    }

    return <div  className="products">
        <form action ="" onSubmit={addProduct}>
            <input 
            type="text" 
            value={value} 
            onChange={e => setValue(e.target.value)}
            ref ={inputRef}
            />
        </form>
      <ul> 
                {
                products.map(item =>( 
                    <li key={item.id}  > 
                    {item.title}
                    <button onClick={() => removeItem(item.id)}> Remove</button> 

                    </li>   
                ))
                }
            </ul>
            
        
         
    </div>
}

export default Products;

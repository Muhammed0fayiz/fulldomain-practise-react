import React, { useState } from 'react';

const Todolist = () => {
    const [data, setData] = useState([]);
     const [value,setValue]=useState('')

    const deleteItem = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const itemsave=(e)=>{
        const value=e.target.value;
       setValue(value)
    }
 const addelement=()=>{
    const newData=[...data,{name:value}]
    setData(newData)

 }

const edit=(index)=>{
    const newdata=[...data]
    if(value){
        newdata[index]={name:value}
    }
    setData(newdata)
  setValue('')
}
    return (
        <div>
            <input type="text" name="" id="" placeholder='add item' onChange={itemsave} value={value}/>
            <button onClick={addelement}>add element</button>
            {data.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <button onClick={() => deleteItem(index)}>delete</button>
                
                    <button onClick={()=>edit(index)}>edit</button>
                    
                </div>
            ))}
        </div>
    );
};

export default Todolist;

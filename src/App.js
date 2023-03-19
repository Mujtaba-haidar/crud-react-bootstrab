import Login from "./Login";
import './index.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import EmployeeLists from "./components/EmployeeLists";
import { useState ,useEffect } from "react";

function App() {
const data = [
  {id:'1',name:'ali',email:'ali@gm.com',address:'baghdad',phone:'555-555',img:'images/a1.jpg'},
  {id:'2',name:'Mujtaba',email:'Mujtaba@gm.com',address:'baghdad',phone:'458-852',img:'images/IMG_20170718_123614_860.jpg'},
  {id:'3',name:'Ahmed',email:'Ahmed@gm.com',address:'baghdad',phone:'487-032',img:'images/jin.jpg'},
  {id:'4',name:'Saif',email:'Saif@gm.com',address:'baghdad',phone:'105-659',img:'images/photo_2021-01-06_14-03-05.jpg'},
  {id:'5',name:'Salman',email:'Salman@gm.com',address:'baghdad',phone:'594-759',img:'images/a2.jpg'},
]
 useEffect(()=>{
  setEmployes(JSON.parse(localStorage.getItem('employes')))
},[])

useEffect(()=>{ //جعل البيانات خاصة لوكال
  localStorage.setItem('employes' , JSON.stringify(employes));
})

  const [employes , setEmployes  ] = useState(data)

  const handelDelet = (index)=>{  //كود الحذف
    setEmployes(data => {return data.filter((_ , i) => i !== index )} )
    
 }
 
 const updateEmployee = (id , data1) =>{ //كود تعديل الموظف
  setEmployes(data.map((employes) => employes.id === id ? data1 : employes))

}
 
  const filterbysearch = (word) =>{ //كود البحث
if (word ){
   setEmployes(data.filter((item) => item.name === word ))
  
}else{
  setEmployes(data)
}
   
}
const addEmploye = (data) =>{ //اضافة موظف جديد
 setEmployes([...employes , data] )
}



  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} /> 
          <Route path="/" element={
          <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
     
              <EmployeeLists handelDelet={handelDelet} 
              filterbysearch={filterbysearch}  
              employes={employes} 
              addEmploye={addEmploye}
              updateEmployee={updateEmployee}
              />
   
        </div>
    </div>
</div>
} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

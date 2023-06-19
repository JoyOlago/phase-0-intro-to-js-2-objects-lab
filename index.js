// Write your solution in this file!

let employee ={
name : 'Bob',
streetAddress : 'Nairobi'
}



function updateEmployeeWithKeyAndValue(object, key, value){
   return{
...object,[key]:value,
   };
}

const updateObject = updateEmployeeWithKeyAndValue(employee, 'Britton', "1000")

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
     object[key] = value
       return object;
    }

const destructiveObject = destructivelyUpdateEmployeeWithKeyAndValue(employee[streetAdress] = "2050")

function deleteFromEmployeeByKey(employee, key){
   const erase = Object.assign({},employee);
   delete erase[key];
      return erase;
   }

   function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee["name"];
       return employee;
    }

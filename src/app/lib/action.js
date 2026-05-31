import { revalidatePath } from "next/cache";


export const creatUser = async(formdata) => {
  'use server';
  const newUser = Object.fromEntries(formdata.entries());
  console.log('new user data', newUser)
  const res = await fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  const data = await res.json();
  console.log('data after post', data)

  //TODO: revalidate path
  if(data.insertedId){
    revalidatePath('/users')
  }
  return data;
}


export const deleteUserById = async(userId) => {
  'use server';

  const res = await fetch(`http://localhost:8080/users/${userId}`,{
    method: 'DELETE',
  })
  const data = await res.json();
  console.log('after deleted', data);
  
  if(data.deletedCount > 0){
    revalidatePath('/users');
  }

  return data;
}
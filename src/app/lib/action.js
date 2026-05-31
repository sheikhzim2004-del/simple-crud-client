import { revalidatePath } from "next/cache";

export const deleteUserById = async(userId) => {
  'use server';

  const res = await fetch(`http://localhost:8080/users/${userId}`,{
    method: 'DELETE',
  })
  const data = await res.json();
  console.log('after deleted', data);
  
  //TODO: data revalidate
  if(data.deletedCount > 0){
    revalidatePath('/users');
  }

  return data;
}
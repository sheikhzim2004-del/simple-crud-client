import { getUserById } from '@/app/lib/data';
import React from 'react';

const userDetailsPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);

    console.log(user, "user details");
    // const user = await getUserById(userId);
    // console.log(user);

    return (
        <div>
            <h2 className='text-3xl'>user details:</h2>
            <p>Name: {user.name}</p>
        </div>
    );
};

export default userDetailsPage;
'use client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
// import { deleteUserById } from '../lib/action';

const AlertDialogue = ({ user }) => {

  const handleDelete = async (userId) => {
    const res = await fetch(`http://localhost:8080/users/${userId}`, {
      method: 'DELETE',
    })
    const data = await res.json();
    
    console.log("delete user", userId);
  }

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete User permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>This User</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                variant="danger"
                onClick={() => handleDelete(user._id)}>
                Delete confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default AlertDialogue;
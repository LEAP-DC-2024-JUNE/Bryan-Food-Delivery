"use client";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import { v4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "@/components/ui/label";

type User = {
  _id: string;
  name: string;
  age: string;
  phone: string;
};

type UserWithId = {
  _id: string;
  name: string;
  age: string;
  phone: string;
};

const TestPage = () => {
  const initialData = {
    name: "",
    age: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [editData, setEditData] = useState(initialData);
  const [users, setUsers] = useState<User[]>([]);
  const [editOpen, setEditOpen] = useState(false);

  const createUser = async () => {
    try {
      await fetch("http://127.0.0.1:3001/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          age: formData.age,
          phone: formData.phone,
        }),
      });
      setFormData(initialData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3001/get-all-users");
      const data = await response.json();
      setUsers(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id: string) => {
    try {
      await fetch(`http://127.0.0.1:3001/update-user/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
    } catch (error) {
      console.error(error);
    }
    console.log(id);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleEditChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEditData({ ...editData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log("Rendered...");
  return (
    <div className="m-10 flex flex-col items-center gap-8">
      <div className=" w-96">
        <Card>
          <CardHeader className="text-center text-2xl font-bold">
            Test Form
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Input
              placeholder="Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Age"
              id="age"
              value={formData.age}
              onChange={handleChange}
            />
            <Input
              placeholder="Phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Button onClick={createUser}>Submit</Button>
          </CardContent>
        </Card>
      </div>
      <div className="w-full flex flex-wrap gap-5">
        {users.map((user) => {
          console.log(user);
          return (
            <Card>
              <CardHeader className="text-center text-xl font-bold">
                {user.name}
              </CardHeader>
              <CardContent className="text-lg text-left">
                <p>Id: {user._id}</p>
                <p>Age: {user.age}</p>
                <p>Phone: {user.phone}</p>
              </CardContent>
              <Dialog
                // key={user._id}
                open={editOpen}
                onOpenChange={() => setEditOpen(!editOpen)}
              >
                <DialogTrigger
                // onClick={() =>
                //   setEditData({
                //     name: user.name,
                //     age: user.age,
                //     phone: user.phone,
                //   })
                // }
                >
                  <Button>Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">
                      Edit User {user.name}
                    </DialogTitle>
                    <DialogDescription>Edit user info.</DialogDescription>
                  </DialogHeader>
                  <div>
                    <Label>Name: </Label>
                    <Input
                      // defaultValue={user ? user.name : "a"}
                      name="name"
                      value={editData.name}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div>
                    <Label>Age: </Label>
                    <Input
                      // defaultValue={user ? user.age : "a"}
                      name="age"
                      value={editData.age}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div>
                    <Label>Phone: </Label>
                    <Input
                      // defaultValue={"a"}
                      name="phone"
                      value={editData.phone}
                      onChange={handleEditChange}
                    />
                  </div>
                  <Button>Delete</Button>
                  <Button
                    type="submit"
                    onClick={() => {
                      updateUser(user._id);
                      // setEditOpen(false);
                    }}
                  >
                    Save Changes
                  </Button>
                </DialogContent>
              </Dialog>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TestPage;

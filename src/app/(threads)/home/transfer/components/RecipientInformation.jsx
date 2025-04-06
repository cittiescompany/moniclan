import React, {useState} from "react";
import { Button, Input } from "@nextui-org/react";
import { useDataStore } from "@/store/Global";

const RecipientInformation = ({ goNext,editMode }) => {
   const {data}=useDataStore()
  const [isAccountNameMatched, setIsAccountNameMatched] = useState({
    message: "",
    status: false,
  });
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

const ContinueToNext = () => {
  console.log("accountDetails:", data.recipient_accountDetails);
  console.log("user:", user);

  // Split the account name into an array of individual names
  const accountNameParts = data.recipient_accountDetails?.account_name?.toLowerCase().split(" ") || [];
  const firstName = user?.firstName?.toLowerCase();
  const lastName = user?.lastName?.toLowerCase();

  // Check if firstName and lastName match any part of the account name
  if (accountNameParts.includes(firstName) && accountNameParts.includes(lastName)) {
    setIsAccountNameMatched({
      message: "The name you provided is correct",
      status: true,
    });
    goNext();
  } else {
    setIsAccountNameMatched({
      message: "The name you provided does not match the account name",
      status: false,
    });
  }
};

  return (
    <div className={`${!editMode&&'min-h-screen'} flex flex-col p-8 bg-white`}>
      {!editMode &&
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Recipient Name</h1>
        <p>
          This information should match the name on your recipient&apos;s bank
          account
        </p>
      </div>
      }
      <div className="w-full flex flex-col gap-6">
        <div>
          <label htmlFor="" className="mb-4 ms-2 text-lg">
            First Name
          </label>
          <Input
            size="lg"
            name="firstName"
            type="text"
            placeholder=""
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, firstName: e.target.value };
              })
            }
            className="rounded-md"
          />
        </div>
        <div>
          <label htmlFor="" className="mb-4 ms-2 text-lg">
            Middle Name (optional)
          </label>
          <Input
            size="lg"
            name="middleName"
            type="text"
            placeholder=""
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, middleName: e.target.value };
              })
            }
            className="rounded-md"
          />
        </div>
        <div>
          <label htmlFor="" className="mb-4 ms-2 text-lg">
            Last Name
          </label>
          <Input
            size="lg"
            type="text"
            name="lastName"
            placeholder=""
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, lastName: e.target.value };
              })
            }
            className="rounded-md"
          />
        </div>
        <p
          className={`${
            isAccountNameMatched.status ? "text-green-600" : "text-red-500"
          } text-sm font-semibold flex items-center`}
        >
          {isAccountNameMatched?.message}
        </p>
        {!editMode
        &&
        <Button
          onPress={ContinueToNext}
          color="primary"
          className="mt-8 w-full rounded-md text-medium"
        >
          Continue
        </Button>
        }
      </div>
    </div>
  );
};

export default RecipientInformation;

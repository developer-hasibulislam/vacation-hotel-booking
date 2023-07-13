import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UserPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the query parameters from the route
    const { query } = router;

    // Decode the query parameters
    const firstName = decodeURIComponent(query["first-name"]).replace("-", " ");
    const lastName = decodeURIComponent(query["last-name"]).replace("-", " ");
    const username = decodeURIComponent(query["username"]);
    const role = decodeURIComponent(query["user-role"]);

    // Set the decoded values in the user state
    setUser({
      firstName,
      lastName,
      username,
      role,
    });
  }, [router]);

  return (
    <div>
      {user && (
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Username: {user.username}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;

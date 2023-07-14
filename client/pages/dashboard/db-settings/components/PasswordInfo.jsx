/**
 * Title: PasswordInfo.jsx
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 14, July 2023
 */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../../features/user/userSlice";
import { useUpdateUserMutation } from "../../../../features/user/userApi";

const PasswordInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.user);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");
  const [password, setPassword] = useState("");
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setPassword(passwordsMatch ? newPassword : "");
  }, [newPassword, newPasswordAgain]);

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleNewPasswordAgainChange = (e) => {
    setNewPasswordAgain(e.target.value);
  };

  const passwordsMatch = newPassword === newPasswordAgain;
  const newPasswordAgainError = !passwordsMatch && newPasswordAgain.length > 0;

  function handleUpdateUserInformationForm(event) {
    event.preventDefault();

    const updatedPassword = passwordsMatch ? password : user?.password;
    const updatedUser = { ...user, password: updatedPassword };

    if (newPassword === "" && newPasswordAgain === "") {
      const { password, ...userInfo } = user;
      updateUser({ id: user?._id, body: userInfo });
    } else {
      dispatch(addUser({ password: updatedPassword }));
      updateUser({ id: user?._id, body: updatedUser });
    }
  }

  return (
    <form className="col-xl-9" onSubmit={handleUpdateUserInformationForm}>
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input ">
            <input type="text" />
            <label className="lh-1 text-16 text-light-1">
              Current Password
            </label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input ">
            <input
              type="text"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <label className="lh-1 text-16 text-light-1">New Password</label>
          </div>
        </div>

        <div className="col-12">
          <div
            className={`form-input ${newPasswordAgainError ? "has-error" : ""}`}
          >
            <input
              type="text"
              value={newPasswordAgain}
              onChange={handleNewPasswordAgainChange}
            />
            <label className="lh-1 text-16 text-light-1">
              New Password Again
            </label>
          </div>
        </div>

        <div>
          {newPasswordAgainError && (
            <div className="text-red-1">
              <b>Retype</b> your password
            </div>
          )}
          {!passwordsMatch && (
            <div className="text-red-1">
              Check your <b>retyped</b> password
            </div>
          )}
        </div>

        <div className="col-12">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button
                type="submit"
                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                disabled={!passwordsMatch}
              >
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    Save Changes <div className="icon-arrow-top-right ml-15" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PasswordInfo;

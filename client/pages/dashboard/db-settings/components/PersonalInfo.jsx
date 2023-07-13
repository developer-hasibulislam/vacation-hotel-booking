import { useDispatch, useSelector } from "react-redux";
import AvatarUploader from "./AvatarUploader";
import { useEffect, useState } from "react";
import { addUser } from "../../../../features/user/userSlice";

const PersonalInfo = ({ user }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state?.user?.user);

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setUsername(userInfo?.username || user?.username);
    setFirstName(userInfo?.name?.firstName || user?.name?.firstName);
    setLastName(userInfo?.name?.lastName || user?.name?.lastName);
    setEmail(userInfo?.email || user?.email);
    setPhoneNumber(userInfo?.phoneNumber || user?.phoneNumber);
    setDateOfBirth(userInfo?.dateOfBirth || user?.dateOfBirth);
    setBio(userInfo?.bio || user?.bio);
  }, [user, userInfo]);

  return (
    <>
      <form>
        <AvatarUploader />
        {/* End AvatarUploader*/}

        <div className="border-top-light mt-30 mb-30" />

        <div className="col-xl-9">
          <div className="row x-gap-20 y-gap-20">
            <div className="col-12">
              <div className="form-input ">
                <input
                  type="text"
                  name="username"
                  required
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                    dispatch(addUser({ username: event.target.value }));
                  }}
                />
                <label className="lh-1 text-16 text-light-1">User Name</label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  name="firstName"
                  required
                  value={firstName}
                  onChange={(event) => {
                    const newFirstName = event.target.value;
                    setFirstName(newFirstName);
                    dispatch(
                      addUser({
                        name: { firstName: newFirstName, lastName },
                      })
                    );
                  }}
                />
                <label className="lh-1 text-16 text-light-1">First Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  name="lastName"
                  required
                  value={lastName}
                  onChange={(event) => {
                    const newLastName = event.target.value;
                    setLastName(newLastName);
                    dispatch(
                      addUser({
                        name: { firstName, lastName: newLastName },
                      })
                    );
                  }}
                />
                <label className="lh-1 text-16 text-light-1">Last Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    dispatch(addUser({ email: e.target.value }));
                  }}
                />
                <label className="lh-1 text-16 text-light-1">Email</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  name="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    dispatch(addUser({ phoneNumber: e.target.value }));
                  }}
                />
                <label className="lh-1 text-16 text-light-1">
                  Phone Number
                </label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-12">
              <div className="form-input ">
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  value={dateOfBirth ? dateOfBirth.slice(0, 10) : ""}
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                    dispatch(addUser({ dateOfBirth: e.target.value }));
                  }}
                />
                <label className="lh-1 text-16 text-light-1">Birthday</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-12">
              <div className="form-input ">
                <textarea
                  required
                  rows={5}
                  name="bio"
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                    dispatch(addUser({ bio: e.target.value }));
                  }}
                />
                <label className="lh-1 text-16 text-light-1">
                  About Yourself
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* End col-xl-9 */}
      </form>
    </>
  );
};

export default PersonalInfo;

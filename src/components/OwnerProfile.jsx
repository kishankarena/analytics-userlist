import React from "react";
import { Lock } from "react-feather";

const OwnerProfile = (props) => {
  const { image, name, email, status, access } = props;
  return (
    <>
      <td className="d-flex">
        <div className="owner-image me-2">
          <img src={image} alt="avatar" />
        </div>
        <div>
          <div>{name}</div>
          <div className="text-muted">{email}</div>
        </div>
      </td>
      <td>
        <div className="mx-2 text-success">{status}</div>
      </td>
      <td>
        <div className="mx-2">{access}</div>
      </td>
      <td>
        <Lock className="text-muted" size={20} />
      </td>
    </>
  );
};

export default OwnerProfile;

import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div className="bg-orange-500 text-2xl text-black h-100 align-middle flex justify-center items-center">
      User {userid}
    </div>
  );
}

export default User;

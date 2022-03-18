import { useEffect, useState, useContext } from "react";
import { Navbar } from "./elements/Navbar";
import { ProfileModal } from "./modals/ProfileModal";
import { ModalCascade } from "./modals/ModalCascade";
import { Context } from "../context";

export const PageTemplate = ({ Sidebar = null, Content = null }) => {
  const { store } = useContext(Context);
  const [userModal, setUserModal] = useState(false);

  useEffect(() => {
    store.get_user();
  }, []);

  return (
    <>
      <Navbar setModal={setUserModal} />
      <Sidebar />
      <Content />
      {userModal === true && (
        <ModalCascade Children={ProfileModal} setModal={setUserModal} />
      )}
    </>
  );
};

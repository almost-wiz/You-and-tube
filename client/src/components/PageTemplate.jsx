import { useState } from 'react'
import { Navbar } from './Navbar'
import { ProfileModal } from './modals/ProfileModal'
import { ModalCascade } from './modals/ModalCascade'

export const PageTemplate = ({ Sidebar=null, Content=null }) => {
  const [userModal, setUserModal] = useState(false);

  return (
    <>
      <Navbar setModal={setUserModal}/>
      <Sidebar />
      <Content />
      {userModal === true && <ModalCascade Children={ProfileModal} setModal={setUserModal}/>}
    </>
  )
}

import { DashboardHeader } from "./components/dashboardHeader";
import { InfoSection } from "./components/infoSection";
import { TechnologiesSection } from "./components/technologiesSection";
import { AddModal } from "./components/addModal";
import { useContext } from "react";
import { techContext } from "../../providers/techContext";
import { EditModal } from "./components/editModal/index";

export const DashboardPage = () => {
  const {openAddModal} = useContext(techContext);
  const {openEditModal} = useContext(techContext);

  return (
    <>
      <DashboardHeader />
      <InfoSection />
      <TechnologiesSection />
      {openAddModal ? <AddModal /> : null}
      {openEditModal ? <EditModal /> : null}
    </>
  )
}
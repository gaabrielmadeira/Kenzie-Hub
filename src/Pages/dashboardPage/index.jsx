import { DashboardHeader } from "./components/dashboardHeader";
import { InfoSection } from "./components/infoSection";

export const DashboardPage = ({user, setUser}) => {
  return (
    <>
      <DashboardHeader setUser={setUser}/>
      <InfoSection user={user}/>
    </>
  )
}
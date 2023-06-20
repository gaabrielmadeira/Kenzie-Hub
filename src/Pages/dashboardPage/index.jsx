import { DashboardHeader } from "./components/dashboardHeader";
import { InfoSection } from "./components/infoSection";
import { WarningSection } from "./components/warningSection";

export const DashboardPage = ({user, setUser}) => {
  return (
    <>
      <DashboardHeader setUser={setUser}/>
      <InfoSection user={user}/>
      <WarningSection />
    </>
  )
}
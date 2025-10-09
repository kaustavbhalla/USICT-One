import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
import AttendanceChart from "@/components/AttendanceChart"
import Finance from "@/components/finance"
import CalendarEvents from "@/components/CalendarEvents"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* Leftpart */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* cards  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student"/>
          <UserCard type="teacher"/>
          <UserCard type="parent"/>
          <UserCard type="staff"/>
        </div>

        {/* midchart  */}
        <div className="flex gap-4 flex-col lg:flex-row ">
          {/* count  */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* attendance  */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* bottom chart  */}
        <div className="w-full h-[500px]">
          <Finance />

        </div>
      </div>

      {/* rightpart */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <CalendarEvents />
      </div>
    </div>
  )
}

export default AdminPage
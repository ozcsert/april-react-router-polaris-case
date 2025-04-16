import ReportsContainer from "@/components/ReportsContainer/ReportsContainer";
import style from "./ReportPage.module.scss";

const ReportPage: React.FC = () => {
  return (
    <div className={style.reportPage}>
      <ReportsContainer />
    </div>
  );
};

export default ReportPage;

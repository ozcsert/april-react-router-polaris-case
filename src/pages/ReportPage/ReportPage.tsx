import ReportsContainer from "@/components/ReportsContainer/ReportsContainer";
import style from "./ReportPage.module.scss";
// import SkeletonReportsContainer from "@/components/ReportsContainer/SkeletonReportsContainer/SkeletonReportsContainer";

const ReportPage: React.FC = () => {
  return (
    <div className={style.reportPage}>
      <ReportsContainer />
    </div>
  );
};

export default ReportPage;

import { Page } from "@shopify/polaris";
import ReportsContainer from "@/components/ReportsContainer/ReportsContainer";
import style from "./ReportPage.module.scss";

const ReportPage: React.FC = () => {
  return (
    <div className={style.reportPage}>
      <Page title="Inventory reports" primaryAction={{ content: "Export" }}>
        <ReportsContainer />
      </Page>
    </div>
  );
};

export default ReportPage;

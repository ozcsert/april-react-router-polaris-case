import {
  SkeletonPage,
  Card,
  SkeletonDisplayText,
  BlockStack,
  Layout,
  SkeletonTabs,
} from "@shopify/polaris";

const SkeletonDataTableView = () => {
  const numberOfSkeletonItemstoRender = 20;

  return (
    <SkeletonPage primaryAction>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack align="center" gap="100">
              <SkeletonTabs count={5} fitted={true} />

              <BlockStack gap="400">
                {[...Array(numberOfSkeletonItemstoRender)].map((_, index) => (
                  <SkeletonDisplayText
                    key={index}
                    size="large"
                    maxWidth="100%"
                  />
                ))}
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
};

export default SkeletonDataTableView;

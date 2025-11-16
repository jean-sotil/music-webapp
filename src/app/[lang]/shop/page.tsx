import type React from "react";

import ReleasesGrid from "@/components/organisms/ReleasesGrid";
import Title from "@/components/atoms/Title";

const ShopPage: React.FC = () => {
  return (
    <div>
      <Title level={1}>Shop Page</Title>
      <ReleasesGrid />
    </div>
  );
};

export default ShopPage;

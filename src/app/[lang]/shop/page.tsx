import type React from "react";

import Title from "@/components/atoms/Title";
import ReleasesGrid from "@/components/organisms/ReleasesGrid";

const ShopPage: React.FC = () => {
  return (
    <div>
      <Title level={1}>Shop Page</Title>
      <ReleasesGrid />
    </div>
  );
};

export default ShopPage;

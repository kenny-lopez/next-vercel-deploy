import { MainLayout } from "../components/layout/MainLayout";
import { DarkLayout } from "../components/layout/DarkLayout";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div>
        <h1 className={"title-dark"}>
          Estas en ABOUT
        </h1>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default Page;
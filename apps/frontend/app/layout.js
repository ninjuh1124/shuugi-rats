import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";
import React from "react";
import config from "../themes/themeConfig";

const queryClient = new QueryClient();

const AntWrapper = ({ children }) => {
  "use client";

  return (
    <AntdRegistry>
      <ConfigProvider theme={config}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  )
}

const RootLayout = ({ children }) => {
  "use server";

  const { token } = theme.useToken();

  return (
    <QueryClientProvider client={queryClient}>
      <AntWrapper>
        <html lang="eng" style={{ height: "100%" }}>
          <body style={{ margin: 0, minHeight: "100%", background: token.colorBgBase }}>
                {children}
          </body>
        </html>
      </AntWrapper>
    </QueryClientProvider>
  )
};

export default RootLayout;
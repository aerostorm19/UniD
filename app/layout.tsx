"use client";
import { defineChain } from "viem";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import WagmiProviderComp from "./lib/wagmi-provider";
import { config } from "./lib/config";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { PrivyProvider } from "@privy-io/react-auth";
const font = Outfit({ subsets: ["latin"] });

const BitTorrent = defineChain({
  id: 1029,
  name: "BitTorrent Chain Test",
  network: "BitTorrent Chain Test",
  nativeCurrency: {
    decimals: 18,
    name: "BitTorrent Chain Testnet",
    symbol: "BTTC",
  },
  rpcUrls: {
    default: {
      http: ["http://pre-rpc.bt.io/"],
    },
  } as any,
  blockExplorers: {
    default: { name: "Explorer", url: "https://testscan.bt.io" },
  },
}) as any;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId="cmcp2lrma009mjv0my3hu57ht" //API key1
          config={{
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: BitTorrent,
            supportedChains: [BitTorrent],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
